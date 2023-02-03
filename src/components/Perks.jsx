
function Perks({img, title}){

    return (
        <div className="perks-logo-title">
        
            <div><img src={img} alt=""/></div>
            <div><h1>{title}</h1></div>
        
        </div>
    );
}

export default Perks;