import { isEmpty } from "lodash";
import React from "react";
import { Accordion, Button, ButtonGroup, Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import OrderDetails from "../../../components/OrderDetails";

const Cart = () => {
  const products = useSelector((state) => state.cart.products);
  if (isEmpty(products))
    return (
      <Container>
        <div className="col-md-4 col-xs-12 text-center m-auto">
          <img
            className="img-fluid"
            src="https://assets.materialup.com/uploads/16e7d0ed-140b-4f86-9b7e-d9d1c04edb2b/preview.png"
          />
          <h2>Your cart is empty</h2>
          <p>Look like you have not added anything to cart.</p>
        </div>
      </Container>
    );
  return (
    <Container className="pb-5">
      <h1 className="text-center mb-4">Order Summary</h1>
      <Accordion defaultActiveKey="1" className="mb-3">
        <Accordion.Item eventKey="1">
          <Accordion.Header>Order Details</Accordion.Header>
          <Accordion.Body>
            <OrderDetails products={products} />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Customer Info</Accordion.Header>
          <Accordion.Body>Customer Info</Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <ButtonGroup>
        <Button variant="warning">Save</Button>
        <Button variant="light">Clear</Button>
      </ButtonGroup>
    </Container>
  );
};

export default Cart;
