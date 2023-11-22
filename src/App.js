import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import CONFIG from "./config/config";
import { mockdata } from "./constants/products";
import SearchPage from "./SearchPage";
import NotFound from "./NotFound";
import Producto from "./Producto";

function App() {
  const [theproducts, setTheproducts] = useState(null);
  const [error, setError] = useState(null);
  const [cargado, setCargado] = useState(false);

  useEffect(() => {
    console.log("entra en useEffect");
    callServer();
  });

  const callServer = async () => {
    debugger;
    const url = CONFIG.server_url;
    if (CONFIG.use_server) {
      const response = await fetch(url);
      if (response.status === 200) {
        const data = await response.json();
        setTheproducts(data.products);
        setError(null);
      } else {
        console.log(response);
        setError({ estado: response.status, description: response.statusText });
        setTheproducts(null);
        console.log(error);
      }
    } else {
      setTheproducts(mockdata.products);
    }
  };

  return (
    <Container>
      <Header />
      {/* <nav style={{ borderBottom: "solid 1px", paddingBottom: "1rem" }}>
        <Link to="/">Home</Link>| <Link to="/products/1">products 1</Link> |{" "}
        <Link to="/rutarota">Ruta rota</Link>
      </nav> */}
      <Routes>
        <Route path="/" element={<SearchPage theproducts={theproducts} />} />
        <Route
          path="/products/:productId"
          element={<Producto theproducts={theproducts} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Container>
  );
}

export default App;
