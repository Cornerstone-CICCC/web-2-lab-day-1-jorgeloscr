
let header =document.querySelector(".header")
let searchBtn = document.querySelector(".searchBtn")
let searchInput = document.getElementById("searchInput")
let countryTd = document.querySelector(".country")
let timeZoneTd = document.querySelector(".timeZone")
let populationTd = document.querySelector(".population")
let forecastTd = document.querySelector(".forecast")

async function getCity(city){
    const res = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en&format=json`)
    const data = await res.json()
    return data.results[0]
}


async function getWeather(lat, lon){
    const res= await fetch(`https://api.open-meteo.com/v1/forecast?latitude=49.2497&longitude=-123.1193&current=temperature_2m,is_day,rain,showers&daily=temperature_2m_max,temperature_2m_min&timezone=auto&forecast_days=1`)
    const data =await res.json()
    return data
}
// let header = document.querySelector(".header")

// let latitude
// let longitude

//  searchBtn.addEventListener('click', getCity('Vancouver').then(city =>{
//     latitude= city.latitude
//     longitude= city.longitude
//     let cityH1 = document.createElement('h1')
//     cityH1.textContent = city.name
//     header.append(cityH1)
//     alert('k')

//  }))

// getWeather(latitude, longitude).then(wheater =>{
//     console.log(wheater)
// })


searchBtn.addEventListener('click', async()=>{
    
    const city =await getCity(searchInput.value)
    
    const weather =await getWeather(city.latitude, city.longitude)
    
    let cityH1 = document.createElement('h1')
    cityH1.textContent = city.name
    header.append(cityH1)

    const countryData = document.createElement("td")
    countryData.textContent = city.country
    countryTd.append(countryData)

    const timeZoneData = document.createElement("td")
    timeZoneData.textContent = city.timezone
    timeZoneTd.append(timeZoneData)

    const populationData = document.createElement("td")
    populationData.textContent = city.population
    populationTd.append(populationData)

    // const forecastData = document.createElement("td")
    // countryData.textContent = weather.country
    // countryTd.append(countryData)


    
    

    



})

// functionbuildHtml(city,weather)