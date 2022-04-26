
import {Col, Container, Row, Image } from 'react-bootstrap';
import json from '../data/instrumentos.json'



function Home() {

    async function getData(){
        let response = await fetch('localhost:3000/instruments')
        response = await response.json()
        return response
    }
    function getPrice(type){
        if (type === "G"){
            return <p style={{color: "green"}}>Envío gratis a todo el país</p>
        }
        return <p style={{color: "orange"}}>Costo de envio interior de Argentina: ${type}</p>
    }
    return (
        <>
        <Container className='mt-5'>
            <div>
            {getData().map(instrumento => (
                <> 
                <div className="w-75 p-3">
                    <Row>
                        <Col sm={3}>     
                            <a href={`DetalleInstrumento/${instrumento.id}`}><Image src={process.env.PUBLIC_URL+"/img/"+instrumento.imagen} ></Image></a>
                        </Col>
                        <Col sm={9}>
                    
                        <h4 class>
                        {instrumento.instrumento}
                        </h4>

                        <h3> 
                        $ {instrumento.precio}  
                        </h3>
                        
                        {getPrice(instrumento.costoEnvio)}
                       
                        <p>
                            {instrumento.cantidadVendida} Vendidos
                        </p>
                   
                        </Col>        
                    </Row>     
                    <hr></hr>
                </div>       
                </>           
            ))}  
            </div>
            </Container>        
        </>
    );
}

export default Home;
