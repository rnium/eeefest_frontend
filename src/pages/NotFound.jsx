import React from 'react';
import {
  Typography, Box
} from '@mui/material';

const NotFound = () => {
  return (
    <Box sx={{mt: '10vh', mb: '20vh'}}>
      <Typography color="textSecondary" fontSize={{xs: '4rem', md: '7rem'}} textAlign="center">404</Typography>
      <Typography fontSize={{xs: '2rem', md: '4rem'}} textAlign="center">Page Not Found</Typography>
    </Box>
  )
}

export default NotFound;