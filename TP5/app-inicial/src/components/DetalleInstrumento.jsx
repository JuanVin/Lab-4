import {useParams} from "react-router-dom"
import json from '../data/instrumentos.json'
import { Row, Col , Button} from 'react-bootstrap'

const { instrumentos } = json



function DetalleInstrumento(){

    const { id } = useParams();
    const instrumento = []

    function getPrice(type){

        if (type === "G"){
            return <p style={{color: "green"}}>Envío gratis</p>
        }
        return <p style={{color: "orange"}}>Costo de envio interior de Argentina: ${type}</p>
    }

    instrumentos.forEach(ins => {
        if (ins.id === id){
            instrumento.push(
            <>
            <div className="w-75 p-3">
            <Row className="mt-5">
                <Col sm={7} >
                    <img src={process.env.PUBLIC_URL+"/img/"+ins.imagen} width={400} height={400}></img>
                    <p className="mt-3" style={{fontSize: "13px"}}>Descripción: </p>
                    <p style={{fontSize: "13px"}}>{ins.descripcion}</p>
                </Col>
                <Col sm={5}>
                    <div className="block-example border border-dark p-3">
                    <p className="mt-5" style={{color: "grey"}}>{ins.cantidadVendida} vendidos</p>
                    <h3>{ins.instrumento}</h3>
                    <h2 className="mt-3">$ {ins.precio}</h2>
                    <p className="mt-3 mb-0" style={{fontSize:"18px"}}> Marca: {ins.marca} </p>
                    <p style={{fontSize:"18px"}}> Marca: {ins.modelo} </p>
                    <p className="mt-5 mb-0"> Costo envio: </p>
                    {getPrice(ins.costoEnvio)}
                    <Button className="mt-5" variant="outline-primary">Agregar al carrito</Button>{' '}
                    </div>
                </Col>
            </Row>
            </div>
            
            </>

            )
        }
    }) 

    return (
        <div className="container">
            {instrumento}
        </div>
    )
}

export default DetalleInstrumento