const lastMod = new Date(document.lastModified);
document.getElementById("last-modified").textContent = `Last Updated: ${lastMod.toLocaleDateString()}`;