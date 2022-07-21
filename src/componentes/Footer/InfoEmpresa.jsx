import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Card, CardActionArea, CardContent, CardActions, Typography, CardMedia, Grid, Paper } from '@mui/material';
import ImagenChica from '../imagenes/quienessomosfoto.png';
import {Outlet} from 'react-router-dom'
import GifBike from '../imagenes/girlbike.gif';
import {Link} from 'react-router-dom';

const TitleTypography = styled(Typography)(({ theme }) => ({
    backgroundColor:"#284885",
    color: "#FFFAFA",
    fontSize: 24,
    textAlign: "center",
    padding: "1vh"
}));

const SubTypography = styled(Typography)(({ theme }) => ({
    color: "#284885",
    fontSize: 20,
    textAlign:"center",
}));

const Parrafo = styled(Typography)(({ theme }) => ({
    fontSize: 12,
    textAlign:"justify"
}));

const StyledTextCard = styled(Card)(({ theme }) => ({
    width:"45vw",
    height:"50vh",
    display:"flex",
    flexDirection:"column",
    justify:"center",
    alignItem:"center",
    gap: "3vh",
    padding:"5vh",
    boxShadow: "none"
}));

const StyledCard = styled(Card)(({ theme }) => ({
    width:"30vw",
    height:"50vh",
    display:"flex",
    flexDirection:"column",
    justify:"center",
    alignItem:"center",
    backgroundColor: "white",
    padding:"1vh",
    paddingBottom: "9vh",
    boxShadow: "none"
}));

const StyledBox = styled(Box)(({ theme }) => ({ 
    width:"100vw",
    height:"110vh", 
    display:"flex", 
    flexDirection:"column",
    justifyContent:"center",
    alignItem:"center",
}));

function InfoEmpresa() {
    return (
        <Box sx={{width:"100vw", display:"Flex", flexDirection:"row", alignItem:"center", justifyContent:"center"}}>
                <StyledBox>
            <TitleTypography gutterBottom variant="caption" component="div">¿Quiénes somos?</TitleTypography>
            <Box sx={{width:"100vw", height:"13vw", display:"flex", flexDirection:"row", justifyContent:"center", gap:"3vh", marginTop:"2vh"}}>
                    <StyledTextCard>
                        <SubTypography gutterBottom variant="caption" component="div">Sobre nosotros</SubTypography>
                        <Parrafo> Somos una empresa dedicada a poner a disposicion de las empresas a los mejores desarrolladores</Parrafo>
                        <Parrafo>Nuestra plataforma tiene la finalidad de facilitar la busqueda y filtrado de candidatos a las empresas segun el perfil deseado. Además, muchos de nuestros coders se ofrecen como voluntarios para participar de manera solidaria en proyectos que lo necesiten.</Parrafo>
                        <Parrafo> ¡No te lo pierdas! </Parrafo>
                        <CardActions>

                        </CardActions>
                    </StyledTextCard>
                    <StyledCard>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                image={ImagenChica} sx={{height:300, width:410}}
                                alt="chica"
                            />
                            <CardContent>
                                <Typography variant="caption" component="div">
                                    
                                </Typography>
                                
                            </CardContent>
                        </CardActionArea>
                    </StyledCard>
                </Box>
            </StyledBox>
            <Outlet/>
            </Box>
    );
}
export default InfoEmpresa;