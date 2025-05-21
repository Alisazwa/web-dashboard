async function getWeather() {
    const city = document.getElementById("cityInput").value;
    const apiKey = "YOUR_OPENWEATHERMAP_API_KEY";
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    const data = await response.json();
    document.getElementById("weatherResult").innerHTML = `Temperature in ${city}: ${data.main.temp}°C`;

    const ctx = document.getElementById('weatherChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Temp', 'Feels Like', 'Min Temp', 'Max Temp'],
            datasets: [{
                label: 'Temperature Data',
                data: [data.main.temp, data.main.feels_like, data.main.temp_min, data.main.temp_max],
                backgroundColor: 'rgba(0, 119, 204, 0.6)'
            }]
        }
    });
}
