var navbar = document.getElementById("navbar");
navbar.style.background = "#111";
navbar.style.width = "100%";
navbar.style.height = "70px";

var navbarText = document.getElementById("navbarText")
navbarText.style.color = "white";
var a = 400
navbarText.style.width = `${a}px`
navbarText.textContent = "Samandar";

navbarText.addEventListener("mouseenter",()=>{
    navbarText.setAttribute("data-aos","fade-up")
    navbarText.setAttribute("data-aos-duration","3000")

})


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
navbarUlElement.classList.add("navbar-list")



let headerId = document.getElementById("header_id");
var headerTextArry = ["I am a software developer and javaScript, C++ developer","../img/20220622_191339.jpg"];

for(let i = 0; i<headerTextArry.length;i++){
    var headerLIEelement = document.createElement("li");
    
}

let headerh2Element = document.createElement("h2");
let headerImgElement = document.createElement("img");

headerh2Element.textContent = headerTextArry[0];
headerImgElement.setAttribute("src",headerTextArry[1])

headerLIEelement.appendChild(headerh2Element)
headerLIEelement.appendChild(headerImgElement)

headerId.appendChild(headerLIEelement);

