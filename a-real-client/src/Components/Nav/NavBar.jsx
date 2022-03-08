import {Navbar,Container,Offcanvas,Nav} from 'react-bootstrap'
import log from "../../Source/Log/log.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid} from '@fortawesome/fontawesome-svg-core/import.macro'
import "./NavBar.css"

function NavBar (){
    return(
<Navbar bg="light" expand={false}>
  <Container fluid>
    <button className="Cart">Carrito</button>
    <Navbar.Brand ><img src={log} alt="" /></Navbar.Brand>
    <Navbar.Toggle aria-controls="offcanvasNavbar" />
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3 ">
          <Nav.Link ><FontAwesomeIcon icon={solid('house')} />Inicio</Nav.Link>
          <Nav.Link ><FontAwesomeIcon icon={solid('map-location-dot')} />Localisacion</Nav.Link>
          <Nav.Link ><FontAwesomeIcon icon={solid('utensils')} />Comida</Nav.Link>
          <Nav.Link ><FontAwesomeIcon icon={solid('file-invoice-dollar')} />Pedido</Nav.Link>
          <Nav.Link ><FontAwesomeIcon icon={solid('square-phone')} />Contacto</Nav.Link>
        </Nav>
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>
    )
}

export default NavBar;