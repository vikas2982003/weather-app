const weatherkey= "5a04ffff35b1f90990798d32a6e58597";

const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox= document.querySelector(".search input")
const searchBtn= document.querySelector(".search button")
const weatherIcon= document.querySelector(".weather-icon")



async function checkweather(city) {
    // const response = await fetch( apiUrl + `&appid= ${weatherkey}`) ;
    const response = await fetch(apiUrl + city +  `&appid=${weatherkey}`);


    if(response.status==404){
        document.querySelector(".erroe").style.display="block";
        document.querySelector(".weather").style.display="none";

    }
    else{

        var data = await response.json();
        document.querySelector(".city").innerHTML=data.name
        document.querySelector(".temp").innerHTML= Math.round(data.main.temp) + "°c"
        document.querySelector(".humidity").innerHTML=data.main.humidity +"%"
        document.querySelector(".wind").innerHTML=data.wind.speed + "km/h"
    
    
    
        //to change the weather picture ----- but now we dont have picture ------------------
    
        if(data.weather[0].main=="clouds"){
            weatherIcon.src="/img/clouds.png";
        }
        else if(data.weather[0].main=="clear"){
            weatherIcon.src="/img/clear.png";
        }
        else if(data.weather[0].main=="rain"){
            weatherIcon.src="/img/rain.png";
        }
        else if(data.weather[0].main=="drizzle"){
            weatherIcon.src="/img/drizzle.png";
        }
        else if(data.weather[0].main=="mist"){
            weatherIcon.src="/img/mist.png";
        }
        else if(data.weather[0].main=="clear"){
            weatherIcon.src="/img/clouds.png";
        }
    
        document.querySelector(".weather").style.display = "block"
        document.querySelector(".erroe").style.display="none";

    
    
        console.log(data);
    ;}
    


    }

//     var data = await response.json();
//     document.querySelector(".city").innerHTML=data.name
//     document.querySelector(".temp").innerHTML= Math.round(data.main.temp) + "°c"
//     document.querySelector(".humidity").innerHTML=data.main.humidity +"%"
//     document.querySelector(".wind").innerHTML=data.wind.speed + "km/h"



//     //to change the weather picture ----- but now we dont have picture ------------------

//     if(data.weather[0].main=="clouds"){
//         weatherIcon.src="/img/clouds.png";
//     }
//     else if(data.weather[0].main=="clear"){
//         weatherIcon.src="/img/clear.png";
//     }
//     else if(data.weather[0].main=="rain"){
//         weatherIcon.src="/img/rain.png";
//     }
//     else if(data.weather[0].main=="drizzle"){
//         weatherIcon.src="/img/drizzle.png";
//     }
//     else if(data.weather[0].main=="mist"){
//         weatherIcon.src="/img/mist.png";
//     }
//     else if(data.weather[0].main=="clear"){
//         weatherIcon.src="/img/clouds.png";
//     }

//     document.querySelector(".weather").style.display = "block"


//     console.log(data);
// ;}

searchBtn.addEventListener("click", () => 
    checkweather(searchBox.value)

);

