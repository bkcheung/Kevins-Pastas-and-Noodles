import pasta from './pasta.jpg';
import noodle from './noodle.jpg';

export default function loadMenu(){
    const content = document.getElementById('content');
    const title = document.createElement('h1');
    const item1 = document.createElement('h3');
    const desc1 = document.createElement('p');
    const item2 = document.createElement('h3');
    const desc2 = document.createElement('p');

    const pastaImage = new Image(350,350);
    pastaImage.src = pasta;

    const noodleImg = new Image(350,350);
    noodleImg.src = noodle;

    title.innerHTML = "Menu";
    item1.innerHTML = "Aglio e Olio";
    desc1.innerHTML = "Spaghetti wil oil and garlic";
    item2.innerHTML = "Zha Jiang Mian";
    desc2.innerHTML = "Beijing \"Fried Sauce\" noodles, inspired by Share Life Shanghai.";

    content.append(title, item2, desc2, noodleImg, item1, desc1, pastaImage);
}