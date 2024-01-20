// get current year for copy
let currentYear = new Date().getFullYear();
document.getElementById("copyYear").textContent = currentYear;

// get last modified date
let lastMod = new Date(document.lastModified);
document.getElementById("lastModified").textContent = `Last Updated: ${lastMod}`;

