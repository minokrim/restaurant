import React from "react"
import FoodSectionheader from "../components/fooddetailsheader";
import "../styles/Vendorhomepage.css";
import "../styles/more.css";
import "../styles/vendorpage.css";
import foodimage from "../Assets/Bukka2.2.png"
import bukka from "../Assets/Bukkamini.png"
import vendor from "../Assets/vendorr.png"
import telephone from "../Assets/telephonee.png"
import envelope from "../Assets/envelopee.png"
import star from "../Assets/Star.png"
import map from "../Assets/Map.png"
import frame from "../Assets/Frame.png"
function Vendormore({showmoresection}){
    return <div>
                <header className="heading">
            <p>Vendor/<span>Vendor Details</span></p>
            <p id="subheading">Mama J Bukka</p>
        </header>
        <section className="bodySection">
        <div className="sec1">
            <img src={foodimage} alt="" />
            <div className="sec1Sub1">
                <p id="sub1p1">Mama J Bukka</p>
                <p id="sub1p2">Tasty</p>
                <img src="" alt="" />
                <p id="sub1p3">4.9</p>
                <div className="sec1sub2">
                    <img src="" alt="" />
                    <p>1,296X</p>
                </div>
            </div>
            <hr className="divider"/>
            <div className="sec2">
                <div className="sec2sub1">
                    <img src="" alt="" />
                    <p>Food Menu</p>
                </div>
                <div id="foodSection">
                <p className="sec2food">Plain BEANS</p>
                <p className="sec2food">Porridge Beans</p>
                <p className="sec2food">French Fries</p>
                <p className="sec2food">Porridge Yam</p>
                <p className="sec2food">Fried Rice</p>
                <p className="sec2food">Native Rice</p>
                <p className="sec2food">Jollof Rice</p>
                <p className="sec2food">Jollof & Fried Rice</p>
                <p className="sec2food">PLain Pasta</p>
                <p className="sec2food">Jollof Pasta</p>
                <p className="sec2food">Macaroni</p>
                <p className="sec2food">Amala</p>
                <p className="sec2food">Ofada Rice</p>
                <p className="sec2food">White Rice</p>
                <p className="sec2food">Boiled yam & Egg</p>
                <p className="sec2food">Scarmbled Egg</p>
                <p className="sec2food">Omelette</p>
                <p className="sec2food">Hot Bread</p>
                <p className="sec2food">English Breakfast</p>
                <p className="sec2food">Moin Moin</p>
                </div>
            </div>
            <hr className="divider "/>
            <div className="sec3">
                <p>cost-</p>
                <p id="sec3Sub">1250 (min Per Plate)</p>
            </div>
            <hr className="divider "/>
            <div className="sec4">
                <p className="sec4p">Offers</p>
                <p className="sec4p l1"><span>.</span> 10% OFF On Moin-Moin</p>
                <p className="sec4p l1"><span>.</span> Free discount welcome of 30% OFF first Order</p>
                <p className="sec4p l1"><span>.</span> Free welcome drinks</p>
            </div>
        </div>
        <div className="rightBodySec">
            <div className="rightSec1">
                <img src={bukka} alt="" />
                <p>Mama J Bukka</p>
                <div className="rightSec1Sub">
                    <p className="subSec1">Vendor</p>
                    <p className="subSec2"><span>.</span>Active</p>
                </div>
            </div>
            <hr className="divider divide"/>
            <div className="rightSec2">
                <div className="s1">
                    <img src={telephone} alt="" />
                    <p>9058733439</p>
                </div>
                <div className="s1">
                    <img src={envelope} alt="" />
                    <p>mamajbukka@gmail.com</p>
                </div> 
            </div>
            <hr className="divider divide"/>
            <div className="rightSec3">
                <span className="sec3_1">
                    <p>Rating:</p>
                    <img src={star} alt="" />
                    <p id="rating">4.9</p>
                </span>
                <span className="sec3_2">
                    <img src={frame} alt="" />
                    <p>1,296X</p>
                </span>
            </div>
            <hr className="divider divide"/>
            <div className="rightSec4">
            <p>Property information</p>
            <img src={map} alt="" />
            <p className=" address">146, Herbert Macaulay Way <span>Yaba,Lagos</span></p>
            </div>
            <hr />
            <div className="rightSec5">
                <span className="sec5_1">
                <p>Vendor Status</p>
                <p className="actIcon"><span>.</span>Active</p>
                </span>
            </div>
        </div>
        </section>
        <FoodSectionheader/>
    </div>
}
export default Vendormore