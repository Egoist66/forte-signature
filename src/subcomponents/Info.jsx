function Info({inputs, onValueChanged, Inputvalue}){

    let element = [];
    element = inputs.map((item, i) => {
        return (

            <div key={i} className="name flex-input">
                <label htmlFor={item.toLowerCase().trim()}>{item}:</label>
                <input name={item.trim()} value={Inputvalue}  onChange={onValueChanged} placeholder={item.toLowerCase()} type="text" id={item.toLowerCase()} className="general-input"/>
            
            </div>
        );
    });

    element.join("");

    return (

        <div className="general-item">{element}</div>
    );
}

export default Info;