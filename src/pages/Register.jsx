import React, { useState } from 'react';
import {
    TextField, Button, Typography, Container, FormControl,
    Select, Grid, MenuItem, Card, CardMedia, CardContent,
    ListItem, List, ListItemText, Box
} from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import axios from 'axios';
import * as urls from '../backendUrls'
// import { makeStyles } from '@mui/styles';


const contest_fee = {
    'lfr': 1200,
    'poster': 100,
    'integration': 100,
    'circuit-solve': 100,
    'gaming-fifa': 100,
    'gaming-chess': 100,
}

const additional_member_fee = {
    lfr: 500,
    poster: 50
}

const Register = () => {
    const [formData, setFormData] = useState({
        team_name: '',
        group_members_count: '',
        contest: '',
        gateway: 'rocket',
        paying_number: '',
        transaction_id: ''
    });

    const [groupFormData, setGroupFormData] = useState({
        team_leader: {
            name: '',
            inst: '',
            dept: '',
            reg: '',
            tshirt: '',
            phone: '',
            email: '',
        },
        second_member: {
            name: '',
            inst: '',
            dept: '',
            tshirt: '',
            phone: '',
            email: '',
        },
        third_member: {
            name: '',
            inst: '',
            dept: '',
            tshirt: '',
            phone: '',
            email: '',
        },
        others: ''
    })

    const [isSubmitted, setSubmitted] = useState(false);
    const [isSubmitting, setSubmitting] = useState(false);

    const handleChange = (e) => {
        let { name, value } = e.target;
        if (name === 'group_members_count') {
            value = parseInt(value);
            if (isNaN(value)) {
                value = ''
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
            alert("Please Select a contest")
            return;
        } else if (!formData.gateway) {
            alert("Please Select a gateway");
            return;
        }
        try {
            let data = { formData: formData, groupFormData: groupFormData }
            let response = await axios.post(urls.registerUrl, data)
        } catch (error) {
            alert(error);
            setSubmitting(false);
            return;
        }
        setSubmitted(true);
    };

    let memberFields = () => {
        return (
            <Box>
                <Box>
                    <TextField
                        variant="outlined"
                        label="Team Leader Name"
                        sx={{ mt: 2 }}
                        name='team_leader-name'
                        value={groupFormData.team_leader.name}
                        onChange={handleGroupFormChange}
                        fullWidth
                        required
                    />
                    <TextField
                        variant="outlined"
                        label="Team Leader Instituition"
                        sx={{ mt: 2 }}
                        name="team_leader-inst"
                        value={groupFormData.team_leader.inst}
                        onChange={handleGroupFormChange}
                        fullWidth
                        required
                    />
                    <TextField
                        variant="outlined"
                        label="Team Leader Department"
                        sx={{ mt: 2 }}
                        name="team_leader-dept"
                        value={groupFormData.team_leader.dept}
                        onChange={handleGroupFormChange}
                        fullWidth
                        required
                    />
                    <FormControl fullWidth sx={{ mt: 2 }}>
                        <InputLabel id="m1-tshirt-select-label">Team Leader Tshirt Size</InputLabel>
                        <Select
                            labelId="m1-tshirt-select-label"
                            value={groupFormData.team_leader.tshirt}
                            label="Team Leader Tshirt Size"
                            name="team_leader-tshirt"
                            onChange={handleGroupFormChange}
                        >
                            <MenuItem value="S">S</MenuItem>
                            <MenuItem value="M">M</MenuItem>
                            <MenuItem value="L">L</MenuItem>
                            <MenuItem value="XL">XL</MenuItem>
                            <MenuItem value="XXL">XXL</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField
                        variant="outlined"
                        label="Team Leader Phone"
                        sx={{ mt: 2 }}
                        name="team_leader-phone"
                        value={groupFormData.team_leader.phone}
                        onChange={handleGroupFormChange}
                        fullWidth
                        required
                    />
                    <TextField
                        variant="outlined"
                        label="Team Leader Email"
                        sx={{ mt: 2, mb: 2 }}
                        type="email"
                        name="team_leader-email"
                        value={groupFormData.team_leader.email}
                        onChange={handleGroupFormChange}
                        fullWidth
                        required
                    />
                </Box>
                <Box>
                    <TextField
                        variant="outlined"
                        label="2nd Member Name"
                        sx={{ mt: 2 }}
                        name='second_member-name'
                        value={groupFormData.second_member.name}
                        onChange={handleGroupFormChange}
                        fullWidth
                    />
                    <TextField
                        variant="outlined"
                        label="2nd Member Instituition"
                        sx={{ mt: 2 }}
                        name="second_member-inst"
                        value={groupFormData.second_member.inst}
                        onChange={handleGroupFormChange}
                        fullWidth
                    />
                    <TextField
                        variant="outlined"
                        label="2nd Member Department"
                        sx={{ mt: 2 }}
                        name="second_member-dept"
                        value={groupFormData.second_member.dept}
                        onChange={handleGroupFormChange}
                        fullWidth
                    />
                    <FormControl fullWidth sx={{ mt: 2 }}>
                        <InputLabel id="m2-tshirt-select-label">2nd Member Tshirt Size</InputLabel>
                        <Select
                            labelId="m2-tshirt-select-label"
                            value={groupFormData.second_member.tshirt}
                            label="2nd Member Tshirt Size"
                            name="second_member-tshirt"
                            onChange={handleGroupFormChange}
                        >
                            <MenuItem value="S">S</MenuItem>
                            <MenuItem value="M">M</MenuItem>
                            <MenuItem value="L">L</MenuItem>
                            <MenuItem value="XL">XL</MenuItem>
                            <MenuItem value="XXL">XXL</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField
                        variant="outlined"
                        label="2nd Member Phone"
                        sx={{ mt: 2 }}
                        name="second_member-phone"
                        value={groupFormData.second_member.phone}
                        onChange={handleGroupFormChange}
                        fullWidth
                    />
                    <TextField
                        variant="outlined"
                        label="2nd Member Email"
                        sx={{ mt: 2, mb: 2 }}
                        type="email"
                        name="second_member-email"
                        value={groupFormData.second_member.email}
                        onChange={handleGroupFormChange}
                        fullWidth
                    />
                </Box>
                <Box>
                    <TextField
                        variant="outlined"
                        label="3rd Member Name"
                        sx={{ mt: 2 }}
                        name='third_member-name'
                        value={groupFormData.third_member.name}
                        onChange={handleGroupFormChange}
                        fullWidth
                    />
                    <TextField
                        variant="outlined"
                        label="3rd Member Instituition"
                        sx={{ mt: 2 }}
                        name="third_member-inst"
                        value={groupFormData.third_member.inst}
                        onChange={handleGroupFormChange}
                        fullWidth
                    />
                    <TextField
                        variant="outlined"
                        label="3rd Member Department"
                        sx={{ mt: 2 }}
                        name="third_member-dept"
                        value={groupFormData.third_member.dept}
                        onChange={handleGroupFormChange}
                        fullWidth
                    />
                    <FormControl fullWidth sx={{ mt: 2 }}>
                        <InputLabel id="m3-tshirt-select-label">3rd Member Tshirt Size</InputLabel>
                        <Select
                            labelId="m3-tshirt-select-label"
                            value={groupFormData.third_member.tshirt}
                            label="3rd Member Tshirt Size"
                            name="third_member-tshirt"
                            onChange={handleGroupFormChange}
                        >
                            <MenuItem value="S">S</MenuItem>
                            <MenuItem value="M">M</MenuItem>
                            <MenuItem value="L">L</MenuItem>
                            <MenuItem value="XL">XL</MenuItem>
                            <MenuItem value="XXL">XXL</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField
                        variant="outlined"
                        label="3rd Member Phone"
                        sx={{ mt: 2 }}
                        name="third_member-phone"
                        value={groupFormData.third_member.phone}
                        onChange={handleGroupFormChange}
                        fullWidth
                    />
                    <TextField
                        variant="outlined"
                        label="3rd Member Email"
                        sx={{ mt: 2, mb: 2 }}
                        type="email"
                        name="third_member-email"
                        value={groupFormData.third_member.email}
                        onChange={handleGroupFormChange}
                        fullWidth
                    />
                </Box>
                <Box>
                    <Typography variant='body'>Briefly state Additional Members' Name, Institute, T-shirt size in case of more than three members in a team.)</Typography>
                    <TextField
                        label="Additional Group Members Information"
                        multiline
                        rows={5} // Specify the number of rows to display
                        value={groupFormData.others}
                        name='others'
                        onChange={handleGroupFormChange}
                        fullWidth
                        sx={{ mb: 4, mt: 2 }}
                    />
                </Box>
            </Box>
        )
    }

    let selectedContestFee = formData.contest ? contest_fee[formData.contest] : 0;
    if (!isNaN(formData.group_members_count) && formData.group_members_count > 3) {
        selectedContestFee += (formData.group_members_count - 3) * additional_member_fee[formData.contest];
    }
    if (isSubmitted) {
        return (
            <Container>
                <div className='formSumissionConfirm'>
                    <i class='bx bx-check-double'></i>
                    <div className="info">
                        Congratulations, {formData.name}! Your registration has been successfully received.
                        Our team is currently processing your registration details. Once your registration is verified, you will receive a confirmation email at the address provided during registration.
                        Thank you for your interest in participating. We look forward to your involvement in the event!
                    </div>
                    <div className="info bottom mt-sm">Best regards,</div>
                    <div className="info bottom">EEE Association, SEC</div>
                </div>
            </Container>
        )
    }
    return (
        <Container className='reg-form' sx={{ marginBottom: 5 }}>
            <Grid container spacing={6} className="mt-sm">
                <Grid item xs={12} md={7}>
                    <Typography variant="h4" gutterBottom>
                        Contest Registration
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <FormControl fullWidth sx={{ mt: 2 }}>
                            <InputLabel id="demo-simple-select-label">Select Contest</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={formData.lfr}
                                label="Select Contest"
                                name="contest"
                                onChange={handleChange}
                            >
                                <MenuItem value="lfr">Line Follower Robot</MenuItem>
                                <MenuItem value="poster">Poster Presentation</MenuItem>
                                <MenuItem value="circuit-solve">Circuit Solving</MenuItem>
                                <MenuItem value="integration">Integration Bee</MenuItem>
                                <MenuItem value="gaming-fifa">Gaming Contest [FIFA]</MenuItem>
                                <MenuItem value="gaming-chess">Gaming Contest [Chess]</MenuItem>
                            </Select>
                        </FormControl>
                        {
                            formData.contest === 'lfr' | formData.contest === 'poster' ?
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
                                    />
                                    {memberFields()}
                                </Box>
                                :
                                <Box>
                                    <TextField
                                        variant="outlined"
                                        label="Contestant Name"
                                        sx={{ mt: 2 }}
                                        name="team_leader-name"
                                        value={groupFormData.team_leader.name}
                                        onChange={handleGroupFormChange}
                                        fullWidth
                                        required
                                    />
                                    <TextField
                                        variant="outlined"
                                        label="Institution"
                                        sx={{ mt: 2 }}
                                        name="team_leader-inst"
                                        value={groupFormData.team_leader.inst}
                                        onChange={handleGroupFormChange}
                                        fullWidth
                                    />
                                    <TextField
                                        variant="outlined"
                                        label="Department"
                                        sx={{ mt: 2 }}
                                        name="team_leader-dept"
                                        value={groupFormData.team_leader.dept}
                                        onChange={handleGroupFormChange}
                                        fullWidth
                                    />
                                    <TextField
                                        variant="outlined"
                                        label="Registration Number"
                                        sx={{ mt: 2 }}
                                        name="team_leader-reg"
                                        value={groupFormData.team_leader.reg}
                                        onChange={handleGroupFormChange}
                                        fullWidth
                                    />
                                    <TextField
                                        variant="outlined"
                                        label="Email"
                                        type="email"
                                        name="team_leader-email"
                                        sx={{ mt: 2 }}
                                        value={groupFormData.team_leader.email}
                                        onChange={handleGroupFormChange}
                                        fullWidth
                                        required
                                    />
                                    <TextField
                                        variant="outlined"
                                        label="Phone Number"
                                        type="tel"
                                        name="team_leader-phone"
                                        value={groupFormData.team_leader.phone}
                                        onChange={handleGroupFormChange}
                                        sx={{ mt: 2 }}
                                        fullWidth
                                        required
                                    />
                                </Box>
                        }

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
                                <MenuItem value="rocket">Rocket</MenuItem>
                                <MenuItem value="nagad">Nagad</MenuItem>
                            </Select>
                        </FormControl>
                        <TextField
                            variant="outlined"
                            label="Rocket/Nagad account number from which payment is done"
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
                        <Button sx={{ mt: 2 }} disabled={isSubmitting} variant="contained" color="primary" type="submit" fullWidth>
                            Register
                        </Button>
                    </form>
                </Grid>
                <Grid item xs={12} md={5}>
                    <Card >
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="240"
                            image="images/banner.jpg"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Payment Instructions
                            </Typography>
                            <List component="ul">
                                <ListItem>
                                    <Typography>
                                        The registration fee for your selected contest is:
                                        <Typography variant='h6' component='h6' color="secondary" sx={{ marginLeft: 1 }}> {selectedContestFee} Tk</Typography>
                                    </Typography>
                                </ListItem>
                                <ListItem>
                                    <Typography>
                                        Cash In/Send Money to any of the following mobile banking account (Must include 1.8%(Rocket) or 1.25%(Nagad) Cash Out charge regarding your registration fee)
                                    </Typography>
                                </ListItem>
                                <ListItem>
                                    <Typography>
                                        Rocket Account Number:
                                        <Typography component='span' color="secondary" display="inline" sx={{ marginLeft: 1 }}>016012314079</Typography>
                                    </Typography>
                                </ListItem>
                                <ListItem>
                                    <Typography>
                                        Nagad Account Number:
                                        <Typography component='span' color="secondary" display="inline" sx={{ marginLeft: 1 }}>01521787727</Typography>
                                    </Typography>
                                </ListItem>
                                <ListItem>
                                    <Typography variant='body'>
                                        Please ensure accurate entry of the transaction number, as it is required for verification.
                                    </Typography>
                                </ListItem>
                            </List>
                        </CardContent>
                    </Card>

                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;
