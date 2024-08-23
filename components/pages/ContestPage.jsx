import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Fab from '@mui/material/Fab';
import TouchAppIcon from '@mui/icons-material/TouchApp';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import {
    Box, Container, Typography, List, ListItem, ListItemIcon, Accordion, AccordionSummary,
    AccordionDetails, Button, Alert, Paper, Fade
} from '@mui/material';
import { registration_deadline } from '@/lib/data/basic_info';
import { prizemoney_titles } from '@/lib/data/contests';
import Image from 'next/image';
import RuleItem from '../micro/RuleItem';
import { RiTrophyLine } from '@remixicon/react'


const ContestPage = ({ contestData, contestRules }) => {
    return (
        <Fade in={true} timeout={300}>
            <div className='contest-page'>
                <div style={{ width: '100%' }}>
                    <Image
                        src={contestData.banner}
                        layout='responsive'
                        placeholder='blur'
                        priority
                    />
                </div>
                <Container sx={{ mb: 10 }}>
                    <Typography sx={{ mt: 5 }} variant="h5" fontSize={{ md: '1.5rem', xs: '1.2rem' }} textAlign="justify">
                        {contestData.description}
                    </Typography>
                    <Box sx={{ mt: 2 }}>
                        <div className="eventSchedule">
                            <i class='bx bx-time-five' ></i>
                            <Typography fontSize={{ md: '1.3rem', xs: '1rem' }} color="textPrimary" sx={{ marginLeft: 1 }}>Schedule: {contestData.schedule}</Typography>
                        </div>
                        <Alert severity="warning" sx={{ mt: 3 }} >
                            <Typography variant='body1' fontSize={{ xs: '0.8rem', md: '1rem' }} fontWeight="bold">Registration Deadline: {registration_deadline}</Typography>
                        </Alert>
                    </Box>
                    <Box sx={{ mt: 5 }}>
                        {
                            contestData.prize_money.length === 1 ?
                                null :
                                <>
                                    <Typography variant='h5' fontSize={{ md: '1.5rem', xs: '1.2rem' }}>
                                        Total Prize money:&nbsp;
                                        <span className='text-bold'>
                                            {contestData.prize_money.reduce((acc, curr) => acc + curr).toLocaleString('en-In')} Tk
                                        </span>
                                    </Typography>
                                    <List component="ul" >
                                        {
                                            contestData.prize_money.map((amount, idx) => (
                                                <ListItem >
                                                    <ListItemIcon
                                                        sx={{ display: { xs: 'none', md: 'block' } }}
                                                        marginRight={0}
                                                    >
                                                        <RiTrophyLine
                                                            size={30}
                                                        />
                                                    </ListItemIcon>
                                                    <ListItemIcon
                                                        sx={{ display: { xs: 'block', md: 'none' } }}
                                                    >
                                                        <RiTrophyLine
                                                            size={20}
                                                        />
                                                    </ListItemIcon>
                                                    <Typography variant='h6' color="textSecondary" fontSize={{ md: '1.3rem', xs: '1rem' }}>
                                                        {prizemoney_titles[idx]}: <span className='text-bold'>{amount.toLocaleString()} Tk</span>
                                                    </Typography>
                                                </ListItem>
                                            ))
                                        }
                                    </List>
                                </>
                        }
                        <Typography variant='h5' sx={{ mt: 5 }} fontSize={{ md: '1.5rem', xs: '1.2rem' }}>
                            Registration fee: <span className='text-bold'>{contestData.fee.toLocaleString()} Tk</span>
                        </Typography>
                        {
                            contestData.gift && (
                                <Typography variant='h5' sx={{ mt: 2 }} fontSize={{ md: '1.5rem', xs: '1.2rem' }}>
                                    Gift : {contestData.gift}
                                </Typography>
                            )
                        }
                        <Box display="flex" justifyContent="center" sx={{ py: 4 }}>
                            <Button variant='contained' target="_blank" href={contestData.rulebook_url}>Download Rule Book</Button>
                        </Box>
                        <Typography variant='h5' sx={{ mt: 7 }} fontSize={{ md: '1.5rem', xs: '1.2rem' }}>
                            For any queries related to LFR
                        </Typography>
                        <List component="ul" >
                            {
                                contestData?.helpline.phone ?
                                    <ListItem>
                                        <ListItemIcon>
                                            <ContactSupportIcon sx={{ fontSize: { xs: '1.5rem', md: '2rem' } }} />
                                        </ListItemIcon>
                                        <Typography variant='h6' fontSize={{ md: '1.3rem', xs: '1rem' }}>
                                            Call:
                                            {
                                                contestData?.helpline.phone.map((num, idx) => (
                                                    <span className='text-bold'>
                                                        &nbsp;+8801710-737663
                                                        {idx < contestData.helpline.phone.length - 1 ? ',' : null}
                                                    </span>
                                                ))
                                            }
                                        </Typography>
                                    </ListItem> : null
                            }
                            {
                                contestData?.helpline.email ?
                                    <ListItem>
                                        <ListItemIcon>
                                            <ContactSupportIcon sx={{ fontSize: { xs: '1.5rem', md: '2rem' } }} />
                                        </ListItemIcon>
                                        <Typography variant='h6' fontSize={{ md: '1.3rem', xs: '1rem' }}>
                                            Email: <span className='text-bold'>{contestData?.helpline.email}</span>
                                        </Typography>
                                    </ListItem> : null
                            }
                        </List>
                        <Box sx={{ mt: 7 }}>
                            <Paper sx={{ px: 2, py: 5 }} style={{ backgroundColor: '#edede9' }} >
                                {
                                    contestRules.map((ruleSection, idx) => (
                                        <Accordion
                                            key={idx}
                                            defaultExpanded={idx < 2}
                                        >
                                            <AccordionSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel3-content"
                                                id="panel3-header"
                                            >
                                                <Typography variant='h6'>{ruleSection.title}</Typography>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                {
                                                    ruleSection?.image_type ?
                                                        <img src='/static/images/lfr_track.png' width="100%" alt='LFR Track' /> :
                                                        <ol>
                                                            {
                                                                ruleSection.rules.map((rule, idx) => (
                                                                    <li
                                                                        key={idx}
                                                                    >
                                                                        {
                                                                            typeof (rule) === 'string' ?
                                                                                <RuleItem
                                                                                    rule={rule}
                                                                                />
                                                                                :
                                                                                <>
                                                                                    <RuleItem
                                                                                        rule={rule.main}
                                                                                    />
                                                                                    <ul>
                                                                                        {
                                                                                            rule.sub.map((sub_rule, idx) => (
                                                                                                <RuleItem
                                                                                                    key={idx}
                                                                                                    rule={sub_rule}
                                                                                                    listItem
                                                                                                />
                                                                                            ))
                                                                                        }
                                                                                    </ul>
                                                                                </>
                                                                        }
                                                                    </li>
                                                                ))
                                                            }
                                                        </ol>
                                                }
                                            </AccordionDetails>
                                        </Accordion>
                                    ))
                                }

                            </Paper>
                        </Box>
                    </Box>
                </Container>


                <Box className="floatingBtn" >
                    <a href="/register?contest=lfr">
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

export default ContestPage