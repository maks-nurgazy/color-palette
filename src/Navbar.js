import React, { Component } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Navbar.css'


class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const { level, changeLevel } = this.props;
        return (
            <header className='Navbar'>
                <div className='logo'>
                    <a href="#">reactcolorpicker</a>
                </div>
                <div className='levelContainer'>
                    <span>Level:</span>
                    <div className="slider">
                        <Slider
                            defaultValue={level}
                            min={100}
                            max={900}
                            step={100}
                            onAfterChange={changeLevel} />
                    </div>
                </div>
            </header>
        );
    }
}

export default Navbar;