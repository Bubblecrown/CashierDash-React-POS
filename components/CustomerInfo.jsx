import React from "react";
import { Form, FormGroup, FormLabel } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setCustomerInfo } from "../src/pages/cart/cartSlice";

const CustomerInfo = () => {
  const dispatch = useDispatch();
  const customerInfo = useSelector((state) => state.cart.customerInfo);
  const setField = (field, e) =>
    dispatch(setCustomerInfo({ field, value: e.target.value }));
  return (
    <Form>
      <FormGroup className="mb-3">
        <FormLabel>Name</FormLabel>
        <Form.Control
          value={customerInfo?.name ?? ""}
          placeholder="Enter name"
          onChange={(e) => setField("name", e)}
        ></Form.Control>
      </FormGroup>

      <FormGroup className="mb-3">
        <FormLabel>Email</FormLabel>
        <Form.Control
          value={customerInfo?.email ?? ""}
          placeholder="Enter email"
          onChange={(e) => setField("email", e)}
        ></Form.Control>
      </FormGroup>

      <FormGroup className="mb-3">
        <FormLabel>Tel</FormLabel>
        <Form.Control
          value={customerInfo?.tel ?? ""}
          placeholder="Enter tel"
          onChange={(e) => setField("tel", e)}
        ></Form.Control>
      </FormGroup>
    </Form>
  );
};

export default CustomerInfo;
