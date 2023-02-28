
import ButtonCopy from "./Button";
import WidgetTable from "./WidgetTable";
import WidgetPanel from "./WidgetPanel";




//banner - "https://fortegrp.com/wp-content/uploads/2023/01/sig_banner1.png";


function Widget({forteLogoSvg, data}){
 
    return (
        

        <WidgetPanel>

            <div className="generator-right">
                
                <WidgetTable forteLogoSvg={forteLogoSvg} data={data} />

            </div>

            <ButtonCopy title={"Copy Signature"} />


        </WidgetPanel>
        
           
    );
      
}

export default Widget;