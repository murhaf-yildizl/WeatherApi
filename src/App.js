import { createTheme, ThemeProvider} from '@mui/material/styles';
import './App.css';
import Container from '@mui/material/Container';
import Bottom from './Bottom';
import WeatherProvider from './WeatherProvider'; 
import Swiper from './Swiper';
import Box  from '@mui/material/Box';
import {containerStyle,boxStyle } from './AppStyle';
import Date from './Date'


  const theme=createTheme(
    {
    
      typography:{
        fontFamily: 'myFont1',
        color:'#871010',
      }
    }
  );

function App() {

  return (
    <ThemeProvider theme={theme}>
      <WeatherProvider>
    <div className="App">
      
        <div style={boxStyle}>
       
        <Date />
       
       <Container maxWidth='sm' className="Contents-container"  sx={containerStyle}>
        <Swiper/>
       </Container>
       
       <Bottom/>
       
     </div>
      
    </div>
    </WeatherProvider>
    </ThemeProvider>
  );
}

export default App;
