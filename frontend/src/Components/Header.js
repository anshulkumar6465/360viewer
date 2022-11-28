import React from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "../index.css";

const Header = () => {
  return (
    <header>
      <Navbar
        bg="dark"
        variant="dark"
        navbar="dark"
        expand="lg"
        collapseOnSelect
      >
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>Image Stabilization</Navbar.Brand>
          </LinkContainer>

        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
