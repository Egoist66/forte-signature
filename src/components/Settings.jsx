function Settings({fontvalue, onFontChange}){

    return (

        <div className="font-controls">

            <span style={{color: "white"}}>Font change: <input  min={0} max={32} onChange={onFontChange} value={fontvalue}  type="range" name="font" id="font-range" /></span>
            <p id="font-out">{fontvalue}px</p>

        </div>
    )
}


export default Settings