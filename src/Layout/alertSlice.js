import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  alert: null,
};

const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    setAlert(state, action) {
      state.alert = action.payload;
    },
    clearAlert(state) {
      state.alert = null;
    },
  },
});

export default alertSlice.reducer;
export const { setAlert, clearAlert } = alertSlice.actions;
