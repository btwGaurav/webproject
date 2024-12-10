const apikey = "79a78fa9a926f73d2cf1b8b1331e1eb7";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchbox = document.querySelector(".search input")
const searchbtn = document.querySelector(".searchicon")
const weathericon = document.querySelector(".img")
async function checkhweather(city){
    const response = await fetch(apiUrl + city + `&appid=${apikey}`);
    var data = await response.json()

    console.log(data);

    document.querySelector(".temp").innerHTML = Math.floor(data.main.temp )+ ("°C");
document.body.querySelector(".city").innerHTML = data.name ;
document.querySelector(".humid").innerHTML = data.main.humidity + ("%");
document.querySelector(".speed").innerHTML = data.wind.speed + ("KM/H");

if (data.weather[0].main.toLowerCase() === "clouds") {
    weathericon.setAttribute("src", "cloudy.png");
} else if (data.weather[0].main.toLowerCase() === "clear") {
    weathericon.setAttribute("src", "sun.png");
}
else if (data.weather[0].main.toLowerCase() === "rain") {
    weathericon.setAttribute("src", "rain.png");
}
else if (data.weather[0].main.toLowerCase() === "drizzle") {
    weathericon.setAttribute("src", "drizzle.png");
}
else if (data.weather[0].main.toLowerCase() === "mist") {
    weathericon.setAttribute("src", "mist2.png");
};

}
searchbtn.addEventListener("click" , ()=>{
    checkhweather(searchbox.value);
})

checkhweather();
let view = "wide"; // Default view

let change = () => {
    if (view === "wide") {
        document.querySelector(".sheet").setAttribute("href", "weather2.css");
        view = "narrow";
    } else {
        document.querySelector(".sheet").setAttribute("href", "weather.css");
        view = "wide";
    }
};

let mode = () => {
    let a = document.querySelector(".change");
    if (a) { // Check if the element exists
        a.addEventListener("click", change);
    } else {
        console.error("Element with class 'change' not found");
    }
};

mode();