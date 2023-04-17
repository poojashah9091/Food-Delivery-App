import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllRestaurantListAPI } from "./api";
import { client } from "./client";

export const getAllRestaurantsList = createAsyncThunk("restaurantList/getAllRestaurants", async()=>{
    const response = await client.get(getAllRestaurantListAPI);
    return response.data.data.cards[2].data.data.cards;
})

const restaurantSlice = createSlice({
    name: "restaurantList",
    initialState: {
        allRestaurants: [],
        filteredRestaurants: [],
        status: {},
        error: {}
    },
    reducers: {
        filterRestaurants: (state, action)=>{
            state.filteredRestaurants = state.allRestaurants.filter(restaurant=>restaurant.data.name.toLowerCase().includes(action.payload.toLowerCase()));
        }
    },
    extraReducers(builder){
        builder
            .addCase(getAllRestaurantsList.pending, (state)=>{
                state.status.GET_ALL = "pending";
            })
            .addCase(getAllRestaurantsList.fulfilled, (state, action)=>{
                state.status.GET_ALL = "completed";
                state.allRestaurants = action.payload;
                state.filteredRestaurants = action.payload;
            })
            .addCase(getAllRestaurantsList.rejected, (state, action)=>{
                state.status.GET_ALL = "failed";
                state.error.GET_ALL = action.error.message;
            })
    }
});

export default restaurantSlice.reducer;
export const {filterRestaurants} = restaurantSlice.actions;
