import React, {useState}from "react"
import "../styles/vendorpage.css";
import Fooddetails from "../components/fooddetails";
import Breakfast from "./../components/breakfast";
import Rice from "../components/rice";
import Pasta from "../components/pasta";
import Swallows from "../components/swallows";
import Otherfood from "../components/others";
function FoodSectionheader(){
    const [fooddetails,showfooddetails]=useState(false)
    const [breakfastdetails,showbreakfastdetails]=useState(false)
    const [ricedetails,showricedetails]=useState(false)
    const [pastadetails,showpastadetails]=useState(false)
    const [swallowdetails,showswallowdetails]=useState(false)
    const [otherdetails,showotherdetails]=useState(false)
    function LoadComponentAll(){
        showfooddetails(true)
        showbreakfastdetails(false)
        showotherdetails(false)
        showpastadetails(false)
        showricedetails(false)
        showswallowdetails(false)
        document.getElementById("cat1").style.color="#36aad9"
        document.getElementById("cat2").style.color="#777777b3"
        document.getElementById("cat3").style.color="#777777b3"
        document.getElementById("cat4").style.color="#777777b3"
        document.getElementById("cat5").style.color="#777777b3"
        document.getElementById("cat6").style.color="#777777b3"
    }
    let renderallcomponent;
    if(fooddetails){
        renderallcomponent=<Fooddetails/>
    }

    function LoadComponentBreakfast(){
        showfooddetails(false)
        showbreakfastdetails(true)
        showotherdetails(false)
        showpastadetails(false)
        showricedetails(false)
        showswallowdetails(false)
        document.getElementById("cat2").style.color="#36aad9"
        document.getElementById("cat1").style.color="#777777b3"
        document.getElementById("cat3").style.color="#777777b3"
        document.getElementById("cat4").style.color="#777777b3"
        document.getElementById("cat5").style.color="#777777b3"
        document.getElementById("cat6").style.color="#777777b3"
    }
    let renderbreakfastcomponent;
    if(breakfastdetails){
        renderbreakfastcomponent=<Breakfast/>
    }


    function LoadComponentRice(){
        showfooddetails(false)
        showbreakfastdetails(false)
        showotherdetails(false)
        showpastadetails(false)
        showricedetails(true)
        showswallowdetails(false)
        document.getElementById("cat3").style.color="#36aad9"
        document.getElementById("cat2").style.color="#777777b3"
        document.getElementById("cat1").style.color="#777777b3"
        document.getElementById("cat4").style.color="#777777b3"
        document.getElementById("cat5").style.color="#777777b3"
        document.getElementById("cat6").style.color="#777777b3"
    }
    let renderricecomponent;
    if(ricedetails){
        renderricecomponent=<Rice/>
    }

    function LoadComponentPasta(){
        showfooddetails(false)
        showbreakfastdetails(false)
        showotherdetails(false)
        showpastadetails(true)
        showricedetails(false)
        showswallowdetails(false)
        document.getElementById("cat4").style.color="#36aad9"
        document.getElementById("cat2").style.color="#777777b3"
        document.getElementById("cat3").style.color="#777777b3"
        document.getElementById("cat1").style.color="#777777b3"
        document.getElementById("cat5").style.color="#777777b3"
        document.getElementById("cat6").style.color="#777777b3"
    }
    let renderpastacomponent;
    if(pastadetails){
        renderpastacomponent=<Pasta/>
    }

    function LoadComponentSwallow(){
        showfooddetails(false)
        showbreakfastdetails(false)
        showotherdetails(false)
        showpastadetails(false)
        showricedetails(false)
        showswallowdetails(true)
        document.getElementById("cat5").style.color="#36aad9"
        document.getElementById("cat2").style.color="#777777b3"
        document.getElementById("cat3").style.color="#777777b3"
        document.getElementById("cat4").style.color="#777777b3"
        document.getElementById("cat1").style.color="#777777b3"
        document.getElementById("cat6").style.color="#777777b3"
    }
    let renderswallowcomponent;
    if(swallowdetails){
        renderswallowcomponent=<Swallows/>
    }

    function LoadComponentOther(){
        showfooddetails(false)
        showbreakfastdetails(false)
        showotherdetails(true)
        showpastadetails(false)
        showricedetails(false)
        showswallowdetails(false)
        document.getElementById("cat6").style.color="#36aad9"
        document.getElementById("cat2").style.color="#777777b3"
        document.getElementById("cat3").style.color="#777777b3"
        document.getElementById("cat4").style.color="#777777b3"
        document.getElementById("cat5").style.color="#777777b3"
        document.getElementById("cat1").style.color="#777777b3"
    }
    let renderothercomponent;
    if(otherdetails){
        renderothercomponent=<Otherfood/>
    }

    return <section className="bodySection2">
            <div className="header">
    <div className="rightHeader">
        <p className="ti1">Mama J Bukka Menu</p>
        <p className="ti2">Here is your items summary with details update</p>
    </div>
    <div className="leftHeader">
        <div className="headerSections">
            <p onClick={LoadComponentAll} id="cat1">All Categories</p>
            <p onClick={LoadComponentBreakfast} id="cat2">Breakfast</p>
            <p onClick={LoadComponentRice} id="cat3">Rice</p>
            <p onClick={LoadComponentPasta} id="cat4">Pasta</p>
            <p onClick={LoadComponentSwallow} id="cat5">Swallows</p>
            <p onClick={LoadComponentOther} id="cat6">Others</p>
        </div>
        <hr />
    </div>
    </div>
            {renderallcomponent}
            {renderbreakfastcomponent}
            {renderricecomponent}
            {renderpastacomponent}
            {renderswallowcomponent}
            {renderothercomponent}

    </section>

}
export default FoodSectionheader