const baseURL = "https://bradyhodge.github.io/wdd230/";
const linksURL = "https://bradyhodge.github.io/wdd230/data/links.json";
async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data);
}
function displayLinks(weeks) {
    const container = document.getElementById('activities');
    weeks.lessons.forEach(lesson => {
        const listItem = document.createElement('li');
        listItem.textContent = `Lesson ${lesson.lesson}:`;
        const linksList = document.createElement('ul');
        lesson.links.forEach(link => {
            const linkItem = document.createElement('li');
            const linkAnchor = document.createElement('a');
            linkAnchor.textContent = link.title;
            linkAnchor.href = baseURL + link.url;
            linkAnchor.target = '_blank';
            linkItem.appendChild(linkAnchor);
            linksList.appendChild(linkItem);
        });
        listItem.appendChild(linksList);
        container.appendChild(listItem);
    });
}
getLinks();