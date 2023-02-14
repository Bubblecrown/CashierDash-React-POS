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

const baseURL = "https://dummyjson.com/";
axios.defaults.baseURL = baseURL;

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
