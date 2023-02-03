import { Component } from "react";

class ButtonCopy extends Component {
    constructor(props) {
        super(props)
       
    
        
    }

    Copy = (e) => {

        try {

            const range = new Range();
            let thumbnail = document.querySelector(".thumbnail");
            let banner_block = document.querySelector(".banner-block");

       

            range.setStart(thumbnail, 0);
            range.setEnd(banner_block, 1);
            document.getSelection().removeAllRanges();
            document.getSelection().addRange(range);
            const content = range.cloneContents();



            if(document.execCommand("copy", content)){
               
                e.target.textContent = "Copied!";
                
               

                setTimeout(() => {
                    e.target.textContent = "Copy Signature";

                   
                  
                },2000)
            }
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