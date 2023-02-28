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

function setDefaultTab(defaultTab){

    const click = new MouseEvent("click");

    document.querySelector("#item-0").addEventListener("click", () => {
        document.location.href = defaultTab;
    })

    document.querySelector("#item-0").dispatchEvent(click)
}

export {ContentSelection, setDefaultTab};