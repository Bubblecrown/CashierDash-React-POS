import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Products from "./features/products/Products";
import AddProduct from "./features/products/AddProduct";
import EditProduct from "./features/products/EditProduct";
import ProductDetail from "./features/products/ProductDetail";
import Cart from "./features/cart/Cart";
import Orders from "./features/cart/Orders";
import Layout from "./ui/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="product" element={<Products />}></Route>
          <Route path="product/new" element={<AddProduct />}></Route>
          <Route path="product/:id" element={<ProductDetail />}></Route>
          <Route path="product/:id/edit" element={<EditProduct />}></Route>
          <Route path="cart" element={<Cart />}></Route>
          <Route path="orders" element={<Orders />}></Route>
          <Route index element={<Navigate to="product" />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
