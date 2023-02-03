import { Component } from "react";

class Generator extends Component {
    constructor(props){
        super(props)
    }


    render(){

        const {component} = this.props;

        return (

            <div className="generator-left">{component}</div>
        )
    }
  
}

export default Generator