import React from 'react';
import {
  Box, Typography, Grid
} from '@mui/material'
import { Link } from 'react-router-dom';

const contest_lists = [
  { name: "Line Follower Robot", image: '001-robot.svg', url: '/line-follower' },
  { name: "Poster Presentation", image: '002-poster.svg', url: '/poster-presentation' },
  { name: "Circuit Master", image: '003-electrical-circuit_1.svg', url: "/circuit-master" },
  { name: "Integration Bee", image: '004-math.svg', url: '/integreation-bee' },
  { name: "Gaming Contest", image: '006-game-controller-1.svg', url: '/gaming' },
]


const Events = () => {
  let contests = contest_lists.map(c => {
    return (
      <Grid item xs={6} s={4} md={2} key={c.name} >
        <a href={c.url}>
          <Box display="flex" className="contestItem" flexDirection="column" justifyContent="center" alignItems="center">
            <img alt={c.name} src={`/static/images/${c.image}`} width="100px" />
            <Typography sx={{ mt: 2 }} textAlign="center" variant='body1'>{c.name}</Typography>
          </Box>
        </a>
      </Grid>
    )
  })

  return (
    <Box sx={{ pt: {xs: 10, md: 20}, pb: 10, px:{xs: 3, md: 0} }} className="contests">
      <Typography textAlign="center" variant='h6' sx={{ mb: 3 }}>Contests</Typography>
      <Grid container spacing={2} justifyContent="center">
        {contests}
      </Grid>
    </Box>
  )
}

export default Events