import React from "react";
import "./index.css";
import AnimationSmallText from "../animtaionText";

function Navbar(){
    return(
        <>
            <nav>
                <div className="container">
                  <div className="dFlex">
                    {/* LOGO START */}
                  <div className="logo"><span><AnimationSmallText text='LI'/></span><span><AnimationSmallText text='FE'/></span></div>
                  {/* LOGO END */}
                  {/* MENU BAR START */}
                  <div className="menuBar">
                    <ul>
                      <li><a href="#"><AnimationSmallText text='Project'/></a></li>
                      <li><a href="#"><AnimationSmallText text='Contact'/></a></li>
                    </ul>
                  </div>
                  {/* MENU BAR END */}
                  </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;