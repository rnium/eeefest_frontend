import React from 'react';
import {
    Box, Typography
} from '@mui/material';

const Description = () => {
    return (
        <Box sx={{ py: 15 }} className="description">
            <div className='bg' style={{backgroundImage: `url(/static/images/banner_bg.png)`}}></div>
            <Typography sx={{ px: 5 }} variant="body1" fontSize={{ xs: '1rem', md: '1.8rem' }} textAlign="justify" color="white" style={{textShadow: '0 0 5px black'}}>
                Get ready to embark on an exhilarating journey of technological fiesta as we present a set of captivating contests. Our fest promises an electrifying experience for all enthusiasts. Mark your calendars for March 9th and join us for a chance to showcase your skills, compete with the best, win from our generous prize pool and be a part of #Technoventure3 together!
            </Typography>
        </Box>
    )
}

export default Description