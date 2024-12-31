// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

let urlBase = "https://api.openweathermap.org/data/2.5/weather";
let api_key = "e7b8b539977e1b7d82096befbc0136cb";

let difKelvin = 273.15;

document.getElementById("botonBusqueda").addEventListener("click", () => {
  const ciudad = document.getElementById("ciudadEntrada").value;
  if (ciudad) {
    fetchDatosClima(ciudad);
  }
});

document.getElementById("ciudadEntrada").addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        const ciudad = document.getElementById("ciudadEntrada").value;
        if (ciudad) {
            fetchDatosClima(ciudad);
        }
    }
})


function fetchDatosClima(ciudad) {
  fetch(`${urlBase}?q=${ciudad}&appid=${api_key}`)
    .then((data) => data.json())
    .then((data) => mostrarDatosClima(data));
}

function mostrarDatosClima(data) {
  // console.log(data)
  const divDatosClima = document.getElementById("datosClima");
  divDatosClima.innerHTML = "";

  const ciudadNombre = data.name;
  const paisNombre = data.sys.country;
  const temperatura = data.main.temp;
  const descripcion = data.weather[0].description;
  const humedad = data.main.humidity;
  const icono = data.weather[0].icon;

  // Creando elementos en JavaScript
  const ciudadTitulo = document.createElement("h2");
  ciudadTitulo.textContent = `${ciudadNombre}, ${paisNombre}`;

  const temperaturaInfo = document.createElement("p");
  temperaturaInfo.textContent = `La temperatura es: ${Math.floor(
    temperatura - difKelvin
  )}ºC`;

  const humedadInfo = document.createElement("p");
  humedadInfo.textContent = `La humedad es: ${humedad}%`;

  const iconoInfo = document.createElement("img");
  iconoInfo.src = `https://openweathermap.org/img/wn/${icono}@2x.png`;

  const descripcionInfo = document.createElement("p");
  descripcionInfo.textContent = `La descripcion metereologica es: ${descripcion}`;

  divDatosClima.appendChild(ciudadTitulo);
  divDatosClima.appendChild(temperaturaInfo);
  divDatosClima.appendChild(humedadInfo);
  divDatosClima.appendChild(iconoInfo);
  divDatosClima.appendChild(descripcionInfo);
}
