import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import {
    Box, Typography, List, ListItem, ListItemIcon, Button
} from '@mui/material';
import { RiTrophyLine } from '@remixicon/react';
import { prizemoney_titles } from '@/lib/data/contests';

const ContestPrizes = ({ contestData, sx }) => {
    return (
        <Box sx={{ ...sx }}>
            {
                contestData.prize_money.length === 1 ?
                    <Typography variant='h5' fontSize={{ md: '1.5rem', xs: '1.2rem' }}>
                        Champion Prize money:&nbsp;
                        <span className='text-bold'>
                            {contestData.prize_money.reduce((acc, curr) => acc + curr).toLocaleString('en-In')} Tk
                        </span>
                    </Typography>
                    :
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
                                    <ListItem key={idx}>
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
                                            {prizemoney_titles[idx][contestData.prize_money.length]}: <span className='text-bold'>{amount.toLocaleString()} Tk</span>
                                        </Typography>
                                    </ListItem>
                                ))
                            }
                        </List>
                    </>
            }
        </Box>
    )
}

export default ContestPrizes