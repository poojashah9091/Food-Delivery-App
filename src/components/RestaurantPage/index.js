import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import LocalDiningSharpIcon from '@mui/icons-material/LocalDiningSharp';
import RoomSharpIcon from '@mui/icons-material/RoomSharp';
import { getRestaurantData } from "../../data/restaurantDataSlice";
import "./style.scss"

const RestaurantPage = ({}) =>{
    
    const dispatch = useDispatch();
    const {restaurantId} = useParams();

    const {name, cuisines, locality, avgRating, totalRatingsString, costForTwoMessage} = useSelector(store=>store.restaurantData.restaurantDetails.restaurantInfo);
    const restaurantMenu = useSelector(store=>store.restaurantData.restaurantDetails.restaurantMenu);
    const restaurantRecommendations = useSelector(store=>store.restaurantData.restaurantDetails.restaurantRecommendations);

    useEffect(()=>{
        dispatch(getRestaurantData(restaurantId));
    },[dispatch]);

    return(
        <div className="restaurant_page_main_container">
            <div className="restaurant_details">
                <div className="restaurant_basic_info">
                    <label className="restaurant_name">{name}</label>
                    <label className="restaurant_cuisines">
                        <LocalDiningSharpIcon/>{cuisines?.join(", ")}
                    </label>
                    <label className="restaurant_locality">
                        <RoomSharpIcon/> {locality}
                    </label>
                </div>
                <div className="restaurant_ratings">
                    <label className="restaurant_avgRating">
                        <StarRateRoundedIcon/>{avgRating}
                    </label>
                    <label className="restaurant_totalRatingsString">{totalRatingsString}</label>
                </div>
            </div>
            <label className="restaurant_costForTwoMessage">{costForTwoMessage}</label>
        </div>
    )
}

export default RestaurantPage;