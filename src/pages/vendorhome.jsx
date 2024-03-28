import React,{useState,useEffect} from "react"
import "../styles/Vendorhomepage.css"
import Col1 from "../components/col1"
import Col2 from "../components/col2"
import Col3 from "../components/col3"
import Tables from "../components/table"
import Sidenav from "../components/sidenav"
import Topnav from "../components/topnav"

function Vendorhomepage(){
    const [number1, setnumber1] = useState("");
    const [number2, setnumber2] = useState("");
    const [number3, setnumber3] = useState("");
    const [percent1, setpercent1] = useState("");
    const [percent2, setpercent2] = useState("");
    const [percent3, setpercent3] = useState("");
    const [period1, setperiod1] = useState("")
    const [period2, setperiod2] = useState("")
    const [period3, setperiod3] = useState("")
    
    function handleSelectChange(event) {
        const selectedOption = event.target.value;
        if (selectedOption === "Today") {
          setnumber1("97");
          setpercent1("17.2%");
          setperiod1("today");
          setnumber2("38");
          setpercent2("4.7%");
          setperiod2("today");
          setnumber3("126,910");
          setpercent3("24.2%");
          setperiod3("today");
        } 
        else if(selectedOption === "Last 7 days"){
            setnumber1("178");
            setpercent1("31.0%");
            setperiod1("this week");
            setnumber2("42");
            setpercent2("0.9%");
            setperiod2("this week");
            setnumber3("460,000");
            setpercent3("23.2%");
            setperiod3("this week");
        }
        else if(selectedOption === "Last 30 days"){
            setnumber1("201");
            setpercent1("82.9%");
            setperiod1("this month");
            setnumber2("51");
            setpercent2("9.7%");
            setperiod2("this month");
            setnumber3("1,260,500");
            setpercent3("24.2%");
            setperiod3("this month");
          }
      }

      useEffect(() => {
        // Set initial values when component mounts
        handleSelectChange({ target: { value: "Today" } });
    }, []);

    return <div className="main">
        <Sidenav/>
        <div className="right">
            <Topnav/>
        <section id="body">
            <div className="bodyheader">
            <p className="btxt1">Overview</p>
            <hr className="btxt1line"/>
            <div className="pre-body">
            <p className="btxt2">Statistics <span>.</span></p>
            <select name="" id="" onChange={handleSelectChange}>
                <option value="Today"><span id="option">Today</span></option>
                <hr />
                <option value="Last 7 days"><span id="option">Last 7 days</span></option>
                <hr />
                <option value="Last 30 days"><span id="option">Last 30 days</span></option>
            </select>
            </div>
            </div>
            <div className="columns">
                <Col1 number1={number1} percent1={percent1} period1={period1} number2={number2} percent2={percent2} period2={period2} number3={number3} percent3={percent3} period3={period3}/>
                <Col2/>
                <Col3/>
            </div>
            <div className="tableContainer">
                <p className="tcTxt1">Recent Order</p>
                <p className="tcTxt2">Here is your recent order list</p>
                <Tables/>
            </div>

        </section>
        </div>
    </div>
}
export default Vendorhomepage