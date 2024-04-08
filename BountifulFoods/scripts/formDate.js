function getTodayDate() {
    return new Date().toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' });
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('submitDate').value = getTodayDate();
  });
  
  function incrementAndStoreCounter() {
    let counter = parseInt(localStorage.getItem('drinksOrdered')) || 0;
    counter++;
    localStorage.setItem('drinksOrdered', counter);
    return counter;
  }
  
  document.getElementById("form-submit").addEventListener("click", incrementAndStoreCounter);