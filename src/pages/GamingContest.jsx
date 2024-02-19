import React from 'react';
import { Link } from 'react-router-dom';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Fab from '@mui/material/Fab';
import TouchAppIcon from '@mui/icons-material/TouchApp';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import {
  Box, Container, Typography, List, ListItem, ListItemIcon, Accordion, AccordionSummary,
  AccordionDetails, Button, AccordionActions, Paper
} from '@mui/material'

const GamingContest = () => {
  return (
    <div className='contest-page'>
      <div className='banner'>
        <img src='images/Gaming_Contest.png' />
      </div>
      <Container sx={{ mb: 10 }}>
        <Typography sx={{ mt: 5 }} variant="h5" textAlign='justify'>
          Immerse yourself in the world of virtual excitement and strategic brilliance with our FIFA Gaming Contest and Chess Tournament. Whether you're a joystick maven or a chess aficionado, this is your chance to compete, have fun, and showcase your gaming prowess. Join us for a day of friendly competition, camaraderie, and the thrill of victory. Ready to make your move? Register now and let the games begin!
        </Typography>
        <Box sx={{ mt: 7 }}>
          <Typography variant='h5' >
            Fifa Prizes
          </Typography>
          <List component="ul" >
            <ListItem>
              <ListItemIcon>
                <EmojiEventsIcon sx={{ fontSize: '2rem' }} />
              </ListItemIcon>
              <Typography variant='h6' color="textSecondary">
                Champion: <span className='text-bold'>1000 Tk</span>
              </Typography>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <EmojiEventsIcon sx={{ fontSize: '2rem' }} />
              </ListItemIcon>
              <Typography variant='h6' color="textSecondary">
                Runner-up: <span className='text-bold'>Joystick</span>
              </Typography>
            </ListItem>
          </List>
          <Typography variant='h5' sx={{ mt: 2 }}>
            FIFA Registration fee: <span className='text-bold'>100 Tk</span>
          </Typography>
          <Typography variant='h5' sx={{ mt: 7 }} >
            Chess Prizes
          </Typography>
          <List component="ul" >
            <ListItem>
              <ListItemIcon>
                <EmojiEventsIcon sx={{ fontSize: '2rem' }} />
              </ListItemIcon>
              <Typography variant='h6' color="textSecondary">
                Champion: <span className='text-bold'>1000 Tk</span>
              </Typography>
            </ListItem>
          </List>
          <Typography variant='h5' sx={{ mt: 1 }}>
            Chess Registration fee: <span className='text-bold'>100 Tk</span>
          </Typography>
          <Typography variant='h5' sx={{ mt: 5 }}>
            For any queries related to Gaming
          </Typography>
          <List component="ul" >
            <ListItem>
              <ListItemIcon>
                <ContactSupportIcon sx={{ fontSize: '2rem' }} />
              </ListItemIcon>
              <Typography variant='h6'>
                Call: <span className='text-bold'>01711-960676</span> or <span className='text-bold'>01745-216246</span>
              </Typography>
            </ListItem>
          </List>
        </Box>
      </Container>


      <Box className="floatingBtn" >
        <Link to="/register">
          <Fab color='primary' className='inner' variant="extended" aria-label="like">
            <TouchAppIcon sx={{ marginRight: 1 }} />
            Register Now
          </Fab>
        </Link>
      </Box>
    </div>
  )
}

export default GamingContest