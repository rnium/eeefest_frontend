import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Navigation = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" color='transparent'>
            <Toolbar sx={{py: 2}}>
              <Typography variant="h5" component="h1" sx={{ flexGrow: 1 }}>
                TechnoVenture 3.0
              </Typography>
              <Box sx={{ flexGrow: 1 }}>
                <Button className='menubtn'>Events</Button>
                <Button className='menubtn'>Guests</Button>
                <Button className='menubtn'>Register</Button>
                <Button className='menubtn'>Contact</Button>
              </Box>
              <Button color="primary" variant='contained' startIcon={<FavoriteIcon />}>Be A Sponsor</Button>
            </Toolbar>
          </AppBar>
        </Box>
    )
}

export default Navigation