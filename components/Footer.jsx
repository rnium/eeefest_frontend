import React from 'react'
import {
    Typography, Box
} from '@mui/material';
import Image from 'next/image';
import eee_logo from '@/public/static/images/sec_eee.png'

import BugReportIcon from '@mui/icons-material/BugReport';


const Footer = () => {
    return (
        <Box>
            <Box sx={{ py: 4 }} className="footer" display="flex" flexDirection="column" justifyContent="center" alignItems="center" >
                <Box >
                    <Image src={eee_logo} alt="EEE Logo" width={150}/>
                </Box>
                <Typography variant='h6' fontSize={{ xs: '0.9rem', md: '1.3rem' }} textAlign='center'>TechnoVenture 3.0 presented by EEE Association</Typography>
                <Typography variant='body1' fontSize={{ xs: '0.7rem', md: '1.1rem' }} className='text-muted' component="div">&copy; Department of EEE, Sylhet Engineering College.</Typography>
            </Box>
            <Box sx={{py: '2px', marginLeft: 1}} style={{ backgroundColor: 'white' }} display="flex" flexDirection="row" justifyContent="center" alignContent="center">
                <BugReportIcon color='tertiary' />
                <Typography variant='body1' alignSelf="center" fontSize={{ xs: '0.6rem', md: '0.8rem' }} sx={{textAlign: 'center', marginLeft: 1}} component="span">For any site related issues, contact: <a href="mailto:ronyeee@sec.ac.bd">ronyeee@sec.ac.bd</a></Typography>
            </Box>
        </Box>
    )
}

export default Footer