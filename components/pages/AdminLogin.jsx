import { message } from 'antd';
import { useState, useEffect } from 'react';
import {
  Box, TextField, Button, Typography
} from '@mui/material';
import { useLogin } from '@/hooks/useAuth';
import { useUser } from '@/hooks/useUser';


const AdminLogin = () => {
  const { success, loading, error, login, reset } = useLogin();
  const { reset: resetUserInfo } = useUser();

  const [loginForm, setLoginForm] = useState({
    username: "",
    password: ""
  })

  useEffect(() => {
    if (success) {
      resetUserInfo();
    }
    if (error) {
      message.error("Unable to login with the provided credentials");
      reset();
    }
  }, [success, error, resetUserInfo])

  const handleChange = event => {
    const { name, value } = event.target;
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
      <Box display="flex" flexDirection="column" alignItems="center" width={{ xs: "85%", md: '30%' }} sx={{ mt: '15vh' }}>
        <img src="/static/images/logo.png" alt="Technoventure Logo" width="200px" />
        <Typography sx={{ mb: 3, mt: 10 }} color="text.secondary" variant='h5'>Admin Login</Typography>
        <TextField sx={{ mb: 2 }} name="username" required onChange={handleChange} label="Username" variant="outlined" fullWidth />
        <TextField name="password" type="password" required onChange={handleChange} label="Password" variant="outlined" fullWidth />
        <Button onClick={handleSubmit} variant="contained" sx={{ mt: 3 }} fullWidth>Login</Button>
      </Box>
    </Box>
  )
}

export default AdminLogin