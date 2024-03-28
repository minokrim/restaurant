import React, { useState } from "react"
import "../styles/Vendorhomepage.css"
import man from "../Assets/man.png"
import tf from "../Assets/tf.png"
import market from "../Assets/market.png"
function Col1({ number1, percent1, period1,number2, percent2, period2, number3, percent3, period3 }){

    return<div>
                <div className="col1">
                    <div className="recCard1">
                        <img src={man} alt="" />
                        <div className="recCard1Txt1">
                            <p>Staff</p>
                            <p>{number1}</p>
                        </div>
                        <div className="recCard1Txt2">
                            <img src="" alt="" />
                            <span>{percent1}</span>
                            <p>{period1}</p>
                        </div>
                    </div>
                    <div className="recCard1" >
                        <img src={market} alt="" />
                        <div className="recCard1Txt1">
                            <p>Vendor</p>
                            <p>{number2}</p>
                        </div>
                        <div className="recCard1Txt2">
                            <img src="" alt="" />
                            <span>{percent2}</span>
                            <p>{period2}</p>
                        </div>
                    </div>
                    <div className="recCard1" >
                        <img src={tf} alt="" />
                        <div className="recCard1Txt1">
                            <p>Payment</p>
                            <p>{number3}</p>
                        </div>
                        <div className="recCard1Txt2">
                            <img src="" alt="" />
                            <span>{percent3}</span>
                            <p>{period3}</p>
                        </div>
                    </div>
                </div>
    </div>
}
export default Col1