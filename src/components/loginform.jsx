import React from "react";
import "../styles/loginform.css"
import logo from "../Assets/tm30logo.png"
import mail from "../Assets/mail_3494619 1.png"
import padlock from "../Assets/padlock_4167808 1.png"
import clarity from "../Assets/clarity_eye-hide-line.png"
function Loginform(){
    return<div className="main">
        <section className="section1">
        <img src={logo} alt=""  id="logo"/>
        <h1>vendor Portal</h1>
        <p>Manage your store,edit your menu and get to understand how to grow your business.</p>

        <div id="formSec">
        {/* <p id="iconTitle">Email address</p> */}
        <label htmlFor="emailField" id="iconTitle">Email address</label>
        <img src={padlock} alt="" className="icons padlock"/>
        <input type="email" name="" id="emailField"  />
        <br />
        <br />
        {/* <p id="iconTitle">password</p> */}
        <label htmlFor="passwordField" id="iconTitle">Password</label>

        <section id="iconSub">
        <img src={mail} alt="" className="icons"/>
        <img src={clarity} alt="" className="icons"/>
        </section>

        <input type="password" name="" id="passwordField" />
        <button>Login</button>
        <p id="forgetP">Forget the password</p>
        </div>

        </section>

        <section className="section2">
            <p>Not a vendor yet</p>
            <p>Sign Up?</p>
        </section>
    </div>
}
export default Loginform