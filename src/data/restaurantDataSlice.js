import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getRestaurantDetailsAPI } from "./api";
import { client } from "./client";

export const getRestaurantData = createAsyncThunk("restaurantDetails/getData", async(restaurantId)=>{
    const response = client.get(`${getRestaurantDetailsAPI}${restaurantId}`);
    return response;
});

const restaurantDataSlice = createSlice({
    name: "restaurantData",
    initialState:{
        restaurantDetails: {
            restaurantInfo: {},
            restaurantMenu: {},
            restaurantRecommendations: {}
        },
        error: {},
        status: ""
    },
    reducers: {},
    extraReducers(builder){
        builder
            .addCase(getRestaurantData.pending, (state)=>{
                state.status = "pending";
            })
            .addCase(getRestaurantData.fulfilled, (state, action)=>{
                state.restaurantDetails.restaurantInfo = action.payload.data.data.cards[0].card.card.info;
                state.restaurantDetails.restaurantMenu = action.payload.data.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards.filter(entry=> entry.card.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" && entry.card.card.title !=="Recommended");
                state.restaurantDetails.restaurantRecommendations = action.payload.data.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards.filter(entry=> entry.card.card.title === "Recommended")[0].card.card.itemCards;
                state.status = "completed";
            })
            .addCase(getRestaurantData.rejected, (state, action)=>{
                state.error = action.error.message;
                state.status = "failed";
            })
    }
})

export default restaurantDataSlice.reducer;