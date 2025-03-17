    const inputBox = document.querySelector('.input-box')
    const searchBtn = document.getElementById('searchBtn')
    const weatherImg = document.querySelector('.weather-img')
    const temperature = document.querySelector('.temperature')
    const description = document.querySelector('.description')
    const humidity = document.getElementById('humidity')
    const windSpeed = document.getElementById('wind-speed')

    async function checkWeather(city){
        const api_key = "0fe6607e36c85ec03299d21d3f9e3973";
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`
        const weatherData = await fetch(`${url}`).then(response => response.json())
        console.log(weatherData);
        

        temperature.innerHTML = `${Math.round(weatherData.main.temp - 273.15)}<sup>°C</sup>`
        description.innerHTML = `${weatherData.weather[0].description}`
    } 

    searchBtn.addEventListener('click', () => {
        checkWeather(inputBox.value)
    })