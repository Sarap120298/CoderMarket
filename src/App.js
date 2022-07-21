import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./componentes/Footer/Footer";
import NavBar from "./componentes/NavBar/NavBar";
import theme from "./componentes/Styles/Theme";
import DetalleAnuncio from "./componentes/DetalleAnuncio/DetalleAnuncio";
import { ThemeProvider } from "@mui/material";
import Catalogo from "./componentes/Catalogo/Catalogo";
import Home from "./componentes/Home/Home";
import Login from "./componentes/Login/Login";
import Registro from "./componentes/registro/Registro";
import CatalogoVoluntariado from "./componentes/Catalogo/Filtros/Voluntariado/CatalogoVoluntariado";
import ComoFunciona from "./componentes/Footer/ComoFunciona";
import InfoEmpresa from "./componentes/Footer/InfoEmpresa";
import PagoSeguro from "./componentes/Footer/PagoSeguro";
import Contact from "./componentes/Footer/Contacto";
import ContactCoder from "./componentes/ContactCoder/ContactCoder";
import db from "./db.json";

function App() {
  const [search, setSearch] = useState("");
  const searchers = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };

  const filterCatalogo = db.coders.filter((card) => {
    return Object.keys(card).some((k) =>
      card[k].toString().toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div className="App">

          <Routes>
            <Route path="/" element={<NavBar searcher={searchers} />}>
              <Route index element={<Home />} />
              <Route path="/cartas/:id" element={<DetalleAnuncio />} />
              <Route
                path="/cartas"
                element={<Catalogo data={filterCatalogo} />}
              />
             
              <Route path="/destacadas/:id" element={<DetalleAnuncio />} />
              <Route path="/voluntariado/:vol" element={<CatalogoVoluntariado />} />
              <Route path="/ComoFunciona" element={<ComoFunciona />} />
              <Route path="/QuienesSomos" element={<InfoEmpresa />} />
              <Route path="/Contacto" element={<Contact />} />
              <Route path="/PagoSeguro" element={<PagoSeguro />} />
            </Route>
            <Route path="/registro" element={<Registro />} />
            <Route path="/login" element={<Login />} />
            <Route path="/ContactCoder/:id" element={<ContactCoder />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}
export default App;
