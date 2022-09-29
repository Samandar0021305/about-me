var navbar__toogle = document.querySelector(".navbar__toogle");
var navbar__toogle__bg = document.querySelector(".navbar__toogle__bg");
var navbar__close = document.querySelector(".navbar__close")
var header = document.querySelector(".header")
if(!navbar__toogle){
    navbar__toogle__bg.classList.remove("navbar__open")
}
if(navbar__toogle){
    navbar__toogle.addEventListener("click",()=>{
        navbar__toogle__bg.classList.toggle("navbar__open")
    })
}
navbar__close.addEventListener("click",()=>{
    navbar__toogle__bg.classList.remove("navbar__open")
})


header.addEventListener("click",()=>{
    navbar__toogle__bg.classList.remove("navbar__open")
})

let navbar = document.querySelector(".navbar");

