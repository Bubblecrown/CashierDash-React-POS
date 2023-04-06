import axios from "axios";
import { isEmpty } from "lodash";
import React, { useEffect, useState } from "react";
import { Form, Stack, Button, Row } from "react-bootstrap";
import ProductItems from "../../../components/ProductItems";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState("");
  const fetchProduct = async () => {
    let queryString = query ? `?search=${query}` : "";
    const data = await axios.get(`/products${queryString}`);
    setProducts(data.data);
  };
  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <>
      <h1 className="fs-3">Our Products</h1>
      <Stack direction="horizontal" gap={3} className="py-2">
        <Form.Control
          placeholder="Search product..."
          onChange={(e) => setQuery(e.target.value)}
        ></Form.Control>
        <Button
          onClick={() => {
            fetchProduct();
          }}
        >
          Search
        </Button>
      </Stack>
      {isEmpty(products) ? (
        <div>No product found.</div>
      ) : (
        <Row xs={1} md={2} lg={3} className="py-2 g-3">
          {products.map((product) => (
            <ProductItems key={product.id} product={product} />
          ))}
        </Row>
      )}
    </>
  );
};

export default Products;
