import { isEmpty } from "lodash";
import React from "react";
import { Accordion, Button, ButtonGroup, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import OrderDetails from "../../components/OrderDetails";
import CustomerInfo from "../../components/CustomerInfo";
import axios from "axios";
import { clear } from "./cartSlice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((state) => state.cart.products);
  const customerInfo = useSelector((state) => state.cart.customerInfo);
  const productItems = Object.values(products);

  const save = async () => {
    const payload = { ...customerInfo, products: productItems };
    await axios.post("/orders", payload);
    dispatch(clear());
    navigate("/products");
  };

  if (isEmpty(products))
    return (
      <Container>
        <div className="col-md-5 col-xs-12 text-center m-auto">
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
          <Accordion.Body>
            <CustomerInfo />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <ButtonGroup>
        <Button variant="warning" onClick={() => save()}>
          Save
        </Button>
        <Button variant="light" onClick={() => dispatch(clear())}>
          Clear
        </Button>
      </ButtonGroup>
    </Container>
  );
};

export default Cart;
