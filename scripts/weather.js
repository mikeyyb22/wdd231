const currentWeather = document.querySelector('#current-weather');
const weatherIcon = document.querySelector('#weather-icon');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=35.04&lon=-85.30&appid=b99d5a1f1d78d6950d7365021dbfb747&units=imperial'

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.txt());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
    // currentWeather.innerHTML = `${data.main.temp}&deg;F`;

    let iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', 'Icon of current weather');

    let currentTemp = 
    let highTemp = 
    let lowTemp = 
    let humidity = 
    let sunrise = 
    let sunset =
}

apiFetch();