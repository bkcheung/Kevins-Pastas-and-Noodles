export default function loadHome(){
    const content = document.getElementById('content');
    const title = document.createElement('h1');
    const header = document.createElement('h3');
    const desc = document.createElement('p');

    title.innerHTML = "Kevin's Pastas";
    header.innerHTML = "There's nothing quite like a hot bowl of Kevin's famous pastas.";
    desc.innerHTML = "Ever since he was a young wee lad, Kevin had a dream. A dream to make delicious pasta accessible to all. With the opening of Kevin's Pastas, in Haye's Valley, he brings his life-long dream to fruition";

    content.appendChild(title);
    content.appendChild(header);
    content.appendChild(desc);
}