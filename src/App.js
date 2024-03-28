import './App.css';
// import Orders from './pages/orders';
// import More from './pages/more';
import Vendorpage from './pages/vendorpage';
import Newvendor from './components/newvendor';
import Staff from './pages/staff';
import Settings from './pages/settings';
import {Route,Routes,BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <div className="App">
          <BrowserRouter>
            <Routes>
              {/* <Route path="/orders" element={<Orders/>} exact/>               */}
                {/* <Route  element={<More/>} exact/> */}
                <Route path="/" element={<Settings/>}/>
                <Route path="/newvendor" element={<Newvendor/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
