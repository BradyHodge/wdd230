// get all of the elements for the main wether widget 
const weatherDescription = document.getElementById('weather-description');
const windSpeed = document.getElementById('wind-speed');
const windChill = document.getElementById('wind-chill');
const weatherIcon = document.getElementById('weather-icon');
const currentTemp = document.getElementById('current-temp');

// get all of the elements for the 3 day forecast
const day1Temp = document.getElementById('day1-temp');
const day1Icon = document.getElementById('day1-icon');

const day2Temp = document.getElementById('day2-temp');
const day2Icon = document.getElementById('day2-icon');

const day3Temp = document.getElementById('day3-temp');
const day3Icon = document.getElementById('day3-icon');

// fill in the 3 day forecast with the next 3 days of the week
function getNextThreeDays() {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = new Date().getDay(); // Get the current day index 
    const nextThreeDays = []; // Create an empty array to hold the next three days of the week
    for (let i = 1; i <= 3; i++) {
        const nextDayIndex = (today + i) % 7; // Calculate the index of the next day of the week
        // Get the element id for the next day of the week(i.e. day1, day2, day3)
        const nextDayElement = document.getElementById(`day${i}`); 
        nextThreeDays.push(daysOfWeek[nextDayIndex]); // Push the name of the next day into the array
        // Set the text content of the next day element to the name of the next day
        nextDayElement.textContent = daysOfWeek[nextDayIndex];
    }

}
// Call the function to populate the next three days of the week
getNextThreeDays();


// Populates a specific day's forecast section in the HTML with temperature and weather icon.
 // dayElementIndex - Index of the day element to populate (0-based).
 // data - Weather forecast data from the json
function populateForecast(dayElementIndex, data) {
  // Retrieve temperature and icon elements for the specified day:
  const tempElement = document.getElementById(`day${dayElementIndex + 1}-temp`); // Get element for temperature
  const iconElement = document.getElementById(`day${dayElementIndex + 1}-icon`); // Get element for weather icon

  // Update temperature element with rounded value and degree symbol:
  tempElement.textContent = Math.round(data.list[dayElementIndex].main.temp) + ' °F';
}
// Function to calculate wind chill
function calculateWindChill(temperature, windSpeed) {
  const windChill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
  return Math.round(windChill);
}

// Fetches weather data from OpenWeatherMap API
fetch(
  `https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=97ce948849db0b090867d857dcdb694c&cnt=3&units=imperial`
)
  // Parse the response as JSON
  .then((response) => response.json())
  .then((data) => {
    // Process the fetched weather data

    // Extract and process temperature:
    const temperature = Math.round(data.list[0].main.temp);
    // console.log('Weather Data: ', data); // debugging

    // Get the url for the weather ico:
    const liveIcon = data.list[0].weather[0].icon;

    // Update current temperature element:
    currentTemp.textContent = temperature + ' °F';

    // Update weather icon element:
    weatherIcon.setAttribute(
      'src',
      `https://openweathermap.org/img/wn/${liveIcon}@2x.png`
    );  

    // Calculate and update wind chill (if wind speed is greater than 3 MPH and temperature is less than 50°F):
    const windSpeedData = data.list[0].wind.speed;
    if (windSpeedData >= 3 && temperature <= 50) {
      const windChillData = calculateWindChill(temperature, windSpeedData);
      windChill.textContent = windChillData + ' °F';
    } else {
      windChill.textContent = 'N/A';
    }

    // Update weather description element:
    const weatherConditionData = data.list[0].weather[0].description;
    weatherDescription.textContent = weatherConditionData;

    // Update wind speed element:
    windSpeed.textContent = Math.round(windSpeedData) + ' MPH';

    populateForecast(0, data);  // Populate the 1 day forecast
    populateForecast(1, data); // Populate the 2 day forecast
    populateForecast(2, data); // Populate the 3 day forecast
    
    })
    // Handle potential errors during data fetching
  .catch((error) => {
    console.log('An error occurred while fetching weather data:', error);
    weatherDescription.textContent = 'Failed to fetch weather data';
  });
