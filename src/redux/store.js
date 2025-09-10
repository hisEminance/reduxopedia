import { configureStore } from "@reduxjs/toolkit";
import { destinationReducer } from "./slice/destinationSlice";
import {
  counterReducer,
  increment,
  decrement,
  incrementMultiplier,
  decrementMultiplier,
} from "./slice/counterSlice";
import { destinationClicked} from "./slice/destinationSlice";

export const store = configureStore({
  reducer: {
    counterStore: counterReducer,
    destinationStore: destinationReducer,
  
  },
});

console.log(store.getState());

export {
  increment,
  decrement,
  incrementMultiplier,
  decrementMultiplier,
  destinationClicked,
};