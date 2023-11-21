import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Lista from "./Lista";
import Location from "./Location";
export default function SearchPage(props) {
  const [products, setProducts] = useState(props.theproducts);
  const [search, setSearch] = useState("");
  const [categoria, setCategoria] = useState();

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

  function handleChange  (e) {
    debugger;
    // setProducts(
    //   props.theproducts.filter((p) =>
    //     p.category.toLowerCase().includes(e.target.value)
    //   )
    // );
    // debugger;
    // console.log(products);
    setCategoria(e.target.value);
    console.log(categoria);
  };

  return (
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
                  onChange={(e) => setSearch(e.target.value)}
                />
              </Card.Text>
              <Button variant="primary" id="buscador" onClick={() => buscar()}>
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
  );
}
