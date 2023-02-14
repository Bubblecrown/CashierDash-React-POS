import React from "react";
import { Badge, Card, Col } from "react-bootstrap";

const ProductItems = ({ product }) => {
  return (
    <Col>
      <Card>
        <Card.Img variant="top" src={product.images[0]} />
        <Card.Body>
          <Card.Title>
            <Col>
              <Badge bg="warning" text="dark" className="mb-2">
                {product.category}
              </Badge>
              <h1 className="fs-5"> {product.title}</h1>
            </Col>
          </Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Card.Text className="fw-bold">${product.price}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProductItems;
