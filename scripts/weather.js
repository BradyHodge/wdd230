const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption'); 
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=43.826&lon=-111.7897&appid=97ce948849db0b090867d857dcdb694c&units=imperial';
async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        displayResults(data);
      } else {
        throw Error(await response.text());
      }
    } catch (error) {
      console.log(error);
    }
  }
  
  function displayResults(data) {
    const roundedTemp = Math.round(data.main.temp); 
  currentTemp.innerHTML = `${roundedTemp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc); 
    weatherIcon.setAttribute('alt', desc); 
    captionDesc.textContent = `${desc}`;
  }
  
  apiFetch();