import React, {Component} from 'react'

//component stateless or without state
class NameInput extends Component{
    constructor(props){
        super(props)
        
        this.changeHandler = this.changeHandler.bind(this)
    }
    changeHandler(e){
        this.props.onChange(e.target.value)
    }
    
    render(){
        return(
            <input 
                type="text" 
                placeholder="Tu nombre"
                onChange={this.changeHandler}/>
        )
    }
}
export default NameInput