
import { useEffect, useState } from "react";
import NavBar from './NavBar';
import apiFunctions from './apiFunctions';
import ItemList from './ItemList';


function InstrumentList() {

    const [isLoading, setIsLoading] = useState(true);
    const [instrumentos, setInstrumento] = useState([null]);

    useEffect(() => {
        fetch('http://localhost:3000/instruments', {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            mode: 'cors'
        })
            .then(response => response.json())
            .then(data => {
                setInstrumento(data)
                setIsLoading(false)
            })
    }, []);


    if (isLoading) {
        return (
            <>
                <body style={{ backgroundColor: "#ededed" }}>
                    <NavBar></NavBar>
                    <div className="container" style={{ display: "flex", justifyContent: "center" }}>
                        <h1>Loading...</h1>
                    </div>
                </body>
            </>
        );
    }
    return (

        <body style={{ backgroundColor: "#ededed" }}>
            <NavBar></NavBar>
            <div className='container' style={{ display: "flex", justifyContent: "center"}}>
                <ItemList instrumentos={instrumentos}></ItemList>
            </div>
        </body>

    );
}

export default InstrumentList;
