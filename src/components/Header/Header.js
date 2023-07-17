import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const Header = () => {
  return (
    <Navbar expand="lg" className="navbar   ">
      <Container>
        <Navbar.Brand href="#home">WeatherCast</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="gap-4 fs-3 ms-auto">
            <Nav.Link href="#home">C</Nav.Link>
            <Nav.Link href="#link">F</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
