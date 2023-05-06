import React from "react";
import { Container } from "react-bootstrap";
import ProductForm from "@/components/ProductForm";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAlert } from "@/Layout/alertSlice";

const NewProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const createProduct = async (product) => {
    try {
      // if data in form has file input then it need headers
      await axios.post(`/products`, product, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      navigate("/products");
      dispatch(
        setAlert({
          type: "success",
          message: "The product has already created.",
        })
      );
    } catch (e) {
      dispatch(
        setAlert({
          type: "danger",
          message: e.response.data.error,
        })
      );
    }
  };
  return (
    <Container>
      <h1 className="text-center fs-3">Create Product</h1>
      <ProductForm onSubmit={createProduct} />
    </Container>
  );
};

export default NewProduct;
