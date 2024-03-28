import React from "react"
import ellipse1 from "../Assets/Ellipse2328.png"
import ellipse2 from "../Assets/Ellipse2330.png"
import ellipse3 from "../Assets/Ellipse2331.png"
function Col3(){
    return                 <div className="col3">
    <p>Recent Staff</p>
        <span className="col3-card">
        <img src={ellipse1} alt="" />
        <div>
        <p>Kareem Alameen</p>
        <p className="txt1">product Designer</p>
        </div>
        </span>
        <hr />
        <span className="col3-card">
        <img src={ellipse3} alt="" />
        <div>
        <p>Obi Precious</p>
        <p className="txt1">product Developer</p>
        </div>
        </span>
        <hr />
        <span className="col3-card">
        <img src={ellipse2} alt="" />
        <div>
        <p>Kareem Ameerah</p>
        <p className="txt1">Data Analyst</p>
        </div>
        </span>
        <hr />
    <button>See All Staff</button>
</div>
}
export default Col3