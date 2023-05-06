import { capitalize } from "lodash";
import React from "react";
import {
  Button,
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Toast,
  ToastContainer,
} from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { clearAlert } from "./alertSlice";
import { useDispatch } from "react-redux";

const Layout = () => {
  const dispatch = useDispatch();
  const alert = useSelector((state) => state.alert.alert);
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
              <Nav.Link as={Link} to="/products">
                Products
              </Nav.Link>
              <Nav.Link as={Link} to="/cart">
                Cart
              </Nav.Link>
              <Nav.Link as={Link} to="/orders">
                Order
              </Nav.Link>
            </Nav>
            <Nav>
              <Button variant="outline-success" as={Link} to="/products/new">
                Create
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <Outlet />
      </Container>
      <ToastContainer
        position="bottom-end"
        containerPosition="fixed"
        className="p-3"
      >
        <Toast
          show={!!alert}
          delay={3000}
          autohide
          bg={alert?.type}
          onClose={() => dispatch(clearAlert())}
        >
          <Toast.Header>
            <strong className="me-auto">{capitalize(alert?.type)}</strong>
          </Toast.Header>
          <Toast.Body>{alert?.message}</Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  );
};

export default Layout;
