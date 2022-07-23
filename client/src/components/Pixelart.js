import React, { Component, useState } from 'react'
import "./Pixelart.css"
import html2canvas from "html2canvas"
//import { color } from 'html2canvas/dist/types/css/types/color';
//import { color } from 'html2canvas/dist/types/css/types/color';

class Pixelart extends Component {

  constructor(props) {
    super(props);

    this.state = {
      colorPicker: "#ffffff",
      width: window.innerWidth, 
      height: window.innerHeight
    };

    this.width = this.updateDimensions.bind(this)
    this.height = this.updateDimensions.bind(this)

  }
  componentDidMount() {



    let draw = false
    let container = document.querySelector('.container')
    let sizeEl = document.querySelector(".size");
    let size = 32
    const color = document.querySelector('.color')
    let resetBtn = document.querySelector('#btn')
    let eraserBtn = document.querySelector('#eraserBtn')

    this.setState({ colorPicker: color.value, width: window.innerWidth, height: window.innerHeight}, () => {

  

      function populate(size) {

       
        container.style.setProperty('--size', size)



       /*  container.style.setProperty("--gridsizeH","400px")
        container.style.setProperty("--gridsizeW","400px") */

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
              .getPropertyValue('--pixel-bg-color') != getComputedStyle(div)
                .getPropertyValue('--main-bg-color')) return
            div.style.backgroundColor = colorPicker;
          })

          div.addEventListener('mousedown', function () {
            div.style.backgroundColor = color.value
            div.style.setProperty("--main-bg-color", color.value);

          })
        /*   document.querySelector('.container').setProperty("--gridsizeH",this.state.height)
          document.querySelector('.container').setProperty("--gridsizeW",this.state.width) */

       /*    this.setState({width: window.innerWidth, height: window.innerHeight}, () => {
            console.log("hi")
          }) */
         
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

  appendScreenshot = () => {

    const container = document.querySelector("#container");

    html2canvas(container).then((canvas) => {
      const url = canvas.toDataURL(); //png file

      console.log(url) //  base64 

      
    });
  }

  updateDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight});
    
  

};

/* setContainerSize(){
  document.querySelector('.container').setProperty("--gridsizeH","400px")
  document.querySelector('.container').setProperty("--gridsizeW","400px") 
} */

  render() {

    let myWidth = this.state.width*0.95
    return <div className="Appi">

      <div className="navbar"
             style={{
              backgroundColor:"#101522"
          }}
      >

        <button id="btn" class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-4 px-10 border border-blue-500 hover:border-transparent rounded"><p style={{fontWeight:'bold', fontSize:'200%'}}>Reset</p></button>
        {/* <button className="btn">Reset</button> */}
        <div style={{
          width:'30px'
        }}></div>
        <button id="eraserBtn" class="bg-transparent hover:bg-red-500 text-blue-700 font-semibold hover:text-white py-4 px-10 border border-blue-500 hover:border-transparent rounded"><p style={{fontWeight:'bold', fontSize:'200%'}}>Eraser</p></button>
       
        <input type="color" valueDefault="#00eeff" id="color" class="color"></input>
        {/* <input type="number" value="32" class="size"></input> */}
     </div>


     <p>{this.state.width<800 ? (     
       
       
       <div style={{height:myWidth, width:myWidth}}className="container" id="container"></div>


) : <div style={{height:"800px", width:"800px"}}className="container" id="container"></div> }</p>

   

      <button onClick={this.appendScreenshot}>Load Canvas</button>

     {/*   <div className="container2" id="container2"></div> */}


    </div>;

  }
}

export default Pixelart;         