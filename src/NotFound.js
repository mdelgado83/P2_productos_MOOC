import { useNavigate } from 'react-router';
import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import CONFIG from "./config/config";
import Loading from "./Loading";

export default function NotFound(props) {
  const [isLoading, setIsLoading] = useState(true);
  let navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(null);
    }, CONFIG.loading_timeout_ms);
  });
  return (
    <div>
       {isLoading && <Loading />}
      <img src={process.env.PUBLIC_URL + "/404.jpg"} alt="logo" />
      <br />
      <h1 id="info">Ruta no encontrada</h1>
       <Button id="volver" variant="primary" onClick={()=>{navigate("/")}}>Volver</Button>
    </div>
  );
}
