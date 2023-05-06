import { configureStore } from "@reduxjs/toolkit";
import cart from "@/pages/cart/cartSlice";
import alert from "@/Layout/alertSlice";
export const store = configureStore({
  reducer: {
    cart,
    alert,
  },
});
