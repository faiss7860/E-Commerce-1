import { configureStore } from "@reduxjs/toolkit";
import { data } from "../Reducer/CardsSlice";

const Store = configureStore({
  reducer:{
    card:data,
  }
})

export default Store;
