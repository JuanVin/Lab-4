
import {Navbar, Container, Nav} from 'react-bootstrap'

function NavBar(){
    return(
        <Navbar style={{backgroundColor:"#fff159", color:"black" }} >
        <Container>
        <Navbar.Brand href="/">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/quienesSomos ">HOME</Nav.Link>
          <Nav.Link href="/dondeEstamos">Donde estamos</Nav.Link>
          <Nav.Link href="/">Productos</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
    )
}

export default NavBar;