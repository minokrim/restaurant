import React from "react"
import "../styles/table.css"
import DataTable from 'react-data-table-component';
const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>;

const customstyles={}
const columns=[
    {
        name:"StaffID",
        selector:row=>row.staffid,
        sortable:true
    },
    {
        name:"Date",
        selector:row=>row.date,
        sortable:true
    },
    {
        name:"StaffName",
        selector:row=>row.staffname,
        sortable:true
    },
    {
        name:"FoodOrdered",
        selector:row=>row.foodordered,
        sortable:true
    },
    {
        name:"Amount",
        selector:row=>row.amount,
        sortable:true
    }
];
const Data=[
    {
        id:1,
        staffid:"#TM007",
        date:"13th July 2023, 9:20 am",
        staffname:"Kareem Alameen",
        foodordered:"whiterice,plantain ...",
        amount:"₦2,100.00"
    },
    {
        id:2,
        staffid:"#TM008",
        date:"13th July 2023, 9:20 am",
        staffname:"Kareem Alameen",
        foodordered:"whiterice,plantain ...",
        amount:"₦2,100.00"
    },
    {
        id:3,
        staffid:"#TM009",
        date:"13th July 2023, 9:20 am",
        staffname:"Kareem Alameen",
        foodordered:"whiterice,plantain ...",
        amount:"₦2,100.00"
    },
    {
        id:4,
        staffid:"#TM007",
        date:"13th July 2023, 9:20 am",
        staffname:"Kareem Alameen",
        foodordered:"whiterice,plantain ...",
        amount:"₦2,100.00"
    },
    {
        id:5,
        staffid:"#TM007",
        date:"13th July 2023, 9:20 am",
        staffname:"Kareem Alameen",
        foodordered:"whiterice,plantain ...",
        amount:"₦2,100.00"
    },
    {
        id:6,
        staffid:"#TM007",
        date:"13th July 2023, 9:20 am",
        staffname:"Kareem Alameen",
        foodordered:"whiterice,plantain ...",
        amount:"₦2,100.00"
    },
    {
        id:7,
        staffid:"#TM007",
        date:"13th July 2023, 9:20 am",
        staffname:"Kareem Alameen",
        foodordered:"whiterice,plantain ...",
        amount:"₦2,100.00"
    },
    {
        id:8,
        staffid:"#TM007",
        date:"13th July 2023, 9:20 am",
        staffname:"Kareem Alameen",
        foodordered:"whiterice,plantain ...",
        amount:"₦2,100.00"
    },
    {
        id:9,
        staffid:"#TM007",
        date:"13th July 2023, 9:20 am",
        staffname:"Kareem Alameen",
        foodordered:"whiterice,plantain ...",
        amount:"₦2,100.00"
    },
    {
        id:10,
        staffid:"#TM007",
        date:"13th July 2023, 9:20 am",
        staffname:"Kareem Alameen",
        foodordered:"whiterice,plantain ...",
        amount:"₦2,100.00"
    },
];
function Tables(){
    return <div>
        <DataTable columns={columns} data={Data} striped={true} dense={true} customStyles={customstyles} searchPane={true}/>
    </div>
}
export default Tables