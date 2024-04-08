fetch('./data/fruits.json')
  .then(response => response.json())
  .then(data => {
    const totals = data.reduce(
      (acc, fruit) => {
        if (['fruit1', 'fruit2', 'fruit3'].includes(fruit.name)) {
          acc.calories += fruit.nutritions.calories || 0;
          acc.fat += fruit.nutritions.fat || 0;
          acc.sugar += fruit.nutritions.sugar || 0;
          acc.carbohydrates += fruit.nutritions.carbohydrates || 0;
          acc.protein += fruit.nutritions.protein || 0;
        }
        return acc;
      },
      { calories: 0, fat: 0, sugar: 0, carbohydrates: 0, protein: 0 }
    );

    updateDOMAsync(totals);
  })
  .catch(error => console.error('Error loading fruits.json:', error));

function updateDOMAsync(totals) {
  requestAnimationFrame(() => {
    document.getElementById('total-calories').textContent = formatNumber(totals.calories);
    document.getElementById('total-fat').textContent = formatNumber(totals.fat);
    document.getElementById('total-sugar').textContent = formatNumber(totals.sugar);
    document.getElementById('total-carbohydrates').textContent = formatNumber(totals.carbohydrates);
    document.getElementById('total-protein').textContent = formatNumber(totals.protein);
  });
}