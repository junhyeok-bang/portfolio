import React, { Component } from 'react';
import JNavBar from '../navigationBar/JNavBar';

class HomeScreen extends Component {

  render() {
    return (
      <div >
        <JNavBar highlight={this.props.JNavBar}/>
        <div>
          <h4>Made by Junhyeok Bang</h4>
        </div>
      </div>

    );
  }
}

export default HomeScreen;

