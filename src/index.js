import loadHome from './home.js';
import loadMenu from './menu.js';
import loadContact from './contact.js';
import './style.css';

const header = document.createElement('header')
const footer = document.createElement('footer');
const homeButton = document.createElement('button');
const menuButton = document.createElement('button');
const contactButton = document.createElement('button');

function loadHeader(){
    homeButton.setAttribute('id', 'home');
    menuButton.setAttribute('id', 'menu');
    contactButton.setAttribute('id', 'contact');
    homeButton.textContent = 'Home';
    menuButton.textContent = 'Menu';
    contactButton.textContent = 'Contact';
    homeButton.classList.add('selected');
    header.append(homeButton, menuButton, contactButton);
    document.body.append(header);
}

function loadFooter(){
    footer.innerHTML = "Copyright © bkcheung 2022";
    document.body.append(footer);
}

function initPage(){
    loadHeader();
    loadHome();
    loadFooter();
}

function clearContent(){
    document.body.removeChild(content);
    document.body.removeChild(footer);
    homeButton.classList.remove('selected');
    menuButton.classList.remove('selected');
    contactButton.classList.remove('selected');
}

initPage();

homeButton.addEventListener("click", () => {
    clearContent();
    loadHome();
    loadFooter();
    homeButton.classList.add('selected');
});
menuButton.addEventListener("click", () => {
    clearContent();
    loadMenu();
    loadFooter();
    menuButton.classList.add('selected');
});
contactButton.addEventListener("click", () => {
    clearContent();
    loadContact();
    loadFooter();
    contactButton.classList.add('selected');
});