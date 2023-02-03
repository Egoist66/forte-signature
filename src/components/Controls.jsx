import ControlElements from "./ControlElements";
import { Component } from "react";
import Generator from "./Generator";

class Controls extends Component {
    constructor(props) {
        super(props)
    
     
      
    }

   
    render(){
      
        const {content, showChilds} = this.props;

        return (
           
            <section className="col-lg-4 control-panel">

                <ul onClick={showChilds} id="menu" className="menu-control">

                    <ControlElements  names={["General", "Social", "Banner", "Design"]} />

                </ul>

               
               

                <Generator component={content} />
            </section>
        );
    }
}


export default Controls;