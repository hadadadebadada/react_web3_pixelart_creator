import React, { useState, useEffect, useMemo } from 'react';
import useWindowDimensions from './WindowDimHook';
import "./Pixelart.css"

function PixelartFunc() {
    const [draw, setDraw] = useState(false);

    const { height, width } = useWindowDimensions();

    const [colorPicker, setColorPicker] = useState("#ffffff")

    const [isShown, setIsShown] = useState(false);

 /*    const drawHandler = () => {
        setDraw(current => !current)
      } */
    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        // Update the document title using the browser API
        let container = document.querySelector('.container')
        let sizeEl = document.querySelector(".size");
/*         let size = 32
 */        const color = document.querySelector('.color')
        let resetBtn = document.querySelector('#btn')
        let eraserBtn = document.querySelector('#eraserBtn')


            let size = 32

            container.style.setProperty('--size', size)



            /*  container.style.setProperty("--gridsizeH","400px")
             container.style.setProperty("--gridsizeW","400px") */

            for (let i = 0; i < size * size; i++) {
                let div = document.createElement('div')
                div.classList.add('pixel')

                let colorPicker = getComputedStyle(div)

                div.addEventListener('mouseover', function () {
                    div.style.setProperty("--main-bg-color", color.value);


                    if (isShown===false) return

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

                function reset() {
                    container.innerHTML = ''
                    /* populate(size) */
                }

                function setColorWhite() {
                    color.value = "#ffffff"
                }

                resetBtn.addEventListener('click', reset)
                eraserBtn.addEventListener('click', setColorWhite)

            

         /*        window.addEventListener("mousedown", function () {
                    setDraw(true)
                    console.log("hi"+draw)

                }) */
           

/* 
                window.addEventListener("mouseup", function () {
                    setDraw({ draw: false })
                    console.log("bye"+draw)

                }) */

        /*         window.addEventListener("mouseover", function(){
                    populate(size);

                }) */
            }
            console.log('isLoading is: ', isShown);
   /*      return() =>   window.addEventListener("mousedown", function () {
            setDraw(true)
            console.log("hi"+draw)

        }) */
    });

  

    useEffect(()=>{
        window.addEventListener("mousedown", function () {
            setIsShown(true)
            console.log("hi"+draw)

        })
    },[isShown])

    useEffect(()=>{
        window.addEventListener("mouseup", function () {
            setIsShown(true)
            console.log("hi"+draw)

        })
    },[isShown])

    useEffect(()=>{



    })


    return (

/*         
Event listner removen???

window.removeEventListener('mouseup',)
 */        


        <div className="Appi">

            <div className="navbar"
                style={{
                    backgroundColor: "#101522"
                }}
            >

                <button id="btn" class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-4 px-10 border border-blue-500 hover:border-transparent rounded"><p style={{ fontWeight: 'bold', fontSize: '200%' }}>Reset</p></button>
                <div style={{
                    width: '30px'
                }}></div>
            

{/* <p>{draw == true ? (


    <div style={{ height: "80px", width: "80px", color:"white" }}>truetrue</div>


) : <div style={{ height: "80px", width: "80px", color:"white" }}>falsefalse</div>}</p> */}
{/*   <button onClick={drawHandler} type="button">
        Change
      </button> */}

{isShown && (
        <div>
          I'll appear when you hover over the button.
        </div>
      )}

                <button id="eraserBtn" class="bg-transparent hover:bg-red-500 text-blue-700 font-semibold hover:text-white py-4 px-10 border border-blue-500 hover:border-transparent rounded"><p style={{ fontWeight: 'bold', fontSize: '200%' }}>Eraser</p></button>

                <input type="color" valueDefault="#00eeff" id="color" class="color"></input>
            </div>


            <p>{width < 800 ? (


                <div style={{ height: width, width: width }} className="container" id="container"  onMouseDownCapture={() => setIsShown(true) }  onMouseUpCapture={() => setIsShown(false)}></div>


            ) : <div style={{ height: "800px", width: "800px" }} className="container" id="container"></div>}</p>




            {/* <button onClick={this.appendScreenshot}>Load Canvas</button> */}





        </div>
    );
}

export default PixelartFunc;


