'use client'

import React, { useState, useEffect } from 'react';
import {
    TextField, Button, Typography, Container, FormControl,
    Select, Grid, MenuItem, Card, CardMedia, CardContent, Fade,
    Alert, Box, Snackbar, FormControlLabel, Switch, FormGroup,
    FormLabel, RadioGroup, Radio
} from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import axios from 'axios';
import * as urls from '@/lib/data/api_urls'
import '@/styles/register.css'
import PaymentSummery from '@/components/PaymentSummery';
import GroupmemberFields from '@/components/GroupmemberFields';
import Image from 'next/image';

import {
    registration_deadline,
    payment_deadline
} from '@/lib/data/basic_info';
import { contests_data } from '@/lib/data/contests';
import { RiCheckDoubleLine } from '@remixicon/react'
import banner_img from '@/public/static/images/banner.jpg'


function getGroupmemberStateObject(num_members) {
    let members = {
        group_member_1: {
            name: '',
            inst: '',
            dept: '',
            reg_num: '',
            tshirt: '',
            phone: '',
            email: '',
            game_controller: null
        }
    };
    for (let i = 1; i < num_members; i++) {
        members[`group_member_${i + 1}`] = {
            name: '',
            inst: '',
            dept: '',
            reg_num: '',
            tshirt: '',
            phone: '',
            email: '',
        };
    }
    return members;
}

