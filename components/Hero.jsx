import React from 'react';
import {
    Grid, Box, Typography, Stack
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const Hero = () => {
    return (
        <Box className="hero-section" position="relative">
            <div className='bg' style={{ backgroundImage: `url(/static/images/herobg.svg)` }}></div>
            <Grid container justifyContent="center" alignItems="center">
                <Grid item xs={12} md={12} sx={{ pt: 10, pb: 16, px: 5 }}>
                    <Box display="flex" flexDirection="column" alignItems="center">
                        <Typography display={{ xs: 'none', md: 'block' }} className='text-gradient' fontFamily="Doctor Glitch" variant='h1' fontSize="6rem" textAlign="center" container="h1">TECHNOVENTURE</Typography>
                        <Typography display={{ xs: 'block', md: 'none' }} className='text-gradient' fontFamily="Doctor Glitch" variant='h1' fontSize="3rem" textAlign="center" container="h1">TECHNO VENTURE</Typography>
                        <Typography className='text-gradient' fontFamily="Doctor Glitch" variant='h1' fontSize={{ xs: '3rem', md: '6rem' }} textAlign="center" container="div">3.0</Typography>
                    </Box>
                    <Stack
                        direction='row'
                        spacing={3}
                        justifyContent='center'
                        sx={{mt: 2}}
                    >
                        <Stack
                            direction='row'
                            spacing={1}
                            alignItems='center'
                        >
                            <CalendarMonthIcon 
                                color='text.secondary'
                            />
                            <Typography
                                color='text.secondary'
                                variant='h6'
                            >
                                9<sup>th</sup> & 10<sup>th</sup> March 2024
                            </Typography>
                        </Stack>
                        <Stack
                            direction='row'
                            spacing={1}
                            alignItems='center'
                        >
                            <LocationOnIcon 
                                color='text.secondary'
                            />
                            <Typography
                                color='text.secondary'
                                variant='h6'
                            >
                                Dept. of EEE, Sylhet Engineering College
                            </Typography>
                        </Stack>
                    </Stack>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Hero