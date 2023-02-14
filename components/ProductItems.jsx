import React from "react";
import { Badge, Button, Card, Col } from "react-bootstrap";
import QuantityControl from "./QuantityControl";

const ProductItems = ({ product }) => {
  return (
    <Col>
      <Card className="h-100">
        <Card.Img
          style={{ height: "200px", maxWidth: "fit-content", margin: "0 auto" }}
          src={product.images[0]}
        />
        <Card.Body>
          <Card.Title>
            <Col>
              <Badge bg="secondary" text="light" className="mb-2">
                {product.category}
              </Badge>
              <h1 className="fs-5"> {product.title}</h1>
            </Col>
          </Card.Title>
          <Card.Text>{product.description}</Card.Text>
        </Card.Body>
        <Card.Footer style={{ backgroundColor: "#fff", borderTop: "none" }}>
          <Card.Text className="fw-bold">${product.price}</Card.Text>
          <QuantityControl product={product} />
          <Button className="mt-auto" variant="warning">Add to cart</Button>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default ProductItems;
