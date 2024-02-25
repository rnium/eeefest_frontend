import React from 'react';
import { Link } from 'react-router-dom';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Fab from '@mui/material/Fab';
import TouchAppIcon from '@mui/icons-material/TouchApp';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import {
  Box, Container, Typography, List, ListItem, ListItemIcon, Grid,
  Card, CardMedia, CardContent, Accordion, AccordionSummary,
  AccordionDetails, Button, Alert, Paper, Fade
} from '@mui/material'

const GamingContest = () => {
  return (
    <Fade in={true} timeout={300}>
      <div className='contest-page'>
        <div className='banner'>
          <img src='static/images/Gaming_Contest.png' />
        </div>
        <Container sx={{ mb: 10 }}>
          <Typography sx={{ mt: 5 }} variant="h5" fontSize={{ md: '1.5rem', xs: '1.2rem' }} textAlign='justify'>
            Immerse yourself in the world of virtual excitement and strategic brilliance with our FIFA Gaming Contest and Chess Tournament. Whether you're a joystick maven or a chess aficionado, this is your chance to compete, have fun, and showcase your gaming prowess. Join us for a day of friendly competition, camaraderie, and the thrill of victory. Ready to make your move? Register now and let the games begin!
          </Typography>
          <Box sx={{ mt: 3 }}>
            <Alert severity="warning" >
              <Typography variant='body1' fontSize={{ xs: '0.8rem', md: '1rem' }} fontWeight="bold">Registration Deadline: 28th Feb, 2024</Typography>
            </Alert>
          </Box>
          <Box sx={{ mt: 7 }}>
            <Grid container spacing={5}>
              <Grid item xs={12} md={6}>
                <Card elevation={3}>
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="250"
                    image="static/images/fifa_banner2.jpg"
                  />
                  <CardContent>
                    <Typography textAlign="center" gutterBottom variant="h5" component="div">
                      FIFA
                    </Typography>
                    <Typography variant='h6' >
                      Prize Money
                    </Typography>
                    <List component="ul" >
                      <ListItem>
                        <ListItemIcon>
                          <EmojiEventsIcon sx={{ fontSize: { xs: '1.5rem', md: '2rem' } }} />
                        </ListItemIcon>
                        <Typography variant='h6' color="textSecondary" fontSize={{ md: '1.3rem', xs: '1rem' }}>
                          Champion: <span className='text-bold'>1000 Tk</span>
                        </Typography>
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <EmojiEventsIcon sx={{ fontSize: { xs: '1.5rem', md: '2rem' } }} />
                        </ListItemIcon>
                        <Typography variant='h6' color="textSecondary" fontSize={{ md: '1.3rem', xs: '1rem' }}>
                          Runner-up: <span className='text-bold'>500 Tk</span>
                        </Typography>
                      </ListItem>
                    </List>
                    <Typography variant='h5' sx={{ mt: 2 }} fontSize={{ md: '1.5rem', xs: '1.2rem' }} textAlign="center">
                      FIFA Registration fee: <span className='text-bold'>100 Tk</span>
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={6}>
                <Card elevation={3}>
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="250"
                    image="static/images/chess_banner.png"
                  />
                  <CardContent>
                    <Typography textAlign="center" gutterBottom variant="h5" component="div">
                      CHESS
                    </Typography>
                    <Typography variant='h6' sx={{ mt: 2 }} >
                      Prize Money
                    </Typography>
                    <List component="ul" >
                      <ListItem>
                        <ListItemIcon>
                          <EmojiEventsIcon sx={{ fontSize: { xs: '1.5rem', md: '2rem' } }} />
                        </ListItemIcon>
                        <Typography variant='h6' color="textSecondary" fontSize={{ md: '1.3rem', xs: '1rem' }}>
                          Champion: <span className='text-bold'>1000 Tk</span>
                        </Typography>
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <EmojiEventsIcon sx={{ fontSize: { xs: '1.5rem', md: '2rem' } }} />
                        </ListItemIcon>
                        <Typography variant='h6' color="textSecondary" fontSize={{ md: '1.3rem', xs: '1rem' }}>
                          Runner Up: <span className='text-bold'>500 Tk</span>
                        </Typography>
                      </ListItem>
                    </List>
                    <Typography variant='h5' sx={{ mt: 1 }} textAlign="center" fontSize={{ md: '1.5rem', xs: '1.2rem' }}>
                      Chess Registration fee: <span className='text-bold'>100 Tk</span>
                    </Typography>

                  </CardContent>
                </Card>
              </Grid>
            </Grid>

            <Box sx={{ mt: 7 }}>
              <Paper sx={{ px: 2, pt: 2, pb: 4 }} style={{ backgroundColor: '#edede9' }} >
                <Typography sx={{ mb: 1 }} variant='h5' color="text.secondary" textAlign="center">FIFA </Typography>
                <Accordion defaultExpanded>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <Typography variant='h6'>Rules</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ol>
                      <li>Players can bring their controller/keyboard. The player must set his own control setup for custom control.</li>
                      <li>The gaming platform is "PC".</li>
                      <li>All players are required to show up at least half an hour before the tournament and report to the organizers to get their desired pc.</li>
                      <li>Players not present at the designated time for any match will be disqualified, the opponent will be the winner at 3-0 scores.</li>
                      <li>One button or two buttons control mode is not allowed.</li>
                      <li>For any difficulties, the player must inform the referee to make any decisions.</li>
                      <li>After finishing the game players have to wait until the referee finishes scoring.</li>
                      <li>Only scores reported by the referee are official.</li>
                    </ol>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                  >
                    <Typography variant='h6'>Gameplay Rules</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ol>
                      <li>Gaming Type will be a knock-out system.</li>
                      <li>Everyone will participate individually.</li>
                      <li>Selecting Tactics are allowed before the match starts but no custom tactics are</li>
                      <li>Custom Formations & editing player position within a formation is not allowed.</li>
                      <li>In the event of a draw, players should use the "Classic" mode for extra time, later Penalty Kicks if the match is still tied.</li>
                      <li>A match can only be paused with the consent of both players.</li>
                      <li>
                        You can't pause unless the game is stopped
                        <ul>
                          <li>If it's a throw-in/out/foul/goal etc.</li>
                          <li>Ball is in your own keeper's possession. If you pause the game intentionally, you may be warned or disqualified at the referee's discretion.</li>
                        </ul>
                      </li>

                      <li>Only any club or international team can be chosen. All-Star teams (like Classic XI,</li>
                      <li>World X1, MLS All-Stars, and Adidas All-Stars) are NOT allowed.</li>
                      <li>Players have to play the whole tournament with the same team taken by the player.</li>
                    </ol>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                  >
                    <Typography variant='h6'>Game Settings</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ol>
                      <li>Settings: Standard settings.</li>
                      <li>Match duration: 10 minutes (5 minutes per half)</li>
                      <li>Game speed: Normal</li>
                      <li>Level: Legendary</li>
                      <li>Stadium: Neutral</li>
                      <li>Camera: Tele Broadcast(all)</li>
                      <li>Only tactical defense is allowed</li>
                      <li>You can choose your preferred controls: Manual, Semi or Assisted</li>
                    </ol>
                  </AccordionDetails>
                </Accordion>
              </Paper>
            </Box>

            <Typography variant='h5' sx={{ mt: 5 }} fontSize={{ md: '1.5rem', xs: '1.2rem' }}>
              For any queries related to Gaming
            </Typography>
            <List component="ul" >
              <ListItem>
                <ListItemIcon>
                  <ContactSupportIcon sx={{ fontSize: '2rem' }} />
                </ListItemIcon>
                <Typography variant='h6' fontSize={{ md: '1.3rem', xs: '1rem' }}>
                  Call: <span className='text-bold'>01711-960676</span> or <span className='text-bold'>01745-216246</span>
                </Typography>
              </ListItem>
            </List>

          </Box>
        </Container>


        <Box className="floatingBtn" >
          <a href="/register">
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

export default GamingContest