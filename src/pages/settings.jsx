import React from "react";
import Topnav from "../components/topnav";
import Sidenav from "../components/sidenav";
import "../styles/settings.css"
function Settings(){
    return <div className="main">
        <Sidenav/>
        <section id="body">

        <Topnav/>
        <div className="settingsHeader">
            <p>Settings</p>
            <p className="subHeader">Please cahnge your password as the company food manager</p>
        </div>
        <div className="settingsBody">
            <div className="detail">
                <p className="label namelabel">Name</p>
                <input type="text" name="" className="lableInput name" placeholder="TM30 Company Admin"/>
            </div>
            <div className="detail">
                <p className="label">Old Password*</p>
                <input type="text" name="" className="lableInput pass oldpass"/>
            </div>
            <div className="detail">
                <p className="label">New Password*</p>
                <input type="text" name="" className="lableInput pass"/>
            </div>
            <div className="detail">
                <p className="label newpasslabel">Confirm Old Password*</p>
                <input type="text" name="" className="lableInput newpass2"/>
            </div>
            <div className="buttons">
                <button className="save">Save</button>
                <button className="cancel">Cancel</button>
            </div>
        </div>
        </section>
    </div>
}
export default Settings