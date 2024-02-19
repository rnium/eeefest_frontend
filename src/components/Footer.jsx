import React from 'react'
import {
    AppBar, Toolbar, Typography, Box, Grid
} from '@mui/material'

const Footer = () => {
    return (
        <Box sx={{py:4}} className="footer" display="flex" flexDirection="column" justifyContent="center" alignItems="center" >
            <Box >
                <img className='logo' src='images/sec_eee.png' />
            </Box>
            <Typography variant='h6'>TechnoVenture 3.0 presented by EEE Association</Typography>
            <Typography variant='body1' className='text-muted' component="div">&copy; Department of EEE, Sylhet Engineering College.</Typography>
        </Box>
    )
}

export default Footer