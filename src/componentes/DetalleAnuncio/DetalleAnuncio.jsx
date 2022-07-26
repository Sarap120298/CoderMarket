import React from "react";
import { Box, Typography, Button, styled } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import db from "../../db.json";

const StyledTitulo = styled(Typography)(({ theme }) => ({
  fontSize: "2.8rem",
  color: "#2F2F2F",
  fontWeight: "bold",

  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.up("sm")]: {
    marginBottom: "2rem",
  },
  [theme.breakpoints.up("xl")]: {
    marginBottom: "1rem",
  },
}));
const ResponsiveBox = styled(Box)(({ theme }) => ({
  display: "flex",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },

  [theme.breakpoints.up("sm")]: {
    justifyContent: "center",
    width: "100vw",
  },
}));

const StyledImg = styled("img")(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    height: "32vh",
  },
  borderRadius: "5%",
  width: "18rem",
  [theme.breakpoints.up("sm")]: {
    height: "26vh",
  },
  [theme.breakpoints.up("xl")]: {
    height: "38vh",
  },
}));
const StyledButton = styled(Button)(({ theme }) => ({
  color: "white",
  fontSize: "1.4rem",
  borderRadius: "15px",
  marginTop: "2rem",
  backgroundColor: "#285585",
  "&:hover": {
    backgroundColor: "#B9BFBF",
  },
  "&:focus": {
    backgroundColor: "#B9BFBF",
  },
  width: "17rem",
  textTransform: "none",
}));

const DetalleAnuncio = () => {
  const { id } = useParams();

  const findCoders = db.coders.filter(
    (coders) => coders.id === parseInt(id)
  );

  return (
    <>
      {findCoders.map((cod, index) => (
        <Box
          key={index}
          style={{ height: "96vh" }}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "10rem",
          }}
        >
          <Box sx={{}}>
            <ResponsiveBox sx={{}}>
              <Box
                sx={{ border: 30, fontWeight: "bold" }}
                style={{
                  paddingLeft: "1rem",
                  paddingRight: "1rem",

                  borderColor: "#F6F6F6",
                  background: "#F6F6F6",
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                  borderRadius: "20px",
                  height: "50vh",
                  width: "60rem",
                  color: "#2F2F2F",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                }}
              >
                <Box>
                  <StyledImg src={cod.img} alt="" />
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "left",
                    alignContent: "left",
                    justifyContent: "left",
                  }}
                >
                  <StyledTitulo variant="h5">
                    {cod.nombre} {cod.apellido}
                  </StyledTitulo>

                  <Typography
                    sx={{
                      fontWeight: "bold",
                      fontSize: "1.1rem",
                      marginTop: "1rem",
                      width: "30rem",
                      display: "flex",
                      flexDirection: "column",
                    }}
                    variant="body1"
                  >
                    {cod.presentacion}

                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        alignContent: "center",
                        justifyContent: "center",
                        width: "30rem",
                      }}
                    >
                      <Link
                        to={`/ContactCoder/${cod.id}`}
                        style={{ textDecoration: "none" }}
                      >
                        <StyledButton variant="text" color="primary">
                          Contacta Conmigo
                        </StyledButton>
                      </Link>
                    </Box>
                  </Typography>
                </Box>
              </Box>
            </ResponsiveBox>
          </Box>
        </Box>
      ))}
      <Outlet />
    </>
  );
};

export default DetalleAnuncio;