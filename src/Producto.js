import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { useNavigate, useParams } from 'react-router';
import Loading from "./Loading";
import Location from "./Location";
import CONFIG from "./config/config";
export default function Producto(props) {
    const [isLoading, setIsLoading] = useState(true);
    let navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, CONFIG.loading_timeout_ms);
    });
    let {productId}=useParams();
    return (
        <>{isLoading === true ? <Loading /> : <>
            <div className=" row justify-content-md-center">
                <div className='col text-center'>
                    <Location />
                </div>
            </div>
            <h1 id="titulo">{props.theproducts[productId].title}</h1>
            <Button variant="primary" id="volver" onClick={() => {
                navigate('/');
            }} >
                Volver
            </Button>
        </>}
        </>
    );
}

