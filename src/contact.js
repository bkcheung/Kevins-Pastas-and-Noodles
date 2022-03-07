export default function loadContact(){
    const content = document.createElement('div');
    content.setAttribute('id', 'content');
    const title = document.createElement('h1');
    const contact1 = document.createElement('h3');
    const details1 = document.createElement('p');
    const contact2 = document.createElement('h3');
    const details2 = document.createElement('p');

    title.innerHTML = "Contact Us!";
    contact1.innerHTML = "Kevin";
    details1.innerHTML = "Head chef and owner of Kevin's Pastas and Noodles. <br/> <br/>" +
                         "(123) 456-7890 <br/><br/> kevin@knp.com";
    contact2.innerHTML = "Bonnie";
    details2.innerHTML = "Chief taste-tester of Kevin's Pastas and Noodles. <br/><br/> " +
                         "(123) 456-7891 <br/><br/> bonnie@knp.com";

    content.append(title, contact1, details1, contact2, details2);
    document.body.append(content);
    
}