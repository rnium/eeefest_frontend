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

const PosterPresentation = () => {
  return (
    <Fade in={true} timeout={300}>
      <div className='contest-page'>
        <div className='banner'>
          <img src='static/images/Poster_Presentation.png' />
        </div>
        <Container sx={{ mb: 10 }}>
          <Typography sx={{ mt: 7 }} variant="h5" textAlign='justify' fontSize={{ md: '1.5rem', xs: '1.2rem' }}>Posters are often used to share information and are an important part of many conferences, seminars and exhibitions. They may be used to present quite complex material, and so it is important that the information on them is well laid out, legible and attractively presented.</Typography>
          <Typography sx={{ mt: 7 }} variant="h5" fontSize={{ md: '1.5rem', xs: '1.2rem' }}>
            The main idea of Poster Presentation 2024 should include any of the following sections
            <Typography variant='h5' fontWeight="bold" fontSize={{ md: '1.5rem', xs: '1.2rem' }}>
              - Universal topics
            </Typography>
          </Typography>
          <Box sx={{ mt: 3 }}>
            <Alert severity="warning" >
              <Typography variant='body1' fontSize={{ xs: '0.8rem', md: '1rem' }} fontWeight="bold">Registration Deadline: {registration_deadline}</Typography>
            </Alert>
          </Box>
          <Box sx={{ mt: 7 }}>
            <Typography variant='h5' fontSize={{ md: '1.5rem', xs: '1.2rem' }}>
              Champion Prize Money: <span className='text-bold'>2,500 Tk</span>
            </Typography>
            <Typography variant='h5' sx={{ mt: 2 }} fontSize={{ md: '1.5rem', xs: '1.2rem' }}>
              Registration fee: <span className='text-bold'>200 Tk</span>
            </Typography>
            <Box display="flex" justifyContent="center" sx={{ py: 4 }}>
              <Button variant='contained' target="_blank" href='assets/Poster_Presentation-RuleBook.pdf'>Download Rule Book</Button>
            </Box>
            <Typography variant='h5' sx={{ mt: 5 }} fontSize={{ md: '1.5rem', xs: '1.2rem' }}>
              For any queries related to Poster Presentation
            </Typography>
            <List component="ul" >
              <ListItem>
                <ListItemIcon>
                  <ContactSupportIcon sx={{ fontSize: '2rem' }} />
                </ListItemIcon>
                <Typography variant='h6' fontSize={{ md: '1.3rem', xs: '1rem' }}>
                  Call: <span className='text-bold'>01734-704526</span> or <span className='text-bold'>01625-045135</span>
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
                      <li>Only university students are eligible to participate in this segment</li>
                      <li>Each team can contain maximum 3 members.</li>
                      <li>Topic of poster should be given section</li>
                      <li>Participants have to submit a rough sketch of poster briefly discussing the subject of the poster through email</li>
                      <li>From the submitted rough sketch top 40 teams will be called for their final poster presentation in front of audience and judges • The poster must contain a title.</li>
                      <li>There is no need to use the logo of “TECHNOVENTURE 3.0”</li>
                      <li>Only the full name of the person or persons of a team should be included in the poster.</li>
                      <li>Poster size should be 2.5’ X 4’ (width X height).</li>
                      <li>Poster material: PVC banner</li>
                      <li>Purpose and objective of the poster</li>
                      <li>Description of the problem and target outcomes (should not be more than three to five sentences – can be depicted in a logical model).</li>
                      <li>At least one graphic (can be photograph) illustrating the program’s process, who is involved or how to program works</li>
                      <li>Lessons learned so far (if the program is currently underway)</li>
                      <li>Implications for future action (where will they lead?)</li>
                      <li>Source of funding for the program</li>
                      <li>Participants can use their thesis topic as the subject of poster</li>
                      <li>Sources and references of the data should be provided in the poster</li>
                      <li>The competition will run for 5 hours</li>
                      <li>The posters will be hanged according to the registration serial</li>
                      <li>All the member/members of the team must be present during the judgment</li>
                    </ol>
                  </AccordionDetails>
                </Accordion>
              </Paper>
            </Box>
          </Box>
        </Container>


        <Box className="floatingBtn" >
          <a href="/register?contest=poster">
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

export default PosterPresentation;