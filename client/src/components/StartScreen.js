import React, { Component } from 'react';
import Animations from './Animations';
import Pixelart from './Pixelart';
import Home from './Home';
import TestTailwind from './TestTailwind';


class StartScreen extends Component {
    render() {
        return (
            <div>
                <Animations></Animations>
                <Pixelart></Pixelart>
                <Home></Home>
                <TestTailwind></TestTailwind>
            </div>
        );
    }
}

export default StartScreen;