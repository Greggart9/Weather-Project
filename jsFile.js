// VARIABLES DECLARATION
var weatherdata1 = document.getElementById('template1')
var weatherdata2 = document.getElementById('template2')
var weatherdata3 = document.getElementById('template3')
var weatherdata4 = document.getElementById('template4')
var weatherdata5 = document.getElementById('template5')
var userInputElement = document.getElementById('userInput');
var know = document.getElementById('location')
var Time_date = document.getElementById('time')
var feel = document.getElementById('condition')
var searchInput = document.getElementById('search');
var box1 = document.getElementById('box1')
var celsius = document.getElementById("celsius")
var farenheit = document.getElementById('farenheit')


// BACKGROUND

const backgrounds = ['body','background2', 'background3', 'background4'];
let currentIndex = 0;

function changeBackground() {
  document.body.className = backgrounds[currentIndex];
  currentIndex = (currentIndex + 1) % backgrounds.length; 
}

setInterval(changeBackground, 10000); 

//GETTING USERS LOCATION

navigator.geolocation.getCurrentPosition(function(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    lat = longitude + ',' + latitude 
    let url = 'http://api.weatherapi.com/v1/current.json?q=' + lat + '&key=e163c9a6346f4544a7481212232610';
      //FETCHING DATA FROM API
      fetch(url)
        .then(response => response.json())
        .then(data => {

          //CHOOSING SPECIFIC WEATHER DATA FROM API
          var temperature0 = data.current.temp_c + '°C';
          var temperature1 = data.current.temp_f + '°F';
          var location = data.location.region;
          var current = data.location.tz_id
          var humidity = data.current.humidity + '% humid';
          var wind = data.current.wind_degree + '°';
          var cloud = data.current.cloud + '% cloudy';
          var condition = data.current.condition.text;
          var time_date = data.location.localtime;
          var far = temperature1;
    
          //DISPLAYING SPECIFIED WEATHER DATA IN THE HTML

          weatherdata1.innerHTML = temperature0;
          weatherdata2.innerHTML = cloud;
          weatherdata3.innerHTML = location;
          weatherdata4.innerHTML = humidity;
          weatherdata5.innerHTML = wind;
          Time_date.innerHTML = time_date;
          know.innerHTML = current
          feel.innerHTML = condition
          box1.innerHTML = temperature0

          //CHANGING DEGREES FROM CELSIUS TO FARENHEIT AND BACK

          farenheit.addEventListener('click' , function() {
            box1.innerHTML = far;
            weatherdata1.innerHTML = temperature1;
            farenheit.style.fontWeight = 700
            celsius.style.fontWeight = 500 

          })
          celsius.addEventListener('click' , function() {
            box1.innerHTML = temperature0;
            weatherdata1.innerHTML = temperature0;
            celsius.style.fontWeight = 700
            farenheit.style.fontWeight = 500 
          })
        }) 
 
 })


//GETTING VALUE FROM USER'S SEARCH INPUT

searchInput.addEventListener('keyup', function(e) {
  if (e.key === 'Enter') {
    var userInput = searchInput.value;
    var locate = userInput;
    let url = 'http://api.weatherapi.com/v1/current.json?q=' + locate + '&key=e163c9a6346f4544a7481212232610';
  
    // FETCHING DATA USING USER'S SEACRH INPUT

    fetch(url)
      .then(response => response.json())
      .then(data => {
        var temperature0 = data.current.temp_c + '°C';
        var temperature1 = data.current.temp_f + '°F';
        var location = data.location.region;
        var current = data.location.tz_id
        var wind = data.current.wind_degree + '°';
        var humidity = data.current.humidity + '% humid';
        var cloud = data.current.cloud + '% cloudy';
        var condition = data.current.condition.text;
        var time = data.location.localtime;
        var far = temperature1
  

        //DISPLAYING SPECIFIED WEATHER DATA IN THE HTML
  
        weatherdata1.innerHTML = temperature0;
        weatherdata2.innerHTML = cloud;
        weatherdata3.innerHTML = location;
        weatherdata4.innerHTML = humidity;
        weatherdata5.innerHTML = wind;
        Time_date.innerHTML = time;
        know.innerHTML = current
        feel.innerHTML = condition
        box1.innerHTML = temperature0

        //CHANGING DEGREES FROM CELSIUS TO FARENHEIT AND BACK

        farenheit.addEventListener('click' , function() {
          box1.innerHTML = far;
          weatherdata1.innerHTML = temperature1;          
        })
        celsius.addEventListener('click' , function() {
          box1.innerHTML = temperature0;
          weatherdata1.innerHTML = temperature0;         
        })
      })
      .catch(error => {
        console.error('Error:', error);
      });

      //MAKING thE SEARCH VALUE EMPTY AFTER THE USER PRESSES ENTER
      searchInput.value = '';
  }


});

