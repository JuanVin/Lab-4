import { Container } from "react-bootstrap/lib/Tab"
import NavBar from "./NavBar"

function Home(){
    return (
        <>
        <NavBar></NavBar>
        <Container>
            <p>
            Musical Hendrix es una tienda de instrumentos musicales con ya mas de 15 añosde experiencia.
            Tenemos el conocimiento y la capacidad como para informarte acerca de las mejores elecciones para tu compra musical
            </p>
        </Container>
        </>
    )
}
export default Home