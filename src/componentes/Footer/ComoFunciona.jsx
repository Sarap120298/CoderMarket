import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import Typography from "@mui/material/Typography";
import PersonIcon from "@mui/icons-material/Person";
import PaymentIcon from "@mui/icons-material/Payment";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { styled, Card } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";


const StyledDot = styled(TimelineDot)(({ theme }) => ({
  color: "#284885",
}));

const TitleTypography = styled(Typography)(({ theme }) => ({
  backgroundColor: "#284885",
  color: "#FFFAFA",
  fontSize: 24,
  textAlign: "center",
  padding: "3vh",
  marginTop: "3vh",
}));

const SubTypography = styled(Typography)(({ theme }) => ({
  color: "#284885",
  fontSize: 18,
}));

const Parrafo = styled(Typography)(({ theme }) => ({
  fontSize: 12,
  align: "justify",
}));

const StyledCard = styled(Card)(({ theme }) => ({
  marginTop: "10vh",
  height: "150vh",
  display: "flex",
  flexDirection: "column",
  justify: "center",
  alignItem: "center",
  backgroundColor: "#FFFAFA",
}));

const StyledBox = styled(Box)(({ theme }) => ({
  height: "100vh",
  width: "100vw",
  display: "flex",
  flexDirection: "column",
  justify: "center",
  alignItem: "center",
}));

const StyledTitle = styled(Box)(({ theme }) => ({
  color: "#284885",
  fontSize: 24,
  textAlign: "center",
  fontWeight: "bolder",
  marginTop: "7vh",
}));


export default function ComoFunciona() {
  return (
    <>
      <StyledBox>
        <StyledCard>
          <TitleTypography>¿Cómo Funciona?</TitleTypography>
          <Box style={{ display: "flex", justifyContent: "center" }}>
            <Box
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <StyledTitle>Coders</StyledTitle>
              <Timeline
                style={{ height: "50vh", display: "flex", justify: "center" }}
                position="alternate"
              >
                <TimelineItem>
                  <TimelineOppositeContent
                    sx={{ m: "auto 0" }}
                    align="right"
                    variant="body2"
                    color="text.secondary"
                  >
                    Paso 1
                  </TimelineOppositeContent>

                  <TimelineSeparator>
                    <StyledDot variant="outlined">
                      <PersonIcon />
                    </StyledDot>
                    <TimelineConnector />
                  </TimelineSeparator>

                  <TimelineContent sx={{ py: "12px", px: 2 }}>
                    <SubTypography variant="h6" component="span">
                      Regístrate
                    </SubTypography>
                    <Parrafo>
                      <Link to="/registro" style={{ textDecoration: "none" }}>
                        nuevo registro
                      </Link>
                    </Parrafo>
                  </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                  <TimelineOppositeContent
                    sx={{ m: "auto 0" }}
                    variant="body2"
                    color="text.secondary"
                  >
                    Paso 2
                  </TimelineOppositeContent>

                  <TimelineSeparator>
                    <TimelineConnector />
                    <StyledDot variant="outlined">
                      <LaptopMacIcon />
                    </StyledDot>
                    <TimelineConnector />
                  </TimelineSeparator>

                  <TimelineContent sx={{ py: "12px", px: 2 }}>
                    <SubTypography variant="h6" component="span">
                      Crea tu perfil
                    </SubTypography>
                  </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                  <TimelineOppositeContent
                    sx={{ m: "auto 0" }}
                    variant="body2"
                    color="text.secondary"
                  >
                    Paso 3
                  </TimelineOppositeContent>

                  <TimelineSeparator>
                    <TimelineConnector />
                    <StyledDot variant="outlined">
                      <PaymentIcon />
                    </StyledDot>
                  </TimelineSeparator>

                  <TimelineContent sx={{ py: "12px", px: 2 }}>
                    <SubTypography variant="h6" component="span">
                      Realiza tu suscripción
                    </SubTypography>
                    <Parrafo>
                      <Link to="/PagoSeguro" style={{ textDecoration: "none" }}>
                        + info
                      </Link>
                    </Parrafo>
                  </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                  <TimelineOppositeContent
                    sx={{ m: "auto 0" }}
                    variant="body2"
                    color="text.secondary"
                  >
                    Paso 4
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineConnector />
                    <StyledDot variant="outlined">
                      <CheckCircleIcon />
                    </StyledDot>
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: "12px", px: 2 }}>
                    <SubTypography>Publica tu anuncio</SubTypography>
                  </TimelineContent>
                </TimelineItem>
              </Timeline>
            </Box>

            <Box>
              <StyledTitle>Empresas</StyledTitle>

              <Timeline
                style={{ height: "50vh", display: "flex", justify: "center" }}
                position="alternate"
              >
                <TimelineItem>
                
                  <TimelineOppositeContent
                    sx={{ m: "auto 0" }}
                    align="right"
                    variant="body2"
                    color="text.secondary"
                  >
                    Paso 1
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <StyledDot variant="outlined">
                      <LaptopMacIcon />
                    </StyledDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: "12px", px: 2 }}>
                    <SubTypography variant="h6" component="span">
                      Busca tu coder
                    </SubTypography>
                    <Parrafo>
                      consulta nuestro
                      <Link to="/cartas" style={{ textDecoration: "none" }}>
                        {" "}
                        tablón.
                      </Link>
                    </Parrafo>
                  </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                  <TimelineOppositeContent
                    sx={{ m: "auto 0" }}
                    variant="body2"
                    color="text.secondary"
                  >
                    Paso 2
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineConnector />
                    <StyledDot variant="outlined">
                      <SearchIcon />
                    </StyledDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: "12px", px: 2 }}>
                    <SubTypography variant="h6" component="span">
                      Filtra
                    </SubTypography>
                    <Parrafo>
                      utiliza la barra de busqueda para filtar{" "}
                      <Link to="/cartas" style={{ textDecoration: "none" }}>
                        Catálogo
                      </Link>
                    </Parrafo>
                  </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                  <TimelineOppositeContent
                    sx={{ m: "auto 0" }}
                    variant="body2"
                    color="text.secondary"
                  >
                    Paso 3
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineConnector />
                    <StyledDot variant="outlined">
                      <PersonIcon />
                    </StyledDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: "12px", px: 2 }}>
                    <SubTypography variant="h6" component="span">
                      Encuentra tu coder
                    </SubTypography>
                    <Parrafo></Parrafo>
                  </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                  <TimelineOppositeContent
                    sx={{ m: "auto 0" }}
                    variant="body2"
                    color="text.secondary"
                  >
                    Paso 4
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineConnector />
                    <StyledDot variant="outlined">
                      <CheckCircleIcon />
                    </StyledDot>
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: "12px", px: 2 }}>
                    <SubTypography variant="h6" component="span">
                      Contacta
                    </SubTypography>
                    <Parrafo>a través del formulario</Parrafo>
                  </TimelineContent>
                </TimelineItem>
              </Timeline>
            </Box>
          </Box>
        </StyledCard>
      </StyledBox>
      <Outlet />
    </>
  );
}
