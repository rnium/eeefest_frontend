import { useState, useEffect } from 'react';
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
    const [reloadRequired, setReloadRequired] = useState(true);
    
    const {
        data: registrations,
        perform_get,
        loaded,
    } = useGet(admin_endpoints.registrationlist, true, []);

    const reloadNow = () => {
        setReloadRequired(true);
    }

    useEffect(() => {
        if (reloadRequired) {
            perform_get({
                contest: selection.contest,
                approval: selection.approved
            });
            setReloadRequired(false);
        }
    }, [selection, reloadRequired, setReloadRequired, perform_get])

    useEffect(() => {
        setReloadRequired(true);
    }, [selection, setReloadRequired])


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
                loadRegistrations={reloadNow}
            />
            <Container sx={{ mt: 3 }}>
                {
                    !loaded ?
                        <Loader />
                        :
                        <RegTable
                            loadRegistrations={reloadNow}
                            registrations={registrations}
                        />
                }
            </Container>

        </Box>
    )
}

export default AdminDashboard;