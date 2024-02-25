import React from 'react';
import { Link } from 'react-router-dom';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Fab from '@mui/material/Fab';
import TouchAppIcon from '@mui/icons-material/TouchApp';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import {
  Box, Container, Typography, List, ListItem, ListItemIcon, Accordion, AccordionSummary,
  AccordionDetails, Button, Alert, Paper, Fade
} from '@mui/material';
import {registration_deadline} from '../data/main_data';

const IntegrationBee = () => {
  return (
    <Fade in={true} timeout={300}>
      <div className='contest-page'>
        <div className='banner'>
          <img src='static/images/Integration_Bee.png' />
        </div>
        <Container sx={{ mb: 10 }}>
          <Typography sx={{ mt: 5 }} variant="h5" textAlign='justify' fontSize={{ md: '1.5rem', xs: '1.2rem' }}>
            This competition is designed to ignite the mathematical curiosity of engineering students as they explore the intricacies of integrals. Participants will face a series of thought-provoking problems, ranging from elementary integrals to more complex challenges that will test their analytical abilities. It's a chance to showcase your prowess in calculus, compete with fellow students, and, most importantly, have a great time embracing the beauty of mathematical integration.
          </Typography>
          <Box sx={{ mt: 3 }}>
            <Alert severity="warning" >
              <Typography variant='body1' fontSize={{ xs: '0.8rem', md: '1rem' }} fontWeight="bold">Registration Deadline: {registration_deadline}</Typography>
            </Alert>
          </Box>
          <Box sx={{ mt: 7 }}>
            <Typography variant='h5' fontSize={{ md: '1.5rem', xs: '1.2rem' }}>
              Total Prize money: <span className='text-bold'>2500 Tk</span>
            </Typography>
            <List component="ul" >
              <ListItem>
                <ListItemIcon>
                  <EmojiEventsIcon sx={{ fontSize: { xs: '1.5rem', md: '2rem' } }} />
                </ListItemIcon>
                <Typography variant='h6' color="textSecondary" fontSize={{ md: '1.3rem', xs: '1rem' }}>
                  Champion: <span className='text-bold'>1500 Tk</span>
                </Typography>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <EmojiEventsIcon sx={{ fontSize: { xs: '1.5rem', md: '2rem' } }} />
                </ListItemIcon>
                <Typography variant='h6' color="textSecondary" fontSize={{ md: '1.3rem', xs: '1rem' }}>
                  Runner-up: <span className='text-bold'>1000 Tk</span>
                </Typography>
              </ListItem>
            </List>
            <Typography variant='h5' sx={{ mt: 2 }} fontSize={{ md: '1.5rem', xs: '1.2rem' }}>
              Registration fee: <span className='text-bold'>100 Tk</span>
            </Typography>
            <Typography variant='h5' sx={{ mt: 5 }} fontSize={{ md: '1.5rem', xs: '1.2rem' }}>
              For any queries related to Integration Bee
            </Typography>
            <List component="ul" >
              <ListItem>
                <ListItemIcon>
                  <ContactSupportIcon sx={{ fontSize: '2rem' }} />
                </ListItemIcon>
                <Typography variant='h6' fontSize={{ md: '1.3rem', xs: '1rem' }}>
                  Call: <span className='text-bold'>01783-201798</span> or <span className='text-bold'>01770-274707</span>
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
                      <li>The contest will consist of a set of integration problems of varying difficulty. The problems will be released at the start of the contest.</li>
                      <li>The contest will last for a specified duration. All solutions must be submitted within the time frame.</li>
                      <li>Solutions must be submitted in the form of clear handwritten scans. Each solution must include all working out, not just the final answer.</li>
                      <li>Points will be awarded based on the correctness of the solution and the clarity of the working out. Bonus points may be awarded for particularly elegant or efficient solutions.</li>
                      <li>The contest organizers will judge the solutions. Their decision will be final.</li>
                      <li>Any form of plagiarism will result in immediate disqualification. Participants are expected to uphold the highest standards of academic integrity.</li>
                      <li>All participants are expected to behave respectfully and professionally. Any form of misconduct may result in disqualification.</li>
                    </ol>
                  </AccordionDetails>
                </Accordion>
              </Paper>
            </Box>
          </Box>
        </Container>


        <Box className="floatingBtn" >
          <a href="/register?contest=integration">
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

export default IntegrationBee