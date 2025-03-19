// var on_btn=document.getElementById("spin");
// var off_btn=document.getElementById("spin-off");
// var img=document.getElementById("fan");
var img=document.querySelector("img");

function spin()
{
    img.classList.add("fan");
}

function spin_off(){
    img.classList.remove("fan")
}