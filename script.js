const darkNightMode = document.getElementById('dnmode');

const navLink = document.querySelector('.main-heading');

const heroBackground =document.querySelector('.Herosection');
const elements = document.querySelectorAll(".textColor");
const mainBackground =document.querySelector('.main-body');

darkNightMode.addEventListener(onclick=()=>{
    if(darkNightMode.getAttribute('src') == "./images/moon.png"){
        darkNightMode.src = "./images/bulb.png";
        heroBackground.style.background = "#F0FFF0";
        mainBackground.style.background = "#FFF";
        navLink.style.color = "black";
        elements.forEach(element => {
            element.classList.add("text-dark");
            element.classList.remove("text-light");
        });
    } 
    else{
        darkNightMode.src = "./images/moon.png";
        heroBackground.style.background = "#363638";
        mainBackground.style.background = "#363638";
        navLink.style.color = "#fff";
        elements.forEach(element => {
            element.classList.add("text-light");
            element.classList.remove("text-dark");
        });
    }
})