import React from 'react';
import {
    Box, Container, Grid, Typography
} from '@mui/material'


const KeynoteSpeaker = () => {
  return (
    <Container className='keynotespeaker'>
        <Grid container>
            <Grid item xs={12} md={7}>
                <Box className="info">
                    <div className="top">
                        {/* <div className="seminar-title">Seminar On: </div> */}
                        <Typography className='title text-gradient' variant='h4' fontSize={{ md: '1.8rem', xs: '1.5rem' }}>
                            Keynote Speaker
                        </Typography>
                    </div>
                    <div className="bottom">
                        <Typography variant='h4' fontSize={{ md: '2rem', xs: '1.5rem' }}>
                            DR. M. Moshiul Hoque
                        </Typography>
                        <Typography variant='h4' fontSize={{ md: '1.2rem', xs: '0.8rem' }}>
                            Chair
                        </Typography>
                        <Typography variant='h4' fontSize={{ md: '1.2rem', xs: '0.8rem' }}>
                            IEEE Bangladesh Section Executive Committee 2024
                        </Typography>
                    </div>
                </Box>
            </Grid>
            <Grid item xs={12} md={5}>
                <Box className="display">
                    <div className="bg"></div>
                </Box>
            </Grid>
        </Grid>
    </Container>
  )
}

export default KeynoteSpeaker