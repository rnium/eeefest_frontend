'use client'

import { useEffect } from 'react'
import Events from '@/components/Events'
import Hero from '@/components/Hero';
import Countdown from '@/components/Countdown';
import Description from '@/components/Description';
import Contestglimpse from '@/components/Contestglimpse';
import HomepageModal from '../HomepageModal';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Homepage = () => {

    useEffect(() => {
        AOS.init()
    }, [])

    return (
        <div>
            <Hero />
            <Countdown />
            <Events />
            <Contestglimpse />
            <Description />
            <HomepageModal />
            
        </div>
    )
}

export default Homepage