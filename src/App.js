import React, { Component } from 'react';
import './App.css';
import Hello from './Hello'
import NameInput from './NameInput'

class App extends Component {
  constructor(props){
    super(props)
    
    this.state = {
      name: 'Jean'
    }

    this.changeHandler = this.changeHandler.bind(this)
  }

  changeHandler(name){
      this.setState({
          name: name
      })
  }

  render() {
    return (
      <div className="App">
        <NameInput onChange={this.changeHandler}></NameInput>
        <Hello name={this.state.name}/>
      </div>
    );
  }
}

export default App;
