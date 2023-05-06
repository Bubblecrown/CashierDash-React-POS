import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

const ProductForm = ({ onSubmit, currentProduct }) => {
  const [categories, setCategories] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    defaultValues: currentProduct,
  });
  const submit = (formValue) => {
    onSubmit({ ...formValue, image: formValue.image[0] });
  };

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await axios.get(`${process.env.VITE_APP_API_URL}/categories`);
      setCategories(res.data);
      console.log(currentProduct);
    };

    fetchCategories();
  }, []);

  return (
    <Form className="my-3" onSubmit={handleSubmit(submit)}>
      {/* sku */}
      {/* error.sku is not boolean so put the !! in */}
      <Form.Group className="mb-3">
        <Form.Label>SKU</Form.Label>
        <Form.Control
          placeholder="Enter sku"
          isInvalid={!!errors.sku}
          {...register("sku", { required: "SKU is a required field." })}
        ></Form.Control>
        <Form.Control.Feedback type="invalid">
          {errors.sku?.message}
        </Form.Control.Feedback>
      </Form.Group>
      {/* end sku */}

      {/* name */}
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control
          placeholder="Enter name"
          isInvalid={!!errors.name}
          {...register("name", { required: "Name is a required field." })}
        ></Form.Control>
        <Form.Control.Feedback type="invalid">
          {errors.name?.message}
        </Form.Control.Feedback>
      </Form.Group>
      {/* end name */}

      {/* price */}
      <Form.Group className="mb-3">
        <Form.Label>Price</Form.Label>
        <Form.Control
          placeholder="Enter price"
          isInvalid={!!errors.price}
          {...register("price", {
            required: "Price is a required field.",
            validate: (v) =>
              parseInt(v) !== 0 || "Price must be greater than 0",
          })}
        ></Form.Control>
        <Form.Control.Feedback type="invalid">
          {errors.price?.message}
        </Form.Control.Feedback>
      </Form.Group>
      {/* end price */}

      {/* status */}
      <Form.Group className="mb-3">
        <Form.Label>Status</Form.Label>
        <Form.Select
          isInvalid={!!errors.status}
          {...register("status", {
            validate: (v) =>
              v !== "Select Status" || "Status is a required field.",
          })}
        >
          <option value={null}>Select Status</option>
          <option value={1}>In Stock</option>
          <option value={2}>Out of Stock</option>
        </Form.Select>
        <Form.Control.Feedback type="invalid">
          {errors.status?.message}
        </Form.Control.Feedback>
      </Form.Group>
      {/* end status */}

      {/* category */}
      <Form.Group className="mb-3">
        <Form.Label>Category</Form.Label>
        <Form.Select
          isInvalid={!!errors.categoryId}
          {...register("categoryId", {
            validate: (v) =>
              v !== "Select Category" || "Category is a required field.",
          })}
        >
          <option value={null}>Select Category</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </Form.Select>
        <Form.Control.Feedback type="invalid">
          {errors.categoryId?.message}
        </Form.Control.Feedback>
      </Form.Group>
      {/* end category */}

      {/* Description */}
      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Enter description"
          isInvalid={!!errors.desc}
          {...register("desc", {
            required: "Description is a required field.",
          })}
        ></Form.Control>
        <Form.Control.Feedback type="invalid">
          {errors.desc?.message}
        </Form.Control.Feedback>
      </Form.Group>
      {/* end Description */}

      {/* image */}
      <Form.Group className="mb-3">
        <Form.Label>Image</Form.Label>
        <Form.Control
          type="file"
          isInvalid={!!errors.image}
          {...register(
            "image",
            currentProduct ? {} : { required: "Image is a required field." }
          )}
        ></Form.Control>
        <Form.Control.Feedback type="invalid">
          {errors.image?.message}
        </Form.Control.Feedback>
      </Form.Group>
      {/* end image */}

      <Button type="submit" className="mb-3">
        {currentProduct ? "Update" : "Create"}
      </Button>
    </Form>
  );
};

export default ProductForm;
