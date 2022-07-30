import React, { Component } from 'react';
import Animations from './Animations';
import Pixelart from './Pixelart';
import Home from './Home';
import TestTailwind from './Roadmap';
import PixelartFunc from './PixelartFunc';

class StartScreen extends Component {
    render() {
        return (
            <div>

              {/*   <PixelartFunc
                ></PixelartFunc> */}
                <Animations></Animations>
                <Pixelart></Pixelart>
               {/*  <Home></Home> */}
               {/*  <TestTailwind></TestTailwind> */}
            </div>
        );
    }
}

export default StartScreen;