
import ButtonCopy from "./Button";




const banner = "https://fortegrp.com/wp-content/uploads/2023/01/sig_banner1.png";


function Widget({forteLogoSvg, data, defaultStyle}){

    const [Name, LastName, Title, Phone, BannerItem_0, BannerItem_1] = data;
 
 
    return (
        <>

            <section className="col-lg-7 widget-panel">

            <div className="generator-right">
                <table className="info-table">
                
                    <tbody>
                    
                        <tr className="main-row">
                            <td>

                                <div className="logo-thumbnail"><img className="thumbnail" src={forteLogoSvg} alt=""/></div>
                                <ul className="social">

                                    <li><a target="_blank" href="https://www.linkedin.com/company/1069110/admin/"/><img src="https://fortegrp.com/wp-content/uploads/2023/01/in2.png" alt="" /></li>
                                    <li id="middle-social"><a target="_blank" href="https://www.facebook.com/fortegroupinc"/><img src="https://fortegrp.com/wp-content/uploads/2023/01/face2.png" alt="" /></li>
                                    <li><a target="_blank" href="https://twitter.com/ForteGrp"/><img src="https://fortegrp.com/wp-content/uploads/2023/01/twitter2.png" alt="" /></li>

                                </ul>
                            </td>

                            <td className="person-block">

                                <div className="person-info">

                                    <h3 className="person-name">

                                        <span style={{fontFamily: "Arial"}}id="name">{Name} </span>
                                        <span style={{fontFamily: "Arial"}} id="lastname">{LastName}</span>
                                    </h3>

                                    <ul style={{marginLeft: "0px !important"}} className="person-details">

                                        <style>{defaultStyle}</style>
                                        <li style={{marginLeft: "0px !important"}} className="company-department">
                                            <span  style={{fontFamily: "Arial"}} id="address">{Title}</span>
                                        
                                        </li>
                                    
                                
                                        <li style={{marginLeft: "0px !important"}} className="company-phone">
                                            <img className="info-cred" src="https://fortegrp.com/wp-content/uploads/2023/01/phone.png" alt="" /> <span  style={{fontFamily: "Arial"}}><a id="number"  style={{fontFamily: "Arial", cursor: "pointer", color: "black"}} href={`tel:${Phone}`}>{Phone}</a></span>
                                        
                                        </li>

                                        <ul className="forte-links clearfix">
                                            <li><a target="_blank" href="https://fortegrp.com/">About Us</a></li>
                                            <li className="middle-link"><a target="_blank" href="https://fortegrp.com/our-expertise/">Expertise</a></li>
                                            <li><a target="_blank" href="https://fortegrp.com/contact-us/">Contact Us</a></li>
                                        </ul>
                                      
                                    </ul>
                                
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


            </div>

            <ButtonCopy title={"Copy Signature"} />
            </section>
        
        </>
    
    );
      
}

export default Widget;