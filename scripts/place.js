// Static weather information
const temperature = 27;
const windSpeed = 8;

// Calculate wind chill in Celsius
function calculateWindChill(temp, speed) {
  return 13.12 + (0.6215 * temp) - (11.37 * Math.pow(speed, 0.16)) + (0.3965 * temp * Math.pow(speed, 0.16));
}

// Check whether wind chill conditions are met
if (temperature <= 10 && windSpeed > 4.8) {
  document.querySelector("#windchill").textContent =
    `${calculateWindChill(temperature, windSpeed).toFixed(1)} °C`;
} else {
  document.querySelector("#windchill").textContent = "N/A";
}

// Display current year
const today = new Date();

document.querySelector("#currentyear").textContent =
  today.getFullYear();

// Display last modified date
document.querySelector("#lastmodified").textContent =
  document.lastModified;