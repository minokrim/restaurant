import React,{useState} from "react"
import DataTable from 'react-data-table-component';
import "../styles/vendortable.css"
import "../styles/Vendorhomepage.css";
import Newvendor from "./newvendor";
import telephone from "../Assets/telephonee.png"
import envelope from "../Assets/envelopee.png"
import star from "../Assets/Star.png"
import map from "../Assets/Map.png"
import mamaj from "../Assets/mamajicon.png"


const customStyles={}
function VendorTable({showmoresection}){


    const columns=[
        {
            name:"Vendor",
            selector:row=>row.vendor,
            cell:row=> <div className="vendorrow">
                <img src={row.img} alt="" />
                <p>{row.vendor}</p>
            </div>,
            sortable:true
        },
        {
            name:"Rating by order",
            selector:row=>row.rating,
            cell:row=>
            <div className="rating">
                <section className="bars">
                <div className="bar1"></div>
                <div className="bar2"></div>
                </section>
                <p>298</p>
                <div className="ind">7%</div>
            </div>,
            sortable:true
        },
        {
            name:"Last Assessed",
            selector:row=>row.lastass,
            sortable:true,
            cell:row=>
            <div className="lastassesed">
                <p>13th july, 2023</p>
            </div>
        },
        {
            name:"Status",
            cell:row=>
            <div className="payment">
                <span>.</span>
                <p>ACTIVE</p>
            </div>,
            sortable:true
        },
        {
            name:"",
            cell:row=>
            // <Link to="/More">
                <div className="more" onClick={showmoresection}>
                <p>.</p>
                <p>.</p>
                <p>.</p>
            </div>,
            sortable:true
        }
    ];

    const Data=[
        {
            vendor:"Mama j bukka",
            img:mamaj,
        },
        {
            vendor:"Mama j bukka",
            img:mamaj,
        },
        {
            vendor:"Mama j bukka",
            img:mamaj,
        },
        {
            vendor:"Mama j bukka",
            img:mamaj,
        },
        {
            vendor:"Mama j bukka",
            img:mamaj,
        },
        {
            vendor:"Mama j bukka",
            img:mamaj,
        },
        {
            vendor:"Mama j bukka",
            img:mamaj,
        },
        {
            vendor:"Mama j bukka",
            img:mamaj,
        },
        {
            vendor:"Mama j bukka",
            img:mamaj,
        },
        {
            vendor:"Mama j bukka",
            img:mamaj,
        },
    ];
    return <div>

    <DataTable columns={columns} data={Data}  striped={true} dense={true} customStyles={customStyles} responsive={true }/>
</div>
}
export default VendorTable