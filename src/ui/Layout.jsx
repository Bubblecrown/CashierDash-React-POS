import React from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="mb-5"
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            Cashierdash
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/product">Products</Nav.Link>
              <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
              <Nav.Link as={Link} to="/orders">Order</Nav.Link>
            </Nav>
            <Nav>
              <Button variant="outline-success" as={Link} to="/product/new">Create</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container><Outlet /></Container>
      
    </>
  );
};

export default Layout;
