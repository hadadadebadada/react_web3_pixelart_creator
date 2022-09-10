
import "./App.css";
import React, { Component } from "react";
import SimpleStorageContract from "./contracts/SimpleStorage.json";
import OnChainNFTContract from "./contracts/OnChainNFT.json"
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



  /* SimpleStorage */


//   componentDidMount = async () => {
//     try {
//       // Get network provider and web3 instance.
//       const web3 = await getWeb3();

//       // Use web3 to get the user's accounts.
//       const accounts = await web3.eth.getAccounts();


//       // Get the contract instance.
//       const networkId = await web3.eth.net.getId();
//       const deployedNetwork = SimpleStorageContract.networks[networkId];
//       const instance = new web3.eth.Contract(
//         SimpleStorageContract.abi,
//         deployedNetwork && deployedNetwork.address,
//       );

//       // Set web3, accounts, and contract to the state, and then proceed with an
//       // example of interacting with the contract's methods.
//       this.setState({ web3, accounts, contract: instance }, this.runExample);
//     } catch (error) {
//       // Catch any errors for any of the above operations.
//       alert(
//         `Failed to load web3, accounts, or contract. Check console for details.`,
//       );
//       console.error(error);
//     }


//   }

//   runExample = async () => {
//     const { accounts, contract } = this.state;
//       // const response = await contract.methods.read().call();
//       // console.log(response)


//       // using the promise
//    await contract.methods.write(123).send({from: accounts[0]})
// .then(function(receipt){
//     // receipt can also be a new contract instance, when coming from a "contract.deploy({...}).send()"
//     console.log(receipt)
// });

//      // await contract.methods.write(2).send();
//       const response = await contract.methods.read().call();
//       console.log(response)
//   };




  /* Minting Smart Contract */

  // componentDidMount = async () => {
  //   try {
  //     // Get network provider and web3 instance.
  //     const web3 = await getWeb3();

  //     // Use web3 to get the user's accounts.
  //     const accounts = await web3.eth.getAccounts();


  //     // Get the contract instance.
  //     const networkId = await web3.eth.net.getId();
  //     const deployedNetwork = OnChainNFTContract.networks[networkId];
  //     const instance = new web3.eth.Contract(
  //       OnChainNFTContract.abi,
  //       deployedNetwork && deployedNetwork.address,
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


  //  }

//   runExample = async () => {
//     const { accounts, contract } = this.state;
    




// //      // await contract.methods.write(2).send();
// //       const response = await contract.methods.read().call();
// //       console.log(response)
      
//       // using the promise
//      await contract.methods.mint("data:image/png;base64,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").send({from: accounts[0]})
//          //  await contract.methods.mint("da+9Y576uVJOVy/aC/++6").send({from: accounts[0]})

//      .then(function(receipt){
//           // receipt can also be a new contract instance, when coming from a "contract.deploy({...}).send()"
//           console.log(receipt)
//       });
      


//   };

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






