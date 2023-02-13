import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Products from "./features/products/Products.jsx";
import AddProduct from "./features/products/AddProduct.jsx";
import EditProduct from "./features/products/EditProduct.jsx";
import ProductDetail from "./features/products/ProductDetail.jsx";
import Cart from "./features/cart/Cart.jsx";
import Orders from "./features/cart/Orders.jsx";
import Layout from "./ui/Layout.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const baseURL = "https://dummyjson.com/";
axios.defaults.baseURL = baseURL;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="product" />} />
          <Route path="product" element={<Products />} />
          <Route path="product/new" element={<AddProduct />} />
          <Route path="product/:id" element={<ProductDetail />} />
          <Route path="product/:id/edit" element={<EditProduct />} />
          <Route path="cart" element={<Cart />} />
          <Route path="orders" element={<Orders />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
