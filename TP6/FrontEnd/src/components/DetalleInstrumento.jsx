import {useParams} from "react-router-dom"
import json from '../data/instrumentos.json'
import { Row, Col , Button, Table} from 'react-bootstrap'
import NavBar from "./NavBar"
const { instrumentos } = json



function DetalleInstrumento(){

    const { id } = useParams();
    const instrumento = []

    async function getData(){
        let response = await fetch('localhost:3000/instruments/'+id)
        response = await response.json()
        console.log(response)
        return response
    }

    function getPrice(type){

        if (type === "G"){
            return <p style={{color: "green"}}>Envío gratis a todo el país</p>
        }
        return <p style={{color: "orange"}}>Costo de envio interior de Argentina: ${type}</p>
    }

    getData().forEach(ins => {
        if (ins.id === id){
            instrumento.push(
            <>
            <div style={{width: "90%"}}>
            <Row className="mt-5 p-3" style={{backgroundColor: "white", borderRadius: "5px", border: "1px solid #e5e5e5"}}>
                <Col sm={8} >
                    <img className="mt-5"src={process.env.PUBLIC_URL+"/img/"+ins.imagen} 
                    style={{display:"block", width: "400px",  marginLeft: "auto", marginRight: "auto"}}></img>
                    <hr style={{marginTop: "70px"}} ></hr>
                    
                    <h3 className="mt-5">Características principales</h3>

                    <Table className="mt-3" striped bordered hover>
                    <tbody>
                        <tr>
                            <td>Marca</td>
                            <td>{ins.marca}</td>  
                        </tr>
                    <tr>
                        <td>Modelo</td>
                        <td>{ins.modelo}</td>
                    </tr>
                    </tbody>

                    </Table>
                    
                    <hr className="mt-5"></hr>
                    <h3 className="mt-5">Descripción</h3>
                    <p className="mt-3" style={{color: "grey"}}>{ins.descripcion}</p>

                </Col>
                <Col sm={4}>
                    <div style={{border: "1px solid #e5e5e5", borderRadius: "7px"}} className="p-3">
                    <p className="mt-5" style={{color: "grey"}}>{ins.cantidadVendida} vendidos</p>
                    <h3>{ins.instrumento}</h3>
                    <h2 className="mt-3 mb-0">$ {ins.precio}</h2>
                    <p className="mb-0" style={{fontSize: "17px"}}>en 12x ${ins.precio/12}</p>
                    <a href="#" style={{fontSize:"13px", textDecoration:"none"}}>Ver los medios de pago</a>
                    <p className="mt-5 mb-0"> Costo envio: </p>
                    {getPrice(ins.costoEnvio)}
                    <Button className="mt-5 d-block" size="lg" style={{width: "100%"}} variant="primary">Comprar ahora</Button>{' '}
                    <Button className="mt-3 d-block mb-5" size="lg" style={{width: "100%"}} variant="outline-primary">Agregar al carrito</Button>{' '}
                    <a href="#" style={{fontSize:"13px", textDecoration:"none"}} className="d-inline" >Compra Protegida</a>
                    <p style={{fontSize:"13px"}} className="d-inline"> , Se abrirá en una nueva ventana, recibí el producto que esperabas o te devolvemos tu dinero. </p>
                    </div>
                </Col>
            </Row>
            <div className="mt-3 mb-3" style={{textAlign: "right"}}>
                <p className="d-inline p-1" style={{borderRight: "solid 1px grey"}}> Publicación #<b>{ins.id}</b> </p>
                <a className="d-inline p-1" href="#" style={{textDecoration:"none"}}>Denunciar</a>
            </div>
            
            <img className="mb-5" style={{width: "100%"}} src={process.env.PUBLIC_URL+"/img/propaganda.png"}></img>
            </div>
            
            </>

            )
        }
    }) 

    return (
        <>
        <body style={{backgroundColor: "#ededed"}}>
        <NavBar></NavBar>
        <div className="container" style={{ display: "flex", justifyContent: "center" }}>
            {instrumento}
        </div>
        </body>
        </>
    )
}

export default DetalleInstrumento