import React, { useState, useEffect} from 'react';
import Catalogo from '../../Catalogo';
import { Button, Box, Menu, MenuItem } from '@mui/material';
import {Link, Outlet,} from 'react-router-dom'
import axios from "axios";

const voluntariado= ['Si', 'No']
function DropdownUbicacion() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = (event) => {
    setAnchorEl(null);
  };


  return (
    <>
    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
      <Button style={{ fontSize: "0.8rem", textTransform: 'capitalize', color: "white",backgroundColor:"#284885", fontWeight: "bold" }} id="basic-button" aria-controls={open ? 'basic-menu' : undefined} aria-haspopup="true" aria-expanded={open ? 'true' : undefined} onClick={handleClick}>Voluntariado</Button>
      <Menu id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClose} MenuListProps={{ 'aria-labelledby': 'basic-button', }}>
      <Link to={`/ubicacion/${voluntariado[0]}`}  style={{textDecoration:"none"}}><MenuItem style={{ fontSize: "0.8rem", color: "#2f2f2f", fontWeight: "bold" }} onClick={handleClose}>{voluntariado[0]}</MenuItem></Link>
      <Link to={`/ubicacion/${voluntariado[1]}`}  style={{textDecoration:"none"}}><MenuItem style={{ fontSize: "0.8rem", color: "#2f2f2f", fontWeight: "bold" }} onClick={handleClose}>{voluntariado[1]}</MenuItem></Link>
      {/* <Link to={`/ubicacion/${ubicaciones[2]}`}  style={{textDecoration:"none"}}><MenuItem style={{ fontSize: "0.8rem", color: "#2f2f2f", fontWeight: "bold" }} onClick={handleClose}>{ubicaciones[2]}</MenuItem></Link> */}
      </Menu>
    </Box>
    <Outlet/>
    </>

  );
}
export default DropdownUbicacion;