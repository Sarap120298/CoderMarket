import * as React from "react";
import { styled, Box, Card, Typography, CardMedia, Grid } from "@mui/material";
import Tarjetacc from "../imagenes/visa_mc.jpg";
import Paypal from "../imagenes/paypal.png";
import { Outlet } from "react-router-dom";

const StyledBox = styled(Box)(({ theme }) => ({
  width: "100vw",
  height: "110vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#FFFAFA",
  marginTop: "25vh",
}));

const TitleTypography = styled(Typography)(({ theme }) => ({
  width: "100vw",
  backgroundColor: "#D9D9D9",
  color: "white",
  fontSize: 24,
  textAlign: "center",
  padding: "2vh",
  fontWeight: "Bold",
}));

const SubTypography = styled(Typography)(({ theme }) => ({
  color: "#284885",
  fontSize: 18,
  textAlign: "center",
  fontWeight: "bolder",
}));

const Parrafo = styled(Typography)(({ theme }) => ({
  fontSize: 12,
  textAlign: "justify",
}));

const StyledTextCard = styled(Card)(({ theme }) => ({
  width: "25vw",
  height: "55vh",
  display: "flex",
  flexDirection: "column",
  justify: "center",
  alignItem: "center",
  gap: "4vh",
  padding: "3vh",
  marginRight: "6rem",
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  borderRadius: "20px",
}));

const StyledCard = styled(Card)(({ theme }) => ({
  width: "85vw",
  height: "70vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: "#FFFAFA",
  alignItems: "center",
  gap: "5vh",
  padding: "5vh",
  boxShadow: "none",
}));

function PagoSeguro() {
  return (
    <>
      <StyledBox>
        <TitleTypography>Pago Seguro</TitleTypography>
        <StyledCard>
          <Typography>Los medios de pago aceptados serán: </Typography>

          <Box style={{ maginTop: "4rem" }}>
            <Grid style={{ display: "flex", justifyContent: "space-around" }}>
              <Grid item xs={4}>
                <StyledTextCard>
                  <CardMedia
                    component="img"
                    height="100"
                    width="20"
                    image={Tarjetacc}
                    alt="tarjeta credito"
                  />
                  <SubTypography>Tarjeta de Crédito o Débito </SubTypography>
                  <Parrafo>
                    Pagar tu compra directamente con tu tarjeta de crédito a
                    través de la plataforma Redsys.
                  </Parrafo>
                  <Parrafo>
                    Este tipo de pago viene asegurado por el BBVA, donde podrás
                    terminar el proceso en sus servidores seguros.
                  </Parrafo>
                </StyledTextCard>
              </Grid>

              <Grid item xs={4}>
                <StyledTextCard>
                  <CardMedia
                    component="img"
                    height="100"
                    width="50"
                    image={Paypal}
                    alt="Paypal logo"
                  />
                  <SubTypography>Pago por Paypal</SubTypography>
                  <Parrafo>
                    {" "}
                    Puedes seleccionar PayPal como la forma de pago al completar
                    la compra.
                  </Parrafo>
                  <Parrafo>
                    {" "}
                    Si ya eres cliente de PayPal, debes iniciar sesión con tus
                    datos de usuario y confirmar el pago. Si aún no eres usuario
                    de PayPal, debes crear una cuenta en PayPal y después
                    confirmar el pago.
                  </Parrafo>
                </StyledTextCard>
              </Grid>
            </Grid>
          </Box>
        </StyledCard>
      </StyledBox>
      <Outlet />
    </>
  );
}
export default PagoSeguro;
