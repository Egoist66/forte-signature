import PersonDetails from "./PersonDetails";

function WidgetTable({forteLogoSvg, data}){
    
    const [Name, LastName, Title, Phone, BannerItem_0, BannerItem_1, fontValue] = data;
    const styles = {
        
        marginLeft: "0px", 
        fontFamily: "Arial", 
        cursor: "pointer", 
        color: "black", 
        fontSize: fontValue + "px"
    }


    return (

        <table className="info-table">
                
            <tbody>
            
                <tr className="main-row">
                    <td>

                        <div className="logo-thumbnail"><img className="thumbnail" src={forteLogoSvg} alt=""/></div>
                        <ul className="social">

                            <li><a target="_blank" rel="norefferer" href="https://www.linkedin.com/company/1069110/admin/"/><img src="https://fortegrp.com/wp-content/uploads/2023/01/in2.png" alt="" /></li>
                            <li id="middle-social"><a rel="norefferer" target="_blank" href="https://www.facebook.com/fortegroupinc"/><img src="https://fortegrp.com/wp-content/uploads/2023/01/face2.png" alt="" /></li>
                            <li><a rel="norefferer" target="_blank" href="https://twitter.com/ForteGrp"/><img src="https://fortegrp.com/wp-content/uploads/2023/01/twitter2.png" alt="" /></li>

                        </ul>
                    </td>

                    <td className="person-block">

                        <div className="person-info">

                            <h3 className="person-name">

                                <span style={{fontFamily: "Arial", fontSize: fontValue + "px"}}id="name">{Name} </span>
                                <span style={{fontFamily: "Arial", fontSize: fontValue + "px"}} id="lastname">{LastName}</span>
                            </h3>

                            <PersonDetails mailstyle={".gs li {margin-left: 0px !important}"} style={styles} persondatails={[Title, Phone]}  />
                        
                        </div>
                    
                    </td>


                

                </tr>
                                
                <tr className="banner-row">
                
                    <td className="banner-wrapp">
                        
                        <div className="banner-block ">
                        
                            <a target="_blank" className="banner-link" href={BannerItem_1}>
                            
                                <img className="banner" src={BannerItem_0} alt="Add banner" />
                            
                            </a>
                        
                        </div>
                    </td>
                    
                    
                
            
                </tr>
        

            </tbody>
        
                
                
                
        </table>

    )
}

export default WidgetTable;