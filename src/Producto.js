import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Location from "./Location";
export default function Producto(props) {

    return (
        <>
            <Row className="justify-content-md-center">
                <Col sm={4} className='text-center'>
                    <Location />
                </Col>
            </Row>
            <h1>pagina producto</h1>
            
        </>
    );
}