import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//component stateless or without state
const Hello = (props) => {
  return (
    <h2>Hola {props.name}</h2>
  )
}

//component with states
class HelloWithState extends Component {
  render(){
    return(
      <h2>
        Hola {this.props.name}
        <br/>
        <span> It's a Component with state</span>
      </h2>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hello name="Jean"></Hello>
        <HelloWithState name="Paul"></HelloWithState>
        <Hello name="Eduardo"></Hello>
        <Hello name="July"></Hello>
      </div>
    );
  }
}

export default App;
