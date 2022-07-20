import { styled, Box, Typography, Button} from "@mui/material";
import { Link } from 'react-router-dom'

import test from '../imagenes/logo.png'
import ImageHero from "../imagenes/hero.png";



const HeroBox = styled(Box)(({theme}) => ({
  display: 'flex',
  justifyContent:'space-evenly', 
  backgroundImage:`url(${ImageHero})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  position: "relative"


}));

const TextBox = styled(Box)(({ theme }) => ({
 
 backgroundColor: "rgba(221, 221, 221, 0.75)",
color: "black",
width: "32rem",
padding: "5rem",
margin: "5rem",
fontSize: "1.5rem",
fontWeight: "bolder"

 
}));


const StyledBox = styled(Box)(({theme}) => ({
  position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "white",
    textAlign: "center",
 
}));


const BoxText = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    marginTop: '4rem',
    paddingBottom: '10rem',
    justifyContent:'space-evenly',
    flexWrap:'wrap'
  },
  [theme.breakpoints.up('sm')]: {
    justifyContent:'center',
  },
 
}));

const StyledButton = styled(Button)(({ theme }) => ({
    color: 'white',
    fontSize:'1.4rem',
    // background: 'linear-gradient(to bottom,  #DE541E, #4b7f55)',
    top: '90%',
    
    backgroundColor: '#284885',
    '&:hover': {
      backgroundColor: '#D2DDF4',
      color:'black',
        },
    width: '30rem',
    height: '2rem',
    textTransform: 'none',
    padding: "1.6rem"
  }));


const Hero = () => {
    return (  
    <>
    
    <HeroBox style={{width:'100%', marginTop:'4.6rem', height:'100vh'}}> 
       <StyledBox>
        <TextBox>
       <Typography>¿Buscas un desarrollador o desarrolladora para tu proyecto o empresa?</Typography>
        <Typography>¡Estás en el lugar adecuado!</Typography>
        <Typography>Encuentra el perfil que buscas en un click.</Typography>
       
       </TextBox>
        <Link to='/cartas'  style={{textDecoration: "none"}}> <StyledButton>
                  ¡DESCUBRA NUESTROS CODERS!
            </StyledButton></Link>
            </StyledBox>
        {/* <Box  style={{display:'flex',flexDirection:'column',justifyContent:'center',  marginBottom:'5.2rem'}}>
            <BoxImg style={{height: '72vh', justifyItems: 'left'}} src={ImageHero} alt={"Foto of a girl"}/>
        </Box> */}
      
    </HeroBox>
    
     
    
    </> );
}
 
export default Hero;