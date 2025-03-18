const inputBox = document.querySelector('.input-box')
const searchBtn = document.getElementById('searchBtn')
const weatherImg = document.querySelector('.weather-img')
const temperature = document.querySelector('.temperature')
const description = document.querySelector('.description')
const humidity = document.getElementById('humidity')
const windSpeed = document.getElementById('wind-speed')
const locationNotFound = document.querySelector('.location-not-found')
const weatherBody = document.querySelector('.weather-body')

async function checkWeather(city) {
    const api_key = "0fe6607e36c85ec03299d21d3f9e3973";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`
    const weatherData = await fetch(`${url}`).then(response => response.json())

    if(weatherData.cod === '404'){
        locationNotFound.style.display = 'flex';
        weatherBody.style.display = 'none';
        return;
    } 
    locationNotFound.style.display = 'none';
    weatherBody.style.display = "flex";
    temperature.innerHTML = `${Math.round(weatherData.main.temp - 273.15)}<sup>°C</sup>`
    description.innerHTML = `${weatherData.weather[0].description}`
    humidity.innerHTML = `${weatherData.main.humidity}%`
    windSpeed.innerHTML = `${weatherData.wind.speed}Km/h`

    switch (weatherData.weather[0].main) {
        case 'Clouds':
            weatherImg.src = "/weatherApp/Asset/cloud.png";
            break;
        case 'Clear':
            weatherImg.src = "/weatherApp/Asset/clear.png";
            break;
        case 'Rain':
            weatherImg.src = "/weatherApp/Asset/rain.png";
            break;
        case 'Mist':
            weatherImg.src = "/weatherApp/Asset/mist.png";
            break;
        case 'Snow':
            weatherImg.src = "/weatherApp/Asset/snow.png";
            break;

    }
}

searchBtn.addEventListener('click', () => {
    checkWeather(inputBox.value)
})