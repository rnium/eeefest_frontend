import React from 'react'
import Events from '../components/Events'
import FavoriteIcon from '@mui/icons-material/Favorite';
import Fab from '@mui/material/Fab';
import Box from '@mui/material/Box';

const homepage = () => {
  return (
    <div>
      <img src='images/banner.jpg' width='100%' />
      {/* <Events /> */}
      <Box className="floatingBtn" sx={{ '& > :not(style)': { m: 1 } }}>
        <Fab color='primary' variant="extended" aria-label="like">
          <FavoriteIcon sx={{ marginRight: 1 }} />
          Sponsor Us
        </Fab>
      </Box>
    </div>
  )
}

export default homepage