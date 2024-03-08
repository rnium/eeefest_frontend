import { useState } from 'react';
import {
    Container, Grid, Button, Box, TextField, Typography, FormControl, InputLabel, Select, MenuItem
} from '@mui/material'

const Entrypass = () => {
    const [formData, setFormData] = useState({
        contest: '',
        contact: ''
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formdata => (
            {
                ...formdata,
                [name]: value
            }
        ))
    }
    return (
        <Container sx={{ py: 12 }}>
            <Grid container spacing={5}>
                <Grid item xs={12} md={7}>
                    <form>
                        <Typography fontSize={{ md: '1.3rem', xs: '1rem' }} color="textPrimary">Registration Entrypass</Typography>
                        <FormControl fullWidth sx={{ mt: 5 }}>
                            <InputLabel id="demo-simple-select-label">Select Contest</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={formData.contest}
                                label="Select Contest"
                                name="contest"
                                onChange={handleChange}
                            >
                                <MenuItem value="lfr">Line Follower Robot</MenuItem>
                                <MenuItem value="poster">Poster Presentation</MenuItem>
                                <MenuItem value="circuit-solve">Circuit Master</MenuItem>
                                <MenuItem value="integration">Integration Bee</MenuItem>
                                <MenuItem value="gaming-fifa">Gaming Contest [FIFA]</MenuItem>
                                <MenuItem value="gaming-chess">Gaming Contest [Chess]</MenuItem>
                            </Select>
                        </FormControl>
                        <TextField
                            type="text"
                            label="Phone or Email"
                            name="contact"
                            onChange={(e) => handleChange(e)}
                            value={formData.contact}
                            sx={{ my: 3 }}
                            fullWidth
                        >

                        </TextField>
                        <Button type='submit' variant='contained'>Search</Button>
                    </form>
                    <Box sx={{mt: 2}} display="flex" justifyContent="center" alignItems="center">
                        <Button variant='outlined'>Download Entrypass</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={5}>
                    <img src="/static/images/entrypass.jpeg" style={{ borderRadius: '10px', boxShadow: '0 5px 10px gray' }} width="100%" alt="" />
                </Grid>
            </Grid>
        </Container>
    )
}

export default Entrypass