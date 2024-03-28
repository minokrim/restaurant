import React from "react"
import "../styles/more.css"
import call from "../Assets/call.png"
import avi from "../Assets/avi.png"
import back from "../Assets/back.png"
import {Link} from 'react-router-dom';
function More(){
    return <section className="moreSection">
    <header>
      <p className="firstParagraph">Order/<span>Staff Order Details</span></p> 
      <Link to={"/orders"}><p className="secondParagraph">STAFF ID #TM025</p></Link>
    </header>
    <div>
      <section className="moreDetails">
          <div className="details">
          <div className="detailsLeft">
          <p>Order ID</p>
          <p className="id">#00456</p>
        </div>
        <div className="detailsRight">
          <Link to="/orders">
            <img src={back} alt="" />
            <p>Back</p>
            </Link>
        </div>
          </div>
        <hr className="seperator"/>
        <div className="order">
        <div className="orderDetails">
            <p className="title">ITEM</p>
            <div className="foods">
            <p className="food f1">White Rice</p>
            <p className="food f2">Plantain</p>
            <p className="food f3">Turkey</p>
            <p className="food f4">Beef</p>
            <p className="food f5">Fanta</p>
            </div>
            <p className="total">Total</p>
        </div>
        <div className="orderPrice">
            <p className="title">Price</p>
            <div className="foods">
            <p className="food f1">400.00</p>
            <p className="food f2">200.00</p>
            <p className="food f3">1000.00</p>
            <p className="food f4">200.00</p>
            <p className="food f5">200.00</p>
            </div>
            <p className="total totalPrice">2,100.00</p>
        </div>
        <hr />
        <div className="orderRight">
        <div className="right">
          <div className="orderSummary">
              <p>Order Summary <span>.</span></p>
              <div className="cl1">
                  <p>Order created</p>
                  <p>7th july 2023</p>
              </div>
              <div className="cl1">
                  <p>Order time</p>
                  <p>10:20 am</p>
              </div>
              <div className="cl1">
                  <p>sub total</p>
                  <p>2,100.00</p>
              </div>
          </div>
        </div>
        <div>
        <div className="orderTotal cl1 orderSummary">
          <p>sub total</p>
          <p className="tprice">2,100.00</p>
          </div>
        </div>

        <div>
        <p className="t1">Delivery status <span>.</span></p>
        <p className="t1img"><span>.</span>Delivered</p>
        <p className="t1">Staff details <span>.</span></p>
        <div className="t2"><img src={avi} alt="" /><p>Adeleke Peters(TM30 staff)</p></div>
        <div className="t2"><img src={call} alt="" /><p>08034812890</p></div>
        </div>
        </div>
        </div>
      </section>
    </div>
  </section>
}
export default More