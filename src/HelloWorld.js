import React from 'react'
//component with states
class HelloWorld extends Component {
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

export default HelloWorld