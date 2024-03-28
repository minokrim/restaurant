import React from "react";
import Stafftable from "../components/staffTable";
import Sidenav from '../components/sidenav';
import Topnav from '../components/topnav';
import Newstaff from "../components/newstaff";
import Staffmore from "../components/staffmore.jsx";
import "../styles/Vendorhomepage.css";
function Staff(){
    return <div className="main">
        <Sidenav/>
        <section id="body">
        <Topnav/>
        <header>
            <div className="active">
                <div>
                    <div className="headerSec1">
                    <p>Active</p>
                    <p>Inactive</p>
                    </div>
                    <hr className="lineHeader"/>
                </div>

                <div className="headerSec2">
                <input type="text" id="search" placeholder="search by vendor name,Status,e.t.c"/>
                <p className="newvendor">New Staff</p>
                </div>
            </div>
        </header>
        <Stafftable/>
        <Newstaff/>
        <Staffmore/>
        </section>
    </div>
}
export default Staff