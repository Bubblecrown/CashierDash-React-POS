import React from "react";
import { Container } from "react-bootstrap";
import ProductForm from "../../components/ProductForm";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NewProduct = () => {
  const navigate = useNavigate()
  const createProduct = async(product) =>{
    // if data in form has file input then it need headers
    await axios.post(`/products`, product, {
      headers:{
        "Content-Type":"multipart/form-data"
      }
    })
    navigate("/products")
  }
  return (
    <Container>
      <h1 className="text-center fs-3">Create Product</h1>
      <ProductForm onSubmit={createProduct} />
    </Container>
  );
};

export default NewProduct;
