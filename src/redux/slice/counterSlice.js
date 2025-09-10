import { createSlice } from "@reduxjs/toolkit";


const initialState = { count: 10 };

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementMultiplier: (state, action) => {
      state.count += Number(action.payload);
    },
    decrementMultiplier: (state, action) => {
      state.count -= Number(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase("destination/resetDestination", (state) => {
      state.count = 10;
    });
  },
});

export const {increment, decrement, incrementMultiplier, decrementMultiplier, resetCounter} = counterSlice.actions;
export const counterReducer = counterSlice.reducer;