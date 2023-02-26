function ContentSelection(e){

    const range = new Range();
    let thumbnail = document.querySelector(".thumbnail");
    let banner_block = document.querySelector(".banner-block");


    range.setStart(thumbnail, 0);
    range.setEnd(banner_block, 1);
    document.getSelection().removeAllRanges();
    document.getSelection().addRange(range);
    const content = range.cloneContents();



    if(document.execCommand("copy", content)){
       
        e.target.textContent = "Copied!";
        
        setTimeout(() => {
            e.target.textContent = "Copy Signature";

           
          
        },2000)
    }
}

export default ContentSelection;