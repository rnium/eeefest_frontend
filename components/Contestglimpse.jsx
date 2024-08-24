import React from 'react';
import {
    Grid, Box, Typography, Container, List, ListItem, ListItemIcon,
    Button, Stack
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Image from 'next/image';
import { contests_data } from '@/lib/data/contests';

let contest_arr = [];

for (let contest_name in contests_data) {
    contest_arr.push(contests_data[contest_name]);
}

const Contestglimpse = () => {
    const contests = contest_arr.map((c, idx) => (
        <Box key={idx} className="contest-glimpse" sx={{ py: 3, my: 3 }} data-aos="fade-up" data-aos-once={true} >
            <Grid container>
                <Grid item xs={12} md={5} order={{ xs: 1, md: (idx + 1) % 2 ? 1 : 2 }} sx={{ marginBottom: { xs: 4, md: 0 } }}>
                    <Stack className="graphic" >
                        <Image 
                            placeholder='blur'
                            src={c.hero_img}
                            layout='responsive'
                            style={{borderRadius: '20px'}}
                        />
                        <div className="logo-card-container">
                            <div className="logo-card"  >
                                <img src={`/static/images/${c.logo_name}`} alt={c.name} />
                            </div>
                        </div>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={7} order={{ xs: 1, md: (idx + 1) % 2 ? 2 : 1 }}>
                    <Box sx={{ marginLeft: { xs: 0, md: 10 }, marginRight: { xs: 0, md: 1 } }} className="details" height="100%" display="flex" flexDirection="column" justifyContent="center">
                        <Typography variant='h4' fontSize={{ md: '2.2rem', xs: '1.5rem' }}>
                            {c.name}
                        </Typography>
                        {
                            c.title ?
                                <Typography variant='h5' color="text.secondary" sx={{ mt: 1 }} fontSize={{ md: '1.5rem', xs: '1rem' }}>
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