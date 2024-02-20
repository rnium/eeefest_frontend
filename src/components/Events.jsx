import React from 'react';
import {
  Box, Typography, Grid
} from '@mui/material'


const contest_lists = [
  { name: "Line Follower Robot", image: '001-robot.svg' },
  { name: "Poster Presentation", image: '002-poster.svg' },
  { name: "Circuit Master", image: '003-electrical-circuit_1.svg' },
  { name: "Integration Bee", image: '004-math.svg' },
  { name: "Gaming Contest", image: '006-game-controller-1.svg' },
]


const Events = () => {
  let contests = contest_lists.map(c => {
    return (
      <Grid item xs={6} s={4} md={2} key={c.name} >
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
          <img alt={c.name} src={`images/${c.image}`} width="100px" />
          <Typography sx={{mt:2}} textAlign="center" variant='body1'>{c.name}</Typography>
        </Box>
      </Grid>
    )
  })

  return (
    <Box sx={{ py: 15 }}>
      <Typography textAlign="center" variant='h6' sx={{mb:3}}>Contests</Typography>
      <Grid container spacing={2} justifyContent="center">
        {contests}
      </Grid>
    </Box>
  )
}

export default Events