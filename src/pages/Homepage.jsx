import React from 'react'
import Events from '../components/Events'
import FavoriteIcon from '@mui/icons-material/Favorite';
import Fab from '@mui/material/Fab';
import Box from '@mui/material/Box';
import Hero from '../components/Hero';
import Countdown from '../components/Countdown';
import Description from '../components/Description';
import Contestglimpse from '../components/Contestglimpse';

const homepage = () => {
  return (
    <div>
      <Hero />
      <Countdown />
      <Events />
      <Description />
      <Contestglimpse />
      {/* <Events /> */}
      <Box className="floatingBtn" sx={{ '& > :not(style)': { m: 1 } }}>
        <Fab className="inner" color='secondary' variant="extended" aria-label="like">
          <FavoriteIcon sx={{ marginRight: 1 }} />
          Sponsor Us
        </Fab>
      </Box>
    </div>
  )
}

export default homepage