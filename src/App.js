import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const Hello = (props) => {
  return (
    <h2>Hola {props.name}</h2>
  )
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hello name="Jean"></Hello>
        <Hello name="Paul"></Hello>
        <Hello name="Eduardo"></Hello>
        <Hello name="July"></Hello>
      </div>
    );
  }
}

export default App;
