import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Button,
  ButtonGroup,
  Col,
  Container,
  Row,
  Stack,
} from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();
  const navigate = useNavigate();
  const deleteProduct = async () => {
    await axios.delete(`/products/${id}`);
    navigate("/products");
  };
  useEffect(() => {
    const fetchProduct = async () => {
      const res = await axios.get(`/products/${id}`);
      setProduct(res.data);
    };
    fetchProduct();
  }, []);
  if (!product)
    return (
      <Container>
        <div className="col-md-5 col-xs-12 text-center m-auto">
          <img
            className="img-fluid"
            src="https://assets.materialup.com/uploads/16e7d0ed-140b-4f86-9b7e-d9d1c04edb2b/preview.png"
          />
          <h2>No products found</h2>
          <p>Sorry, product is not available yet.</p>
        </div>
      </Container>
    );
  return (
    <Container>
      <Row className="mb-3">
        <Col md={4}>
          <img
            src={`http://127.0.0.1:5000/${product.image}`}
            alt={`${product.name}`}
            className="w-100"
          />
        </Col>
        <Col md={8} className="my-3">
          <Stack>
            <h6 className="fs-6 fw-bold">SKU</h6>
            <p className="ms-4">{product.sku}</p>
            <h6 className="fs-6 fw-bold">Name</h6>
            <p className="ms-4">{product.name}</p>
            <h6 className="fs-6 fw-bold">Status</h6>
            <h6 className="ms-4">
              {product.stats === 1 ? "In stock" : "Out of stock"}
            </h6>
            <h6 className="fs-6 fw-bold">Category</h6>
            <p className="ms-4">{product.category.name}</p>
            <h6 className="fs-6 fw-bold">Price</h6>
            <p className="ms-4">{product.price}</p>
            <h6 className="fs-6 fw-bold">Description</h6>
            <p className="ms-4">{product.desc}</p>
            <ButtonGroup>
              <Button onClick={() => navigate(`/products/${id}/edit`)}>
                Edit
              </Button>
              <Button variant="danger" onClick={deleteProduct}>
                Delete
              </Button>
            </ButtonGroup>
          </Stack>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
