import React from 'react';
import {
    Box, Grid, Typography
} from '@mui/material';

const Description = () => {
    return (
        <Box sx={{ py: 15 }} className="description">
            <div className='bg' style={{backgroundImage: `url(${process.env.PUBLIC_URL}/static/images/robo.jpeg)`}}></div>
            <Typography sx={{ px: 5 }} variant="body1" fontSize={{ xs: '1rem', md: '1.8rem' }} textAlign="justify">
                Get ready to embark on an exhilarating journey of technological fiesta as we present a set of captivating contests. Our fest promises an electrifying experience for all enthusiasts. Mark your calendars for March 1st and join us for a chance to showcase your skills, compete with the best, win from our generous prize pool and be a part of #Technoventure3 together!
            </Typography>
        </Box>
    )
}

export default Description