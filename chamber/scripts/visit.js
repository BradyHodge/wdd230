document.addEventListener('DOMContentLoaded', function() {
    const daysSinceVisitElement = document.getElementById('days-since-visit');
    const lastVisitDate = localStorage.getItem('lastVisitDate');
    const today = new Date();
    if (lastVisitDate) {
        const lastVisit = new Date(lastVisitDate);
        const timeDifference = Math.floor((today - lastVisit) / (1000 *  60 *  60 *  24));
        if (timeDifference <  1) {
            daysSinceVisitElement.innerHTML = '<h2>Back so soon! Awesome!</h2>';
        } else {
            const daysText = timeDifference ===  1 ? 'day' : 'days';
            daysSinceVisitElement.innerHTML = `<h2>You last visited ${timeDifference} ${daysText} ago.</h2>`;
        }
    } else {
        daysSinceVisitElement.innerHTML = '<h2>Welcome! Let us know if you have any questions.</h2>';
    }
    localStorage.setItem('lastVisitDate', today.toISOString());
});
