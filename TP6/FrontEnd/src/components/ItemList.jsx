import {Col, Row, Image } from 'react-bootstrap';

function ListItem({ data }) {

    function getPrice(type) {
        if (type === "G") {
            return <p style={{ color: "green" }}>Envío gratis a todo el país</p>
        }
        return <p style={{ color: "orange" }}>Costo de envio interior de Argentina: ${type}</p>
    }

    return (
        <>
            <div className="w-100 p-3">
                <Row>
                    <Col sm={3}>
                        <a href={`lista/${data.id}`}><Image src={process.env.PUBLIC_URL + "/img/" + data.imagen}></Image></a>
                    </Col>
                    <Col sm={9}>

                        <h4 class>
                            {data.instrumento}
                        </h4>

                        <h3>
                            $ {data.precio}
                        </h3>

                        {getPrice(data.costoEnvio)}

                        <p>
                            {data.cantidadVendida} Vendidos
                        </p>

                    </Col>
                </Row>
                <hr></hr>
            </div>
        </>
    )
}

export default ListItem