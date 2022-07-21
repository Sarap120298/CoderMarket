import { styled, Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

import ImageHero from "../imagenes/hero.png";

const HeroBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-evenly",
  backgroundImage: `url(${ImageHero})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  position: "relative",
}));

const TextBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    width: "64vw",
    height: "40vh",
    padding: "0.6rem",
  },

  backgroundColor: "rgba(221, 221, 221, 0.75)",
  color: "black",
  width: "60vw",
  height: "24vh",
  padding: "3.2rem",
  margin: "5rem",

  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "space-around",
}));

const StyledBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  color: "white",
  textAlign: "center",
}));

const StyledText = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    fontSize: "5vw",
  },
  fontWeight: "bolder",
  fontSize: "1.8vw",
}));

const StyledButton = styled(Button)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    width: "22rem",
    height: "4rem",
  },
  color: "white",
  fontSize: "1.4rem",
  // background: 'linear-gradient(to bottom,  #DE541E, #4b7f55)',
  top: "90%",

  backgroundColor: "#284885",
  "&:hover": {
    backgroundColor: "#D2DDF4",
    color: "black",
  },
  width: "30rem",
  height: "2rem",
  textTransform: "none",
  padding: "1.6rem",
}));

const Hero = () => {
  return (
    <>
      <HeroBox style={{ width: "100%", marginTop: "4.6rem", height: "90vh" }}>
        <StyledBox>
          <TextBox>
            <StyledText>
              ¿Buscas un desarrollador o desarrolladora para tu proyecto o
              empresa?
            </StyledText>
            <StyledText>¡Estás en el lugar adecuado!</StyledText>
            <StyledText>Encuentra el perfil que buscas en un click.</StyledText>
          </TextBox>
          <Link to="/cartas" style={{ textDecoration: "none" }}>
            {" "}
            <StyledButton>¡DESCUBRA NUESTROS CODERS!</StyledButton>
          </Link>
        </StyledBox>
      </HeroBox>
    </>
  );
};

export default Hero;
