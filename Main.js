 console.log('Hello World!');
var bt = document.getElementById('btn')


const inp = document.getElementById('nam');
const weath = document.getElementsByClassName('weath')[0];
const city = document.getElementById('city');
const wind = document.getElementById('wind');
const hum = document.getElementById('hum');
const tamp = document.getElementById('tampt');
const img = document.getElementById('img');


const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apikey = "1127ea7b4b2dfd52426751d46867fb80";




var btn = document.getElementById("btn");


 btn.addEventListener("click", ()=> {
  weather(inp.value)
  
 })

async function weather(ctn) {
  
 try{

const res = await fetch(apiurl+ ctn +'&appid=' + apikey)
if (res.status === 404) {
  throw new Error('please enter a valid city name')
}else{
const data = await res.json();
console.log(data)
weath.style = "height:600px"

hum.innerHTML = data.main.humidity + '%';
tamp.innerHTML = data.main.temp + '℃';

wind.innerHTML = data.wind.speed + ' km/h';

city.innerHTML = data.name;
if(data.weather[0].main === "Coluds"){img.src = "cloud.png"}
else if(data.weather[0].main === "Rain"){img.src = "rain.png"}
else if(data.weather[0].main === "Mist"){img.src = "mist.png"}
else if(data.weather[0].main === "Dizzel"){img.src = "dizzel.png"}
else if(data.weather[0].main === "Clear"){img.src = "clear.png"}


}
}catch(e){
 console.log(e.message)
}finally{
 inp.value = null
}
 
}
