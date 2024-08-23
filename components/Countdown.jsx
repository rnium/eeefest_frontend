'use client'

import { React, useState, useEffect } from 'react'
import {
    Box
} from '@mui/material';
import Confetti from 'react-confetti';

let targetDate = new Date('2024-03-09T09:30:00');

const Countdown = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: '00',
        hours: '00',
        minutes: '00',
        seconds: '00',
    })
    function updateTimeleft() {
        let currentDate = new Date();
        let timeDifference = targetDate.getTime() - currentDate.getTime();
        if (timeDifference < 0) {
            return;
        }
        let days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        let hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);


        days = days < 10 ? `0${days}` : days;
        hours = hours < 10 ? `0${hours}` : hours;
        minutes = minutes < 10 ? `0${minutes}` : minutes;
        seconds = seconds < 10 ? `0${seconds}` : seconds;
        setTimeLeft({
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds
        })
    }
    useEffect(() => {
        const timer = setTimeout(() => {
            updateTimeleft();
        }, 1000);

        return () => clearTimeout(timer);
    });
    return (
        <div className='countdown-container flex-row' data-aos="fade-left" data-aos-delay={100} data-aos-once={true}>

            <Box className="countdown-desktop flex-row">
                <div className="confetti-con">
                    <Confetti
                        width="1000px"
                        height="150%"
                        numberOfPieces={70}
                        gravity={0.08}
                    />
                </div>
                <div className="title-container flex-col">
                    <div className="top">Count the Day</div>
                    <div className="bottom">Until the Fest starts</div>
                </div>
                <div className="times-con flex-row">
                    <div className="time-unit flex-col">
                        <div className="num">{timeLeft.days}</div>
                        <div className="label">Days</div>
                    </div>
                    <div className="time-unit flex-col">
                        <div className="num">{timeLeft.hours}</div>
                        <div className="label">Hours</div>
                    </div>
                    <div className="time-unit flex-col">
                        <div className="num">{timeLeft.minutes}</div>
                        <div className="label">Minutes</div>
                    </div>
                    <div className="time-unit flex-col">
                        <div className="num">{timeLeft.seconds}</div>
                        <div className="label">Seconds</div>
                    </div>
                </div>
            </Box>
            {/* <Box display={{ xs: 'flex', md: 'none' }} className="countdown-mobile flex-row">
                <div className="title-container flex-col">
                    <div className="top">Count the Day</div>
                    <div className="bottom">Until the Fest starts</div>
                </div>
                <div className="times-con flex-row">
                    <div className="time-unit flex-col">
                        <div className="num">{timeLeft.days}</div>
                        <div className="label">Days</div>
                    </div>
                    <div className="time-unit flex-col">
                        <div className="num">{timeLeft.hours}</div>
                        <div className="label">Hours</div>
                    </div>
                    <div className="time-unit flex-col">
                        <div className="num">{timeLeft.minutes}</div>
                        <div className="label">Minutes</div>
                    </div>
                    <div className="time-unit flex-col">
                        <div className="num">{timeLeft.seconds}</div>
                        <div className="label">Seconds</div>
                    </div>
                </div>
            </Box> */}
        </div>
    )
}

export default Countdown