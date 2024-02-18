import React, { useState } from 'react';
import {
    TextField, Button, Typography, Container, FormControl,
    Select, Grid, MenuItem, Card, CardMedia, CardContent,
    ListItem, List, ListItemText
} from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
// import { makeStyles } from '@mui/styles';


const contest_fee = {
    'lfr': 1200,
    'poster': 100,
    'integration': 100,
    'circuit-solve': 100,
    'gaming-fifa': 100,
    'gaming-chess': 100,
}

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        team_name: '',
        email: '',
        phoneNumber: '',
        techInterest: '',
        contest: '',
        gateway: 'rocket'
    });

    const [isSubmitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.contest) {
            alert("Please Select a contest")
            return;
        } else if (!formData.gateway) {
            alert("Please Select a gateway");
            return;
        }
        // Handle form submission here, e.g., send data to server
        console.log(formData);
        // Reset form fields
        // console.log(formData);
        setSubmitted(true);
    };

    let selectedContestFee = formData.contest ? contest_fee[formData.contest] : 0;
    if (isSubmitted) {
        return (
            <Container>
                <div className='formSumissionConfirm'>
                    <i class='bx bx-check-double'></i>
                    <div className="info">
                        Congratulations, User! Your registration for the [Event/Contest Name] has been successfully received.
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
                        <TextField
                            variant="outlined"
                            label="Contestant Name"
                            sx={{ mt: 2 }}
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            fullWidth
                            required
                        />
                        {
                            formData.contest == 'lfr' | formData.contest == 'poster' ?
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
                                : null
                        }
                        <TextField
                            variant="outlined"
                            label="Email"
                            type="email"
                            name="email"
                            sx={{ mt: 2 }}
                            value={formData.email}
                            onChange={handleChange}
                            fullWidth
                            required
                        />
                        <TextField
                            variant="outlined"
                            label="Phone Number"
                            type="tel"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            sx={{ mt: 2 }}
                            fullWidth
                            required
                        />
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
                            label="Transaction Number"
                            name="techInterest"
                            value={formData.techInterest}
                            onChange={handleChange}
                            sx={{ mt: 2 }}
                            fullWidth
                            required
                        />
                        <Button sx={{ mt: 2 }} variant="contained" color="primary" type="submit" fullWidth>
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
                                        The entry fee for your selected contest is:
                                        <Typography variant='h6' component='span' color="secondary" display="inline" sx={{ marginLeft: 1 }}> {selectedContestFee} Tk</Typography>
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
                                    <Typography variant='body'>We accept payments via Rocket and Nagad only.</Typography>
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
