'use client'

import { useState } from "react";
import { Modal } from "antd";
import Fab from '@mui/material/Fab';
import Box from '@mui/material/Box';
import { RiCalendarScheduleLine } from '@remixicon/react'
import Image from "next/image";
import schedule from '@/public/static/images/schedule.jpg'

const HomepageModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <Modal footer={null} open={isOpen} onCancel={() => setIsOpen(false)}>
                <Box
                    sx={{mt: 4}}
                >
                    <Image
                        placeholder="blur"
                        src={schedule}
                        layout="responsive"
                        quality={100}
                        style={{borderRadius: '10px'}}
                    />
                </Box>
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