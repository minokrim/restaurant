import React from "react"
import "../styles/Vendorhomepage.css"
import logo from "../Assets/logo.png"
import wave from "../Assets/wave.png"
import avatar from "../Assets/avatar.png"
import man from "../Assets/man.png"
function Topnav(){
    return <section id="topNav">
    <img src={logo} alt="" className="logo"/>
    <div className="topNavSection1">
        <p>TM30</p>
        <p>Hello <img src={wave} alt="" /></p>
    </div>
    <div className="topNavSection2">
    <label class="switch">
        <input type="checkbox"/>
        <span class="slider"></span>
        </label>
        <div className="topNavSection2Right">
        <p>company status</p>
        <p className="section2Text">Open</p>
        </div>
    </div>
    <div className="topNavSection3">
        <img src={avatar} alt="" className="avatar"/>
    </div>
    </section>
}
export default Topnav