import React, {  } from "react"
import "../styles/table.css"
import "../styles/ordertable.css"
import DataTable from 'react-data-table-component';

// const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>;

const customstyles={}


function Ordertable ({displayMore}){

    const columns=[
        {
            name:"Order ID",
            selector:row=>row.orderid,
            sortable:true
        },
        {
            name:"Date",
            selector:row=>row.date,
            sortable:true
        },
        {
            name:"Amount",
            selector:row=>row.amount,
            sortable:true
        },
        {
            name:"payment Status",
            cell:row=>
            <div className="payment">
                <span>.</span>
                <p>SUCCESS</p>
            </div>,
            sortable:true
        },
        {
            name:"Delivery Status",
            cell:row=>
            <div className="deliver">
                <span>.</span>
                <p>Delivered</p>
            </div>,
            sortable:true
        },
        {
            name:" lines",
            cell:row=>
            // <Link to="/More">
                <div className="more" onClick={displayMore}>
                <p>.</p>
                <p>.</p>
                <p>.</p>
            </div>,
            sortable:true
        }
    ];
    const Data=[
        {
            id:1,
            orderid:"#TM007",
            date:"13th July 2023",
            amount:"₦2,100.00",
            paymentstatus:"",
            deliverystatus:"",
            more: ""
        },
        {
            id:2,
            orderid:"#TM007",
            date:"13th July 2023",
            amount:"₦2,100.00",
            paymentstatus:"",
            deliverystatus:"",
            more: ""
        },
        {
            id:3,
            orderid:"#TM007",
            date:"13th July 2023",
            amount:"₦2,100.00",
            paymentstatus:"",
            deliverystatus:"",
            more: ""
        },
        {
            id:4,
            orderid:"#TM007",
            date:"13th July 2023",
            amount:"₦2,100.00",
            paymentstatus:"",
            deliverystatus:"",
            more: ""
        },
        {
            id:5,
            orderid:"#TM007",
            date:"13th July 2023",
            amount:"₦2,100.00",
            paymentstatus:"",
            deliverystatus:"",
            more: ""
        },
        {
            id:6,
            orderid:"#TM007",
            date:"13th July 2023",
            amount:"₦2,100.00",
            paymentstatus:"",
            deliverystatus:"",
            more: ""
        },
        {
            id:7,
            orderid:"#TM007",
            date:"13th July 2023",
            amount:"₦2,100.00",
            paymentstatus:"",
            deliverystatus:"",
            more: ""
        },
        {
            id:8,
            orderid:"#TM007",
            date:"13th July 2023",
            amount:"₦2,100.00",
            paymentstatus:"",
            deliverystatus:"",
            more: ""
        },
        {
            id:9,
            orderid:"#TM007",
            date:"13th July 2023",
            amount:"₦2,100.00",
            paymentstatus:"",
            deliverystatus:"",
            more: ""
        },
        {
            id:10,
            orderid:"#TM007",
            date:"13th July 2023",
            amount:"₦2,100.00",
            paymentstatus:"",
            deliverystatus:"",
            more: ""
        },
    ];
    return <div>
        
        <DataTable columns={columns} data={Data} striped={true} dense={true} customStyles={customstyles} responsive={true }/>
    </div>
}
export default Ordertable