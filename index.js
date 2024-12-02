const container = document.querySelector('.cover');
const images = [
    'url(img/Wedding-Planner-1.jpg)',
    'url(img/Wedding-Planner-2.jpg)',
    'url(img/party-1.jpg)',
    'url(img/Wedding-Planner-3.jpg)',
    'url(img/party-2.jpg)',
];

let currentIndex = 0;

function changeBackground(){
    currentIndex = (currentIndex + 1) % images.length;
    container.style.backgroundImage = images[currentIndex];
}

setInterval(changeBackground, 4000);

let menuIcon = document.querySelector('#menu-box');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  navbar.classList.toggle('active');
}

window.onscroll = () => {
  navbar.classList.remove('active');
}