import React from 'react';
import {
    Box, TextField, Button, Typography
} from '@mui/material';
import { useLogin } from '@/hooks/useAuth';


const AdminLogin = ({}) => {
  const {success, loading, error, login} = useLogin();

  const [loginForm, setLoginForm] = React.useState({
    username: "",
    password: ""
  })

  const handleChange = event => {
    const {name, value} = event.target;
    setLoginForm({
      ...loginForm,
      [name]: value
    })
  }

  const handleSubmit = () => {
    login(loginForm);
  }

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
        <Box display="flex" flexDirection="column" alignItems="center" width={{xs: "85%", md: '30%'}} sx={{mt:'15vh'}}>
          <img src="/static/images/logo.png" alt="Technoventure Logo" width="200px" />
          <Typography sx={{mb:3, mt: 10}} color="text.secondary" variant='h5'>Admin Login</Typography>
          <TextField sx={{mb:2}} name="username" required onChange={handleChange} label="Username" variant="outlined" fullWidth/>
          <TextField name="password" type="password" required onChange={handleChange} label="Password" variant="outlined" fullWidth/>
          <Button onClick={handleSubmit} variant="contained" sx={{mt: 3}} fullWidth>Login</Button>
        </Box>
    </Box>
  )
}

export default AdminLogin