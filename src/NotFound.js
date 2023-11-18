import { useNavigate } from 'react-router';
import Button from "react-bootstrap/Button";
export default function NotFound(props) {
  let navigate = useNavigate();
  return (
    <div>
      <img src={process.env.PUBLIC_URL + "/404.jpg"} alt="logo" />
      <br />
      <h1 id="info">Ruta no encontrada</h1>
       <Button id="volver" variant="primary" onClick={()=>{navigate("/")}}>Volver</Button>
    </div>
  );
}
