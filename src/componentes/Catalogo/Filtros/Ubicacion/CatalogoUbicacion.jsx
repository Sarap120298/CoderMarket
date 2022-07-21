import React, { useState, useEffect } from 'react';
import {Link, Outlet,} from 'react-router-dom'
import { styled } from '@mui/material/styles';
import { Card, CardActions,Box, CardContent, CardMedia, Grid, Paper, Stack, Container, Button, Typography } from '@mui/material';
import axios from "axios";
import { useParams } from "react-router-dom";
import Filtro from '../Filtro';
import db from '../../../../db.json'



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
  
   
function CatalogoUbicacion() {
  const {ubi} = useParams()

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false);
  
  // useEffect(() => {
  //   setLoading(true)
  //   axios.get('https://econotravel-grupo3.herokuapp.com/experiencias')
  //     .then(res => {
  //       console.log(res.data)
  //       setData(res.data);
  //       setLoading(false)
  //     })
  // }, [])
    console.log(data)

  const findUbicaciones = db.coders.filter(experiencias => experiencias.voluntariado == ubi);
  console.log(findUbicaciones)
  if (loading) return <section>Cargando...</section>;

  return (
        <>
      < Filtro/>
      <StyledContainer style={{paddingTop:'4rem'}}>
     
                   
            <Grid container spacing={10}>
               {findUbicaciones.map((cod, index) => (
                 <Grid key={index} item xs={12} sm={6} md={4}>
                 <Link to={`/cartas/${cod.id}`} style={{textDecoration: "none"}}>  <Card  sx={{ maxWidth: 330}} style={{height:"34rem"}} >
                  <CardMedia
                            component="img"
                             height="370"
                            image={cod.img} />
                   <CardContent>
                    <Typography variant="body1" style={{fontWeight:"bold", color:"#284885" }}>  {cod.nombre} {cod.apellido} </Typography> 
             <Stack direction="row" spacing={1}>
                 {/* <Item>Chip One</Item>
                  <Item>Chip One</Item>
                  <Item>Chip One</Item> */}
                </Stack>
              <CardActions style={{justifyContent:"space-between"}} >
                <Typography style={{fontSize:"0.9rem", color:"#284885", fontWeight:"bold"}} >{cod.ubicacion}
                <Typography style={{fontSize:"0.8rem", color:"#2F2F2F", paddingBottom: '0.6rem', paddingTop: '0.6rem'}} >
                {cod.experiencia} de experiencia.
                  </Typography>
                  <Typography style={{fontSize:"0.8rem", color:"#2F2F2F"}} >
                {cod.tech}
                  </Typography>
                </Typography>
             <Link to={`/ContactCoder/${cod.id}`} style={{textDecoration: "none"}}> <Button style={{fontSize:"0.6rem", color:"#2F2F2F", fontWeight:"bold"}}>Contacta ahora</Button></Link>
                 </CardActions>
                </CardContent>
               
                     </Card> </Link> 
               </Grid> 
                 ))}
           </Grid>
             </StyledContainer>
      <Outlet/>
   </>
      )
  }
  export default CatalogoUbicacion