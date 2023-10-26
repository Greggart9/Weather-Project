
var control1 = document.getElementById('template1')
var control2 = document.getElementById('template2')
var control3 = document.getElementById('template3')
var control4 = document.getElementById('template4')
var control5 = document.getElementById('template5')
var control6 = document.getElementById('template6')
var userInputElement = document.getElementById('userInput');
var know = document.getElementById('location')
var Time = document.getElementById('time')
var feel = document.getElementById('condition')
var searchInput = document.getElementById('search');
var box1 = document.getElementById('box1')
var celsius = document.getElementById("celsius")
var farenheit = document.getElementById('farenheit')

navigator.geolocation.getCurrentPosition(function(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    lat = longitude + ',' + latitude 
      let url = 'http://api.weatherapi.com/v1/current.json?q=' + lat + '&key=e163c9a6346f4544a7481212232610';
    
      fetch(url)
        .then(response => response.json())
        .then(data => {
          var temperature = data.current.temp_c + '°';
          var temperature0 = data.current.temp_c + '°';
          var temperature1 = data.current.temp_f + ' degrees Fahrenheit';
          var location = data.location.region;
          var current = data.location.tz_id
          var Place = data.location.country;
          var humidity = data.current.humidity + '% humid';
          var wind = data.current.wind_degree + '°';
          var cloud = data.current.cloud + '% cloudy';
          var condition = data.current.condition.text;
          var time = data.location.localtime;
    
    
          control1.innerHTML = temperature;
          control2.innerHTML = cloud;
          control3.innerHTML = location;
          control4.innerHTML = humidity;
          control5.innerHTML = wind;
          Time.innerHTML = time;
          know.innerHTML = current
          feel.innerHTML = condition
          box1.innerHTML = temperature0
        }) 
 
 })





searchInput.addEventListener('keyup', function(e) {
  if (e.key === 'Enter') {
    var userInput = searchInput.value;
    console.log('User input: ' + userInput);
    var locate = userInput;
    let url = 'http://api.weatherapi.com/v1/current.json?q=' + locate + '&key=e163c9a6346f4544a7481212232610';
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        var temperature = data.current.temp_c + '°';
        var temperature0 = data.current.temp_c + '°';
        var temperature1 = data.current.temp_f + ' degrees Fahrenheit';
        var location = data.location.region;
        var current = data.location.tz_id
        var Place = data.location.country;
        var wind = data.current.wind_degree + '°';
        var humidity = data.current.humidity + '% humid';
        var cloud = data.current.cloud + '% cloudy';
        var condition = data.current.condition.text;
        var time = data.location.localtime;
  
  
        control1.innerHTML = temperature;
        control2.innerHTML = cloud;
        control3.innerHTML = location;
        control4.innerHTML = humidity;
        control5.innerHTML = wind;
        Time.innerHTML = time;
        know.innerHTML = current
        feel.innerHTML = condition
        box1.innerHTML = temperature0
      })
      .catch(error => {
        console.error('Error:', error);
      });

      searchInput.value = '';
    }
    
})











