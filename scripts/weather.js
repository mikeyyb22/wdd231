const currentWeather = document.querySelector('#current-weather');
const weatherIcon = document.querySelector('#weather-icon');
const weatherForecast = document.querySelector('#weather-forecast');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=35.04&lon=-85.30&appid=b99d5a1f1d78d6950d7365021dbfb747&units=imperial'

const urlForecast = 'https://api.openweathermap.org/data/2.5/forecast?lat=35.04&lon=-85.30&appid=b99d5a1f1d78d6950d7365021dbfb747&units=imperial'

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

async function apiForecastFetch() {
    try {
        const response = await fetch(urlForecast);
        if (response.ok) {
            const forecastData = await response.json();
            console.log(forecastData);
            displayForecast(forecastData);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
    let iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', 'Icon of current weather');

    let currentTemp = data.main.temp;
    let highTemp = data.main.temp_max;
    let lowTemp = data.main.temp_min;
    let humidity = data.main.humidity;
    let sunrise = new Date(data.sys.sunrise * 1000);
    let sunset = new Date(data.sys.sunset * 1000);

    let riseHours = sunrise.getHours();
    let riseMinutes = sunrise.getMinutes();
    let setHours = sunset.getHours();   
    let setMinutes = sunset.getMinutes();

    const newTemp = document.createElement('li');
    const newHigh = document.createElement('li');
    const newLow = document.createElement('li');
    const newHumid = document.createElement('li');
    const newSunrise = document.createElement('li');
    const newSunset = document.createElement('li');

    newTemp.textContent = `${currentTemp}°F`;
    newHigh.textContent = `High: ${highTemp}°F`;
    newLow.textContent = `Low: ${lowTemp}°F`;
    newHumid.textContent = `Humidity: ${humidity}%`;
    newSunrise.textContent = `Sunrise: ${riseHours}:${riseMinutes < 10 ? '0' + riseMinutes : riseMinutes}`;
    newSunset.textContent = `Sunset: ${setHours}:${setMinutes < 10 ? '0' + riseMinutes : riseMinutes}`;


    currentWeather.appendChild(newTemp);
    currentWeather.appendChild(newHigh);
    currentWeather.appendChild(newLow);
    currentWeather.appendChild(newHumid);
    currentWeather.appendChild(newSunrise);
    currentWeather.appendChild(newSunset);
}

function displayForecast(forecastData) {
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    
    let todayForecast = forecastData.list[0].main.temp;
    let tomorrowForecast = forecastData.list[8].main.temp;
    let twoDayForecast = forecastData.list[16].main.temp;
    let tomorrowDay = new Date(forecastData.list[8].dt *1000);
    let twoDayDay = new Date(forecastData.list[16].dt * 1000);

    tomorrowDay = weekday[tomorrowDay.getDay()];
    twoDayDay = weekday[twoDayDay.getDay()];

    const newTodayForecast = document.createElement('li');
    const newTomorrowForecast = document.createElement('li');
    const newTwoDayForecast = document.createElement('li');
    

    newTodayForecast.textContent = `Today: ${todayForecast}°F`;
    newTomorrowForecast.textContent = `${tomorrowDay}: ${tomorrowForecast}°F`;
    newTwoDayForecast.textContent = `${twoDayDay}: ${twoDayForecast}°F`;

    weatherForecast.appendChild(newTodayForecast);
    weatherForecast.appendChild(newTomorrowForecast);
    weatherForecast.appendChild(newTwoDayForecast);

}

apiFetch();
apiForecastFetch();