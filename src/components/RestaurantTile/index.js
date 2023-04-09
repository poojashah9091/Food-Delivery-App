import React from "react";

const RestaurantTile = ({imageSrc, restaurantName, cuisines, avgRating, deliveryTime, costForTwoString, discountScheme}) =>{
    return(
        <div className="restaurantTileContainer">
            <img src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${imageSrc}`} 
                alt="restaurantImg"/>
            <label>{restaurantName}</label>
            <label>{cuisines}</label>
            <div>
                <div>{avgRating}</div>
                <div>{deliveryTime}</div>
                <div>{costForTwoString}</div>
            </div>
            <label>{discountScheme}</label>
        </div>
    )
}

export default RestaurantTile;