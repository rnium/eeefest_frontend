import React from 'react';
import {
    Grid, Box, Typography
} from '@mui/material'

const Hero = () => {
  return (
    <Box className="hero-section" position="relative">
        <div className='bg' style={{backgroundImage: `url(${process.env.PUBLIC_URL}/static/images/herobg.svg)`}}></div>
        <Grid container justifyContent="center" alignItems="center">
            <Grid item xs={12} md={12} sx={{pt:10, pb: 16, px:5}}>
                <Box display="flex" flexDirection="column" alignItems="center">
                    <Typography display={{xs: 'none', md: 'block'}} className='text-gradient' fontFamily="Doctor Glitch" variant='h1' fontSize="6rem" textAlign="center" container="h1">TECHNOVENTURE</Typography>
                    <Typography display={{xs: 'block', md: 'none'}} className='text-gradient' fontFamily="Doctor Glitch" variant='h1' fontSize="3rem" textAlign="center" container="h1">TECHNO VENTURE</Typography>
                    <Typography className='text-gradient' fontFamily="Doctor Glitch" variant='h1' fontSize={{xs: '3rem', md: '6rem'}} textAlign="center" container="div">3.0</Typography>
                </Box>
                <Box display="flex" sx={{mt: {xs: 2, md: 2}}} flexDirection={{xs: 'column', md: 'row'}} justifyContent="center" alignItems="center">
                    <div className='heroinfo me-sm'>
                        <i class='bx bxs-time-five' ></i>
                        <div className="info">9<sup>th</sup> & 10<sup>th</sup> March 2024</div>
                    </div>
                    <div className='heroinfo'>
                        <i class='bx bxs-map'></i>
                        <div className="info">Dept. of EEE, Sylhet Engineering College</div>
                    </div>
                </Box>
            </Grid>
        </Grid>
    </Box>
  )
}

export default Hero