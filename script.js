let input = document.querySelector('.form-control');
let search = document.querySelector('.btn');
let form = document.querySelector('.form');

function getData(country) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=b90b28e8b14e09c1f9110a26d3ffdc8b`)
    .then(response => response.json())
    .then(data => {
      // document.querySelector('.card').style.display = "block";
      var unixTime = data.dt;
      var date = new Date(unixTime * 1000);
      var currentdate = date.toLocaleDateString('default')
      var time = date.toLocaleTimeString('default')

      document.querySelector('.date').innerHTML = ` ${currentdate}`
      document.querySelector('.time').innerHTML = ` ${time}`

      document.querySelector('.temp').innerHTML = `${data.main.temp} &#8451`
      document.querySelector('.lonlat').innerHTML = ` lon: ${data.coord.lon}&#8451 lat: ${data.coord.lat}&#8451 `
      document.querySelector('.weather').innerHTML = `${data.weather[0].description}`
      document.querySelector('.feels-like').innerHTML = ` feels_like: ${data.main.feels_like}&#8451`
      document.querySelector('.countryname').innerHTML = `${data.name}`
    })
}

function getInput(e) {
  e.preventDefault();
  let country = input.value;
  console.log(country)
  getData(country);

}

form.addEventListener('submit', getInput);
search.addEventListener('click', getInput);
