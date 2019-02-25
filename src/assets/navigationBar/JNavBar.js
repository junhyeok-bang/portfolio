// Custom navigation bar
import React, { Component } from 'react';
import './jNavBar.css';
import VerticalLine from '../verticalLine/VerticalLine';

class JNavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggleFlag: false
        }

        this.ToggleClick = this.ToggleClick.bind(this);
    }

    // List of navigation menu
    NavList() {
        return (
            <ul>
                <li><a href="/">nav1</a></li>
                <li><a href="/">nav2</a></li>
                <li><a href="/">nav3</a></li>
                <li><a href="/">nav4</a></li>
                <li><a href="/">nav5</a></li>
                <li><a href="/">nav6</a></li>
            </ul>
        );
    }

    // Button click event
    ToggleClick() {        
        this.setState({
            toggleFlag: !this.state.toggleFlag
        })
    }
    

    render() {
        return (
            <div class="container-fluid" className="jnav-container">

                {/* wide screen */}
                <div id="horizonNav" class="row">
                    <a href="/">HOME</a>
                    <div className="right-align">
                        <button class="toggle-button" type="button" onClick={this.ToggleClick}>
                            <span class="toggle-icon"></span>
                            <span class="toggle-icon"></span>
                            <span class="toggle-icon"></span>
                        </button>
                        {this.NavList()}
                    </div>
                </div>

                {/* narrow screen */}
                <div id="verticalNav" className={this.state.toggleFlag ? 'show-toggle' : 'hide-toggle'}>
                    <div class="row">
                        <VerticalLine marginTop="0" marginBottom="0" color="#444" />
                        {this.NavList()}
                    </div>
                </div>

            </div>
        );
    }
}

export default JNavBar;