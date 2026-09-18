import axios from 'axios'

const latitude="41.001";
const longtude="28.994";
const apiKey="ca3f3d3c81473d0206b138d6bc558f9f";
const baseUrl="https://api.openweathermap.org/data/2.5/weather";

export async function fetchData(city)
{
  try{
   const { data } = await axios.get(baseUrl, {
    params: {                    
      //lat: latitude,
      //lon: longtude,
      q: city,                  
      appid: apiKey,
      units: 'metric',
    }
  });
 
  return {
    main: data.weather[0].main,
    desc: data.weather[0].description,
    icon:`https://openweathermap.org/payload/api/media/file/${data.weather[0].icon}.png` ,
    country:data.sys.country,
    city:data.name,
    temp:   Math.round(data.main.temp),
    maxTemp:Math.round(data.main.temp_max),
    minTemp:Math.round(data.main.temp_min),
    


  }

  }catch(e){console.log(city,e)}
 return null;
   
  
    
} 