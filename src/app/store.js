import { configureStore } from "@reduxjs/toolkit";
import cart from '../pages/cart/cartSlice'
export const store = configureStore({
  reducer:{
    cart
  }
})