import React from "react";
import "./style.scss";

const Badge = ({text}) =>{    
   return( 
        <div className="badge_container">
            <div className="badge_anchor"></div>
            <span className="badge_text">
                {text}
            </span>
        </div>
   )
}

export default Badge;