import React from 'react';
import {
    Card, CardContent, Typography, Box, Alert
    // Alert
} from '@mui/material';

const contests = {
    'lfr': {
        name: 'Line Follower Robot',
        img_name: '001-robot.svg',
        fee: 1200
    },
    'poster': {
        name: 'Poster Presentation',
        img_name: '002-poster.svg',
        fee: 300
    },
    'integration': {
        name: 'Integration Bee',
        img_name: '004-math.svg',
        fee: 100
    },
    'circuit-solve': {
        name: 'Circuit Master',
        img_name: '003-electrical-circuit_1.svg',
        fee: 100
    },
    'gaming-fifa': {
        name: 'Gaming Contest [FIFA]',
        img_name: '006-game-controller-1.svg',
        fee: 100
    },
    'gaming-chess': {
        name: 'Gaming Contest [Chess]',
        img_name: '006-game-controller-1.svg',
        fee: 100
    },
}

// const cashout_fees = {
//     rocket: 1.8,
//     nagad: 1.25
// }

const additional_member_fee = {
    lfr: 500,
}

const PaymentSummery = ({ contest, members, gateway }) => {
    const contest_data = contests?.[contest];
    let reg_fee = contest_data?.fee;
    let total = 0;
    if (!reg_fee) {
        reg_fee = 0
    } else {
        total += reg_fee;
    }
    const extra_members = members - 3;
    let extra_member_fee = 0
    if (extra_members > 0 && additional_member_fee?.[contest]) {
        extra_member_fee = extra_members * additional_member_fee?.[contest]
        total += extra_member_fee;
    }
    // let cashout_charge = 0;
    // if (total > 0 && cashout_fees?.[gateway]) {
    //     cashout_charge = (total / 100) * (cashout_fees?.[gateway]);
    //     total += cashout_charge
    // }
    return (
        <Card elevation={4} sx={{ mt: 3 }} className="paymentSummaryCard">
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" color="text.secondary" textAlign="center">
                    Payment Summery
                </Typography>

                {
                    contest_data !== undefined ?
                        <Box className="selected-contest">
                            <div className="contest-logo">
                                <img src={"/static/images/" + contest_data.img_name} alt="" />
                            </div>
                            <div className="info">
                                <div className="title">{contest_data.name}</div>
                                <div className="sub-title">৳ {reg_fee}</div>
                            </div>
                        </Box>
                        : null
                }
                <Box className="pay-stats">
                    <div className="item">
                        <div className="label">Registration Fee</div>
                        <div className="value">{reg_fee} Tk</div>
                    </div>
                    {
                        extra_members > 0 ?
                            <div className="item">
                                <div className="label">Additional Members (x{extra_members})</div>
                                <div className="value">{extra_member_fee} Tk</div>
                            </div>
                            : null
                    }
                    {/* <div className="item cashout">
                        <div className="label">
                            <span>Cashout Charge</span>
                            <img src={"static/images/" + gateway + ".png"} alt="icon" className='icon' />
                        </div>
                        <div className="value">{cashout_charge} Tk</div>
                    </div> */}
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

export default PaymentSummery