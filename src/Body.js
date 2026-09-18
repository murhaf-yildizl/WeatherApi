import CloudIcon from '@mui/icons-material/Cloud';
import Typography from '@mui/material/Typography';
import { BodyStyle } from './WeatherStyle';
import {useWeather} from './WeatherProvider';
import { useTranslation, } from 'react-i18next';


export default function Body({index=0})
{
   const {data}=useWeather();
   const { t} = useTranslation(); 

    return (
          <div  className='body' style={BodyStyle.body}>
             
              <div className='bodyContents' style={BodyStyle.bodyContents}>
                 <div className='temperature' style={BodyStyle.temparatue}>
                    <Typography variant='h3' sx={BodyStyle.text} >{data[index]?.temp}</Typography>
                    <img src={data[index]?.icon}/>,
                 </div>

                 <div className='details'>
                    <Typography variant='h6' sx={BodyStyle.text}>{t(data[index]?.desc)}</Typography>
                 </div>

                 <div className='max-min-temp' style={{display:'flex',flexDirection:'row'}}>
                    <Typography variant='h6' sx={BodyStyle.text}>{t('max')}: {data[index]?.maxTemp} |</Typography>

                    <Typography variant='h6' sx={BodyStyle.text}>{t('min')}: {data[index]?.minTemp}</Typography>
                 </div>
              </div>

              <div className='body-icon'>
                <CloudIcon sx={{color:'white',fontSize:200}}/>
             </div>

           </div>
    );
}