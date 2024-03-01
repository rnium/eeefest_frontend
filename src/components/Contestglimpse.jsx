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
        title: "Get your bot in the groove, it's time to move and prove!",
        url: '/line-follower',
        orientation_type: 1,
        featured_info: [
            "Open For All",
            "Champion Prize Money: 15,000 Tk",
            "Runner Up Prize Money: 10,000 Tk",
            "2nd Runner Up Up Prize Money: 5,000 Tk",
            "Gift : T-shirt, Lunch Coupon",
            "Registration Fee: 1200 Tk",
        ]
    },
    'poster': {
        name: 'Poster Presentation',
        logo_name: '002-poster.svg',
        hero_img: 'poster.jpeg',
        title: "Be the change you want to see, on a poster, it's meant to be!",
        url: '/poster-presentation',
        orientation_type: 2,
        featured_info: [
            "Open For All",
            "Champion Prize Money: 3,000 Tk",
            "Registration Fee: 300 Tk",
        ]
    },
    'circuit-solve': {
        name: 'Circuit Master',
        logo_name: '003-electrical-circuit_1.svg',
        hero_img: 'circuit.jpeg',
        title: "Push the limits, defy the odds, become the circuit master the world applauds.",
        url: '/circuit-master',
        orientation_type: 1,
        featured_info: [
            "Intra Campus",
            "Champion Prize Money: 1,500 Tk",
            "Registration Fee: 100 Tk",
        ]
    },
    'integration': {
        name: 'Integration Bee',
        logo_name: '004-math.svg',
        hero_img: 'integration.jpeg',
        title: "Bee the best, put the rest to the test, in the Integration Bee's royal quest!",
        url: '/integreation-bee',
        orientation_type: 2,
        featured_info: [
            "Intra Campus",
            "Champion Prize Money: 1,500 Tk",
            "Runner Up Prize Money: 1,000 Tk",
            "Registration Fee: 100 Tk",
        ]
    },
    'gaming-fifa': {
        name: 'Gaming Contest [FIFA]',
        logo_name: '006-game-controller-1.svg',
        hero_img: 'fifa.jpeg',
        title: "Joystick justice, virtual goals, who will control the FIFA scrolls?",
        url: '/gaming',
        orientation_type: 1,
        featured_info: [
            "Intra Campus",
            "Champion Prize Money: 1000 Tk",
            "Runner Up Prize Money: 500 Tk",
            "Registration Fee: 100 Tk",
        ]

    },
    'gaming-chess': {
        name: 'Gaming Contest [Chess]',
        logo_name: 'chess.svg',
        hero_img: 'chess.jpeg',
        title: "The clock ticks, the tension builds, who will be the chess champion whose name thrills?",
        url: '/gaming',
        orientation_type: 2,
        featured_info: [
            "Intra Campus",
            "Champion Prize Money: 1000 Tk",
            "Runner Up Prize Money: 500 Tk",
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
        <Box key={idx} className="contest-glimpse" sx={{ py: 3, my:3 }} data-aos="fade-up" data-aos-once={true} >
            <Grid container>
                <Grid item xs={12} md={5} order={{ xs: 1, md: (idx+1) % 2 ? 1 : 2 }} sx={{marginBottom: {xs: 4, md: 0}}}>
                    <Box className="graphic">
                        <img src={"/static/images/hero/" + c.hero_img} alt="hero" className='hero' />
                        <div className="logo-card-container">
                            <div className="logo-card"  >
                                <img src={'/static/images/' + c.logo_name} alt="" />
                            </div>
                        </div>
                    </Box>
                </Grid>
                <Grid item xs={12} md={7} order={{ xs: 1, md: (idx+1) % 2 ? 2 : 1 }}>
                    <Box sx={{ marginLeft: {xs: 0, md: 10}, marginRight: {xs:0, md: 1 }}} className="details" height="100%" display="flex" flexDirection="column" justifyContent="center">
                        <Typography variant='h4' fontSize={{ md: '2.2rem', xs: '1.5rem' }}>
                            {c.name}
                        </Typography>
                        {
                            c.title ?
                                <Typography variant='h5' color="text.secondary" sx={{mt: 1}} fontSize={{ md: '1.5rem', xs: '1rem' }}>
                                    {c.title}
                                </Typography>
                            : null
                        }
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
                            <Button style={{ borderRadius: '180px' }} variant='contained' color='primary' size='large' sx={{ px: 4 }} href={c.url}>
                                Learn More
                            </Button>
                        </Stack>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    ))
    return (
        <Container sx={{ mb: 15 }}>
            {contests}
        </Container>
    )
}

export default Contestglimpse