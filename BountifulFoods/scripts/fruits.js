fetch('./data/fruits.json')
  .then(response => response.json())
  .then(data => {
    const fruitNames = data.map(fruit => fruit.name);
    const dropdowns = Array.from(document.querySelectorAll('.fruit-dropdown'));
    dropdowns.forEach(dropdown => {
      const defaultOption = new Option('Select Fruit', '', true, true);
      dropdown.add(defaultOption, 0);
      fruitNames.forEach(fruitName => {
        dropdown.add(new Option(fruitName));
      });
    });
  })
  .catch(error => console.error('Error fetching fruits:', error));