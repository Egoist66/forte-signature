import Info from "../subcomponents/Info";
import Image from "../subcomponents/Image";
import Social from "../subcomponents/Social.jsx";



class Service {
    constructor() {

        this.menuControl = document.querySelector(".menu-control");
        this.inputs = document.querySelector(".generator-left");
        this.widget = document.querySelector(".generator-right");
        this.generalControls = document.querySelectorAll(".general-input")
        this.menuItem = document.querySelectorAll(".menu-item");
        this.defaultItem = this.menuItem[0].classList.add("active");
        this.phoneNumber = document.querySelector("#number");
        this.email = document.querySelector("#email");
        this.address = document.querySelector("#address");
        this.name = document.querySelector("#name");
        this.lastname = document.querySelector("#lastname");
        this.company = document.querySelector("#company");
        this.url = document.querySelectorAll(".links");
        this.generate = document.querySelector("#generate");
        this.thumbnail = document.querySelector(".thumbnail");
        this.socials = document.querySelector(".socials");
        this.image = document.querySelector("#image");
        this.socialsItems = document.querySelectorAll(".social-item");
        this.forteLinks = document.querySelector(".forte-links");
        this.table = document.querySelector(".info-table");
        this.banner = document.querySelector(".banner");
        this.bannerBlock = document.querySelector(".banner-block");
        this.forteLinkItem = this.forteLinks.querySelectorAll("a");
        this.ctxMenu = this.removeDocumentContextMenu();
        this.personBlock = document.querySelector(".person-block");
        this.bannerLink = document.querySelector(".banner-link");

       
     

    }

    removeDocumentContextMenu(){

        document.addEventListener("contextmenu", (e) => {
            e.preventDefault();
        })
    }

    editLink(){

        this.forteLinkItem.forEach(item => {
            item.addEventListener("contextmenu", () => {
                item.contentEditable = true;
            });

            item.addEventListener("blur", () => {
                item.contentEditable = false;
            })
        })
    }

    initDefaultTab(){
      
        return General(Info);
    }

    initTabs(target){

        
        this.showActiveTabs(target.dataset.id);

        switch(+target.dataset.id){
            case 1:
                
                return General(() => {

                    return Social("Facebook", "Twitter", "Youtube", "LinkedIn", "Instagram");
                    
                });

                
            case 0:
                return General(Info);
            case 2:
                return General(Image);
            case 3: 
                return 3;
            default:
                
                return General(Info)                  
        }

     
    }

    initInputs(){

        this.inputs.querySelectorAll("input").forEach(item => {

            item.addEventListener("input", () => {

                InputBranch(item, {
                    general: {
                        phoneNumber: this.phoneNumber,
                        email: this.email,
                        name: this.name,
                        lastname: this.lastname,
                        address: this.address,
                        company: this.company,
                        url: this.url,
                        bannerLink: this.bannerLink,
                        banner: this.banner
                    },

                    // social: {
                    //     facebook: this.socials.querySelector(".Facebook"),
                    //     twitter: this.socials.querySelector(".Twitter"),
                    //     youtube: this.socials.querySelector(".YouTube"),
                    //     linkedin: this.socials.querySelector(".Linkedin"),
                    //     instagram: this.socials.querySelector(".Instagram"),
                    // }
                    
                    

                });
              
            })
        })
    }



    showActiveTabs(attr){
     

        this.menuItem.forEach(item => {
            let id = item.dataset.id;
            item.classList.remove("active");
            

            if(id === attr){
                item.classList.add("active")
                
            }
        })

    }

    copySignature(){
        let content;
        this.generate.addEventListener("click", () => {
 
            try {


               
         
                let range = new Range();

                range.setStart(this.thumbnail, 0);
                range.setEnd(this.bannerBlock, 2);
                document.getSelection().removeAllRanges();
                document.getSelection().addRange(range);
                content = range.cloneContents();
                if(document.execCommand("copy", content)){
                    this.generate.textContent = "Copied!";

                    setTimeout(() => {
                        this.generate.textContent = "Copy Signature";
                      
                    },2000)
                }
            }
            catch(e){
                console.log(e);
            }
        
        });

        return content;
    }
}



export default Service;

