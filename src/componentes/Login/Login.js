import React from "react";
import { styled } from '@mui/material/styles'
import { Avatar, Button, CssBaseline, TextField, FormControlLabel, Checkbox,  Grid, Box, Typography, Container } from "@mui/material";
import LockOpenRoundedIcon from '@mui/icons-material/LockOpenRounded';
import group1 from '../../componentes/imagenes/logo.png'
import { Link } from 'react-router-dom';


const handleSubmit = (event) => {
};
const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: "#FFFAFA",
  [theme.breakpoints.down('sm')]: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
   
  },
}))

const Login = () => {
  return (
    <>

        <Box sx={{  }}><Link to='/'>
            <img style={{ height: '4rem', marginLeft: '1.2rem', marginTop: '1.4rem' }} src={group1} alt='logo' /> </Link>
          </Box>
      
      <Container component="main" maxWidth="xs"  sx={{marginRight:"auto"}}>
        <CssBaseline />
        <Box
             sx={{
             marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1 }} style={{ color: "#4b7f55" }}>
            <LockOpenRoundedIcon/>
          </Avatar>
          <Typography component="h1" variant="h5">Log in
           
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              style={{ color: "#4b7f55" }}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              color="success"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              color="success"
            />

            <FormControlLabel
              control={
                <Checkbox value="remember" style={{ color: "#4b7f55" }} />
              }
              label="Remember me"
            />
            <Button
              style={{ backgroundColor: "#4b7f55" }}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Log in
            </Button>
            <Grid container>
              <Grid item xs sx={{ display: "flex", alignItems: "center" }}>
                <Link to='/registro' href="#" variant="body2" style={{ color: "#4b7f55" }}>
                  Haz clic aqui si todavia no te has registrado
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
              </Container>
          
    </>
  );
};
export default Login;
