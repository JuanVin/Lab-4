import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import NavBar from "./NavBar"
import apiFunctions from "./apiFunctions";
import DetailList from "./DetailList";

function InstrumentDetail() {

    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [detalleInstrumento, setDetalleInstrumento] = useState(null);

    useEffect(() => {/*
        let fetchData = apiFunctions.getInstrumetById(id)
        setDetalleInstrumento(fetchData)
        setIsLoading(false)*/
        fetch(`http://localhost:3000/instruments/${id}`)
            .then(response => response.json())
            .then(data => {
                setDetalleInstrumento(data)
                setIsLoading(false)
            })
    }, []);

    if (isLoading) {
        return (
            <body style={{ backgroundColor: "#ededed" }}>
                <NavBar></NavBar>
                <div className="container" style={{ display: "flex", justifyContent: "center" }}>
                    <h1>Loading...</h1>
                </div>
            </body>
        );
    }
    if (!isLoading) console.log(detalleInstrumento)
    return (
        <>
            <body style={{ backgroundColor: "#ededed" }}>
                <NavBar></NavBar>
                <div className="container" style={{ display: "flex", justifyContent: "center" }}>
                    <DetailList data={detalleInstrumento}></DetailList>
                </div>
            </body>
        </>
    )
}

export default InstrumentDetail