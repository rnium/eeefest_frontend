'use client'

import { useState } from "react";
import { Modal } from "antd";
import EventIcon from '@mui/icons-material/Event';
import Fab from '@mui/material/Fab';
import Box from '@mui/material/Box';
import { RiCalendarScheduleLine } from '@remixicon/react'

const HomepageModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <Modal footer={null} open={isOpen} onCancel={() => setIsOpen(false)}>
                <img style={{ marginTop: '2rem', borderRadius: '5px' }} src="/static/images/schedule.jpg" alt="schedule poster" width="100%" />
            </Modal>
            <Box className="floatingBtn" sx={{ '& > :not(style)': { m: 1 } }}>
                <Fab className="inner" color='secondary' variant="extended" aria-label="like" onClick={() => setIsOpen(true)}>
                    <RiCalendarScheduleLine
                        size={25}
                        style={{ marginRight: 10 }}
                    />
                    Schedule
                </Fab>
            </Box>
        </>
    )
}

export default HomepageModal