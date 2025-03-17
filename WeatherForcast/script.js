const cityEnterButton = document.getElementById('get-city-button');
const getLocationButton = document.getElementById('get-current-button');
const cityInput = document.getElementById('city-name');
const cityInfo = document.getElementById('location');
const tempDetails = document.getElementById('details');

async function getDataByCityName (cityName) {
   const data = await fetch(`https://api.weatherapi.com/v1/current.json?key=0cdfb5d6aa7749d2ae661631250503&q=${cityName}&dt=2025-05-04`);
   const jsonFile = await data.json();

   return jsonFile;
}

async function getDataByCurrentLocation (lang, long) {
   const data = await fetch(`https://api.weatherapi.com/v1/current.json?key=0cdfb5d6aa7749d2ae661631250503&q=${lang},${long}&dt=2025-05-04`);
   const jsonFile = await data.json();

   return jsonFile;
}

async function gotLocation (position){
    const CityData = await getDataByCurrentLocation(position.coords.latitude, position.coords.longitude);
    console.log(CityData);
    cityInfo.style.opacity = '1';
    cityInfo.innerText = `${CityData.location.country},${CityData.location.region}`;
    tempDetails.style.opacity = '1';
    tempDetails.innerText =  ` Latitude:${position.coords.latitude}, Longitude:${position.coords.longitude}
    Time:${CityData.location.localtime},
    Weather: ${CityData.current.condition.text},
    Temprature:  ${CityData.current.temp_c} celcius, 
    Wind-Speed: ${CityData.current.wind_mph} mph
    Thanks For Using Weather Forcast`;
}

function failedFunction(){
    console.log('Failed to Load the current location');
}

cityEnterButton.addEventListener('click', async()=>{
    cityName = cityInput.value;
    const cityData = await getDataByCityName(cityName);
    cityInfo.style.opacity = '1';
    cityInfo.innerText = `${cityData.location.country},${cityData.location.region}, ${cityData.location.name}`;
    tempDetails.style.opacity = '1';
    tempDetails.innerText =  `Time:${cityData.location.localtime}
    Weather: ${cityData.current.condition.text},
    Temprature:  ${cityData.current.temp_c} celcius, 
    Wind-Speed: ${cityData.current.wind_mph} mph
    Thanks For Using Weather Forcast`;
})

getLocationButton.addEventListener('click', async()=>{
    const cityData = navigator.geolocation.getCurrentPosition(gotLocation, failedFunction);
})