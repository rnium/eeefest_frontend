import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import {
    Box, Typography, List, ListItem, ListItemIcon, Button
} from '@mui/material';
import { RiTrophyLine, RiCalendarScheduleLine } from '@remixicon/react';
import { prizemoney_titles } from '@/lib/data/contests';
import ContestPrizes from '../atoms/ContestPrizes';

const ContestDetail = ({ contestData }) => {
    return (
        <>
            <Box sx={{ mt: 4 }}>
                <div className="eventSchedule">
                    <RiCalendarScheduleLine
                        className='icon'
                        size={25}
                    />
                    <Typography fontSize={{ md: '1.3rem', xs: '1rem' }} color="textPrimary" sx={{ marginLeft: 1 }}>Schedule: {contestData.schedule}</Typography>
                </div>
            </Box>
            <ContestPrizes
                contestData={contestData}
                sx={{ mt: 5 }}
            />
            <Typography variant='h5' sx={{ mt: 3 }} fontSize={{ md: '1.5rem', xs: '1.2rem' }}>
                Registration fee: <span className='text-bold'>{contestData.fee.toLocaleString()} Tk</span>
            </Typography>
            {
                contestData.gift && (
                    <Typography variant='h5' sx={{ mt: 2 }} fontSize={{ md: '1.5rem', xs: '1.2rem' }}>
                        Gift : {contestData.gift}
                    </Typography>
                )
            }
            {
                contestData.rulebook_url && (
                    <Box display="flex" justifyContent="center" sx={{ py: 4 }}>
                        <Button variant='contained' target="_blank" href={contestData.rulebook_url}>Download Rule Book</Button>
                    </Box>
                )
            }
            <Typography variant='h5' sx={{ mt: 7 }} fontSize={{ md: '1.5rem', xs: '1.2rem' }}>
                For any queries related to {contestData.name}
            </Typography>
            <List component="ul" >
                {
                    contestData?.helpline?.phone ?
                        <ListItem>
                            <ListItemIcon>
                                <ContactSupportIcon sx={{ fontSize: { xs: '1.5rem', md: '2rem' } }} />
                            </ListItemIcon>
                            <Typography variant='h6' fontSize={{ md: '1.3rem', xs: '1rem' }}>
                                Call:
                                {
                                    contestData?.helpline.phone.map((num, idx) => (
                                        <span className='text-bold' key={idx}>
                                            &nbsp;{num}
                                            {idx < contestData.helpline.phone.length - 1 ? ',' : null}
                                        </span>
                                    ))
                                }
                            </Typography>
                        </ListItem> : null
                }
                {
                    contestData?.helpline?.email ?
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
        </>
    )
}

export default ContestDetail