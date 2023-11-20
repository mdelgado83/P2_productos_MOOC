import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import SearchPage from "./SearchPage";
import CONFIG from "./config/config";
import { mockdata } from "./constants/products";
export default function Home(props) {
    const [isLoading, setIsLoading] = useState(true);
    const [theproducts, setTheproducts] = useState(null);
    useEffect(() => {
        console.log('entra');
        setTimeout(() => {
            console.log('time out');
            callServer(); 
        }, CONFIG.loading_timeout_ms);
    });

    const callServer = async () => {
        console.log("CLIK");
        setTheproducts(mockdata.products);
        setIsLoading(false);
    }

    return (
        <>{isLoading === true ? <Loading /> : <SearchPage theproducts={theproducts} callServer={callServer} />}
        </>
    );
}