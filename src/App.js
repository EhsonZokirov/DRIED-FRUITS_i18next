import React from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import Error404 from "./components/404/Error404";
import About from "./components/About/About";
import Catalog from "./components/Catalog/Catalog";
import Contacts from "./components/Contacts/Contacts";
import Delivery from "./components/Delivery/Delivery";
import Glavnaya from "./components/Glavnaya/Glavnaya";
import Layout from "./components/Layout/Layout";
import Market from "./components/Market/Market";
// import { useTranslation } from "react-i18next";

function App() {

  return (
    <div className="container mx-auto">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/Glavnaya" element={<Glavnaya />} />
          <Route index element={<Glavnaya />} />
          <Route path="/Contacts" element={<Contacts />} />
          <Route path="/Delivery" element={<Delivery />} />
          <Route path="/Catalog" element={<Catalog />} />
          <Route path="/Market" element={<Market />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contacts" element={<Contacts />} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </div>
  );
}
export default App;
