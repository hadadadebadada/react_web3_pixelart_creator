/* import { EthProvider } from "./contexts/EthContext";
import Intro from "./components/Intro/";
import Setup from "./components/Setup";
import Demo from "./components/Demo";
import Footer from "./components/Footer"; */
import "./App.css";
import React, { Component, useState } from "react";
import SimpleStorageContract from "./contracts/SimpleStorage.json";
import getWeb3 from "./getWeb3";
import Navbar2 from "./components/navbar/Navbar2"
import Pixelart from "./components/Pixelart";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Animations from "./components/Animations"
import TorusTunnel from "./components/TorusTunnel";

class App extends Component{
  
  constructor(props) {
    super(props)
   // this.ref = React.createRef()
  }
  state = { storageValue: 0, web3: null, accounts: null, contract: null, value: "adsd", image: "" };

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();


      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = SimpleStorageContract.networks[networkId];
      const instance = new web3.eth.Contract(
        SimpleStorageContract.abi,
        deployedNetwork && deployedNetwork.address,
      );

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({ web3, accounts, contract: instance }, this.runExample);
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }


  }

  runExample = async () => {
    const { accounts, contract } = this.state;
      const response = await contract.methods.read().call();
      console.log(response)
  };

  render(){
    return <>
    <div>

    <Router>

<Navbar2 />

<Routes>



  <Route exact path='/services' />

  <Route exact path='/employeelist' ></Route>

  <Route exact path='/login'  />
  <Route exact path='/myBookings'  />
  <Route exact path='/home' />
  <Route exact path='/adminbooking' ></Route>

</Routes>

</Router>

    <div>
      
    </div>
    <Animations></Animations>

    <Pixelart></Pixelart>

    
    {/* <TorusTunnel></TorusTunnel> */}
    </div>

<Router>
  <Footer></Footer>
</Router>

    </>
  }


}
export default App;










































/* function App() {
  return (
    <EthProvider>
      <div id="App" >
        <div className="container">
          <Intro />
          <hr />
          <Setup />
          <hr />
          <Demo />
          <hr />
          <Footer />
        </div>
      </div>
    </EthProvider>
  );
}

export default App; */
