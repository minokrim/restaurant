import React from "react";
import "../styles/newstaff.css"
function Newstaff(){
    return <div>
        <header className="heading">
        <p>Staff/<span>Add New Staff</span></p>
        <p id="subheading">Add New Staff</p>
        <p className="vnd">fill in the staff details</p>
    </header>
    <section className="createvendor">
        <div className="prt-1">
            <div className="staffRow1">
            <div>
                <p className="text">First Name</p>
                <input type="text" name="" className="textbox" />
            </div>
            <div>
                <p className="text">Last Name</p>
                <input type="text" name="" className="textbox"  />
            </div>
            </div>
            <div className="staffRow2">
            <div>
                <p className="text">Email Address</p>
                <input type="text" name="" className="textbox"/>
            </div>
            <div>
                <p className="text">Phone Number</p>
                <input type="text" name="" className="textbox"/>
            </div>
            </div>
            <div className="createvendorButtons">
            <button className="sendButton">Send invite link</button>
            <button className="cancelButton">Cancel</button>
            </div>
        </div>
        <hr />
        <div className="prt-2">
            <p className="invite">Invite Link not generated yet</p>
        </div>
    </section>
    </div>
}
export default Newstaff