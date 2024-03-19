const weatherDescription = document.getElementById('weather-description');
const windSpeed = document.getElementById('wind-speed');
const windChill = document.getElementById('wind-chill');
const weatherIcon = document.getElementById('weather-icon');
const currentTemp = document.getElementById('current-temp');
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
    })
    .catch((error) => {
        console.log('An error occurred while fetching weather data:', error);
        weatherDescription.textContent = 'Failed to fetch weather data';
    });
function calculateWindChill(temperature, windSpeed) {
    const windChill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
    return Math.round(windChill);
}
