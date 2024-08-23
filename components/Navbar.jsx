'use client'

import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import Image from 'next/image';

import logo from '@/public/static/images/logo.png'

const Navbar = () => {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    return (
        <Box sx={{ flexGrow: 1 }} className="navbar">
            <AppBar position="static" color='transparent'>
                <Toolbar sx={{ py: 2 }}>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            <Link href="/">
                                <MenuItem onClick={handleCloseNavMenu}>
                                    Home
                                </MenuItem>
                            </Link>

                            <Link href="/register">
                                <MenuItem onClick={handleCloseNavMenu}>
                                    Register
                                </MenuItem>
                            </Link>

                            <Link href="/line-follower">
                                <MenuItem onClick={handleCloseNavMenu}>
                                    Line Follower ROBOT
                                </MenuItem>
                            </Link>

                            <Link href="/poster-presentation">
                                <MenuItem onClick={handleCloseNavMenu}>
                                    Poster Presentation
                                </MenuItem>
                            </Link>

                            <Link href="/circuit-master">
                                <MenuItem onClick={handleCloseNavMenu}>
                                    Circuit Master
                                </MenuItem>
                            </Link>

                            <Link href="/integreation-bee">
                                <MenuItem onClick={handleCloseNavMenu}>
                                    Integration Bee
                                </MenuItem>
                            </Link>

                            <Link href="/gaming">
                                <MenuItem onClick={handleCloseNavMenu}>
                                    Gaming
                                </MenuItem>
                            </Link>

                        </Menu>
                    </Box>
                    <Box sx={{ flexGrow: 1 }}>
                        <Link href="/">
                            <Image src={logo} width={200} alt="Logo" />
                        </Link>
                    </Box>
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>

                        <Link href="/">
                            <Button size='small' className='menubtn' sx={{ marginRight: 2 }}>Home</Button>
                        </Link>
                        <Link href="/line-follower">
                            <Button size='small' className='menubtn' sx={{ marginRight: 2 }}>Line Follower Robot</Button>
                        </Link>
                        <Link href="/poster-presentation">
                            <Button size='small' className='menubtn' sx={{ marginRight: 2 }}>Poster Presentation</Button>
                        </Link>
                        <Link href="/circuit-master">
                            <Button size='small' className='menubtn' sx={{ marginRight: 2 }}>Circuit Master</Button>
                        </Link>
                        <Link href="/integreation-bee">
                            <Button size='small' className='menubtn' sx={{ marginRight: 2 }}>Integration BEE</Button>
                        </Link>
                        <Link href="/gaming">
                            <Button size='small' className='menubtn' sx={{ marginRight: 2 }}>Gaming</Button>
                        </Link>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Navbar