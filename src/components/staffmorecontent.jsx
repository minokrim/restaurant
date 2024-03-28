import React from "react"
import "../styles/staffmore.css"
import whiterice from "../Assets/WhiteRice.png"
function Staffmorecomponent(){
    return             <div>
    <div className="history1">
        <img src={whiterice} alt="" />
        <div className="historySec">
            <div className="choice">
            <p className="choiceMeal">Choice Meal</p>
            <p className="choicePrice">296x</p>
            </div>
            <div className="historySec2">
                <p>White Rice- <span>PLantain,Turkey,beef,egg,coke</span><span className="x2">x2</span></p>
            </div>
            <div className="historySec3">
                <p>7th july 2023,10:20 am</p>
            </div>
        </div>
        <div className="totalPrice">
            <p>3200.00</p>
        </div>
    </div>
    <hr />
</div>
}
export default Staffmorecomponent