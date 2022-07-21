import React from "react";

import { Box } from "@mui/material";
import DropdownVoluntariado from "./Voluntariado/DropdownVoluntariado";

function Filtro() {
  return (
    <>
      <Box
        style={{
          marginTop: "10rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <DropdownVoluntariado />
      </Box>
    </>
  );
}
export default Filtro;
