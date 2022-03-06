import loadHome from './home.js';
import loadMenu from './menu.js';
import loadContact from './contact.js';
import './style.css';

function clearContent(){
    document.getElementById('content').innerHTML = '';
}

loadHome();

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