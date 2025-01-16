const bar = document.getElementById('bar'); 
const close = document.getElementById('close'); 
const nav = document.getElementById('navbar');

if(bar){
    bar.addEventListener('click', () =>{
        nav.classList.add('active')
    })
}
if(close){
   close.addEventListener('click', () =>{
        nav.classList.remove('active')
    })
}

// sproduct.html
var MainImg = document.getElementById("MainImg");
var smallImage=document.getElementsByClassName("small-img");

smallImage[1].onclick = function(){
    MainImg.src = smallImage[1].src;
}
smallImage[0].onclick=function(){
    MainImg.src = smallImage[0].src
}
smallImage[2].onclick = function(){
   MainImg.src = smallImage[2].src
}
smallImage[3].onclick = function(){
    MainImg.src = smallImage[3].src
}