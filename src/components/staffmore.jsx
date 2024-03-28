import React from "react"
import foodimage from "../Assets/Bukka2.2.png"
import bukka from "../Assets/Bukkamini.png"
import Staffmorecomponent from "./staffmorecontent"
import telephone from "../Assets/telephonee.png"
import avatar from "../Assets/Ellipse2328.png"
import avatar2 from "../Assets/sizedavatar.png"
import envelope from "../Assets/envelopee.png"
import "../styles/Vendorhomepage.css";
import "../styles/more.css";
import "../styles/vendorpage.css";
import StaffMore from "./staffmorecontent"
function Newstaff(){
    return <div>
        <header className="heading">
            <p>Staff/<span>Staff Details</span></p>
            <p id="subheading">STaff ID #TM008</p>
        </header>
        <section className="morebodySection">
        <div className="rightBodySec">
            <div className="rightSec1">
                <img src={avatar2} alt="" />
                <p>Adenike James</p>
                <div className="rightSec1Sub">
                    <p className="subSec1">Product Manager</p>
                    <p className="subSec2">48</p>
                </div>
            </div>
            <hr className="divider divide"/>
            <div className="rightSec2">
                <div className="s1">
                    <img src={telephone} alt=""  className="s1img"/>
                    <p>9058733439</p>
                </div>
                <div className="s1">
                    <img src={envelope} alt="" className="s1img"/>
                    <p>mamajbukka@gmail.com</p>
                </div> 
            </div>
            <hr className="divider divide"/>
        </div>
        <div>
        <div className="rightsec1">
            <div >
                <div className="sec2sub1">
                    <p>Recent History</p>
                </div>
            </div>
            <hr className="divider "/>
            <Staffmorecomponent/>
            <Staffmorecomponent/>
            <Staffmorecomponent/>

            </div>
            <div className="customerStatus">
                <div className="customerStatusSec1">
                    <p>Customer Status</p>
                    <p className="inactive">Inactive</p>
                </div>
                <hr />
                <div className="customerStatusSec2">
                    <div className="customerS">
                        <img src={avatar} alt="" />
                        <p>Adenike James</p>
                    </div>
                </div>
            </div>
        </div>
            </section>
    </div>

}
export default Newstaff