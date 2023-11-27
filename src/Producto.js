import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { useNavigate, useParams } from "react-router";
import Loading from "./Loading";
import Location from "./Location";
import CONFIG from "./config/config";
import Card from "react-bootstrap/Card";
export default function Producto(props) {
  const [isLoading, setIsLoading] = useState(true);
  let navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, CONFIG.loading_timeout_ms);
  });
  let { productId } = useParams();
  return (
    <>
      {isLoading === true ? (
        <Loading />
      ) : (
        <>
          <div className=" row justify-content-md-center">
            <div className="col text-center">
              <Location />
            </div>
          </div>
          <Card>
            <Card.Header id="titulo" className="display-4">
              <b>{props.theproducts[productId].title}</b>
            </Card.Header>
            <Card.Body>
              <div className="row">
                <div className="col-6">
                  <img
                    src={props.theproducts[productId].images[0]}
                    alt="imagen"
                  />
                </div>
                <div className="col-6">
                  <p>Description: <b>{props.theproducts[productId].description}</b></p>
                  <p>Precio: {props.theproducts[productId].price} &euro;</p>
                  <p>Rating: {props.theproducts[productId].rating}</p>
                  <p>Stoct: {props.theproducts[productId].stock}</p>
                </div>
              </div>
              <div className="col text-center mt-3">
                <Button
                  className="mt-5"
                  variant="primary"
                  id="volver"
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  Volver
                </Button>
              </div>
            </Card.Body>
          </Card>
          {/* <h1 id="titulo">{props.theproducts[productId].title}</h1> */}
        </>
      )}
    </>
  );
}
