import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {
  Products,
  AddProduct,
  EditProduct,
  ProductDetail,
  Cart,
  Orders,
} from "./pages/index";
import Layout from "./Layout/Layout.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Provider } from "react-redux";
import { store } from "./app/store";

// const baseURL = "http://127.0.0.1:5000";
// axios.defaults.baseURL = baseURL;

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Navigate to="products" />} />
            <Route path="products" element={<Products />} />
            <Route path="products/new" element={<AddProduct />} />
            <Route path="products/:id" element={<ProductDetail />} />
            <Route path="products/:id/edit" element={<EditProduct />} />
            <Route path="cart" element={<Cart />} />
            <Route path="orders" element={<Orders />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
