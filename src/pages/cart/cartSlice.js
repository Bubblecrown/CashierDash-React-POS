import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: {},
  customerInfo: null,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart({ products }, action) {
      // state - initial
      // action - user
      const product = action.payload;
      const { sku } = product;
      if (sku in products) {
        products[sku].quantity++;
      } else {
        products[sku] = {
          sku: product.sku,
          name: product.name,
          image: product.image,
          quantity: 1,
          price: product.price,
        };
      }
    },
    removeFromCart({ products }, action) {
      const product = action.payload;
      const { sku } = product;
      const quantity = products.quantity;
      if (quantity > 1) products[sku].quantity--;
      else delete products[sku];
    },
    clear() {
      return initialState;
    },
    setCustomerInfo(state, action) {
      const { field, value } = action.payload;
      // If the customerInfo variable is falsy, it sets it to an empty object {}.
      // falsy (e.g., null, undefined, false, 0, '', or NaN)
      if (!state.customerInfo) state.customerInfo = {};
      state.customerInfo[field] = value;
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, removeFromCart, clear, setCustomerInfo } =
  cartSlice.actions;
