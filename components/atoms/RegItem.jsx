import { useEffect } from 'react';
import { message } from 'antd';
import {
    Box, Chip, Paper
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import dateFormat from 'dateformat';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import DeleteIcon from '@mui/icons-material/Delete';
import { API_HOST } from '@/lib/data/api_urls';
import { usePost } from '@/hooks/useApi';


const RegItem = ({ reg, openDialog, idx, loadRegistrations }) => {
    const { perform_post: approve, success, error, loading, reset } = usePost(`${API_HOST}${reg.approval_link}`);
    const {
        perform_post: send_mail, 
        success: send_mail_success, 
        error: send_mai_error, 
        loading: sending_mail,
        reset: resetSendMailRequest
    } = usePost(`${API_HOST}${reg.confirmation_link}`);

    useEffect(() => {
        if (success) {
            message.info("Registration Approved");
            reset();
            loadRegistrations();
        }
        if (error) {
            message.error("Cannot Approve");
        }
        if (send_mail_success) {
            message.success("Mail Sent");
            resetSendMailRequest();
            loadRegistrations();
        }
        if (send_mai_error) {
            message.error("Cannot send email")
        }
    }, [success, error, send_mail_success, send_mai_error])

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
                                    <Chip
                                        sx={{ px: 2, marginLeft: { xs: 1, md: 2 } }}
                                        icon={<MarkEmailReadIcon />}
                                        variant="outlined"
                                        label="Mail Sent"
                                        color='info'
                                    />
                                    :
                                    <Chip
                                        sx={{ px: 2, marginLeft: { xs: 1, md: 2 } }}
                                        onClick={() => send_mail()}
                                        icon={<ForwardToInboxIcon />}
                                        variant="contained"
                                        label="Send Mail"
                                        color='info'
                                        disabled={sending_mail || send_mail_success}
                                    />
                            }
                        </Box>
                        :
                        <Box>
                            <Chip
                                label="Approve"
                                sx={{ px: 1, marginLeft: { xs: 1, md: 2 } }}
                                color='primary'
                                icon={<CheckIcon />}
                                onClick={() => approve()}
                                variant='contained'
                                disabled={loading}
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
                                Delete
                            </Chip>
                        </Box>
                }

            </Box>
        </Paper>
    )
}

export default RegItem;