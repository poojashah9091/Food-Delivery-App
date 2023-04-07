import { configureStore } from "@reduxjs/toolkit";
import restaurantSliceReducer from "../data/restaurantSlice";

const store = configureStore({
    reducer:{
        restaurants: restaurantSliceReducer
    }
});

export default store;