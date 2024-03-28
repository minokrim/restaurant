import React from "react"
import "../styles/vendorlogin.css"
import logo from "../Assets/tm30logo.png"
import image from"../Assets/foodimg.png"
import image2 from "../Assets/Rectangle12.png"
import star from"../Assets/sparkler_7711276 2.png"
import star2 from"../Assets/star2.png"
import star3 from"../Assets/star3.png"
function VendorLogin(){
    return <div id="vLOginBody">
        <section class="nav">
            <img src={logo} alt="" />
            <p>Become a vendor</p>
        </section>
        <hr />
        <section className="stars">
            <img src={star} alt="" id="star1"/>
            <img src={star} alt="" id="star2"/>
            <img src={star2} alt="" id="star3"/>
            <img src={star3} alt="" id="star4"/>
        </section>
        <section className="paragraph1">
            <h1>Optimize your sales and manage your orders</h1>
            <p>Manage your store in well organised way. Here you can maximize <br />your performance and improve customer experience</p>
        </section>
        <div className="main">
        <section className="registrationForm">
            <section className="section2Header">
            <h2>Start selling with TM30 food Platform</h2>
            <p>Become a vendor</p>
            </section>

            <div className="section2">
            <label htmlFor="email">Email address</label>
            <input type="email" name="" id="email" />
            <br />
            <label htmlFor="vendorDomain">Vendor doamin </label>
            <input type="text" name="" id="vendorDomain" />
            <br />
            <label htmlFor="businessName">Business Name </label>
            <input type="text" name="" id="businessName" />
            <br />
            <label htmlFor="businessAddress">Business address </label>
            <input type="text" name="" id="businessAddress" />
            <br />
            <label htmlFor="phoneNumber">Phone number </label>
            <input type="text" name="" id="phoneNumber" />
            <br />
            <label htmlFor="password">Password</label>
            <input type="password" name="" id="password" />
            <br />
            <div id="terms">
            <input type="checkbox" name="" id="radio" />
            <p>I accept to receive update from TM30 food platform</p>
            </div>

            <div id="terms">
            <input type="checkbox" name="" id="radio" />
            <p>I accept the privacy policy</p>
            </div>

            <button>Get Started</button>
            <section id="final">
            <p>Already a vendor?</p>
            <p id="lgnx">Login</p>
            </section>
            </div>
        </section>
        <section className="foodsection">
            <img src={image} alt="" id="foodImg"/>
        </section>
        </div >
        <img src={image2} alt="" id="rectangle"/>
    </div>
}
export default VendorLogin