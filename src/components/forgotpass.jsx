import React from "react"
import "../styles/loginform.css"
import logo from "../Assets/tm30logo.png"
import mail from "../Assets/mail_3494619 1.png"
import padlock from "../Assets/padlock_4167808 1.png"
import clarity from "../Assets/clarity_eye-hide-line.png"
function Forgotpass(){
    return <div className="main">
    <section className="section1">
    <img src={logo} alt=""  id="logo"/>
    <h1>Forgot password</h1>
    <p>Please enter your email address and reset link will be sent to the email provided.</p>

    <div id="formSec">
    {/* <p id="iconTitle">Email address</p> */}
    <label htmlFor="emailField" id="iconTitle">Email address</label>
    <img src={mail} alt="" className="icons padlock"/>
    <input type="email" name="" id="emailField"  />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <button>Proceed</button>
    <p id="forgetP">Back to Login</p>
    </div>

    </section>

    <section className="section2">
        <p>Not a vendor yet</p>
        <p>Sign Up?</p>
    </section>
</div>

}
export default Forgotpass