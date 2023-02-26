import { Component } from "react";

class Generator extends Component {
  

    render(){

        const {component} = this.props;

        return (

            <div className="generator-left">{component}</div>
        )
    }
  
}

export default Generator