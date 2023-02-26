function Social(...rest){

    const element = rest.map((item, i) => {
        return (
            
            <div className="name flex-input">
                <input title="Check to remove icon" className="social-checkbox" id={i} type="checkbox" name="social"/>
                <label htmlFor={item}>{item}:</label>
                <input placeholder={`https://www.${item.toLowerCase()}.com`} type="text" id={item.toLowerCase()} className="general-input name-input"/>
            
            </div>
    
            
        )
    });

    return element.join("");

}

export default Social;