
const input = document.getElementById('search').value;
const btn = document.getElementById('btn');
const Weather = document.getElementById('Weather');
const temp = document.getElementById('temp');

btn.addEventListener('click', () => {
    fetch(`https://api.open-meteo.com/v1/forecast?latitude=46.9481&longitude=7.4474&hourly=temperature_2m,precipitation_probability,weather_code`)
    .then(res => res.json())
    .then(data => {
        Weather.innerHTML = "Weather :- " + data.hourly.weather_code[0];
        temp.innerHTML = "Temp :- " + data.hourly.temperature_2m[0];
    })
    .catch(err => console.log(err));
});




