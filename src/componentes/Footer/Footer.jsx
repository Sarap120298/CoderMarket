import React from "react";
import { AppBar, styled, Toolbar } from "@mui/material";
import FooterNavMenu from "./FooterNavMenu.jsx";

const StyledFooter = styled(AppBar)(({ theme }) => ({
  backgroundColor: "#FFFAFA",
  boxShadow: "none",
  top: "auto",
  bottom: 0,
}));

const Footer = () => {
  return (
    <StyledFooter position="static2">
      <Toolbar>
        <FooterNavMenu />
      </Toolbar>
    </StyledFooter>
  );
};

export default Footer;
