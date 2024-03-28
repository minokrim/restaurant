import React from "react"
import "../styles/Vendorhomepage.css"
import chart from "../Assets/chart.png"
function Col2(){
    return<div className="col2">
    <div className="paymentFlowTop">
        <div className="paymentFlowTopRight">
            <p>PAYMENT FLOW</p>
            <span>39K</span>
        </div>
        <div className="paymentFlowCat">
            <a href="">Today</a>
            <a href="">Weekly</a>
            <a href="">Monthly</a>
        </div>
    </div>
    <div className="statsSection">
    <span>
        <p>80K</p>
        <p>40K</p>
        <p>20K</p>
        <p>10K</p>
    </span>
    <img src={chart} alt="" />
    </div>
    <span className="timeframe">
        <p>6AM</p>
        <p>9AM</p>
        <p>12AM</p>
        <p>3PM</p>
        <p>6PM</p>
        <p>9PM</p>
        <p>12AM</p>
    </span>
    </div>
}
export default Col2;