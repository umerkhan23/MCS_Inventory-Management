import logo from './logo.svg';

import {BrowserRouter, Navigate, Routes , Route} from 'react-router-dom';
import './App.css';
import './index.css';

import Navbar from './components/Navbar';
import Login from './components/Login';
import Home2 from './components/Home2';
import MCS from './components/MCS';
import New from './components/New';
import AddProduct from './components/AddProduct';
import AddIssue from './components/AddIssue';
import Update from './components/Update';
import LocalProc from './components/LocalProc';
import Condemnation from './components/Condemnation';
import Spdata from './components/Spdata';
import Setting from './components/Setting';
import Search from './components/Search';
import Report from "./components/Report";
import Home from './components/Home';
import CHQ from "./components/CHQ";
import CWing from "./components/CWing";
import EWing from "./components/EWing";
import CadetWing from "./components/CadetWing";
import MISC from "./components/MISC";
import NUST from "./components/NUST";
import CadetHostal from "./components/CadetHostal";
import SOM from "./components/SOM";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar />
                <div>
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/home2" element={<Home2 />} />
                        <Route path="/MCS" element={<MCS />} />
                        <Route path="/home" element={<Home />} />
                        <Route path='/new' element={<New />}/>
                        <Route path='/addproduct' element={<AddProduct />}/>
                        <Route path='/addissue' element={<AddIssue />}/>
                        <Route path='/search' element={<Search/>}  />
                        <Route path='/update' element={<Update />}/>
                        <Route path='/report' element={<Report/>} />
                        <Route path='/localProc' element={<LocalProc />}/>
                        <Route path='/condemnation' element={<Condemnation />}/>
                        <Route path='/spdata' element={<Spdata />}/>
                        <Route path='/setting' element={<Setting />}/>
                        <Route path='/CHQ' element={<CHQ/>} />
                        <Route path='/CWing' element={<CWing/>} />
                        <Route path='/EWing' element={<EWing/>} />
                        <Route path='/CadetWing' element={<CadetWing/>} />
                        <Route path='/MISC' element={<MISC/>} />
                        <Route path='/NUST' element={<NUST/>} />
                        <Route path='/CadetHostal' element={<CadetHostal/>} />
                        <Route path='/SOM' element={<SOM/>} />
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;