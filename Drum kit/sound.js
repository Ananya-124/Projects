var noButtons = document.querySelectorAll(".drum").length;
for(i=0;i<=noButtons;i++){

document.querySelectorAll(".drum")[i].addEventListener("click",handleclick);
function handleclick(){
    alert("I got clicked");
}}