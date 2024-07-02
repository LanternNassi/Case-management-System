// src/components/Login.js
import React, { useState } from "react";
// import { loginUser } from '../state/authSlice';
import { Box, Button, TextField, Typography, Alert } from "@mui/material";

const Login = () => {
  
  const [logging_in, set_logging_in] = useState(false);
  const [error, set_error] = useState(null);
  const [feedback , setfeedback] = React.useState(null)



  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    set_logging_in(true);
    

    // dispatch(loginUser(credentials)).then((action) => {
    //   if (loginUser.fulfilled.match(action)) {
    //     navigate('/dashboard');
    //   }
    // });
  };


    
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#f0f2f5",
        padding: 3,
      }}
    >
    
    <Box sx ={{
      height : '20vh',
      display : 'flex',
      alignItems : 'center',
      justifyContent : 'center'
    }}>

      <Typography variant="h5">Case Management System</Typography>
    </Box>


      <Box
        sx={{
          width: 300,
          padding: 3,
          boxShadow: 3,
          borderRadius: 2,
          backgroundColor: "#fff",
        }}
      >

        <Typography variant="h5" component="h1" gutterBottom>
          Login
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Username"
            variant="outlined"
            name="username"
            value={credentials.username}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Password"
            variant="outlined"
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            margin="normal"
          />
          {error && (
            <Alert severity="error" sx={{ marginTop: 2 }}>
              {error.message}
            </Alert>
          )}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ marginTop: 2 }}
            disabled={logging_in}
          >
            {logging_in ? "Logging in..." : "Login"}
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default Login;
