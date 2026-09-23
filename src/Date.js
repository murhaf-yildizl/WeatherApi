import Typography from '@mui/material/Typography';
import { DateStyle } from './WeatherStyle';
import { useTranslation } from 'react-i18next';

export default function DateComp()
{
    const { i18n } = useTranslation();
    const now = new Date();

    const date = now.toLocaleDateString(i18n.language, {
    weekday: 'long',
    day:     '2-digit',
    month:   '2-digit',
    year:    'numeric',
  });

    return (
        <Typography className='date' variant='h5' sx={DateStyle}>{date}</Typography>
                 
                
    );
}