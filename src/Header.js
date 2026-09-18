import Typography from '@mui/material/Typography';
import { HeaderStyle } from './WeatherStyle';
import { useWeather } from './WeatherProvider';
import { useTranslation } from 'react-i18next';

export default function Header({index=0})
{
    const { i18n,t } = useTranslation();
    const {data}=useWeather();
    const now = new Date();

    const date = now.toLocaleDateString(i18n.language, {
    weekday: 'long',
    day:     '2-digit',
    month:   '2-digit',
    year:    'numeric',
  });

    return (
        <div className="header" style={HeaderStyle.header}>
                    <Typography className='city' variant='h3' sx={HeaderStyle.city}>{t(data[index]?.city)}</Typography>
                    <Typography className='date' variant='h6' sx={HeaderStyle.date}>{date}</Typography>
                 </div>
                
    );
}