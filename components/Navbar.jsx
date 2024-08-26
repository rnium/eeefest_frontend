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
import { usePathname } from 'next/navigation';
import { contestPages } from '@/lib/data/contests';

import logo from '@/public/static/images/logo.png';

const pageList = [
    {
        title: 'Home',
        url: '/'
    },
    ...Object.keys(contestPages).map(key => (contestPages[key]))
]

const Navbar = () => {
    const pathname = usePathname();
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
                <Toolbar sx={{ py: 3 }}>
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
                            {
                                pageList.map((page, idx) => (
                                    <Link href={page.url} key={idx}>
                                        <MenuItem onClick={handleCloseNavMenu}>
                                            {page.title}
                                        </MenuItem>
                                    </Link>
                                ))
                            }
                        </Menu>
                    </Box>
                    <Box sx={{ flexGrow: 1 }}>
                        <Link href="/">
                            <Image src={logo} width={200} alt="Logo" />
                        </Link>
                    </Box>
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        {
                            pageList.map((page, idx) => (
                                <Link href={page.url} key={idx}>
                                    <Button
                                        size='small'
                                        sx={{ marginRight: 2 }}
                                        className={pathname === page.url ? 'navbtn active' : 'navbtn'}
                                    >
                                        {page.title}
                                    </Button>
                                </Link>
                            ))
                        }
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Navbar