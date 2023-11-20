import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Lista from "./Lista";
import Location from "./Location";
export default function SearchPage(props) {
  const [products, setProducts] = useState(props.theproducts);
  const [search, setSearch] = useState(null);

  const buscar = () => {
    console.log("CLIK buscar");
    if (search != null) {
      setProducts(props.theproducts.filter(p => p.title.toLowerCase().includes(search.toLowerCase())));
    } else {
      setProducts(props.theproducts);
    }
  }

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
                <Form.Control type="text" id="filtro" onChange={(e) => setSearch(e.target.value)} />
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
                <Form.Select aria-label="Default select example" id="selector">
                  <option>All</option>
                  <option value="smartphones">smartphones</option>
                  <option value="laptops">laptops</option>
                  <option value="fragrances">fragrances</option>
                  <option value="skincare">skincare</option>
                  <option value="groceries">groceries</option>
                  <option value="home-decoration">home-decoration</option>
                  <option value="furniture">furniture</option>
                  <option value="tops">tops</option>
                  <option value="womens-dresses">womens-dresses</option>
                  <option value="womens-shoes">womens-shoes</option>
                  <option value="mens-shirts">mens-shirts</option>
                  <option value="mens-shoes">mens-shoes</option>
                  <option value="mens-watches">mens-watches</option>
                  <option value="womens-watches">womens-watches</option>
                  <option value="womens-bags">womens-bags</option>
                  <option value="womens-jewellery">womens-jewellery</option>
                  <option value="sunglasses">sunglasses</option>
                  <option value="automotive">automotive</option>
                  <option value="lighting">lighting</option>
                </Form.Select>
              </Card.Text>
              <Button variant="primary">Filtrar</Button>
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
