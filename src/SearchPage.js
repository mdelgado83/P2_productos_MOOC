import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Lista from "./Lista";
import Loading from "./Loading";
import Location from "./Location";
import CONFIG from "./config/config";
export default function SearchPage(props) {
  const [products, setProducts] = useState(props.theproducts);
  const [search, setSearch] = useState("");
  const [categoria, setCategoria] = useState("all");
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    debugger;
    console.log('useefect 2');
    setTimeout(() => {
      debugger;
      setIsLoading(null);
    }, CONFIG.loading_timeout_ms);
  },[]);

  useEffect(() => {
    debugger;
    // console.log('useefect 3');
    debugger;
    setProducts(props.theproducts);
    // console.log(products);
  },[isLoading]);

  const buscar = () => {
    debugger;
    console.log("CLIK buscar");
    if (search !== "") {
      setProducts(
        props.theproducts.filter((p) =>
          p.title.toLowerCase().includes(search.toLowerCase())
        )
      );
    } else {
      setProducts(props.theproducts);
    }
  };

  function handleChange(e) {
    console.log("CLIK handleChange");

    let aaa = props.theproducts.filter((p) =>
      p.category.toLowerCase().includes(e.target.value)
    );
    setProducts(aaa);
    setCategoria(e.target.value);
  }

  return (
    <>
      {isLoading && <Loading />}
      <div>
        <div className="row justify-content-md-center">
          <div className="col text-center">
            <Location />
          </div>
        </div>
        <div className="row justify-content-md-center">
          <div className="col-4 text-center">
            <h2 id="catálogo”">Catálogo</h2>
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <Card>
              <Card.Header>Buscar</Card.Header>
              <Card.Body>
                <Card.Text>
                  <Form.Control
                    type="text"
                    id="filtro"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </Card.Text>
                <Button
                  variant="primary"
                  id="buscador"
                  onClick={() => buscar()}
                >
                  Buscar
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-6">
            <Card>
              <Card.Header>Filtrar</Card.Header>
              <Card.Body>
                <Card.Text>
                  <Form.Select
                    aria-label="Default select example"
                    id="selector"
                    value={categoria}
                    onChange={handleChange}
                  >
                    <option>All</option>
                    {props.theproducts &&
                      Array.from(
                        new Set(props.theproducts.map((item) => item.category))
                      ).map((categoria, index) => {
                        return (
                          <option key={index} value={categoria}>
                            {categoria}
                          </option>
                        );
                      })}
                  </Form.Select>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
        <br></br>
        <br></br>
        <div id="productosresultados">
          {products && <Lista listaProductos={products} />}
        </div>
      </div>
    </>
  );
}
