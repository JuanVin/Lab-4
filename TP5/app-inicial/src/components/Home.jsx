
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import json from '../data/instrumentos.json'
const { instrumentos } = json

function Home() {
   
    return (
        <>
            {instrumentos.map(instrumento => (
                <>
                <Container>
                    <Row>
                        <Col>
                            <img src={process.env.PUBLIC_URL+"/img/"+instrumento.imagen}></img>
                        </Col>
                        <Col>
                        <div>
                        <h3>
                        {instrumento.descripcion}
                        </h3>
                        <p>
                        {instrumento.precio}
                        </p>
                        <p>
                        {instrumento.costoEnvio}
                        </p>
                        <p>
                            {instrumento.cantidadVendida}
                        </p>
                        <Button variant="secondary">Primary</Button>{' '}
                        </div>
                        </Col>
                    </Row>
                </Container>
                </>           
            ))}          
        </>
    );
}

export default Home;
