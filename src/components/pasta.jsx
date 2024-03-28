import React from "react"
import "../styles/vendorpage.css";
import yamegg from "../Assets/boiledyamegg.png"
import scrambled from "../Assets/scrambled-eggs.png"
import english from "../Assets/Englishbreakfast.png"
import Omelette from "../Assets/Omelette.png"
import hotbread from "../Assets/hotbread.png"
import rice from "../Assets/WhiteRice.png"
import goldstar from "../Assets/goldstar.png"
import frame from "../Assets/Frame.png"
function Pasta({}){
    return <div className="foodDetailsSection">
    <div className="cardPair">
    <div className="foodCard">
        <img src={yamegg} alt="" className="foodImage"/>
        <div className="fooddetails">
            <p className="foodTitle">Boiled Yam & Egg</p>
            <div className="foodRating">
            <div className="rating">
              <img src={frame} alt="" />
              <p>1,296X</p>
            </div>
            <p>Total Sales</p>
            </div>
            <span className="starSection">
                <div className="goldstr">
                <img src={goldstar} alt="" />
                <p id="starRating">4.9</p>
                </div>
              <p>Rating by Oder</p>
            </span>
        </div>
    </div>
    <div className="foodCard">
        <img src={scrambled} alt="" className="foodImage"/>
        <div className="fooddetails">
            <p className="foodTitle">Boiled Yam & Egg</p>
            <div className="foodRating">
            <div className="rating">
              <img src={frame} alt="" />
              <p>1,296X</p>
            </div>
            <p>Total Sales</p>
            </div>
            <span className="starSection">
                <div className="goldstr">
                <img src={goldstar} alt="" />
                <p id="starRating">4.9</p>
                </div>
              <p>Rating by Oder</p>
            </span>
        </div>
    </div>
    </div>
    <div className="cardPair">
    <div className="foodCard">
        <img src={english} alt="" className="foodImage"/>
        <div className="fooddetails">
            <p className="foodTitle">Boiled Yam & Egg</p>
            <div className="foodRating">
            <div className="rating">
              <img src={frame} alt="" />
              <p>1,296X</p>
            </div>
            <p>Total Sales</p>
            </div>
            <span className="starSection">
                <div className="goldstr">
                <img src={goldstar} alt="" />
                <p id="starRating">4.9</p>
                </div>
              <p>Rating by Oder</p>
            </span>
        </div>
    </div>
    </div>
</div>
}
export default Pasta