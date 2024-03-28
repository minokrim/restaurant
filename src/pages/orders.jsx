import React, { useState } from "react";
import Sidenav from "../components/sidenav";
import Topnav from "../components/topnav";
import "../styles/Vendorhomepage.css";
import "../styles/orders.css";
import More from "./more";
import Ordertable from "../components/ordertable";

function Orders() {
    const [showordertable,setshowordertable]=useState(true)
    function displayMore(){
        setshowordertable(false)
    }
    let componenttorender;
    if(showordertable){
        componenttorender=<Ordertable displayMore={displayMore}/>
    }
    else{
        componenttorender=<More/>
    }
  return (
    <div className="main">
      <Sidenav />
      <div>
        <Topnav />
        <div id="bodycontent">
          <section id="orderBody">
            <div className="OrderBodyTop">
              <div className="topsec1">
                <p>Orders</p>
                <span>Here is your orders list</span>
              </div>
              <input type="text" id="search" placeholder="search by vendor name,Status,e.t.c"/>
              <div className="period">
                <p>This Year</p>
                <p>This Month</p>
                <p>This Week</p>
              </div>
            </div>
          </section>
          <div className="tablesec">
                {/* {showordertable && <Ordertable displayMore={displayMore}/>} */}
                {componenttorender}
          </div>
        </div> 

      </div>
    </div>
  );
}
export default Orders;
