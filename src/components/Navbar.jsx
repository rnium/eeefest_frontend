import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink, Link } from 'react-router-dom'

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
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
              <NavLink to="/">
                <MenuItem onClick={handleCloseNavMenu}>
                  Home
                </MenuItem>
              </NavLink>

              <NavLink to="/register">
                <MenuItem onClick={handleCloseNavMenu}>
                  Register
                </MenuItem>
              </NavLink>

              <NavLink to="/line-follower">
                <MenuItem onClick={handleCloseNavMenu}>
                  Line Follower ROBOT
                </MenuItem>
              </NavLink>

              <NavLink to="/poster-presentation">
                <MenuItem onClick={handleCloseNavMenu}>
                  Poster Presentation
                </MenuItem>
              </NavLink>

              <NavLink to="/circuit-master">
                <MenuItem onClick={handleCloseNavMenu}>
                  Circuit Master
                </MenuItem>
              </NavLink>

              <NavLink to="/integreation-bee">
                <MenuItem onClick={handleCloseNavMenu}>
                  Integration Bee
                </MenuItem>
              </NavLink>

              <NavLink to="/gaming">
                <MenuItem onClick={handleCloseNavMenu}>
                  Gaming
                </MenuItem>
              </NavLink>

            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            <Link to="/">
              <img src='/static/images/logo.png' alt="Logo" width="200px" />
            </Link>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>

            <NavLink to="/">
              <Button size='small' className='menubtn' sx={{ marginRight: 2 }}>Home</Button>
            </NavLink>
            <NavLink to="/line-follower">
              <Button size='small' className='menubtn' sx={{ marginRight: 2 }}>Line Follower Robot</Button>
            </NavLink>
            <NavLink to="/poster-presentation">
              <Button size='small' className='menubtn' sx={{ marginRight: 2 }}>Poster Presentation</Button>
            </NavLink>
            <NavLink to="/circuit-master">
              <Button size='small' className='menubtn' sx={{ marginRight: 2 }}>Circuit Master</Button>
            </NavLink>
            <NavLink to="/integreation-bee">
              <Button size='small' className='menubtn' sx={{ marginRight: 2 }}>Integration BEE</Button>
            </NavLink>
            <NavLink to="/gaming">
              <Button size='small' className='menubtn' sx={{ marginRight: 2 }}>Gaming</Button>
            </NavLink>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar