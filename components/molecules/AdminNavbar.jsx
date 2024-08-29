import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {
    Avatar
} from '@mui/material';
import { useUser } from '@/hooks/useUser';

export default function AdminNavbar() {
    const { userInfo } = useUser();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar sx={{ py: { xs: 3, md: 1 } }}>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2, display: { xs: 'none', md: 'block' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} display={{ xs: 'none', md: 'block' }} >
                        Technoventure3.0 Admin Console
                    </Typography>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} display={{ xs: 'block', md: 'none' }} >
                        Admin Console
                    </Typography>
                    <Box className="flex-row align-items-center" sx={{ marginRight: 3 }} >
                        <Avatar sx={{ marginRight: 1 }} />
                        <Typography variant='body1'>{userInfo.username}</Typography>
                    </Box>
                    <Button color="inherit" variant='outlined'>Logout</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}