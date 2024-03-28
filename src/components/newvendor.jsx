import React from "react"
import "../styles/newvendor.css";
function Newvendor(){
    return <div>
    <header className="heading">
        <p>Vendor/<span>Add New Vendor</span></p>
        <p id="subheading">Add New Vendor</p>
        <p className="vnd">Get started the new Vendor sign up process</p>
    </header>
    <section className="createvendor">
        <div className="prt-1">
            <div>
                <p className="text">Vendor ID</p>
                <input type="text" name="" className="vendorId" />
            </div>
            <div>
                <p className="text">Add a Note</p>
                <input type="text" name="" className="vendorNote"  />
            </div>
            <div className="createvendorButtons">
            <button className="sendButton">Send invite link</button>
            <button className="cancelButton">Cancel</button>
            </div>
        </div>
        <hr />
        <div className="prt-2">
            <p className="invite">Invite Link not sent</p>
        </div>
    </section>
    </div>
}
export default Newvendor