const Register = ({ contest }) => {
    const [formData, setFormData] = useState({
        team_name: '',
        group_members_count: 1,
        contest: contest || '',
        gateway: 'bkash',
        paying_number: '',
        transaction_id: ''
    });

    const [groupFormData, setGroupFormData] = useState(
        getGroupmemberStateObject(1)
    );

    const [isSubmitted, setSubmitted] = useState(false);
    const [isSubmitting, setSubmitting] = useState(false);
    const [open, setOpen] = useState(false);
    const [notifMsg, setNotifMsg] = useState("");
    const [payNow, setPayNow] = useState(true);

    const showAlert = (message) => {
        setNotifMsg(message);
        setOpen(true);
    }

    const handleSnackbarClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const handlePayNowChange = (e) => {
        let the_gateway = null;
        if (payNow === false) {
            the_gateway = "bkash";
        }
        setFormData(formData => (
            {
                ...formData,
                gateway: the_gateway
            }
        ))
        setPayNow(!payNow);
    }

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        for (let [key, value] of urlParams.entries()) {
            if (key === 'contest') {
                if (value === 'lfr' || value === 'poster') {
                    setFormData(formData => (
                        {
                            ...formData,
                            group_members_count: 3
                        }
                    ))
                    setGroupFormData(getGroupmemberStateObject(3));
                }
            }
        }
    }, [])

    const handleChange = (e) => {
        let { name, value } = e.target;
        if (name === 'group_members_count') {
            value = parseInt(value);
            if (isNaN(value)) {
                value = "";
            }
            if (!isNaN(value) && formData.contest === 'poster' && value > 3) {
                showAlert("Maximum of 3 members can participate in a group for poster presentation!")
                return;
            }
            if (!isNaN(value) && formData.contest === 'lfr' && value > 5) {
                showAlert("Maximum of 5 members can participate in a group for LFR!");
                return;
            }
            setGroupFormData(getGroupmemberStateObject(value));
        } else if (name === 'contest') {
            if (value === "poster" || value === 'lfr') {
                setFormData({
                    ...formData,
                    group_members_count: 3
                })
                setGroupFormData(getGroupmemberStateObject(3));
            } else {
                setFormData({
                    ...formData,
                    group_members_count: 1
                })
                setGroupFormData(getGroupmemberStateObject(1));
            }
        }
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleGroupFormChange = (e) => {
        const { name, value } = e.target;
        if (name === 'others') {
            setGroupFormData((prevData) => ({
                ...prevData,
                others: value
            }))
            return;
        }
        const [member, field] = name.split('-')
        setGroupFormData((prevData) => ({
            ...prevData,
            [member]: {
                ...prevData[member],
                [field]: value,
            }
        }));
    }

    const handleSubmit = async (e) => {
        setSubmitting(true);
        e.preventDefault();
        if (!formData.contest) {
            alert("Please Select a contest");
            setSubmitting(false);
            return;
        } else if (formData.contest === 'gaming-fifa' && groupFormData.group_member_1.game_controller === null) {
            showAlert("Please select your game controller preference");
            setSubmitting(false);
            return;
        }
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            };
            let data = { formData: formData, groupFormData: groupFormData }
            await axios.post(urls.registerUrl, data, config)
        } catch (error) {
            let error_info = error?.response?.data?.info;
            if (error_info === undefined) {
                error_info = error.message;
            }
            showAlert(error_info);
            setSubmitting(false);
            return;
        }
        setSubmitted(true);
    };

    if (isSubmitted) {
        return (
            <Container sx={{ mb: 10 }}>
                <div className='formSumissionConfirm'>
                    <RiCheckDoubleLine 
                        size={70}
                        className="icon"
                    />
                    <Typography variant='body1' fontSize={{ xs: '1rem', md: '1.4rem' }} textAlign="justify">
                        Congratulations, {groupFormData.group_member_1.name}! Your registration has been successfully received.
                        Our team is currently processing your registration details. Once your registration is verified, you will receive a confirmation email at the address provided during registration.
                        Thank you for your interest in participating. We look forward to your involvement in the event!
                    </Typography>
                    <Typography className="info bottom mt-sm" sx={{ mt: 5 }}>Best regards</Typography>
                    <Typography className="" variant='h5'>EEE Association, SEC</Typography>
                </div>
            </Container>
        )
    }

    return (
        <Container className='reg-form' sx={{ mt: 3, mb: 5 }}>
            <Snackbar open={open} autoHideDuration={4000} onClose={handleSnackbarClose}>
                <Alert
                    onClose={handleSnackbarClose}
                    severity="warning"
                    variant='filled'
                    sx={{ width: '100%' }}
                >
                    {notifMsg}
                </Alert>
            </Snackbar>
            <Grid container spacing={6} >
                <Grid item xs={12} md={7}>
                    <Typography variant="h4" gutterBottom>
                        Contest Registration
                    </Typography>
                    <Alert severity='warning' sx={{ mt: 1 }}>
                        Registration Deadline: {registration_deadline}
                    </Alert>
                    <form onSubmit={handleSubmit}>
                        <FormControl fullWidth sx={{ mt: 2 }}>
                            <InputLabel id="demo-simple-select-label">Select Contest</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={formData.contest}
                                label="Select Contest"
                                name="contest"
                                onChange={handleChange}
                            >
                                {
                                    Object.keys(contests_data).map((contest_slug, idx) => (
                                        <MenuItem
                                            value={contest_slug}
                                            key={idx}
                                        >
                                            {contests_data[contest_slug].name}
                                        </MenuItem>
                                    ))
                                }
                            </Select>
                        </FormControl>
                        {
                            formData.contest === 'lfr' || formData.contest === 'poster' ?
                                <Box>
                                    <TextField
                                        variant="outlined"
                                        label="Team Name"
                                        sx={{ mt: 2 }}
                                        name="team_name"
                                        value={formData.team_name}
                                        onChange={handleChange}
                                        fullWidth
                                        required
                                    />
                                    <TextField
                                        variant="outlined"
                                        label="Number of Group Members"
                                        sx={{ mt: 2 }}
                                        name="group_members_count"
                                        value={formData.group_members_count}
                                        onChange={handleChange}
                                        fullWidth
                                        required
                                        autoComplete='off'
                                    />
                                </Box>
                                : null
                        }
                        <GroupmemberFields
                            groupFormData={groupFormData}
                            handleGroupFormChange={handleGroupFormChange}
                            numMembers={formData.group_members_count}
                        />
                        {
                            formData.contest === 'gaming-fifa' ?
                                <FormControl sx={{ mt: 2, flexDirection: { xs: 'column', md: 'row', width: '100%' }, alignItems: 'center' }}>
                                    <FormLabel sx={{ marginRight: 2 }} id="demo-radio-buttons-group-label">Controller Preference</FormLabel>
                                    <RadioGroup
                                        row
                                        defaultValue="keyb"
                                        name="group_member_1-game_controller"
                                        value={groupFormData.group_member_1.game_controller}
                                        onChange={handleGroupFormChange}
                                    >
                                        <FormControlLabel value="keyb" control={<Radio />} label="Keyboard" />
                                        <FormControlLabel value="joys" control={<Radio />} label="Joystick" />
                                    </RadioGroup>
                                </FormControl>
                                : null
                        }
                        {
                            formData.contest === 'lfr' ?
                                <FormControlLabel
                                    control={<Switch defaultChecked={payNow} onClick={handlePayNowChange} />}
                                    label={payNow ? "Pay Now" : "Pay Later"}

                                />
                                : null
                        }
                        {
                            formData.contest === 'lfr' && payNow === false ?
                                <Fade in={true}>
                                    <Box>
                                        <Alert severity='success'>
                                            you have the flexibility to complete payment at your convenience. Please remember to make the payment before the deadline expires to avoid any inconveniences. When making the payment later, kindly include your <b>team name as the reference</b> to ensure it&apos;s properly attributed to your registration.
                                        </Alert>
                                        <Alert severity='warning' sx={{ mt: 1 }}>
                                            Payment Deadline: <b>{payment_deadline}</b>
                                        </Alert>
                                    </Box>
                                </Fade>
                                :
                                <Fade in={true}>
                                    <FormGroup>
                                        <FormControl fullWidth sx={{ mt: 2 }}>
                                            <InputLabel id="demo-simple-select-label">Payment Gateway</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={formData.gateway}
                                                label="Payment Gateway"
                                                name="gateway"
                                                onChange={handleChange}
                                            >
                                                <MenuItem value="bkash">bKash</MenuItem>
                                                <MenuItem value="rocket">Rocket</MenuItem>
                                                <MenuItem value="nagad">Nagad</MenuItem>
                                            </Select>
                                        </FormControl>
                                        <TextField
                                            variant="outlined"
                                            label="Account number from which payment is done"
                                            name="paying_number"
                                            value={formData.paying_number}
                                            onChange={handleChange}
                                            sx={{ mt: 2 }}
                                            fullWidth
                                            required
                                        />
                                        <TextField
                                            variant="outlined"
                                            label="Transaction Number"
                                            name="transaction_id"
                                            value={formData.transaction_id}
                                            onChange={handleChange}
                                            sx={{ mt: 2 }}
                                            fullWidth
                                            required
                                        />
                                        <Alert severity='warning' sx={{ mt: 1 }}>
                                            Please ensure accurate entry of the transaction number, as it is required for verification.
                                        </Alert>
                                    </FormGroup>
                                </Fade>

                        }

                        <Button sx={{ mt: 2 }} disabled={isSubmitting} variant="contained" color="primary" type="submit" fullWidth>
                            Register
                        </Button>
                    </form>
                </Grid>
                <Grid item xs={12} md={5}>
                    <Card elevation={1}>
                        <Image
                            placeholder='blur'
                            src={banner_img}
                            layout='responsive'
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" color="text.secondary" textAlign="center">
                                Payment Options
                            </Typography>
                            <Box className="account-info bkash">
                                <img src="/static/images/bkash.png" width="100px" alt="logo" />
                                <div className="info">
                                    <div className="title">bKash</div>
                                    <Typography variant='body2' fontSize={{ xs: '1.2rem', md: '1.8rem' }}>
                                        01711960676
                                    </Typography>
                                </div>
                            </Box>
                            <Box className="account-info rocket" sx={{ mt: 1 }}>
                                <img src="/static/images/rocket.png" width="100px" alt="logo" />
                                <div className="info">
                                    <div className="title">DBBL Rocket</div>
                                    <Typography variant='body2' fontSize={{ xs: '1.2rem', md: '1.8rem' }}>
                                        016012314079
                                    </Typography>
                                </div>
                            </Box>
                            <Box className="account-info nagad" sx={{ mt: 1 }}>
                                <img src="/static/images/nagad.png" width="100px" alt="logo" />
                                <div className="info">
                                    <div className="title">Nagad</div>
                                    <Typography variant='body2' fontSize={{ xs: '1.2rem', md: '1.8rem' }}>
                                        01521787727
                                    </Typography>
                                </div>
                            </Box>
                        </CardContent>
                    </Card>
                    <PaymentSummery
                        contest={formData.contest}
                        members={formData.group_members_count}
                    />

                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;
