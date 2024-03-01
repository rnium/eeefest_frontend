import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Fab from '@mui/material/Fab';
import TouchAppIcon from '@mui/icons-material/TouchApp';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import {
  Box, Container, Typography, List, ListItem, ListItemIcon, Accordion, AccordionSummary,
  AccordionDetails, Button, Alert, Paper, Fade
} from '@mui/material';
import {registration_deadline} from '../data/main_data';

const CircuitSolving = () => {
  return (
    <Fade in={true} timeout={300}>
      <div className='contest-page'>
        <div className='banner'>
          <img src='/static/images/Circuit_master.png' />
        </div>
        <Container sx={{ mb: 10 }}>
          <Typography sx={{ mt: 5 }} variant="h5" textAlign='justify' fontSize={{ md: '1.5rem', xs: '1.2rem' }}>
            In this contest, participants will be presented with a variety of electrical circuits. The challenge is to analyze these circuits and solve for unknowns such as voltages, currents, and power. This will test and enhance your understanding of circuit theory, network analysis, and electronics.
          </Typography>
          <Box sx={{ mt: 3 }}>
            <Alert severity="warning" >
              <Typography variant='body1' fontSize={{ xs: '0.8rem', md: '1rem' }} fontWeight="bold">Registration Deadline: {registration_deadline}</Typography>
            </Alert>
          </Box>
          <Box sx={{ mt: 7 }}>
            <Typography variant='h5' fontSize={{ md: '1.5rem', xs: '1.2rem' }}>
              Champion Prize Money: <span className='text-bold'>1,500 Tk</span>
            </Typography>
            <Typography variant='h5' sx={{ mt: 2 }} fontSize={{ md: '1.5rem', xs: '1.2rem' }}>
              Registration fee: <span className='text-bold'>100 Tk</span>
            </Typography>
            <Typography variant='h5' sx={{ mt: 5 }} fontSize={{ md: '1.5rem', xs: '1.2rem' }}>
              For any queries related to Circuit Master
            </Typography>
            <List component="ul" >
              <ListItem>
                <ListItemIcon>
                  <ContactSupportIcon sx={{ fontSize: '2rem' }} />
                </ListItemIcon>
                <Typography variant='h6' fontSize={{ md: '1.3rem', xs: '1rem' }}>
                  Call: <span className='text-bold'>01916-381989</span> or <span className='text-bold'>01711-960676</span>
                </Typography>
              </ListItem>
            </List>
            <Box sx={{ mt: 7 }}>
              <Paper sx={{ px: 2, py: 5 }} style={{ backgroundColor: '#edede9' }} >
                <Accordion defaultExpanded>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                  >
                    <Typography variant='h6'>Event Rules</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ol>
                      <li>Only intra campus students are eligible to participate in this segment</li>
                      <li>Solutions will be judged by a panel of qualified judges.</li>
                      <li>Judges' decisions are final.</li>
                      <li>Any form of cheating or plagiarism will result in immediate disqualification.</li>
                      <li>Respectful and sportsmanlike conduct is expected from all participants.</li>
                      <li>Teams may raise concerns or disputes with the judges, but it must be done in a respectful and timely manner.</li>
                    </ol>
                  </AccordionDetails>
                </Accordion>
              </Paper>
            </Box>
          </Box>
        </Container>


        <Box className="floatingBtn" >
          <a href="/register?contest=circuit-solve">
            <Fab color='primary' className='inner' variant="extended" aria-label="like">
              <TouchAppIcon sx={{ marginRight: 1 }} />
              Register Now
            </Fab>
          </a>
        </Box>
      </div>
    </Fade>
  )
}

export default CircuitSolving