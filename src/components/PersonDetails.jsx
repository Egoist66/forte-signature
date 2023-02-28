function PersonDetails({style, mailstyle, persondatails}){
    const [Title, Phone] = persondatails;

    return (

        <ul style={style} className="person-details">

            <style>{mailstyle}</style>
            <li style={style} className="company-department">
                <span  style={style} id="address">{Title}</span>
            
            </li>
        

            <li style={style} className="company-phone">
                <img className="info-cred" src="https://fortegrp.com/wp-content/uploads/2023/01/phone.png" alt="phone" /> <span  style={style}><a id="number" style={style} href={`tel:${Phone}`}>{Phone}</a></span>
            
            </li>

           <ForteLinks links={["About us", "Expertise", "Contact us"]} />
        
        </ul>
    )
}




function ForteLinks({links}){

    const [link1, link2, link3] = links
    return (

        <ul className="forte-links clearfix">
            <li><a rel="norefferer" target="_blank" href="https://fortegrp.com/">{link1}</a></li>
            <li className="middle-link"><a rel="norefferer" target="_blank" href="https://fortegrp.com/our-expertise/">{link2}</a></li>
            <li><a rel="norefferer"  target="_blank" href="https://fortegrp.com/contact-us/">{link3}</a></li>
        </ul>
    )
}




export default PersonDetails;