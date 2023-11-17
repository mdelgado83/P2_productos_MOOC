import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import { Link, Route, Routes } from "react-router-dom";
import './App.css';
import Header from "./Header";
import NotFound from "./NotFound";
import Producto from "./Producto";
import SearchPage from "./SearchPage";
function App() {
  return (
    <Container>
      <Header />
      <nav style={{ borderBottom: "solid 1px", paddingBottom: "1rem" }}>
        <Link to="/">Home</Link>|{" "}
        <Link to="/products/1">products 1</Link> |{" "}
        <Link to="/rutarota">Ruta rota</Link>
      </nav>
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/products/:productId" element={<Producto />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Container>
  );
}

export default App;
