import Card from "react-bootstrap/Card";
export default function Lista(props) {
  //   let listaProductos = props.listaProductos.products;
  return (
    <>
      <div className="d-flex flex-wrap">
        {props.listaProductos.map((item, index) => {
          return (
            <div className="m-3 unproducto" key={index}>
              <Card style={{ width: "18rem" }}>
                <Card.Header>{item.title}</Card.Header>
                <Card.Body>{item.description}</Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
    </>
  );
}
