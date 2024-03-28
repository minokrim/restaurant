import React from "react";
import "../styles/staffTable.css"
import DataTable from 'react-data-table-component';
import icon from "../Assets/Ellipse2331.png"

function Stafftable(){
    const customstyles={}
    const columns=[
        {
            name:"Staff ID",
            selector:row=>row.staffid,
            sortable:true
        },
        {
            name:"Staff name",
            selector:row=>row.vendor,
            cell:row=> <div className="vendorrow">
                <img src={row.img} alt="" />
                <p>{row.vendor}</p>
            </div>,
            sortable:true
        },
        {
            name:"Date Joined",
            selector:row=>row.date,
            sortable:true
        },

        {
            name:"Total spending",
            cell:row=>
            <div className="payment">
                <p>25,200.00</p>
            </div>,
            sortable:true
        },
        {
            name:"Last spending",
            cell:row=>
            <div className="deliver">
                <p>3200.00</p>
            </div>,
            sortable:true
        },
        {
            name:"",
            cell:row=>
            // <Link to="/More">
                <div className="more">
                <p>.</p>
                <p>.</p>
                <p>.</p>
            </div>,
            sortable:true
        }
    ];
    const Data=[
        {
            staffid:"#TM048",
            vendor:"Alameen Kareem",
            date:"13th July 2023",
            img:icon,
        },
        {
            staffid:"#TM048",
            vendor:"Alameen Kareem",
            date:"13th July 2023",
            img:icon,
        },
        {
            staffid:"#TM048",
            vendor:"Alameen Kareem",
            date:"13th July 2023",
            img:icon,
        },
        {
            staffid:"#TM048",
            vendor:"Alameen Kareem",
            date:"13th July 2023",
            img:icon,
        },
        {
            staffid:"#TM048",
            vendor:"Alameen Kareem",
            date:"13th July 2023",
            img:icon,
        },
        {
            staffid:"#TM048",
            vendor:"Alameen Kareem",
            date:"13th July 2023",
            img:icon,
        },
        {
            staffid:"#TM048",
            vendor:"Alameen Kareem",
            date:"13th July 2023",
            img:icon,
        },
        {
            staffid:"#TM048",
            vendor:"Alameen Kareem",
            date:"13th July 2023",
            img:icon,
        },
        {
            staffid:"#TM048",
            vendor:"Alameen Kareem",
            date:"13th July 2023",
            img:icon,
        },
        {
            staffid:"#TM048",
            vendor:"Alameen Kareem",
            date:"13th July 2023",
            img:icon,
        },
    ];
    return <div>
        
        <DataTable columns={columns} data={Data} striped={true} dense={true} customStyles={customstyles} responsive={true }/>
    </div>
}
export default Stafftable