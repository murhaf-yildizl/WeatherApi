import { Typography } from "@mui/material"
import {useWeather} from './WeatherProvider';
import { useTranslation, } from 'react-i18next';
import {  HeaderStyle } from "./WeatherStyle";

export default function Header({index=0})
{
    const {data}=useWeather();
    const {t}=useTranslation();
      
    return (
        <div className="city-header" style={HeaderStyle.header}>
        <Typography variant="h4" className="city" sx={{...HeaderStyle.city_temp,padding:'10px 20px'}}> {t(data[index]?.city)} </Typography>
        <Typography variant="h4" className="temp" sx={{...HeaderStyle.city_temp,padding:'10px 0'}}> {data[index]?.temp} </Typography>
        </div>
    )
}