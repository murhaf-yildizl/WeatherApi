import { BodyStyle } from './WeatherStyle';
import {useWeather} from './WeatherProvider';
import { useTranslation, } from 'react-i18next';
import  Grid  from '@mui/material/Grid';
import { cities } from './cities/cities';

export default function Body({index=0})
{
   const {data}=useWeather();
   const { t} = useTranslation(); 

    return (
      <div  className='body' style={BodyStyle.body}>
        <img   className='city_image' src={`./assets/images/${cities[index]}.png`} style={{...BodyStyle.ImageStyle,height:'300px'}}/>
        <Grid container >
           <Grid size={12}>
            <img className='weather_icon' src={data[index]?.icon} style={{...BodyStyle.ImageStyle,width:'50%',marginTop:'-40px'}} /> 
           </Grid>

          <Grid size={12} sx={BodyStyle.description}>
            {t(data[index]?.description)}
          </Grid>
        
        <Grid container size={12} sx={{...BodyStyle.description}}>
         <Grid size={6}>
            {t('max')}: {data[index]?.maxTemp}
         </Grid>
        
        <Grid size={6}>
           {t('min')}: {data[index]?.minTemp}
         </Grid>
         </Grid>

        </Grid>
      </div>
         
    );
}