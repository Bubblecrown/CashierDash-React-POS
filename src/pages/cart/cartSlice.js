import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: {},
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart({ products }, action) {
      const product = action.payload;
      const { id } = product;
      if (id in products) {
        products[id].quantity++;
      } else {
        products[id] = {
          id: product.id,
          name: product.title,
          image: product.images[0],
          quantity: 1,
        };
      }
    },
    removeFromCart({ products }, action) {
      const product = action.payload;
      const { id } = product;
      const quantity = products.quantity;
      if (quantity > 1) products[id].quantity--;
      else delete products[id];
    },
    clear() {
      return initialState;
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, removeFromCart, clear } = cartSlice.actions;
