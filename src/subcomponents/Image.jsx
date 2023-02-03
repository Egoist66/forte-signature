import ImageItems from "./ImageItem";
function Image({element}){
    
    return (

        
        <div className="banner-wrap">

          <ImageItems element={element} />

        
            <p id="descr">Upload an image to your Dropbox, Google Drive or a similar site and paste the URL here.</p>

            
            
        
        
        </div>
        
    );
}

export default Image;