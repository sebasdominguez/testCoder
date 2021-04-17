import React, {useContext} from 'react'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import Logo from '../../favicon.ico'
import './navbar.css'

export const NavBar = () => {

    return (
        <Navbar collapseOnSelect fixed="top" expand="lg" bg="dark" variant="dark" className="pl-5 pr-5">
            <Container>
                <Navbar.Brand className="mr-5 mt-2 mb-2">
                    <img src={Logo} alt='img'></img>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link  className="mr-5">TOP 3</Nav.Link>
                        <NavDropdown title="CATEGORIES" id="collasible-nav-dropdown">
                            <NavDropdown.Item >FRUTAS</NavDropdown.Item>
                            <NavDropdown.Item >VERDURAS</NavDropdown.Item>
                            <NavDropdown.Item >VARIOS</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item >AYUDA</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link eventKey={2}>
                            CART
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>   
    )
}