async function fetchWeather() {
  const city = document.getElementById('city').value || 'Kuala Lumpur';
  const API_KEY = 'your_openweather_api_key';
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    const temps = data.list.slice(0, 5).map(item => item.main.temp);
    const labels = data.list.slice(0, 5).map(item => item.dt_txt);

    const ctx = document.getElementById('weatherChart').getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels,
        datasets: [{
          label: `Temperature in ${city}`,
          data: temps,
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        }]
      }
    });
  } catch (error) {
    alert('Error fetching weather data');
  }
}