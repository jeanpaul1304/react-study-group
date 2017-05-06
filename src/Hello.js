import React, {Component} from 'react'

//component stateless or without state
class Hello extends Component{
    render(){
        return(
            <h2>Hola {this.props.name}</h2>
        )
    }
}
export default Hello