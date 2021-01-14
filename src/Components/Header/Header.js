import React from "react";
import {
  Navbar,
  Nav,
  Button,
} from "react-bootstrap";

export default function Header() {
  return (
    <header>
      <Navbar expand="lg" variant="dark" bg="dark">
        <Navbar.Brand href="#home">WebFlix</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <div className="mr-1">
              <Button variant="outline-success">Login</Button>
            </div>
            <div>
              <Button variant="primary">Start Your free trial</Button>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}
