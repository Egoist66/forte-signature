import { Component } from "react";

class ControlElements extends Component {
    constructor(props) {
        super(props)


      
    }

  
   
    render(){
        const {names} = this.props;
  
        let element = names.map((item, i) => {
            return  (
                
                <div className="tab-label" key={i}>

                   
                    <a  className="tab-link"  href={`#item-${i}`}>

                        <li id={`item-${i}`}  data-id={i} className={`menu-item `}>{item}</li>


                    </a>
                   

                </div>  
                
               
            )

            
        })
        element.join("");
       
        return element;
    }

}

export default ControlElements;

