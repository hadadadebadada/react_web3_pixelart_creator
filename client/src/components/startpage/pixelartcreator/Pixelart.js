import React, { Component } from 'react'
import "./Pixelart.css"
import html2canvas from "html2canvas"
import OnChainNFTContract from "../../../contracts/OnChainNFT.json"
import getWeb3 from "../../../getWeb3";

class Pixelart extends Component {

  constructor(props) {
    super(props);

    this.state = {
      colorPicker: "#ffffff",
      width: window.innerWidth,
      height: window.innerHeight,
      web3: null,
      accounts: null,
      contract: null,
      image: ""
    };

    this.width = this.updateDimensions.bind(this)
    this.height = this.updateDimensions.bind(this)

    this.web3 = this.componentDidMount.bind(this);
    this.accounts = this.componentDidMount.bind(this);

    this.contract = this.componentDidMount.bind(this);
   // this.image = this.appendScreenshot.bind(this);

  }
  componentDidMount = async () => {

    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();


      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = OnChainNFTContract.networks[networkId];
      const instance = new web3.eth.Contract(
        OnChainNFTContract.abi,
        deployedNetwork && deployedNetwork.address,
      );

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({ web3, accounts, contract: instance }, /* this.runExample */);

    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }


    let draw = false
    let container = document.querySelector('.container')
    let size = 8
    const color = document.querySelector('.color')
    let resetBtn = document.querySelector('#btn')
    let eraserBtn = document.querySelector('#eraserBtn')

    this.setState({ colorPicker: color.value, width: window.innerWidth, height: window.innerHeight }, () => {



      function populate(size) {


        container.style.setProperty('--size', size)





        for (let i = 0; i < size * size; i++) {
          let div = document.createElement('div')
          div.classList.add('pixel')

          let colorPicker = getComputedStyle(div)
            .getPropertyValue('--main-bg-color');

          div.addEventListener('mouseover', function () {
            div.style.setProperty("--main-bg-color", color.value);


            if (!draw) return
            div.style.backgroundColor = color.value
            div.style.setProperty("--main-bg-color", color.value);
            div.style.setProperty("--pixel-bg-color", color.value);


          })

          div.addEventListener('mouseover', function () {

            if (getComputedStyle(div)
              .getPropertyValue('--pixel-bg-color') !== getComputedStyle(div)
                .getPropertyValue('--main-bg-color')) return
            div.style.backgroundColor = colorPicker;
          })

          div.addEventListener('mousedown', function () {
            div.style.backgroundColor = color.value
            div.style.setProperty("--main-bg-color", color.value);

          })


          container.appendChild(div)
        }
      }




      window.addEventListener("mousedown", function () {
        draw = true
      })
      window.addEventListener("mouseup", function () {
        draw = false
      })


      function reset() {
        container.innerHTML = ''
        populate(size)
      }

      function setColorWhite() {
        color.value = "#ffffff"
      }

      resetBtn.addEventListener('click', reset)
      eraserBtn.addEventListener('click', setColorWhite)

      populate(size);

    });







  }

  


  updateDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });



  };




  mintPicture = async () => {

    const { accounts, contract, web3 } = this.state;
    // const gasPrice = await web3.eth.getGasPrice();
    // console.log("gas price:", gasPrice)
    // console.log("account1: ",accounts[0])
    // let accounts1 = web3.eth.getAccounts(console.log);
    // console.log("account12: ",accounts1[0])

    const container = document.querySelector("#container");
    container.style.height = "200px";
    container.style.width = "200px";


    contract.methods.withdraw().call() // value in wei
    .then(function (receipt) {
      // receipt can also be a new contract instance, when coming from a "contract.deploy({...}).send()"

      console.log("money withdrawed")
      console.log(receipt)
    });

    html2canvas(container).then((canvas) => {


      //const url = canvas.toDataURL(); //png 
      
      this.setState({ image: canvas.toDataURL() }, () => {

       let picString = this.state.image
       
       contract.methods.mint(picString).send({ from: accounts[0],value:5000000000000000000,picString }) // value in wei
       .then(function (receipt) {
         // receipt can also be a new contract instance, when coming from a "contract.deploy({...}).send()"

      
         console.log(receipt)
       });
       
      web3.eth.getBalance("0x345B674C0Dd658eAd4f6287B1E31e053C8139084")
      .then(console.log);
        //console.log("NFT META DATA: ", contract.methods.formatTokenURI(pngString).call())
    
      //     web3.eth.sendTransaction({
      //       from: accounts[0],
      //       to: '0x433a69a3F84FbfcF32694f871ebd92046Af39ceD',
      //       value: '50000000000000000'
      //   })
      //   .then(function(receipt){
      // /*     console.log(receipt)
      //     console.log(picString) */
      //     contract.methods.mint(picString).send({ from: accounts[0],value:5000000000000000000,picString })
      //     .then(function (receipt) {
      //       // receipt can also be a new contract instance, when coming from a "contract.deploy({...}).send()"

      //       console.log(receipt)
      //     });
    
      //   });
      });



      //console.log("TokenCounter: ", contract.methods.getTokenCounter().call())

      container.style.height = "800px";
      container.style.width = "800px";

    // web3.eth.sendTransaction({from:accounts[0], to:'0x433a69a3F84FbfcF32694f871ebd92046Af39ceD', value: web3.toWei(5, "ether"), gas:100000});
    });







  }



  render() {

    let myWidth = this.state.width * 0.95
    return <div className="Appi">

      <div className="navbar"
        style={{
          backgroundColor: "#101522"
        }}
      >

        <button id="btn" class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-4 px-10 border border-blue-500 hover:border-transparent rounded"><p style={{ fontWeight: 'bold', fontSize: '200%' }}>Reset</p></button>

        <div style={{
          width: '30px'
        }}></div>
        <button id="eraserBtn" class="bg-transparent hover:bg-red-500 text-blue-700 font-semibold hover:text-white py-4 px-10 border border-blue-500 hover:border-transparent rounded"><p style={{ fontWeight: 'bold', fontSize: '200%' }}>Eraser</p></button>

        <input type="color" valueDefault="#00eeff" id="color" class="color"></input>

      </div>


      <p>{this.state.width < 800 ? (


        <div style={{ height: myWidth, width: myWidth }} className="container" id="container"></div>


      ) : <div style={{ height: "800px", width: "800px" }} className="container" id="container"></div>}</p>



      <button onClick={this.mintPicture}>Load Canvas</button>




    </div>;

  }
}

export default Pixelart;         