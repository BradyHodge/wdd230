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


function getNextThreeDays() {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = new Date().getDay(); // Get the current day index 
    const nextThreeDays = [];

    for (let i = 1; i <= 3; i++) {
        const nextDayIndex = (today + i) % 7; // Calculate the index of the next day of the week
        nextThreeDays.push(daysOfWeek[nextDayIndex]); // Push the name of the next day into the array
    }

    return nextThreeDays;
}

const [nextDay1, nextDay2, nextDay3] = getNextThreeDays();
console.log(nextDay1); // Output will be the name of the next day
console.log(nextDay2); // Output will be the name of the day after that
console.log(nextDay3); // Output will be the name of the day after that


function populateForecast(dayElementIndex, data) {
    const tempElement = document.getElementById(`day${dayElementIndex + 1}-temp`);
    const iconElement = document.getElementById(`day${dayElementIndex + 1}-icon`);
    
    tempElement.textContent = Math.round(
      (data.list[dayElementIndex].main.temp - 273.15) * (9 / 5) + 32
    ) + ' °F';
    iconElement.setAttribute('src', `https://openweathermap.org/img/wn/${data.list[dayElementIndex].weather[0].icon}@2x.png`);
  }



fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=97ce948849db0b090867d857dcdb694c&cnt=4`
)
    .then((response) => response.json())
  .then((data) => {
    const temperature = Math.round(
      (data.list[0].main.temp - 273.15) * (9 / 5) + 32
    );
    console.log('Weather Data: ', data);
    const windSpeedData = data.list[0].wind.speed * 2.237;
    const liveIcon = data.list[0].weather[0].icon;
    currentTemp.textContent = temperature + ' °F';
    weatherIcon.setAttribute('src', `https://openweathermap.org/img/wn/${liveIcon}@2x.png`);

    if (windSpeedData >= 3 && temperature <= 50) {
      const windChillData = calculateWindChill(temperature, windSpeedData);
      windChill.textContent = windChillData + ' °F';
    } else {
      windChill.textContent = 'N/A'; 
    }

    const weatherConditionData = data.list[0].weather[0].description;
    weatherDescription.textContent = weatherConditionData;
    windSpeed.textContent = Math.round(windSpeedData) + ' MPH';
    populateForecast(0, data);
    populateForecast(1, data);
    populateForecast(2, data);
    populateForecast(3, data);
    })
  .catch((error) => {
    console.log('An error occurred while fetching weather data:', error);
    weatherDescription.textContent = 'Failed to fetch weather data';
  });
function calculateWindChill(temperature, windSpeed) {
    const windChill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
    return Math.round(windChill);
}
