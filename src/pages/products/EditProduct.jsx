import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import ProductForm from "@/components/ProductForm";
import { useNavigate, useParams } from "react-router-dom";
import { omit } from "lodash";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setAlert } from "@/Layout/alertSlice";

const EditProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState();
  const updateProduct = async (product) => {
    try {
      await axios.patch(`/products/${id}`, product, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      navigate("/products");
      dispatch(
        setAlert({
          type: "success",
          message: "The product has already updated.",
        })
      );
    } catch (ex) {
      dispatch(setAlert({ type: "danger", message: ex.response.data.error }));
    }
  };
  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/products/${id}`);
      const product = omit(data, ["id", "category"]);
      setProduct({ ...product, categoryId: data.category.id });
    };
    fetchProduct();
  }, [id]);
  if (!product) return <div>Loading...</div>;
  return (
    <Container>
      <ProductForm currentProduct={product} onSubmit={updateProduct} />
    </Container>
  );
};

export default EditProduct;
