import {React, useState, useEffect} from "react";
import { styled } from '@mui/material/styles'
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import logo1 from '../../componentes/imagenes/logo1.png';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import axios from "axios";
import { useParams } from "react-router-dom";
import db from '../../db.json';
import group1 from '../../componentes/imagenes/logo.png';



const handleSubmit = (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  console.log({
    email: data.get("email"),
    password: data.get("password"),
  });
};
const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: "#FFFAFA",
 height: "96vh",
  [theme.breakpoints.down('sm')]: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
   
  },
  
}))

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


const StyledButton = styled(Button)(({ theme }) => ({
    color: 'white',
    fontSize:'1.4rem',
    backgroundColor: '#284885',
    '&:hover': {
      backgroundColor: '#D4EAC8',
        },
    '&:focus': {
        backgroundColor: '#4B7F55',
        },
    width: '10rem',
    textTransform: 'none'
  }));

const ContactCoder = () => {
  const {id} = useParams();

  const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    
    // useEffect(() => {
    //   setLoading(true)
    //   axios.get('https://econotravel-grupo3.herokuapp.com/experiencias')
    //     .then(res => {
    //       console.log(res.data)
    //       setData(res.data);
    //       setLoading(false)
    //     })
    // }, [])
      
     console.log(db)
    const test = db.coders.filter(exper => exper.id == parseInt(id));
    console.log(test)
       
       if (loading) return <section>Cargando...</section>
  return (
    <>
        {test.map((exp, index) => (
      <StyledBox  key={index}>

        <Box sx={{ marginRight: "auto" , display:'flex'}}>
         
        <Box sx={{  }}><Link to='/'>
            <img style={{ height: '4rem', marginLeft: '1.2rem', marginTop: '1.4rem' }} src={group1} alt='logo' /> </Link>
          </Box>
            <Typography variant='h1' style={{marginTop:'10rem', color:"#284885", fontWeight:'bold', fontSize:'2.8rem'}} >Formulario de contacto</Typography>
          
        </Box>
      <Box sx={{ width:'100vw', display:'flex', justifyContent:"center", }}>
      <Container component="main" style={{marginTop:'4rem'}} >
        <CssBaseline />
        <Box
             sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
    
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <Box style={{display:'flex',}}>
            <TextfieldColor
              style={{ color: "#284885" }}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Nombre y Apellido"
              name="email"
              autoComplete="email"
              autoFocus

              
            />
               <TextfieldColor
              style={{ color: "#284885", marginLeft:'2rem' }}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Empresa"
              name="Empresa"
              autoComplete="Empresa"
              autoFocus
            
            />
            </Box>
            <TextfieldColor
              style={{ color: "#284885" }}
              margin="normal"
              required
              fullWidth
              id="Mensaje"
              label="Mensaje"
              name="Mensaje"
              autoComplete="Mensaje"
              autoFocus
              rows={8}
              multiline
              
            />
             
    
            <Grid container>
              <Grid item xs sx={{ display: "flex", alignItems: "center" }}>
                
              </Grid>
            </Grid>
          </Box>
        </Box>
              </Container>
              <Box sx={{ border: 2, fontWeight: 'bold', marginRight:'12rem',  marginBottom:'12rem' }} style={{paddingLeft:'1rem',paddingRight:'1rem', textAlign:'center', borderColor:'#284885',height: '40vh', width:'28rem',  marginLeft:'2rem', color:'#284885', display:'flex', flexDirection:'column', justifyContent:'space-evenly', alignItems:'center' }}>
            <Typography  sx={{ fontWeight: 'bold', fontSize:'1.4rem',  marginTop:'1rem' }} variant="body1" >{exp.nombre} {exp.apellido} </Typography>
        

            <Button
              style={{ backgroundColor: "#284885" }}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
                  Contactar
                  </Button>
               
        </Box>
              </Box>
              </StyledBox>

        ))}
    </>
  );
};
export default ContactCoder;
