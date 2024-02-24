document.addEventListener('DOMContentLoaded', function() {
    if (localStorage.getItem('visits')) {
        localStorage.setItem('visits', parseInt(localStorage.getItem('visits')) + 1);
    } else {
        localStorage.setItem('visits', 1);
    }
    document.getElementById('page-visits').textContent = localStorage.getItem('visits');
});