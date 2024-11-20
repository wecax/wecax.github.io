const shareButton = document.getElementById("shareBtn");
const popupContainer = document.querySelector(".popup-container");
const userContainer = document.querySelector(".user-container");
const shareContainer = document.querySelector(".share-container");
const sharecontainerDesktop = document.querySelector(".popup-desktop");
const h2 = document.querySelector(".h2");
const svgColor = document.querySelector("#shareSvg path");

const darkBlue = "#48556A";
const white = "#FFFFFF";

let windowW;

let toggle = 0;

function popupOn(){
    if(windowW <= 900){
        shareButton.style.background = "#6E8098";
        svgColor.style.fill = white

        popupContainer.style.background = darkBlue;
        userContainer.style.display = "none";
        shareContainer.style.display = "flex";
    }else{
        sharecontainerDesktop.style.display = "block"
        shareButton.style.background = "#6E8098";
        svgColor.style.fill = white
    }
}

function popupOff(){
    if(windowW <= 900){
        shareButton.style.background = "#ECF2F8";
        svgColor.style.fill = "#6E8098";

        popupContainer.style.background = white;
        userContainer.style.display = "block";
        shareContainer.style.display = "none";
    }else{
        sharecontainerDesktop.style.display = "none"
        shareButton.style.background = "#ECF2F8";
        svgColor.style.fill = "#6E8098";

    }
    
}

shareButton.addEventListener("click", ()=>{
    windowW = window.innerWidth
    
    if (toggle == 0){
        popupOn();
        toggle = 1
    }else{
        popupOff();
        toggle = 0
    }
})

console.log(svgColor)