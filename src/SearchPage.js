import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Location from "./Location";
import Lista from "./Lista";
export default function SearchPage(props) {
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
                <Form.Control type="text" id="filtro" />
              </Card.Text>
              <Button
                variant="primary"
                id="buscador"
                onClick={() => props.callServer()}
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
                <Form.Control type="text" />
              </Card.Text>
              <Button variant="primary">Filtrar</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
      <br></br>
      <br></br>
      <div id="productosresultados">
        {props.theproducts && <Lista listaProductos={props.theproducts} />}
      </div>
    </div>
  );
}
