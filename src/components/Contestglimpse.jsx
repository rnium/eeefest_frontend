import React from 'react';
import {
    Grid, Box, Typography, Container, List, ListItem, ListItemIcon,
    Button, Stack
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const contests_overview_data = {
    'lfr': {
        name: 'Line Follower Robot',
        logo_name: '001-robot.svg',
        hero_img: 'lfr1.jpeg',
        title: '',
        url: '/line-follower',
        orientation_type: 1,
        featured_info: [
            "Open For All",
            "Champion Prize Money: 15,000 Tk",
            "Runner Up: 10,000 Tk",
            "2nd Runner Up: 5,000 Tk",
            "Gift : T-shirt, Lunch Coupon",
            "Registration Fee: 1200 Tk",
        ]
    },
    'poster': {
        name: 'Poster Presentation',
        logo_name: '002-poster.svg',
        hero_img: 'poster.jpeg',
        title: '',
        url: '/poster-presentation',
        orientation_type: 2,
        featured_info: [
            "Open For All",
            "Champion Prize Money: 2,500 Tk",
            "Registration Fee: 200 Tk",
        ]
    },
    'circuit-solve': {
        name: 'Circuit Master',
        logo_name: '003-electrical-circuit_1.svg',
        hero_img: 'circuit.jpeg',
        title: '',
        url: '/circuit-master',
        orientation_type: 1,
        featured_info: [
            "Inter Campus",
            "Champion Prize Money: 1,500 Tk",
            "Registration Fee: 100 Tk",
        ]
    },
    'integration': {
        name: 'Integration BEE',
        logo_name: '004-math.svg',
        hero_img: 'integration.jpeg',
        title: '',
        url: '/integreation-bee',
        orientation_type: 2,
        featured_info: [
            "Inter Campus",
            "Champion Prize Money: 1,500 Tk",
            "Runner Up Prize Money: 1,000 Tk",
            "Registration Fee: 100 Tk",
        ]
    },
    'gaming-fifa': {
        name: 'Gaming Contest [FIFA]',
        logo_name: '006-game-controller-1.svg',
        hero_img: 'lfr1.jpeg',
        title: '',
        url: '/gaming',
        orientation_type: 1,
        featured_info: [
            "Inter Campus",
            "Champion Prize Money: 1000 Tk",
            "Registration Fee: 100 Tk",
        ]

    },
    'gaming-chess': {
        name: 'Gaming Contest [Chess]',
        logo_name: '006-game-controller-1.svg',
        hero_img: 'lfr1.jpeg',
        url: '/gaming',
        orientation_type: 2,
        featured_info: [
            "Inter Campus",
            "Champion Prize Money: 1000 Tk",
            "Registration Fee: 100 Tk",
        ]
    },
}

let contest_arr = [];

for (let contest_name in contests_overview_data) {
    contest_arr.push(contests_overview_data[contest_name]);
}

const Contestglimpse = () => {
    const contests = contest_arr.map((c, idx) => (
        <Box key={idx} className="contest-glimpse" sx={{ p: 3 }} >
            <Grid container>
                <Grid item xs={12} md={5} order={{ xs: 1, md: idx % 2 ? 2 : 1 }}>
                    <Box className="graphic">
                        <img src={"static/images/hero/" + c.hero_img} alt="hero" className='hero' />
                        <div className="logo-card-container">
                            <div className="logo-card">
                                <img src={'static/images/' + c.logo_name} alt="" />
                            </div>
                        </div>
                    </Box>
                </Grid>
                <Grid item xs={12} md={7} order={{ xs: 1, md: idx % 2 ? 1 : 2 }}>
                    <Box sx={{ marginLeft: 10 }} className="details" height="100%" display="flex" flexDirection="column" justifyContent="center">
                        <Typography variant='h4'>
                            {c.name}
                        </Typography>
                        <Typography variant='h5'>
                            {c.title}
                        </Typography>
                        <List component="ul" sx={{ mt: 3 }}>
                            {
                                c.featured_info.map((info, i) => (
                                    <ListItem key={i}>
                                        <ListItemIcon>
                                            <CheckCircleIcon color='primary' sx={{ fontSize: { xs: '1.5rem', md: '2rem' } }} />
                                        </ListItemIcon>
                                        <Typography variant='h6' color="textSecondary" fontSize={{ md: '1.3rem', xs: '1rem' }}>
                                            {info}
                                        </Typography>
                                    </ListItem>
                                ))
                            }
                        </List>
                        <Stack className='actions' direction="row" spacing={2} sx={{ mt: 3 }}>
                            <Button style={{borderRadius: '180px'}} variant='contained' color='primary' size='large' sx={{ px: 4 }} href={c.url}>
                                Learn More
                            </Button>
                        </Stack>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    ))
    return (
        <Container sx={{ pb: 20 }}>
            {contests}
        </Container>
    )
}

export default Contestglimpse