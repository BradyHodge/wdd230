async function getCompanyData() {
    try {
        const response = await fetch('https://raw.githubusercontent.com/BradyHodge/wdd230/main/chamber/data/members.json');
        if (!response.ok) {
            throw new Error(`HTTPS error! status: ${response.status}`);
        }
        const memberData = await response.json();
        displayCompanies(memberData.companies);
    } catch (error) {
        console.error('Error fetching or parsing JSON:', error);
    }
}
function displayCompanies(memberData) {
    const cards = document.getElementById('directory-cards');
    memberData.forEach((company) => {
        let card = document.createElement('div');
        card.classList.add('card');
        let name = document.createElement('h2');
        name.classList.add('card-name');
        let address = document.createElement('div');
        address.classList.add('card-address');
        let phone = document.createElement('div');
        phone.classList.add('card-phone');
        let website = document.createElement('a');
        website.classList.add('card-website');
        let image = document.createElement('img');
        image.classList.add('card-image');
        let membership = document.createElement('div');
        membership.classList.add('card-membership');
        name.textContent = company.name;
        address.textContent = company.address;
        phone.textContent = company.phone;
        website.textContent = company.website;
        membership.textContent = company.membership;
        image.setAttribute('src', company.image);
        image.setAttribute('alt', `image of ${company.name}`);
        image.setAttribute('loading', 'lazy');
        card.appendChild(image);
        card.appendChild(name)
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);
        website.setAttribute('href', '#');
        card.appendChild(membership);
        cards.appendChild(card);
    });
}
getCompanyData();
document.addEventListener('DOMContentLoaded', function() {
    const gridButton = document.getElementById('grid-button');
    const listButton = document.getElementById('list-button');
    const cardsContainer = document.getElementById('directory-cards');
    cardsContainer.classList.add('cards-grid');
    gridButton.addEventListener('click', function() {
        cardsContainer.classList.remove('cards-list');
        cardsContainer.classList.add('cards-grid');
    });
    listButton.addEventListener('click', function() {
        cardsContainer.classList.remove('cards-grid');
        cardsContainer.classList.add('cards-list');
    });
});