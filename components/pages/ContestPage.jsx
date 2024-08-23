import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Fab from '@mui/material/Fab';
import TouchAppIcon from '@mui/icons-material/TouchApp';
import {
    Box, Container, Typography, Grid, List, ListItem, ListItemIcon, Button, Alert
} from '@mui/material';
import { registration_deadline } from '@/lib/data/basic_info';
import Image from 'next/image';
import ContestRuleAccordions from '../molecules/ContestRuleAccordions';
import ContestCard from '../molecules/ContestCard';
import ContestDetail from '../molecules/ContestDetail';


const ContestPage = ({ contestData, contestRules }) => {
    return (
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
                <Alert severity="warning" sx={{ mt: 3 }} >
                    <Typography variant='body1' fontSize={{ xs: '0.8rem', md: '1rem' }} fontWeight="bold">Registration Deadline: {registration_deadline}</Typography>
                </Alert>
                {
                    contestData?.groupType ?
                        <Box
                            sx={{mt: 5}}
                        >
                            <Grid container spacing={5}>
                                {
                                    contestData.contests.map((contest, idx) => (
                                        <Grid
                                            key={idx}
                                            item
                                            xs={12}
                                            md={6}
                                        >
                                            <ContestCard
                                                contestData={contest}
                                            />
                                        </Grid>
                                    ))
                                }
                            </Grid>
                        </Box>
                        :
                        <ContestDetail contestData={contestData} />
                }
                <ContestRuleAccordions contestRules={contestRules} sx={{ mt: 7 }} />
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
    )
}

export default ContestPage