import React from "react";
import { Col, Container, ListGroup, Row, Stack } from "react-bootstrap";
import QuantityControl from "./QuantityControl";
import { useMediaQuery } from "react-responsive";
import { sumBy } from "lodash";

const OrderDetails = ({ products, editable = true }) => {
  // if (!Array.isArray(products)) {
  //   console.log(products);
  // }
  const productList = Object.values(products);
  const isMobile = useMediaQuery({ query: "(max-width: 986px)" });
  const total_products = sumBy(
    productList,
    (product) => product.quantity * product.price
  );
  return (
    <>
      <ListGroup numbered as="ol" variant="flush">
        {productList.map((product) => (
          <ListGroup.Item
            as="li"
            key={product.sku}
            className="d-flex flex-wrap"
          >
            <div className="ms-3 col-xs-1 col-sm-3 col-md-4 col-lg-2">
              <img
                src={`${process.env.VITE_APP_API_URL}/${product.image}`}
                style={{
                  height: isMobile ? "auto" : "100%",
                  maxWidth: "100%",
                  minWidth: "80px",
                }}
              />
            </div>
            <div className="mt-2 ms-4 flex-grow-1 d-flex flex-wrap">
              <h1 className="fs-5 fw-bold col-sm-5 fs-xs-2">
                {product.name}
              </h1>
              <div className="ms-auto text-end">
                {editable ? (
                  <QuantityControl product={product} />
                ) : (
                  product.quantity
                )}
              </div>
              <div className="ms-auto text-end col-sm-3">
                <p>{product.price.toLocaleString()}</p>
              </div>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <hr />
      <Stack direction="horizontal">
        <div>Total</div>
        <div className="ms-auto">{total_products.toLocaleString()}</div>
      </Stack>
    </>
  );
};

export default OrderDetails;

// <Col className="mt-auto ms-2 col-md-10">
{
  /* <img
src={product.image}
style={{
  height: isMobile ? "auto" : "100px",
  maxWidth: "fit-content",
  display: "flex",
  justifyContent: "start",
}}
/>
</Col>
<Col className="mt-auto col-md-2 d-flex flex-column align-items-end">
<h1 className="fs-5"> {product.name}</h1>
<div>
<QuantityControl product={product} />
</div>
</Col> */
}
