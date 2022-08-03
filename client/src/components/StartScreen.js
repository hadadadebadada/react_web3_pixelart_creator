import React, { Component } from 'react';
import Animations from './Animations';
import Pixelart from './Pixelart';
import Home from './Home';
import TestTailwind from './Roadmap';
import PixelartFunc from './PixelartFunc';

/* export const FancyButton = React.forwardRef((props, ref) => (
 
                        <TestTailwind ref={ref}></TestTailwind>

  
 
  ));
 */
class StartScreen extends Component {

      constructor(props) {
    super(props);
    this.testRef = React.createRef();
  }


  
    render() {
        return (
            <div>

              {/*   <PixelartFunc
                ></PixelartFunc> */}
                <Animations></Animations>
               
                <Pixelart></Pixelart>
                <Home></Home>
                <TestTailwind ref={this.testRef}></TestTailwind>
            </div>
        );
    }
}

export default StartScreen;