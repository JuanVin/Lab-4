import { Col, Row, Image } from 'react-bootstrap';

function ItemList({ instrumentos }) {
    let instrumentList = []
    function getPrice(type) {
        if (type === "G") {
            return <p style={{ color: "green" }}>Envío gratis a todo el país</p>
        }
        return <p style={{ color: "orange" }}>Costo de envio interior de Argentina: ${type}</p>
    }

    instrumentos.map(instrumento => {
        instrumentList.push(
           <>
            
                <Row>
                    <Col sm={3}>
                        <a href={`lista/${instrumento.id}`}><Image src={process.env.PUBLIC_URL + "/img/" + instrumento.imagen}></Image></a>
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
            
           </>
       )
    })

    return (
        <div className="p-3 mt-5" style={{borderRadius: "10px", border: "1px solid #e5e5e5", backgroundColor: "white"}}>
            {instrumentList}
        </div>
    )
}

export default ItemList