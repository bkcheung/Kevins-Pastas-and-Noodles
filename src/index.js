import loadHome from './home.js';
import loadMenu from './menu.js';
import loadContact from './contact.js';
import './style.css';

const homeButton = document.createElement('button');
const menuButton = document.createElement('button');
const contactButton = document.createElement('button');

function loadHeader(){
    const header = document.getElementById('header')
    
    homeButton.setAttribute('id', 'home');
    menuButton.setAttribute('id', 'menu');
    contactButton.setAttribute('id', 'contact');

    homeButton.textContent = 'Home';
    menuButton.textContent = 'Menu';
    contactButton.textContent = 'Contact';
    homeButton.classList.add('selected');


    header.append(homeButton, menuButton, contactButton);
}

function loadFooter(){
    const footer = document.getElementById('footer');
    footer.innerHTML = "Copyright © bkcheung 2022"
}
function initPage(){
    loadHeader();
    loadHome();
    loadFooter();
}

function clearContent(){
    document.getElementById('content').innerHTML = '';
    homeButton.classList.remove('selected');
    menuButton.classList.remove('selected');
    contactButton.classList.remove('selected');
}

initPage();

homeButton.addEventListener("click", () => {
    clearContent();
    loadHome();
    homeButton.classList.add('selected');
});
menuButton.addEventListener("click", () => {
    clearContent();
    loadMenu();
    menuButton.classList.add('selected');
});
contactButton.addEventListener("click", () => {
    clearContent();
    loadContact();
    contactButton.classList.add('selected');
});