import React, { useState } from 'react';
import {Box, Button, TextField, Typography} from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined';

const Login=()=>{
  const [isSignup, setisSignup] = useState(false);
  const [inputs, setInputs] = useState({
    name: "",
    email: "", 
    password: "",
  });
  const handleChange = (e) => {
    setInputs((prevState)=>({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  };
  const resetState = (e) => {
    setisSignup(!isSignup);
    setInputs({name: "", email: "", password: "",})
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box display="flex"
        flexDirection={"column"} 
        maxWidth={400} 
        alignItems={"center"}
        justifyContent={'center'}
        margin={'auto'}
        marginTop={15}
        padding={3}
        borderRadius={5}
        boxShadow={"5px 5px 10px #ccc"}
          sx={{
            ":hover": {
              boxShadow: "10px 10px 20px #ccc",
            },
          }} 
        >
          <Typography variant='h4' padding={3} textAlign="center">
          {isSignup ? "Sign Up" : "Login"}
          </Typography>
          {isSignup &&(<TextField 
          onChange={handleChange}
          name="name"
          value={inputs.name}
          margin='normal' 
          type={'text'} 
          variant='outlined' 
          placeholder='Full Name'/>)}
           <TextField 
           onChange={handleChange}
           name="email"
           value={inputs.email}
           margin='normal' 
           type={'email'} 
           variant='outlined' 
           placeholder='Email address'/>
          <TextField
          onChange={handleChange}
          name="password"
          value={inputs.password}
          margin='normal' 
          type={'password'} 
          variant='outlined' 
          placeholder='Password'/>
          <Button
          endIcon={isSignup ? <HowToRegOutlinedIcon/> : <LoginIcon/>}
          type='submit'
          sx={{marginTop: 3, borderRadius: 3}}
          variant='contained' 
          color='primary'>
            {isSignup ? "Submit" : "Login"}
          </Button>
          <Button
          endIcon={
            isSignup ? <LoginIcon/> : <HowToRegOutlinedIcon/>
          }
          onClick={resetState} sx={{marginTop: 3, borderRadius: 3}}>
            Change to {isSignup ? 'Login' : 'Signup'}
          </Button>
        </Box>
      </form>
    </div>
  );
}

export default Login;