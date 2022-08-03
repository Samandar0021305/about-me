var navbar = document.getElementById("navbar");
navbar.style.background = "#111";
navbar.style.width = "100%";
navbar.style.height = "70px";

var navbarText = document.getElementById("navbarText")
navbarText.style.color = "white";
var a = 400
navbarText.style.width = `${a}px`
navbarText.textContent = "Samandar";

let navbarBox = document.querySelector(".navbar-box")
let navbarUlElement = document.createElement("ul");
let navbarListArry = ["Home","About","Contacts"];

for(let item of navbarListArry){
    let navbarLiElement = document.createElement("li")
    let navbarLinkElement  = document.createElement("a")
    navbarLinkElement.textContent = item;
    navbarLinkElement.style.color = "white";
    navbarLinkElement.style.fontSize = "24px"
    navbarLiElement.appendChild(navbarLinkElement)
    navbarLinkElement.setAttribute("href","#")
    navbarUlElement.appendChild(navbarLiElement)
}

navbarBox.appendChild(navbarUlElement)

navbarUlElement.style.width = "50%";
navbarUlElement.setAttribute("class","navbar-box")

