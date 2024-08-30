import React from 'react';
import {
    Box, FormControl, InputLabel, Select, MenuItem, Container, IconButton, Button
} from '@mui/material';
import SyncIcon from '@mui/icons-material/Sync';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { admin_endpoints } from '@/lib/data/api_urls';
import { API_HOST } from '@/lib/data/api_urls';

export const contest_names = [
    {
        code: 'lfr',
        fullname: 'Line Follower Robot'
    },
    {
        code: 'poster',
        fullname: 'Poster Presentation'
    },
    {
        code: 'circuit-solve',
        fullname: 'Circuit Solve'
    },
    {
        code: 'integration',
        fullname: 'Integration'
    },
    {
        code: 'gaming-fifa',
        fullname: 'Gaming [FIFA]'
    },
    {
        code: 'gaming-chess',
        fullname: 'Gaming [Chess]'
    }
];

const ActionTab = ({ contest, approved, setAction, loadRegistrations }) => {
    const selections = contest_names.map(c => {
        return (
            <MenuItem key={c.code} value={c.code}>{c.fullname}</MenuItem>
        )
    })
    const downloadExcel = () => {
        const url = `${API_HOST}/${admin_endpoints.responseExcel}?contest=${contest}&approval=${approved}`;
        window.open(url, '_blank');
    }
    return (
        <Container sx={{ mt: 7 }}>
            <Box display="flex" flexDirection="row" alignItems="center" justifyContent="space-between">
                <Box display="flex" flexDirection="row" width={{ xs: "60%", md: "40%" }}>
                    <FormControl fullWidth sx={{ marginRight: 3 }}>
                        <InputLabel id="demo-simple-select-label">Contest</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={contest}
                            name="contest"
                            label="Contest"
                            onChange={(e) => setAction(e)}
                        >
                            <MenuItem value="all">All</MenuItem>
                            {selections}
                        </Select>
                    </FormControl>
                    <FormControl fullWidth>
                        <InputLabel id="demo1-simple-select-label">Approval State</InputLabel>
                        <Select
                            labelId="demo1-simple-select-label"
                            id="demo1-simple-select"
                            value={approved}
                            name="approved"
                            label="Approval State"
                            onChange={(e) => setAction(e)}
                        >
                            <MenuItem value="all">All</MenuItem>
                            <MenuItem value="approved">Approved</MenuItem>
                            <MenuItem value="pending">Pending</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <Box>
                    <IconButton color='primary' onClick={() => loadRegistrations()}>
                        <SyncIcon />
                    </IconButton>
                    <Button onClick={downloadExcel} sx={{marginLeft: '1rem'}} variant='contained' startIcon={<ArrowDownwardIcon />}>Excel</Button>
                </Box>
            </Box>
        </Container>
    )
}

export default ActionTab