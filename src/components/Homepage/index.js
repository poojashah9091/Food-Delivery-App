import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import RestaurantTile from "../RestaurantTile";
import "./style.scss";
import { getAllRestaurantsList } from "../../data/restaurantListSlice";

const Homepage = () =>{
    const dispatch = useDispatch();
    const restaurantDataStatus = useSelector(store=>store.allRestaurants?.status?.GET_ALL);
    const restaurantList = useSelector(store=>store.allRestaurants?.filteredRestaurants);

    useEffect(()=>{
        dispatch(getAllRestaurantsList());
    },[]);

    return(
        <div className="homepage_container">
            <div className="restaurants_list_container">
            {
                restaurantList?.map(restaurant =>{
                   return( 
                        <RestaurantTile
                            key={restaurant.data?.id}
                            restaurantId={restaurant.data?.id}
                            badge={restaurant.data?.promoted}
                            imageSrc={restaurant.data?.cloudinaryImageId}
                            restaurantName={restaurant.data?.name}
                            cuisines={restaurant.data?.cuisines?.join(", ")}
                            avgRating={restaurant.data?.avgRating}
                            deliveryTime={restaurant.data?.slaString}
                            costForTwoString={restaurant.data?.costForTwoString}
                            discountScheme={restaurant.data?.aggregatedDiscountInfo?.shortDescriptionList[0]?.meta}
                        />
                   )
                })
            }
            </div>
        </div>
    )
}

export default Homepage;