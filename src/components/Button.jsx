import { Component } from "react";
import ContentSelection from "../selection";

class ButtonCopy extends Component {
   

    Copy = (e) => {

        try {
            
            ContentSelection(e)
        
        }
        catch(e){
            console.log(e);
        }

    }


    render(){
        const {title} = this.props;
       

        return (
            <div className="generate-wrapper">

                <button  onClick={(e) => {this.Copy(e)}} className="btn--primary" id="generate">{title}</button>

            </div>
        );
    }
}

export default ButtonCopy;