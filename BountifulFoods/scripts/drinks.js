document.addEventListener("DOMContentLoaded", function() {
    let counter = localStorage.getItem('drinksOrdered');
    if (!counter) {
        counter = 0;
    } else {
        counter = parseInt(counter);
    }
    document.getElementById('drinks-ordered').textContent = counter || 0;
});