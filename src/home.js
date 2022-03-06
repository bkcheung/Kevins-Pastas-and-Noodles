import pasta from './pasta.jpg';

export default function loadHome(){
    const content = document.getElementById('content');
    const title = document.createElement('h1');
    const header = document.createElement('h3');
    const desc = document.createElement('p');

    const pastaImage = new Image(500,500);
    pastaImage.src = pasta;

    title.innerHTML = "Kevin's Pastas and Noodles";
    header.innerHTML = "There's nothing quite like a hot bowl of Kevin's famous pastas and noodles.";
    desc.innerHTML = "Ever since he was a young wee lad, Kevin had a dream. A dream to make delicious food accessible to all. With the opening of Kevin's Pastas and Noodles in Hayes Valley, he brings his life-long dream to fruition.";

    content.appendChild(title);
    content.appendChild(header);
    content.appendChild(desc);
    content.appendChild(pastaImage);

}