import React from "react"
import "../styles/Vendorhomepage.css"
import gear from "../Assets/gear.png"
import people from "../Assets/people.png"
import market from "../Assets/market2.png"
import receipt from "../Assets/receipt.png"
import logout from "../Assets/logout.png"
import staff from "../Assets/staff.png"
function Sidenav(){
    return <section id="nav-side">
        <img src="" alt="" />
        <a href=""><label htmlFor="Dashboard"><img src={gear} alt="" />Dashboard</label></a>
        <a href=""><label htmlFor="Dashboard"><img src={receipt} alt="" />Orders </label></a>
        <a href=""><label htmlFor="Dashboard"><img src={market} alt="" />Menus</label></a>
        <a href=""><label htmlFor="Dashboard"><img src={staff} alt="" />Staff</label></a>
        <hr />
        <a href=""><label htmlFor="Dashboard"><img src={gear} alt="" />Settings</label></a>
        <a href=""><label htmlFor="Dashboard"><img src={logout} alt="" /><span className="logout">Logout</span></label></a>
        </section>
}
export default Sidenav