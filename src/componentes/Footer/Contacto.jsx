import React from "react";
import { Box, Typography, styled } from "@mui/material";
import { Outlet } from "react-router-dom";

const BoxContacto = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  justifyContent: "space-evenly",
  alignItems: "center",
  backgroundColor: "white",
  color: "#284885",
  width: "60vw",
  height: "60vh",
  borderRadius: "10px",
  boxShadow: "0 4px 4px rgba(0, 0, 0, 0.25)",
  marginTop: "5rem",
  fontWeight: "bolder",
}));

const Mapa = styled("iFrame")(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    width: "12rem",
  },
  [theme.breakpoints.up("sm")]: {
    width: "40vw",
  },
  [theme.breakpoints.up("xl")]: {},
}));

const Contact = () => {
  return (
    <>
      <Box
        style={{
          height: "100vh",
          display: "flex",
          width: "100vw",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <BoxContacto className="contact-page">
          <Box>
            <Mapa
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=Avda.%20Bogatell%2082,%20barcelona&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
            />
          </Box>
          <Box
            className="contact-info"
            style={{
              display: "flex",
              flexDirection: "column",
              flexWrap: "wrap",
              justifyContent: "center",
              marginLeft: "30px",
            }}
          >
            <Box
              className="contact-card"
              style={{
                display: "flex",
                flexDirection: "column",
                flexWrap: "wrap",
              }}
            >
              <Typography variant="body">Teléfono: 93 123 45 67</Typography>
              <Typography variant="body">
                Correo: info@codermarket.com
              </Typography>
              <Typography variant="body">
                Dirección: Avda. Bogatell 82, 08005 Barcelona
              </Typography>
            </Box>
          </Box>
        </BoxContacto>
      </Box>
      <Outlet />
    </>
  );
};

export default Contact;
