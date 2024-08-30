import { useState, useEffect } from 'react';
import { message } from 'antd';
import {
    Box, Button, Alert, TextField, Dialog, DialogTitle, DialogContent, DialogActions, DialogContentText
} from '@mui/material';

import { admin_endpoints } from '@/lib/data/api_urls';
import { usePost } from '@/hooks/useApi';
import RegItem from '../atoms/RegItem';

const RegTable = (props) => {
    const [dialogOpen, setDialogOpen] = useState(false);
    const [deletableId, setDeletableId] = useState(null);

    const {
        perform_post: delete_registration,
        loading,
        success,
        error,
        reset
    } = usePost(admin_endpoints.deleteReg);

    const closeDialog = () => {
        setDialogOpen(false);
        setDeletableId(null)
    }
    const openDialog = reg_id => {
        setDialogOpen(true);
        setDeletableId(reg_id);
    }
    
    useEffect(() => {
        if (success) {
            message.info("Registration Deleted");
            reset();
            props.loadRegistrations();
        }
        if (error) {
            message.error("Cannot Delete");
            reset()
        }
    }, [success, error])

    if (props.registrations.length === 0) {
        return (
            <Box>
                <Alert severity="warning">No Registrations</Alert>
            </Box>
        )
    }

    return (
        <Box className="reg-table" sx={{ mb: 5 }}>
            {
                props.registrations.map((reg, idx) => (
                    <RegItem
                        key={idx}
                        idx={idx}
                        reg={reg}
                        openDialog={openDialog}
                        loadRegistrations={props.loadRegistrations}
                    />
                ))
            }
            <Dialog
                open={dialogOpen}
                onClose={closeDialog}
                PaperProps={{
                    component: 'form',
                    onSubmit: (event) => {
                        event.preventDefault();
                        const formData = new FormData(event.currentTarget);
                        const formJson = Object.fromEntries(formData.entries());
                        delete_registration(formJson);
                        closeDialog();
                    },
                }}
            >
                <DialogTitle>Delete Registration</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Before you proceed with deleting this registration, provide a reason for the action.
                        The contestant will receive an email notification regarding this decision
                    </DialogContentText>
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="reason"
                        name="reason"
                        label="Specify Reason"
                        type="text"
                        fullWidth
                        variant="standard"
                    />
                    <Box display="none">
                        <TextField
                            type="text"
                            name="regId"
                            value={deletableId}
                        >
                        </TextField>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={closeDialog}>Cancel</Button>
                    <Button disabled={loading} type="submit">Delete</Button>
                </DialogActions>
            </Dialog>
        </Box>
    )
}

export default RegTable