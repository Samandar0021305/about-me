var navbar = document.getElementById("navbar");
navbar.style.background = "#111";
navbar.style.width = "100%";
navbar.style.height = "70px";

var navbarText = document.getElementById("navbarText")
navbarText.style.color = "white";
navbarText.textContent = "Samandar";

let navbarBox = document.querySelector(".navbar-box")
let navbarUlElement = document.createElement("ul");
let navbarListArry = ["Home","About","Contacts"];

for(let item of navbarListArry){
    let navbarLiElement = document.createElement("li")
    let navbarLinkElement  = document.createElement("a")
    navbarLinkElement.textContent = item;
    navbarLiElement.appendChild(navbarLinkElement)
    navbarUlElement.appendChild(navbarLiElement)
}

navbarBox.appendChild(navbarUlElement)

