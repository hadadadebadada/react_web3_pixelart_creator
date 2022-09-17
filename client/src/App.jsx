
import "./App.css";
import React, { Component } from "react";
/* import SimpleStorageContract from "./contracts/SimpleStorage.json";
import OnChainNFTContract from "./contracts/OnChainNFT.json"
import getWeb3 from "./getWeb3"; */
import Navbar2 from "./components/navbar/Navbar2"
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import Footer from './components/footer/Footer'
import StartScreen from "./components/startpage/StartScreen";
import TorusTunnel2 from "./components/login/TorusTunnel2";
import Install from "./components/startpage/Install";
import Login from "./components/login/Login";
import Roadmap from "./components/startpage/Roadmap"
class App extends Component {


  state = { storageValue: 0, web3: null, accounts: null, contract: null, value: "adsd", image: "" };

  render() {
    return <>
      <div style={{
          backgroundColor: "#101529",
          alignItems:"center",
          justifyContent:"center"}} >
 
        <Router>

          <Navbar2 />

          <Routes>

{/*           <Route path="/" element={<Navigate replace to="/home" />} />
 */}

            <Route exact path='/services' />

            <Route exact path='/roadmap' element={<Roadmap></Roadmap>} ></Route>


            <Route path='/login' element={<TorusTunnel2 />} />
            <Route path='/login2' element={<Login/>} />

            <Route exact path='/myBookings' />
     
            <Route exact path='/adminbooking' ></Route>

          </Routes>

        </Router>

        {
          window.ethereum ?  <StartScreen/> : <Install />
          
        }
       
      </div>

      <Router>
        <Footer></Footer>
      </Router>

    </>
  }


}
export default App;






