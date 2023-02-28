import Controls from "./Controls";
import Widget from "./Widget";
import Perks from "./Perks";
import { setDefaultTab} from "../selection";
import { Component } from "react";
import Info from "../subcomponents/Info";
import Image from "../subcomponents/Image";
import Settings from "./Settings";


import logo from "../images/logo.png";





class App extends Component {

    state = {
        
        Name: "",
        LastName: "",
        defaultTab: "#item-0",
        Title: "",
        Phone: "",
        BannerItem_0: "",
        BannerItem_1: "",
        content: <Info  onValueChanged={(e) => {this.onValueChanged(e)}} inputs={["Name", "LastName", "Title", "Phone"]} />,
        fontValue: 14,


        
    }
    


    tab = () => {
        setDefaultTab(this.state.defaultTab)
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

    onFontValueChange = (e) => {
        this.setState({
            fontValue: e.target.value
        })
    }

    render(){

        const {content, Name, LastName, Title, Phone, BannerItem_0, BannerItem_1, fontValue} = this.state
       
        return (

            <>

                <div className="perks">
                    <Perks img={logo} title={"Signature Generator"} />
                </div>

                <Settings onFontChange={(e) => {this.onFontValueChange(e)}} fontvalue={fontValue} />

                <div className="container">

                    <div onLoad={this.tab} className="row col-wrapper">

                        <Controls content={content} showChilds={(e) => {this.showChilds(e)}}  />
                        <Widget  data={[Name, LastName, Title, Phone, BannerItem_0, BannerItem_1, fontValue]}  forteLogoSvg={"https://fortegrp.com/wp-content/uploads/2023/01/fav.png"} />


                   
                    </div>



                </div>


            </>



        );
    }
}



export default App;