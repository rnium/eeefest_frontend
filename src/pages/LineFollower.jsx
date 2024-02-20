import React from 'react'
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

const LineFollower = () => {
  return (
    <div className='contest-page'>
      <div className='banner'>
        <img src='images/Line_Follower_Robot.png' />
      </div>
      <Container sx={{ mb: 10 }}>
        <Typography sx={{ mt: 5 }} variant="h5" fontSize={{md: '1.5rem', xs: '1.2rem'}} textAlign="justify">
          Line Follower Robot competition in Technoventure 3.0 the robot must be able to follow a black line on white surface or vice versa. It is an autonomous robot which is able to make decision for complete the track on a surface.
        </Typography>
        <Box sx={{ mt: 5 }}>
          <Typography variant='h5' fontSize={{md: '1.5rem', xs: '1.2rem'}}>
            Total Prize money: <span className='text-bold'>30,000 Tk</span>
          </Typography>
          <List component="ul" >
            <ListItem>
              <ListItemIcon>
                <EmojiEventsIcon sx={{ fontSize: {xs: '1.5rem', md: '2rem'} }} />
              </ListItemIcon>
              <Typography variant='h6' color="textSecondary" fontSize={{md: '1.3rem', xs: '1rem'}}>
                Champion: <span className='text-bold'>15,000 Tk</span>
              </Typography>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <EmojiEventsIcon sx={{ fontSize: {xs: '1.5rem', md: '2rem'} }} />
              </ListItemIcon>
              <Typography variant='h6' color="textSecondary" fontSize={{md: '1.3rem', xs: '1rem'}}>
                1st Runner-up: <span className='text-bold'>10,000 Tk</span>
              </Typography>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <EmojiEventsIcon sx={{ fontSize: {xs: '1.5rem', md: '2rem'} }} />
              </ListItemIcon>
              <Typography variant='h6' color="textSecondary" fontSize={{md: '1.3rem', xs: '1rem'}}>
                2nd Runner-up: <span className='text-bold'>5,000 Tk</span>
              </Typography>
            </ListItem>
          </List>
          <Typography variant='h5' sx={{ mt: 5 }} fontSize={{md: '1.5rem', xs: '1.2rem'}}>
            Registration fee: <span className='text-bold'>1200 Tk</span>
          </Typography>
          <Typography variant='h5' sx={{ mt: 2 }} fontSize={{md: '1.5rem', xs: '1.2rem'}}>
            Gift : T-shirt, Certificate, Lunch Coupon
          </Typography>
          <Box display="flex" justifyContent="center" sx={{py:4}}>
            <Button variant='contained' target="_blank" href='assets/LineFollower_RuleBook.pdf'>Download Rule Book</Button>
          </Box>
          <Typography variant='h5' sx={{ mt: 7 }} fontSize={{md: '1.5rem', xs: '1.2rem'}}>
            For any queries related to LFR
          </Typography>
          <List component="ul" >
            <ListItem>
              <ListItemIcon>
                <ContactSupportIcon sx={{ fontSize: {xs: '1.5rem', md: '2rem'} }} />
              </ListItemIcon>
              <Typography variant='h6' fontSize={{md: '1.3rem', xs: '1rem'}}>
                Call: <span className='text-bold'>+8801781-482257</span> or <span className='text-bold'>+8801829-263221</span>
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
                  <Typography variant='h6'>Eligibility</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <ol>
                    <li>The competition is open to all the students of college and universities.</li>
                    <li>
                      Participants may participate individually or as a team. Please note the following requirements:
                      <ul>
                        <li>Teams can be of 1 - 3 members. Additional members are allowed, but must pay an extra fee.</li>
                      </ul>
                    </li>
                    <li>The competition is open to all the students of college and universities.</li>
                    <li>Each participant, whether individual or a team, must give Team Name.</li>
                    <li>Team members can be from different institutions.</li>
                    <li>Participants must be enrolled as a current student of any university / college / school in Bangladesh.</li>
                  </ol>
                </AccordionDetails>
              </Accordion>
              <Accordion defaultExpanded>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3-content"
                  id="panel3-header"
                >
                  <Typography variant='h6'>General Rules</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <ol>
                    <li>All the participating teams must submit their robot to the organizing committee, thirty minutes before the start of the competition and only one member from the team would be allowed to operate the robot on track.</li>
                    <li>Robots must have dedicated on-board power supply and no power supply would be provided from the organizing committee to operate the robot on track.</li>
                    <li>The robot must be autonomous and no remote control is allowed.	 	</li>
                    <li>Points will be awarded only if the robot travels through the whole path of the checkpoint and crosses the checkpoint skipping none. 	</li>
                    <li>Touching the bot during run-time will count as restart. Restart is a must in case of a line loss. 	</li>
                    <li>A maximum of 5 restarts will be allowed.</li>
                    <li>The tournament is comprised of two phases:
                      <ul>
                        <li>a) Eliminator round</li>
                        <li>b) Final round</li>
                      </ul>
                    </li>

                    <li>The winning team is declared based on point.</li>
                    <li>The organizers reserve the right to change the rules as they deem fit.</li>
                    <li>The judges can ask for an explanation of any mechanism on the robot and there would be an immediate disqualification of defaulters of any kind.</li>
                    <li>Judges decision will be final.</li>
                  </ol>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3-content"
                  id="panel3-header"
                >
                  <Typography variant='h6'>An Overview of The Track</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <ol>
                    <li>The color of the line in the track of this tournament can be white in a black background or black in a white background. Line width will be 3 cm.</li>
                    <li>There can be discontinuity.</li>
                    <li>There can be loops in the track.</li>
                    <li>There can be a bridge in the track, whose upward and downward ramp would not be more than 25 degree.</li>
                    <li>There can be acute angles which can be 30-150 degree.</li>
                    <li>No wall or object will be present in the track.</li>
                  </ol>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3-content"
                  id="panel3-header"
                >
                  <Typography variant='h6'>Game Play</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <ol>
                    <li>The robot will be placed at a pre-assigned starting point on each stage and may be started by hand when directed by the judge.</li>
                    <li>The bot has to start from the indicated starting point and reach the end point following line. End of task is indicated by reaching the end point.	 	</li>
                    <li>Robot must be able to operate under any lighting conditions. (Team should take necessary measures to isolate the sensors from external lighting like camera flash)</li>
                    <li>Any robot that loses the line must restart from the previous check point. In this case the timer will remain running during restart and a penalty will be pointed.	 	</li>
                    <li>After submitting the robot and during competition time any change of hardware and software is not allowed After qualifying round, only the qualified teams can perform in the final round.	</li>
                    <li>There is no option to skip any task.</li>
                    <li>Teams will be given maximum 5 minutes in the qualifying round and the Robot can take maximum 5 restarts in these 5 minutes. 	</li>
                    <li>Teams will be given maximum 8 minutes in the final round and the Robot can take maximum 5 restarts in these 8 minutes.</li>
                    <li>Timer will be running if a robot needs restart.</li>
                  </ol>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3-content"
                  id="panel3-header"
                >
                  <Typography variant='h6'>Caution</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <ol>
                    <li>If team is found guilty by the following acts would lead to be disqualified :</li>
                    <ul>
                      <li>Showing disrespect to other teams and competitors.</li>
                      <li>Showing disrespect to security rules.</li>
                      <li>Showing disrespect to competition judges.</li>
                    </ul>
                    <li>The authority reserves the right to change the rules in that case will be pre-notified and will be applicable to all teams.</li>
                    <li>Authority won’t take responsibility for any accidents caused by the team 	members or their robots.</li>
                  </ol>
                </AccordionDetails>
              </Accordion>

            </Paper>
          </Box>
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

export default LineFollower