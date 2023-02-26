import Controls from "./Controls";
import Widget from "./Widget";
import Perks from "./Perks";
import logo from "../images/logo.png";
import { Component } from "react";
import Info from "../subcomponents/Info";
import Image from "../subcomponents/Image";



class App extends Component {

    state = {
        
        Name: "",
        LastName: "",
        defaultTab: "#item-0",
        Title: "",
        Phone: "",
        BannerItem_0: "",
        BannerItem_1: "",
        content: <Info  onValueChanged={(e) => {this.onValueChanged(e)}} inputs={["Name", "LastName", "Title", "Phone"]} />

        
    }
    


    tab = () => {
        const {defaultTab} = this.state;
        const click = new MouseEvent("click");

        document.querySelector("#item-0").addEventListener("click", () => {
            document.location.href = defaultTab;
        })

        document.querySelector("#item-0").dispatchEvent(click)
    }


    onValueChanged = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });

       
       
    }
  

    showChilds = (e) => {
 

        const target = e.target;

        if(target.id === "item-2"){
            this.setState({
                content: <Image element={{items: ["Banner Url", "Banner path"], onValueChange: (e) => {this.onValueChanged(e)}}}  />
            });
        }
        else if(target.id === "item-0"){
            this.setState({
                content: <Info  onValueChanged={(e) => {this.onValueChanged(e)}} inputs={["Name", "LastName", "Title", "Phone"]} />
            });
        }
    }

    render(){

        const {content, Name, LastName, Title, Phone, BannerItem_0, BannerItem_1} = this.state
       
        return (

            <>

                <div className="perks">
                    <Perks img={logo} title={"Signature Generator"} />
                </div>
                <div className="container">

                    <div onLoad={this.tab} className="row col-wrapper">

                        <Controls content={content} showChilds={(e) => {this.showChilds(e)}}  />
                        <Widget defaultStyle={".gs li {margin-left: 0px !important}"}  data={[Name, LastName, Title, Phone, BannerItem_0, BannerItem_1]}  forteLogoSvg={"https://fortegrp.com/wp-content/uploads/2023/01/fav.png"} />


                   
                    </div>



                </div>


            </>



        );
    }
}



export default App;