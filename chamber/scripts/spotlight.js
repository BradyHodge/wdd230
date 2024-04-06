async function getCompanyData() {
    try {
        const response = await fetch('https://raw.githubusercontent.com/BradyHodge/wdd230/main/chamber/data/members.json');
        if (!response.ok) {
            throw new Error(`HTTPS error! status: ${response.status}`);
        }
        const memberData = await response.json();
        displaySpotlights(memberData.companies);
    } catch (error) {
        console.error('Error fetching or parsing JSON:', error);
    }
}
function displaySpotlights(companies) {
    const goldCompanies = companies.filter(
        (company) => company.membershipLevel === "Gold"
        );
        const spotlightsContainer = document.getElementById("spotlights");
    for (let indexOfCompany = 0; indexOfCompany < 3 && indexOfCompany < goldCompanies.length; indexOfCompany++) {
        const company = goldCompanies[indexOfCompany];

        const div = document.createElement("div");

        const h2 = document.createElement("h2");
        h2.textContent = company.name;
        div.appendChild(h2);

        const addressPara = document.createElement("p");
        addressPara.textContent = company.address;
        div.appendChild(addressPara);

        const phoneLink = document.createElement("a");
        phoneLink.href = `tel:${company.phone}`;
        phoneLink.textContent = company.phone;
        div.appendChild(phoneLink);

        const websiteLink = document.createElement("a");
        websiteLink.href = company.website;
        websiteLink.textContent = company.website;
        div.appendChild(websiteLink);

        spotlightsContainer.appendChild(div);
    }
}
getCompanyData();
