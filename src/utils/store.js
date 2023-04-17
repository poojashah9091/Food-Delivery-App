import { configureStore } from "@reduxjs/toolkit";
// import restaurantDataSliceReducer from "../data/restaurantDataSlice";
import allRestaurantsSliceReducer from "../data/restaurantListSlice";

const store = configureStore({
    reducer:{
        allRestaurants: allRestaurantsSliceReducer,
        // restaurantData: restaurantDataSliceReducer
    }
});

export default store;