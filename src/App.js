import React from "react";
import Header from "./components/NavBar/Header";
import Footer from "./components/Footer/Footer";
import {
  Contacto,
  Empresas,
  Inicio,
  Particulares,
  Presupuestos,
} from "./views/index";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/Particulares" element={<Particulares />} />
          <Route path="/Empresas" element={<Empresas />} />
          <Route path="/Contacto" element={<Contacto />} />
          <Route path="/Presupuestos" element={<Presupuestos />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
