import React from "react";
import Logo from "../../images/logo.png";
import SearchIcon from '@mui/icons-material/Search';
import DiscountOutlinedIcon from '@mui/icons-material/DiscountOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import "./style.scss";

const Header = () =>{
    return(
        <div className="header_container">
            <div>
                <img src={Logo} alt="Logo" width={50} height={50}/>
            </div>
            <div>
                <ul className="header_menu">
                    <li>
                        <SearchIcon/>
                        <input type="text" name="Search" className="searchbox"/>
                    </li>
                    <li>
                        <DiscountOutlinedIcon/>
                        Offers
                    </li>
                    <li>
                        <PersonOutlineOutlinedIcon/>
                        Sign In
                    </li>
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