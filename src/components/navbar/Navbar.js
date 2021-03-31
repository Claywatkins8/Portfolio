import React from "react";
import { Nav, Col, Container, Row } from "react-bootstrap";

import "./Navbar.css";

function Navbar() {
  return (
    <Container className="navbar-body">
      <Nav className="">
        <Nav.Item>
          <Nav.Link href="/">Clayton Watkins</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/about">About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/projects">Projects</Nav.Link>
        </Nav.Item>
      </Nav>
    </Container>
  );
}

export default Navbar;
