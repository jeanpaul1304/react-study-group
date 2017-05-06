import React, {Component} from 'react'

//component stateless or without state
class Hello extends Component{
    constructor(props){
        super(props)
        
        this.state = {
            name: 'Test'
        }

        this.changeHandler = this.changeHandler.bind(this)
    }

    changeHandler(event){
        this.setState({
            name: event.target.value
        }, ()=>{console.log(this.state.name)} )// here is a callback
        console.log(this.state.name) // here the state is not trigget yet
    }

    render(){
        return(
            <div>
                <input 
                    type="text" 
                    placeholder="Tu nombre"
                    onChange={this.changeHandler}/>
                <h2>Hola {this.state.name}</h2>
            </div>
        )
    }
}
export default Hello