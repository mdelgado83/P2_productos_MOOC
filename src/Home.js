import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import SearchPage from "./SearchPage";
import CONFIG from "./config/config";
import { mockdata } from "./constants/products";
export default function Home(props) {
    const [isLoading, setIsLoading] = useState(true);
    const [theproducts, setTheproducts] = useState(null);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        setTimeout(() => {
            callServer(); 
        }, CONFIG.loading_timeout_ms);
    });

    const  callServer = async () => {
      const url = CONFIG.server_url;
      CONFIG.use_server
        ? fetch(url)
            .then((response) => {
              if (response.status === 200) {
                return response.json();
              } else {
                const resp = response.json().then((data) => data);
                resp.then((data) => setError(data));
              }
            })
            .then((data) => {
              setTheproducts(data.products);
            })
            .catch((_error) => {
              setError(
                JSON.stringify({
                  cod: 400,
                  message: "Bad request",
                })
              );
            })
        : setTheproducts(mockdata.products);
  
      setIsLoading(false);
    };
  

    return (
        <>{isLoading === true ? <Loading /> : <SearchPage theproducts={theproducts} callServer={callServer} />}
        </>
    );
}