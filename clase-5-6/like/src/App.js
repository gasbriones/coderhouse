import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      counter:0
    }
  }
  _handleClick = () => {
    this.setState({
        counter:this.state.counter + 1
    })
  }

    _handleReset = () => {
        this.setState({
            counter:0
        })
    }

  render() {
    return (
      <div className="App">
          <button onClick={this._handleClick}>like</button>
          <span>{this.state.counter}</span>
        <button onClick={this._handleReset}>reset</button>
      </div>
    );
  }
}

export default App;
