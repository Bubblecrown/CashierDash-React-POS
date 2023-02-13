import axios from "axios";
import { isEmpty } from "lodash";
import React, { useEffect, useState } from "react";
import { Form, Stack, Button } from "react-bootstrap";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState("");
  const fetchProduct = async () => {
    let queryString = query ? `search?q=${query}` : "";
    const data = await axios.get(
      `https://dummyjson.com/products/${queryString}`
    );
    setProducts(data.data);
    console.log(data.data);
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
      {isEmpty(products.products) ? (
        <div>No product found.</div>
      ) : (
        <div>product</div>
      )}
    </>
  );
};

export default Products;
