import React from "react";
import Logo from "../../images/logo.png";
import SearchIcon from '@mui/icons-material/Search';
import DiscountOutlinedIcon from '@mui/icons-material/DiscountOutlined';
// import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import "./style.scss";
import { useDispatch } from "react-redux";
import { filterRestaurants } from "../../data/restaurantListSlice";
import { Link, useLocation } from "react-router-dom";

const Header = () =>{

    const dispatch = useDispatch();
    const location = useLocation();

    const handleSearch = (e) =>{
        dispatch(filterRestaurants(e.target.value));
    }

    return(
        <div className="header_container">
            <div className="brand">
                <Link to="/" className="brand_logo"> <img src={Logo} alt="Logo"/></Link>
                <Link to="/" className="brand_name">  <label>Food Mart</label></Link>
            </div>
            <div>
                <ul className="header_menu">
                    {
                        location.pathname==="/" &&
                        <li>
                            <SearchIcon/>
                            <input type="text" name="Search" className="searchbox" onChange={handleSearch} placeholder="Search Restaurant"/>
                        </li>
                    }
                    <li>
                        <DiscountOutlinedIcon/>
                        Offers
                    </li>
                    {/* <li>
                        <PersonOutlineOutlinedIcon/>
                        Sign In
                    </li> */}
                    <li>
                        <ShoppingCartOutlinedIcon/>
                        Cart
                    </li>
                </ul>
            </div>
        </div>
    )

}   

export default Header;