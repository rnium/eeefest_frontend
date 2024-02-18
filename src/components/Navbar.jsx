import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
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
              <MenuItem onClick={handleCloseNavMenu}>
                <NavLink to="/">Home</NavLink>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <NavLink to="/register">Register</NavLink>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <NavLink to="/gallery">Gallery</NavLink>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <NavLink to="/contact">Contact</NavLink>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <NavLink to="/sponsors">Sponsors</NavLink>
              </MenuItem>
            </Menu>
          </Box>
          <Box sx={{flexGrow: 1}}>
            <img src='images/logo.png' width="200px" />
          </Box>
          <Box sx={{ flexGrow: 1, display: {xs: 'none', md: 'flex'} }}>
            
            <NavLink to="/">
              <Button className='menubtn' sx={{ marginRight: 2 }}>Home</Button>
            </NavLink>
            <NavLink to="/register">
              <Button className='menubtn' sx={{ marginRight: 2 }}>Register</Button>
            </NavLink>
            <NavLink to="/gallery">
              <Button className='menubtn' sx={{ marginRight: 2 }}>Gallery</Button>
            </NavLink>
            <NavLink to="/contact">
              <Button className='menubtn' sx={{ marginRight: 2 }}>Contact</Button>
            </NavLink>
            <NavLink to="/sponsors">
              <Button className='menubtn' sx={{ marginRight: 2 }}>Sponsors</Button>
            </NavLink>
          </Box>
          <Box sx={{display: {xs: 'none', md: 'block'}}}>
            <Button  color="primary" variant='contained' startIcon={<FavoriteIcon />}>Be A Sponsor</Button>
          </Box>
          {/* <Box sx={{display: {xs: 'block', md: 'none'}}}>
            <Button  color="primary" variant='contained'>Sponsor</Button>
          </Box> */}
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar