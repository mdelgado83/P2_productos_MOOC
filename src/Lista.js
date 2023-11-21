import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from 'react-router';
export default function Lista(props) {
  let navigate = useNavigate();
  return (
    <>
      <div className="d-flex flex-wrap">
        {props.listaProductos.map((item, index) => {
          return (
            <div className="m-3 unproducto" key={index}>
              <Card style={{ width: "18rem" }}>
                <Card.Header>{item.title}</Card.Header>
                <Card.Body>{item.description}
                  <br></br>
                  <Button variant="primary" onClick={() => {
                    navigate('/products/'+index);
                  }} >
                    Ver
                  </Button>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
    </>
  );
}
