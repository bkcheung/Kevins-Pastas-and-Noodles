import loadHome from './home.js';
import loadMenu from './menu.js';
import loadContact from './contact.js';
import './style.css';

function loadHeader(){
    const header = document.getElementById('header')
    const homeButton = document.createElement('button');
    const menuButton = document.createElement('button');
    const contactButton = document.createElement('button');

    homeButton.setAttribute('id', 'home');
    menuButton.setAttribute('id', 'menu');
    contactButton.setAttribute('id', 'contact');

    homeButton.textContent = 'Home';
    menuButton.textContent = 'Menu';
    contactButton.textContent = 'Contact';

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
}

initPage();

document.getElementById('home').addEventListener("click", () => {
    clearContent();
    loadHome();
});
document.getElementById('menu').addEventListener("click", () => {
    clearContent();
    loadMenu();
});
document.getElementById('contact').addEventListener("click", () => {
    clearContent();
    loadContact();
});