const apiKey = "b235c516a9384b25af0141030252604";

function getWeather() {
  const city = document.getElementById("cityInput").value;
  const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const weatherData = `
        <h2>${data.location.name}, ${data.location.country}</h2>
        <p><strong>Temperature:</strong> ${data.current.temp_c}°C</p>
        <p><strong>Condition:</strong> ${data.current.condition.text}</p>
        <img src="https:${data.current.condition.icon}" alt="weather icon">
      `;
      document.getElementById("weatherResult").innerHTML = weatherData;
    })
    .catch(error => {
      document.getElementById("weatherResult").innerHTML = `<p>City not found! Please try again.</p>`;
    });
}
