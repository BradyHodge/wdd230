function getDate() {
    const today = new Date();
    return `${String(today.getDate()).padStart(2, '0')}/${String(today.getMonth() + 1).padStart(2, '0')}/${today.getFullYear()}`;
    }
    document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('submitDate').value = getDate();
    });