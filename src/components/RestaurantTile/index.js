import React from "react";
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import DiscountRoundedIcon from '@mui/icons-material/DiscountRounded';
import "./style.scss";
import Badge from "../../customComponents/Badge.js";
import { Link } from "react-router-dom";

const RestaurantTile = ({ restaurantId, badge, imageSrc, restaurantName, cuisines, avgRating, deliveryTime, costForTwoString, discountScheme}) =>{

    // const [showRestaurant, setShowRestaurant] = useState(false);
    const handleRestaurantTileClick = () =>{
        // setShowRestaurant(true);
    }

    return(
        <>
        <Link to={`/restaurant/${restaurantId}`}>
            <div className="restaurant_tile_container" id={restaurantId} onClick={handleRestaurantTileClick}>
                {badge && 
                    <Badge text="PROMOTED"/>
                }
                <img src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${imageSrc}`} 
                    alt={restaurantName}
                />
                <label className="restaurant_name">{restaurantName}</label>
                <label className="cuisines">{cuisines}</label>
                <div className="meta_info">
                    {avgRating && 
                        <div className={avgRating>=4.0 ? "rating high_rating" : "rating avg_rating"}>
                            <StarRateRoundedIcon/>
                            <label>{avgRating}</label>
                        </div>
                    }
                    <div>{deliveryTime}</div>
                    <div>{costForTwoString}</div>
                </div>
                {discountScheme && 
                    <div className="offer">
                        <DiscountRoundedIcon/>
                        <label>{discountScheme}</label>
                    </div>
                }
            </div>
            </Link>
            {/* {
              showRestaurant && <Link to={`/restaurants/${restaurantId}`}/>
            } */}
        </>
    )
}

export default RestaurantTile;