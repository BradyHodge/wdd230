let currentYear = new Date().getFullYear();
document.getElementById("copyYear").textContent = currentYear;
let lastMod = new Date(document.lastModified);
document.getElementById("lastModified").textContent = `Last Updated: ${lastMod}`;

