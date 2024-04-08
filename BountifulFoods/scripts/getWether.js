const weatherDescription = document.getElementById('weather-description');
const windSpeed = document.getElementById('wind-speed');
const windChill = document.getElementById('wind-chill');
const weatherIcon = document.getElementById('weather-icon');
const currentTemp = document.getElementById('current-temp');
const day1Temp = document.getElementById('day1-temp');
const day1Icon = document.getElementById('day1-icon');
const day2Temp = document.getElementById('day2-temp');
const day2Icon = document.getElementById('day2-icon');
const day3Temp = document.getElementById('day3-temp');
const day3Icon = document.getElementById('day3-icon');

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function getNextThreeDays() {
  const today = new Date().getDay();
  for (let i = 1; i <= 3; i++) {
    const nextDayIndex = (today + i) % 7;
    document.getElementById(`day${i}`).textContent = daysOfWeek[nextDayIndex];
  }
}

getNextThreeDays();

function populateForecast(dayElementIndex, data) {
  const tempElement = document.getElementById(`day${dayElementIndex + 1}-temp`);
  const iconElement = document.getElementById(`day${dayElementIndex + 1}-icon`);
  tempElement.textContent = `${Math.round(data.list[dayElementIndex].main.temp)} °F`;
  iconElement.setAttribute('src', `https://openweathermap.org/img/wn/${data.list[dayElementIndex].weather[0].icon}@2x.png`);
}

fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=33.15&lon=117.35&appid=97ce948849db0b090867d857dcdb694c&cnt=3&units=imperial`)
  .then(response => response.json())
  .then(data => {
    const temperature = Math.round(data.list[0].main.temp);
    const windSpeedData = data.list[0].wind.speed * 2.237;
    const liveIcon = data.list[0].weather[0].icon;
    currentTemp.textContent = `${temperature} °F`;
    weatherIcon.setAttribute('src', `https://openweathermap.org/img/wn/${liveIcon}@2x.png`);
    if (windSpeedData >= 3 && temperature <= 50) {
      windChill.textContent = `${calculateWindChill(temperature, windSpeedData)} °F`;
    } else {
      windChill.textContent = 'N/A';
    }
    weatherDescription.textContent = data.list[0].weather[0].description;
    windSpeed.textContent = `${Math.round(windSpeedData)} MPH`;
    populateForecast(0, data);
    populateForecast(1, data);
    populateForecast(2, data);
  })
  .catch(error => {
    console.log('Could not get weather data:', error);
    weatherDescription.textContent = 'Weather Data Temporarily Unavailable';
  });

function calculateWindChill(temperature, windSpeed) {
  return Math.round(35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16));
}