import pasta from './pasta.jpg';

export default function loadHome(){
    const content = document.getElementById('content');
    const title = document.createElement('h1');
    const header = document.createElement('h3');
    const desc = document.createElement('p');

    const pastaImage = new Image();
    pastaImage.src = pasta;

    title.innerHTML = "Kevin's Pastas and Noodles";
    header.innerHTML = "There's nothing quite like a hot bowl of Kevin's famous pastas and noodles.";
    desc.innerHTML = "Ever since he was a young wee lad, Kevin had a dream. A dream to make delicious food accessible to all. <br/><br/> With the opening of Kevin's Pastas and Noodles in Hayes Valley, he brings his life-long dream to fruition.";

    content.append(title, header, pastaImage, desc);
}