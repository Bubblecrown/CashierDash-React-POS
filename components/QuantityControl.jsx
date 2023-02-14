import React from "react";
import { Badge, Button, Stack } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../src/pages/cart/cartSlice";

const QuantityControl = ({product}) => {
  const dispatch = useDispatch()
  // all products from store
  const products = useSelector((state)=> state.cart.products)
  // only product identify by id
  const orderProduct = products[product.id]
  return (
    <Stack direction="horizontal" className="mb-3">
      <Button variant="light" onClick={()=> dispatch(removeFromCart(product))}> - </Button>
      <Badge bg="light" text="dark">
        {orderProduct?.quantity ?? 0}
      </Badge>
      <Button variant="light" onClick={()=> dispatch(addToCart(product))}> + </Button>
    </Stack>
  );
};

export default QuantityControl;
