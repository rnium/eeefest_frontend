import React from 'react';
import {
    Card, CardContent, Typography, Box, Alert
    // Alert
} from '@mui/material';
import { contests_data } from '@/lib/data/contests';


const PaymentSummery = ({ contest, members }) => {
    const contest_data = contests_data?.[contest];
    let reg_fee = contest_data?.fee;
    let total = 0;

    if (!reg_fee) {
        reg_fee = 0;
    } else {
        total += reg_fee;
    }
    const extra_members = members - 3;
    let extra_member_fee = 0;

    if (extra_members > 0 && contest_data?.fee_additional) {
        extra_member_fee = extra_members * contest_data.fee_additional
        total += extra_member_fee;
    }
    
    return (
        <Card elevation={4} sx={{ mt: 3 }} className="paymentSummaryCard">
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" color="text.secondary" textAlign="center">
                    Payment Summery
                </Typography>

                {
                    contest_data && (
                        <Box className="selected-contest">
                            <div className="contest-logo">
                                <img src={`/static/images/${contest_data.logo_name}`} alt={contest_data.name} />
                            </div>
                            <div className="info">
                                <div className="title">{contest_data.name}</div>
                                <div className="sub-title">৳ {reg_fee}</div>
                            </div>
                        </Box>
                    )
                        
                }
                <Box className="pay-stats">
                    <div className="item">
                        <div className="label">Registration Fee</div>
                        <div className="value">{reg_fee} Tk</div>
                    </div>
                    {
                        extra_members > 0 && (
                            <div className="item">
                                <div className="label">Additional Members (x{extra_members})</div>
                                <div className="value">{extra_member_fee} Tk</div>
                            </div>
                        )
                    }
                    <div className="item">
                        <div className="label"><b>Total</b></div>
                        <div className="value">{total} Tk</div>
                    </div>
                </Box>
                <Alert severity='info' sx={{ mt: 1 }} >
                    <b>Cash In</b> or <b>Send Money</b> to any of the specified mobile banking account.
                </Alert>
            </CardContent>
        </Card>
    )
}

export default PaymentSummery;