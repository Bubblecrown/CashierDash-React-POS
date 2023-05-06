import React from "react";
import { Badge, Button, Card, Col } from "react-bootstrap";
import QuantityControl from "./QuantityControl";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

const ProductItems = ({ product }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 435px)" });
  return (
    <Col>
      <Card className="h-100">
        <Link
          to={`/products/${product.id}`}
          className="text-decoration-none text-secondary"
        >
          <Card.Img
            style={{
              height: isMobile ? "auto" : "200px",
              maxWidth: "fit-content",
              margin: "0 auto",
            }}
            src={`${process.env.VITE_APP_API_URL}/${product.image}`}
          />
          <Card.Body>
            <Card.Title>
              <Col>
                <Badge bg="secondary" text="light" className="mb-2">
                  {product.category.name}
                </Badge>
                <h1 className="fs-5"> {product.name}</h1>
              </Col>
            </Card.Title>
            <Card.Text>{product.desc}</Card.Text>
          </Card.Body>
        </Link>{" "}
        <Card.Footer style={{ backgroundColor: "#fff", borderTop: "none" }}>
          <Card.Text className="fw-bold">${product.price}</Card.Text>
          <QuantityControl product={product} />
          <Button className="mt-auto" variant="warning">
            Add to cart
          </Button>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default ProductItems;
