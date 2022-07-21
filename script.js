document.querySelector(".bar").addEventListener("click" , function() {
    document.querySelector(".navigation").style.visibility = "visible";
    document.querySelector(".close").style.visibility = "visible";
    document.querySelector(".bar").style.visibility = "hidden";
})

document.querySelector(".close").addEventListener("click" , function() {
    document.querySelector(".navigation").style.visibility = "hidden";
    document.querySelector(".close").style.visibility = "hidden";
    document.querySelector(".bar").style.visibility = "visible";
})