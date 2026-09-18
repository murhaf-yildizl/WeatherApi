import { createContext,useContext,useEffect,useState } from "react";
import { fetchData } from './ApiConnect';
import { cities } from "./cities/cities";

const weatherContext=createContext([]);


export const   useWeather=()=>useContext(weatherContext);

export default function WeatherProvider({children})
{ 
    const [data, setData] = useState([]);

  async function getCities() {
      const results = await Promise.all(
          cities.map((city) => fetchData(city)));
     setData(results);
   
  }  
useEffect(() => {
  getCities ()
     
}, []);

  
     return(
       <weatherContext.Provider value={{data}}>
         {children}
       </weatherContext.Provider>
    );
}

