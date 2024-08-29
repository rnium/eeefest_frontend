import { Component, useState, useEffect } from 'react';
import {
    Box, Container
} from '@mui/material';
import RegTable from '../molecules/RegTable';
import Loader from '../atoms/Loader';
import AdminNavbar from '../molecules/AdminNavbar';
import ActionTab from '../molecules/ActionTab';
import { useGet } from '@/hooks/useApi';
import { admin_endpoints } from '@/lib/data/api_urls';



const AdminDashboard = () => {
    const [selection, setSelection] = useState({
        contest: 'all',
        approved: 'all'
    });
    
    const {
        data: registrations,
        success, 
        error, 
        perform_get, 
        loaded, 
        loading, 
        reset
    } = useGet(admin_endpoints.registrationlist, true, []);

    useEffect(() => {
        perform_get(selection);
    }, [selection, loaded, perform_get])


    const handleChange = (event) => {
        let { name, value } = event.target;
        setSelection(
            prevState => ({
                ...prevState,
                [name]: value
            }),
        )
    }


    return (
        <Box sx={{ margin: 0, padding: 0 }}>
            <AdminNavbar />
            <ActionTab
                contest={selection.contest}
                approved={selection.approved}
                setAction={handleChange}
                loadRegistrations={reset}
            />
            <Container sx={{ mt: 3 }}>
                {
                    !loaded || loading ?
                        <Loader />
                        :
                        <RegTable
                            loadRegistrations={reset}
                            registrations={registrations}
                        />
                }
            </Container>

        </Box>
    )
}

export default AdminDashboard;