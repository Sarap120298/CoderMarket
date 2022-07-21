import React from "react";
import {
  List,
  ListItem,
  styled,
  Typography,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";

const StyledListItem = styled(ListItem)(({ theme }) => ({
  height: "rem",
  textAlign: "center",
  display: "flex",
  justifyContent: "center",
  borderRadius: "2rem",

  [theme.breakpoints.down("sm")]: {
    color: "#FFFAFA",
    width: "5rem",
  },

  [theme.breakpoints.up("sm")]: {
    backgroundColor: "#FFFAFA",
    width: "10rem",
  },
}));

const TextIconButtons = styled(Typography)(({ theme }) => ({
  fontSize: "1rem",
  color: "black",
}));

const FooterNavMenu = () => {
  return (
    <>
      <List
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          paddingBottom: "0.6rem",
          paddingTop: "0.6rem",
          width: "100vw",
        }}
      >
        <StyledListItem sx={{ marginRight: "1rem" }}>
          <Link to="/ComoFunciona" style={{ textDecoration: "none" }}>
            <Button variant="body1">
              <TextIconButtons>¿CÓMO FUNCIONA?</TextIconButtons>
            </Button>
          </Link>
        </StyledListItem>

        <StyledListItem sx={{ marginRight: "1rem" }}>
          <Link to="/QuienesSomos" style={{ textDecoration: "none" }}>
            <Button variant="body1">
              <TextIconButtons>¿QUIÉNES SOMOS?</TextIconButtons>
            </Button>
          </Link>
        </StyledListItem>

        <StyledListItem sx={{ marginRight: "1rem" }}>
          <Link to="/Contacto" style={{ textDecoration: "none" }}>
            <Button variant="body1">
              <TextIconButtons>CONTACTO</TextIconButtons>
            </Button>
          </Link>
        </StyledListItem>

        <StyledListItem>
          <Link to="/PagoSeguro" style={{ textDecoration: "none" }}>
            <Button variant="body1">
              <TextIconButtons>PAGO SEGURO</TextIconButtons>
            </Button>
          </Link>
        </StyledListItem>
      </List>
    </>
  );
};

export default FooterNavMenu;
