import uuid from "react-uuid";

function ImageItems({element}){

    const {items, onValueChange} = element;
    let elems = [];

    elems = items.map((item, i) => {
        return (
            
            <div key={uuid()} className="items-wrap">

                <label htmlFor={item}>{item}:</label>
                <input onChange={onValueChange} name={`BannerItem_${i}`} placeholder={`Pass the ${item.toLowerCase()}`} type="url" id={item} className="general-input "/>
            
            
            </div>
        
           
        )
    });

    elems.join("");

    return elems;
}

export default ImageItems;