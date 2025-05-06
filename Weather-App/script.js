const apiKey = "e26d875a4c5d503fa1a87e52fc3fc041";

function getWeather() {
  const city = document.getElementById("cityInput").value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("City not found");
      }
      return response.json();
    })
    .then(data => {
      const weather = `
        <h2>${data.name}</h2>
        <p>Temperature: ${data.main.temp} °C</p>
        <p>Weather: ${data.weather[0].description}</p>
      `;
      document.getElementById("weatherResult").innerHTML = weather;
    })
    .catch(error => {
      document.getElementById("weatherResult").innerHTML = `<p>${error.message}</p>`;
    });
}
