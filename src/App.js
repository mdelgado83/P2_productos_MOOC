import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import NotFound from "./NotFound";
import Producto from "./Producto";
function App() {
  const [theproducts, setTheproducts] = useState(null);
  return (
    <Container>
      <Header />
      {/* <nav style={{ borderBottom: "solid 1px", paddingBottom: "1rem" }}>
        <Link to="/">Home</Link>| <Link to="/products/1">products 1</Link> |{" "}
        <Link to="/rutarota">Ruta rota</Link>
      </nav> */}
      <Routes>
        <Route path="/" element={<Home  theproducts={theproducts} setTheproducts={setTheproducts}/>} />
        <Route path="/products/:productId" element={<Producto theproducts={theproducts}/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Container>
  );
}

export default App;
