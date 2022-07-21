import React from "react";
import { styled } from '@mui/material/styles'
import { Avatar, Button, CssBaseline, TextField, FormControlLabel, Checkbox,  Grid, Box, Typography, Container, MenuItem } from "@mui/material";
import LockOpenRoundedIcon from '@mui/icons-material/LockOpenRounded';
import group1 from '../../componentes/imagenes/logo.png'
import { Link } from 'react-router-dom';


const handleSubmit = (event) => {
};
const TextfieldColor = styled(TextField)(({ theme }) => ({

  '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#284885', 
      },
      '&.Mui-focused fieldset': {
              borderColor: '#284885',
      },
      '&:hover fieldset': {
              borderColor: '#284885',
      },
  
  }
}))

const userRole = [
  {
    value: 'Empresa',
    label: 'Empresa',
  },
  {
    value: 'Coder',
    label: 'Coder',
  }
];


const Login = () => {

  const [role, setRole] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRole(event.target.value);
  };
  return (
    <>
    <Box style={{ height: "96vh"}}>

        <Box sx={{  }}><Link to='/'>
            <img style={{ height: '4rem', marginLeft: '1.2rem', marginTop: '1.4rem' }} src={group1} alt='logo' /> </Link>
          </Box>

         <Box  style={{ height: "80vh",  display: "flex",  alignItems: "center"}}>
      
      <Container component="main" maxWidth="xs"  sx={{marginRight:"auto"}}>
        <CssBaseline />
        <Box
             sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1 }} style={{ color: "#284885" }}>
            <LockOpenRoundedIcon/>
          </Avatar>
          <Typography component="h1" variant="h5">Log in
           
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
            style={{display:'flex',
            flexDirection: "column",
            alignItems: "center"}}
          >
            <TextfieldColor
              style={{ color: "#284885" }}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
      
            />
            <TextfieldColor
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
             
            />

<TextfieldColor
          id="outlined-select-currency"
          select
          label="Select"
        
          onChange={handleChange}
          helperText="¿Eres coder o empresa? "
        >
          {userRole.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextfieldColor>
       
     

            <FormControlLabel
              control={
                <Checkbox value="remember" style={{ color: "#284885" }} />
              }
              label="Remember me"
            />
            <Button
              style={{ backgroundColor: "#284885" }}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Log in
            </Button>
            <Grid container>
              <Grid item xs sx={{ display: "flex", alignItems: "center" }}>
                <Link to='/registro' href="#" variant="body2" style={{ color: "#284885" }}>
                  Haz clic aqui si todavia no te has registrado
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
              </Container>
              </Box>
              </Box>    
    </>
  );
};
export default Login;
