import {useState} from 'react';
import { message } from 'antd';
import {
    Box, Button, Chip, Alert, TextField, Paper, Dialog, DialogTitle, DialogContent, DialogActions, DialogContentText
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import dateFormat from 'dateformat';
import axios from 'axios';
import { baseUrl, deleteRegUrl } from '../data/backendUrls';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import DeleteIcon from '@mui/icons-material/Delete';




const RegTable = (props) => {
    const [dialogOpen, setDialogOpen] = useState(false);
    const [deletableId, setDeletableId] = useState(null);
    
    const closeDialog = () => {
        setDialogOpen(false);
        setDeletableId(null)
    }
    const openDialog = reg_id => {
        setDialogOpen(true);
        setDeletableId(reg_id);
    }
    const approve_reg = async (url) => {
        try {
            await axios.get(url);
        } catch (error) {
            let info = error?.response?.data?.detail;
            if (info === undefined) {
                info = error.message;
            }
            message.error(info);
            return;
        }
        props.loadRegistrations();
    }
    const delete_registration = async (payload) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRFToken': csrftoken
                },
            };
            await axios.post(deleteRegUrl, payload, config)
        } catch (error) {
            let info = error?.response?.data?.detail;
            if (info === undefined) {
                info = error.message;
            }
            message.error(info);
            return;
        }
        message.success("Registration Deleted");
        props.loadRegistrations();
    }
    const reg_items = props.registrations.map((reg, idx) => {
        return (
            <Paper className="reg-comp" key={reg.id}>
                <div className={reg.is_approved ? "reg-inner flex-row align-items-center approved" : "reg-inner flex-row align-items-center"}>
                    <div className="sl-num">{idx + 1}</div>
                    <div className="reg-info flex-col">
                        <div className="reg-id">Registration Id: {reg.id}</div>
                        <div className="applied-at">{dateFormat(reg.added_at, "h:MM:ss TT, d m yyyy")}</div>
                        <div className="ip-addr">IP: {reg.ip_address}</div>
                    </div>
                    <div className="trx-id me-2 flex-col align-items-center">
                        <span className="label">{reg.gateway}-{reg.paying_number}</span>
                        <span className="value">{reg.transaction_id}</span>
                    </div>
                    <div className="contest-type me-2">
                        <Chip label={reg.contest} variant='' color='secondary' />
                    </div>
                    <div className="team-info me-2">
                        <div className="leader_name"><span className='label me-1'>{reg.group_members_count > 1 ? "Team Leader" : "Contestant"}:</span> {reg.team_leader.name}</div>
                        <div className="Inst"><span className='label me-1'>Instituition:</span>{reg.team_leader.inst}</div>
                    </div>
                </div>
                <Box className="bottom" display="flex" flexDirection="row" justifyContent={{ xs: 'center', md: 'left' }} >
                    {
                        reg.is_approved ?
                            <Box display="flex" flexDirection="row">
                                <Chip icon={<CheckIcon />} label={reg.approved_by} />
                                {
                                    reg.is_email_sent ?
                                        <Chip sx={{ px: 2, marginLeft: { xs: 1, md: 2 } }} icon={<MarkEmailReadIcon />} variant="outlined" label="Mail Sent" color='info' />
                                        : <Chip sx={{ px: 2, marginLeft: { xs: 1, md: 2 } }} onClick={() => { console.log("Hi") }} icon={<ForwardToInboxIcon />} variant="contained" label="Send Mail" color='info' />
                                }
                            </Box>
                            : <Box>
                                <Chip
                                    label="Approve"
                                    sx={{ px: 1, marginLeft: { xs: 1, md: 2 } }}
                                    color='primary'
                                    icon={<CheckIcon />}
                                    onClick={() => approve_reg(baseUrl + reg.approval_link)}
                                    variant='contained'
                                >
                                    Approve
                                </Chip>
                                <Chip
                                    label="Delete"
                                    sx={{ px: 1, marginLeft: { xs: 1, md: 2 } }}
                                    color='error'
                                    icon={<DeleteIcon />}
                                    onClick={() => openDialog(reg.id)}
                                    variant='outlined'
                                >
                                    Approve
                                </Chip>
                            </Box>
                    }

                </Box>
            </Paper>
        )
    })
    if (props.registrations.length === 0) {
        return (
            <Box>
                <Alert severity="warning">No Registrations</Alert>
            </Box>
        )
    }
    return (
        <Box className="reg-table" sx={{ mb: 5 }}>
            {reg_items}
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
                    <Button type="submit">Delete</Button>
                </DialogActions>
            </Dialog>
        </Box>
    )
}

export default RegTable