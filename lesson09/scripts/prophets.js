const url = "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json"
const cards = document.querySelector('#cards');
async function getProphetData() {
    const response = await fetch(url);
    const prophetsData = await response.json();
    displayProphets(prophetsData.prophets);
}
const displayProphets = (prophetsData) => {
    prophetsData.forEach((prophet) => {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let h3 = document.createElement('h3');
        let p = document.createElement('p');
        let portrait = document.createElement('img');
        h2.textContent = prophet.name + " " + prophet.lastname;
        h3.textContent = prophet.birthdate;
        p.textContent = 'Place of Birth: ' + prophet.birthplace;
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');
        card.appendChild(h2);
        card.appendChild(h3);
        card.appendChild(p);
        card.appendChild(portrait);
        cards.appendChild(card);    
    });
}
getProphetData();