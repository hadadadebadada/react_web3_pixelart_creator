
import "./App.css";
import React, { Component } from "react";
import SimpleStorageContract from "./contracts/SimpleStorage.json";
import getWeb3 from "./getWeb3";
import Navbar2 from "./components/navbar/Navbar2"
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import Footer from './components/footer/Footer'
import StartScreen from "./components/startpage/StartScreen";
import TorusTunnel2 from "./components/login/TorusTunnel2";

import Login from "./components/login/Login";
import Roadmap from "./components/startpage/Roadmap"
class App extends Component {


  state = { storageValue: 0, web3: null, accounts: null, contract: null, value: "adsd", image: "" };


  // componentDidMount = async () => {
  //   try {
  //     // Get network provider and web3 instance.
  //     const web3 = await getWeb3();

  //     // Use web3 to get the user's accounts.
  //     const accounts = await web3.eth.getAccounts();


  //     // Get the contract instance.
  //     const networkId = await web3.eth.net.getId();
  //     const deployedNetwork = SimpleStorageContract.networks[networkId];
  //     const instance = new web3.eth.Contract(
  //       SimpleStorageContract.abi,
  //       deployed Network && deployedNetwork.address,
  //     );

  //     // Set web3, accounts, and contract to the state, and then proceed with an
  //     // example of interacting with the contract's methods.
  //     this.setState({ web3, accounts, contract: instance }, this.runExample);
  //   } catch (error) {
  //     // Catch any errors for any of the above operations.
  //     alert(
  //       `Failed to load web3, accounts, or contract. Check console for details.`,
  //     );
  //     console.error(error);
  //   }


  // }

  // runExample = async () => {
  //   const { accounts, contract } = this.state;
  //     const response = await contract.methods.read().call();
  //     console.log(response)
  // };

  render() {
    return <>
      <div
        style={{
          backgroundColor: "#101529",
          alignItems:"center",
          justifyContent:"center"
          
        
        }}
      >
 
        <Router>

          <Navbar2 />

          <Routes>

          <Route path="/" element={<Navigate replace to="/home" />} />


            <Route exact path='/services' />

            <Route exact path='/roadmap' element={<Roadmap></Roadmap>} ></Route>


            <Route path='/login' element={<TorusTunnel2 />} />
            <Route path='/login2' element={<Login/>} />

            <Route exact path='/myBookings' />
            <Route exact path='/home' element={<StartScreen/>}/>
            <Route exact path='/adminbooking' ></Route>

          </Routes>

        </Router>

      </div>

      <Router>
        <Footer></Footer>
      </Router>

    </>
  }


}
export default App;






