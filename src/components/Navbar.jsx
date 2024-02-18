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
              <MenuItem>
                <NavLink to="/home">Home</NavLink>
              </MenuItem>
              <MenuItem>
                <NavLink to="/gallery">Gallery</NavLink>
              </MenuItem>
              <MenuItem>
                <NavLink to="/contact">Contact</NavLink>
              </MenuItem>
              <MenuItem>
                <NavLink to="/sponsors">Sponsors</NavLink>
              </MenuItem>
            </Menu>
          </Box>
          <Box sx={{flexGrow: 1}}>
            <img src='images/logo.png' width="200px" />
          </Box>
          <Box sx={{ flexGrow: 1, display: {xs: 'none', md: 'flex'} }}>
            <Button className='menubtn' sx={{ marginRight: 2 }}>
              <NavLink to="/home">Home</NavLink>
            </Button>
            <Button className='menubtn' sx={{ marginRight: 2 }}>
              <NavLink to="/gallery">Gallery</NavLink>
            </Button>
            <Button className='menubtn' sx={{ marginRight: 2 }}>
              <NavLink to='/contact'>Contact</NavLink>
            </Button>
            <Button className='menubtn' sx={{ marginRight: 2 }}>
              <NavLink to="/sponsors">Sponsors</NavLink>
            </Button>
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