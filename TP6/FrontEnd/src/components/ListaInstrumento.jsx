
import {Col, Row, Image } from 'react-bootstrap';
import { useEffect, useState } from "react";
import NavBar from './NavBar';
import apiFunctions from './funcionesApi';

function ListaInstrumento() {
    
    const [isLoading, setIsLoading] = useState(true);
    const [instrumentos, setInstrumento] = useState([]);

    useEffect(() => {
        setInstrumento(apiFunctions.getInstruments())
        console.log(apiFunctions.getInstruments())
        setIsLoading(false)
    }, []);


    function getPrice(type) {
        if (type === "G") {
            return <p style={{ color: "green" }}>Envío gratis a todo el país</p>
        }
        return <p style={{ color: "orange" }}>Costo de envio interior de Argentina: ${type}</p>
    }

    let instrumento = []
    if(!isLoading){
        instrumentos.forEach(ins => {
            instrumento.push(
                <>
                     <div className="w-100 p-3">
                        <Row>
                            <Col sm={3}>     
                                <a href={`DetalleInstrumento/${ins.id}`}><Image src={process.env.PUBLIC_URL+"/img/"+ins.imagen}></Image></a>
                            </Col>
                            <Col sm={9}>
                        
                            <h4 class>
                            {ins.instrumento}
                            </h4>
    
                            <h3> 
                            $ {ins.precio}  
                            </h3>
                            
                            {getPrice(ins.costoEnvio)}
                           
                            <p>
                                {ins.cantidadVendida} Vendidos
                            </p>
                       
                            </Col>        
                        </Row>     
                        <hr></hr>
                    </div>  
                </>
            )
        })
    }
    
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

    return (
        <>
        <NavBar></NavBar>
        <div className='container mt-5' style={{display: "flex", justifyContent: "center"}}>
            <div>
                {instrumento}
            </div>
        </div>        
        </>
    );
}

export default ListaInstrumento;
