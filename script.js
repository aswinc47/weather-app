
function displayData(){
    cityName = citysearch.value
    removeanim()
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=5b4bee0ba241d092159faf007e166080`
)
  .then((response) => response.json())
  .then((json) =>{
    getData(json)
  }   
  ).catch((e)=>citydisp.innerText = "Invalid city");
}

function getData(json){
    const temp = json.main.temp
    const mintemp = json.main.temp_min
    const maxtemp = json.main.temp_max
    const weather = json.weather[0].main
    const weatherdesc = json.weather[0].description
    const lon =json.coord.lon
    const lat =json.coord.lat
    const visibility = json.visibility
    const windspeed = json.wind.speed
    const winddeg = json.wind.deg
    const pressure = json.main.pressure
    const humidity = json.main.humidity
    const city = json.name

    displayImage(weather)
    

    citydisp.innerText = city
    weatherdisp.innerText = weather
    longdisp.innerText = lon
    latdisp.innerText = lat
    visdisp.innerText = visibility
    tempmain1.innerText = temp
    tempmain.innerText = temp
    mintempdisp.innerText = mintemp
    maxtempdisp.innerText = maxtemp
    wspeeddisp.innerText = windspeed
    wdegdisp.innerText = winddeg
    pressuredisp.innerText = pressure
    humiditydisp.innerText = humidity

    pressuremob.innerText = pressure
    humiditymob.innerText = humidity
    windmob.innerText = windspeed
    visimob.innerText = visibility 
}

function setDisp(id,value){
  document.getElementById(`${id}`).innerText = value
}

function displayImage(weather){
    logo.src = `./images/${weather}.png` 
    document.getElementById('logo').classList.add('animlogo')
}

function removeanim(){
  document.getElementById('logo').classList.remove("animlogo")
}

