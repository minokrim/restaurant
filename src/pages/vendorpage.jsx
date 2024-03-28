import React, { useEffect, useState } from "react"
import Sidenav from '../components/sidenav';
import Topnav from '../components/topnav';
import Vendormore from "../components/vendormore";
import Newvendor from "../components/newvendor";
import "../styles/Vendorhomepage.css";
import {Link } from 'react-router-dom';

import "../styles/more.css";
import "../styles/vendorpage.css";

import VendorTable from "../components/vendortables";
function Vendorpage(){
    const [showMoreSection, setshowMoreSection]=useState(false)
    const [NewVendor,setNewVendor]=useState(false)
    const [vendortable,setvendortable]=useState(true)

    
    function showmoresection(){
        setshowMoreSection(true)
    }
    let showmoreprompt;
    if(showMoreSection){
        showmoreprompt=<Vendormore/>
    }
    else{
        showmoreprompt=<VendorTable showmoresection={showmoresection}/>
    }

    function loadnewvendor(){
        setNewVendor(true)
    }
    let shownewvendor
    if(NewVendor){
        shownewvendor=<Newvendor/>
    }
    else{
        shownewvendor=showmoreprompt
    }

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
                <p className="newvendor" onClick={loadnewvendor}>New Vendor</p>
                </div>
            </div>
        </header>
        {shownewvendor}
        </section>
    </div>
}
export default Vendorpage;