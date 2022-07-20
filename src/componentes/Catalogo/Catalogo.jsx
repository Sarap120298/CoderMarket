import React, { useState, useEffect } from 'react';
import {Link, Outlet,} from 'react-router-dom'
import { styled } from '@mui/material/styles';
import { Card, CardActions,Box, CardContent, CardMedia, Grid, Paper, Stack, Container, Button, Typography } from '@mui/material';
import Filtro from './Filtros/Filtro';
import db from '../../db.json';



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "#FFFAFA",
     padding: theme.spacing(1),
    textAlign: 'center',
    color: "#4B7F55",
  }));
   const StyledContainer = styled(Container)(({ theme }) => ({
     paddingTop: theme.spacing(6),
     paddingBottom: theme.spacing(6),
     maxWidth: "lg",
     backgroundColor: "#FFFAFA",
     display: "flex",
     flexWrap: "wrap",
     justifyContent:"space-around",
     
    
   }));
  
   
function Catalogo({ data }) {


  return (
        <>
      {/* < Filtro/> */}
      <StyledContainer style={{paddingTop:'14rem'}}>
     
                   
            <Grid container spacing={10}>
               {data.map((cod, index) => (
                 <Grid key={index} item xs={12} sm={6} md={4}>
                  <Card  sx={{ maxWidth: 330}} style={{height:"35rem"}} >
                    <CardMedia
                              component="img"
                               height="370"
                               alt="bici montaña"
                              image={cod.img} />
                     <CardContent>
                     <Link to={`/cartas/${cod.id}`} style={{textDecoration: "none"}}>   <Typography variant="body1" style={{fontWeight:"bold", color:"#4B7F55" }}>  {cod.nombre} </Typography> </Link> 
               <Stack direction="row" spacing={1}>
                   {/* <Item>Chip One</Item>
                    <Item>Chip One</Item>
                    <Item>Chip One</Item> */}
                  </Stack>
                <CardActions style={{justifyContent:"space-between"}} >
                  <Typography style={{fontSize:"0.8rem", color:"#4B7F55", fontWeight:"bold"}} >{cod.apellido}
                  <Typography style={{fontSize:"0.7rem", color:"#2F2F2F"}} >
                  {cod.presentacion}€ Por persona
                    </Typography>
                  </Typography>
               <Link to={`/reserva/${cod.id}`} style={{textDecoration: "none"}}> <Button style={{fontSize:"0.6rem", color:"#2F2F2F", fontWeight:"bold"}}>Reserva ahora</Button></Link>
                   </CardActions>
                  </CardContent>
                 
                       </Card>
                 </Grid>
                 ))}
           </Grid>
             </StyledContainer>
      <Outlet/>
   </>
      )
  }
  export default Catalogo
  