import {useState} from 'react'
import Events from '../components/Events'
import EventIcon from '@mui/icons-material/Event';
import Fab from '@mui/material/Fab';
import Box from '@mui/material/Box';
import Hero from '../components/Hero';
import Countdown from '../components/Countdown';
import Description from '../components/Description';
import Contestglimpse from '../components/Contestglimpse';
import {Modal} from 'antd'

const Homepage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div>
      <Hero />
      <Countdown />
      <Events />
      <Contestglimpse />
      <Description />
      {/* Modal Section */}
      <Modal footer={null} open={isModalOpen} onCancel={() => setIsModalOpen(false)}>
        <img style={{marginTop: '2rem', borderRadius: '5px'}} src="/static/images/schedule.jpg" alt="schedule poster" width="100%" />
      </Modal>
      <Box className="floatingBtn" sx={{ '& > :not(style)': { m: 1 } }}>
        <Fab className="inner" color='secondary' variant="extended" aria-label="like" onClick={() => setIsModalOpen(true)}>
          <EventIcon sx={{ marginRight: 1 }} />
          Schedule
        </Fab>
      </Box>
    </div>
  )
}

export default Homepage