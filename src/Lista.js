import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router";
export default function Lista(props) {
  let navigate = useNavigate();
  return (
    <>
      <div className="d-flex flex-wrap">
        {props.listaProductos.map((item, index) => {
          return (
            <div className="unproducto" key={index}>
              <div className="m-3" key={index}>
                <Card style={{ width: "18rem" }}>
                  
                <img  src={item.images[0]} alt="imagen" className="imagenProducto"/>
                  <Card.Header className="text-center" ><b>{item.title}</b></Card.Header>
                  <Card.Body>
                    {item.description}
                    <div className="col text-center mt-3">
                      <Button
                        variant="primary"
                        onClick={() => {
                          navigate("/products/" + index);
                        }}
                      >
                        Ver
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
