import React from "react";
import { Col, Container, ListGroup, Row } from "react-bootstrap";
import QuantityControl from "./QuantityControl";
import { useMediaQuery } from "react-responsive";

const OrderDetails = ({ products }) => {
  if (!Array.isArray(products)) {
    console.log(products);
  }
  const productList = Object.values(products);
  const isMobile = useMediaQuery({ query: "(max-width: 435px)" });

  return (
    <Container>
      <ListGroup as="ol" numbered variant="flush">
        {productList.map((product) => (
          <ListGroup.Item as="li" key={product.id} className="d-flex ">
            <Col className="ms-3 col-md-2">
              <img
                src={product.image}
                style={{
                  height: isMobile ? "auto" : "100px",
                  maxWidth: "fit-content",
                  display: "flex",
                  justifyContent: "start",
                }}
              />
            </Col>
            <div className="mt-auto ms-4 flex-grow-1 d-flex ">
              <h1 className="fs-5 fw-bold"> {product.name}</h1>
              <div>
                <QuantityControl product={product} />
              </div>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
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
