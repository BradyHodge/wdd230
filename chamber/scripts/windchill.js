const weatherDescription = document.getElementById('weather-description');
const windSpeed = document.getElementById('wind-speed');
const windChill = document.getElementById('wind-chill');
const weatherIcon = document.getElementById('weather-icon');
const currentTemp = document.getElementById('current-temp');
function calculateWindChill(temperature, windSpeed) {
    const windChill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
    return Math.round(windChill);
}
document.getElementById('test-wind-chill').addEventListener('click', function() {
    const temperature = parseFloat(document.getElementById('temperature').value);
    const windSpeedData = parseFloat(document.getElementById('windSpeed').value);
    if (temperature <= 50 && windSpeedData > 3.0) {
        const windChillData = calculateWindChill(temperature, windSpeedData);
        alert("Wind Chill: " + windChillData + ' °F');
    } else {
        alert("N/A");
    }
});