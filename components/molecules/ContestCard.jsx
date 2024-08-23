import React from 'react';
import {
    Box, Typography, List, ListItem, ListItemIcon,
    Card, CardMedia, CardContent
} from '@mui/material';
import ContestPrizes from '../atoms/contestPrizes';
import Image from 'next/image';

const ContestCard = ({ contestData }) => {
    return (
        <Card elevation={3}>
            {/* <CardMedia
                component="img"
                alt="banner"
                height="250"
                image="/static/images/chess_banner.png"
            /> */}
            <Image 
                src={contestData.banner}
                layout='responsive'
                placeholder='blur'
            />
            <CardContent>
                <Typography textAlign="center" gutterBottom variant="h5" component="div">
                    {contestData.shortname || contestData.name}
                </Typography>
                <Box sx={{ mb: 2 }}>
                    <div className="eventSchedule">
                        <i class='bx bx-time-five' ></i>
                        <Typography fontSize={{ md: '1.3rem', xs: '1rem' }} color="textPrimary" sx={{ marginLeft: 1 }}>Schedule: {contestData.schedule}</Typography>
                    </div>
                </Box>
                <ContestPrizes 
                    contestData={contestData}
                />
                <Typography variant='h5' sx={{ mt: 1 }} textAlign="center" fontSize={{ md: '1.5rem', xs: '1.2rem' }}>
                    Chess Registration fee: <span className='text-bold'>100 Tk</span>
                </Typography>

            </CardContent>
        </Card>
    )
}

export default ContestCard