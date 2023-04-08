import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllRestaurantListAPI } from "./api";
import { client } from "./client";

export const getAllRestaurantsList = createAsyncThunk("restaurantList/getAllRestaurants", async()=>{
    const response = await client.get(getAllRestaurantListAPI);
    return response.data;
})

const restaurantSlice = createSlice({
    name: "restaurantList",
    initialState: {
        restaurants: [],
        status: {},
        error: {}
    },
    reducers: {},
    extraReducers(builder){
        builder
            .addCase(getAllRestaurantsList.pending, (state)=>{
                state.status.GET_ALL = "pending";
            })
            .addCase(getAllRestaurantsList.fulfilled, (state, action)=>{
                state.status.GET_ALL = "completed";
                state.restaurants.push(action.payload);
            })
            .addCase(getAllRestaurantsList.rejected, (state, action)=>{
                state.status.GET_ALL = "failed";
                state.error.GET_ALL = action.error.message;
            })
    }
});

export default restaurantSlice.reducer;