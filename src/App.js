import { createTheme, ThemeProvider} from '@mui/material/styles';
import './App.css';
import Container from '@mui/material/Container';
import Bottom from './Bottom';
import WeatherProvider from './WeatherProvider'; 
import Swiper from './Swiper';
import Box  from '@mui/material/Box';
import { boxStyle,containerStyle } from './AppStyle';
import { useState} from 'react';

  const theme=createTheme(
    {
    
      typography:{
        fontFamily: 'myFont1',
        color:'#871010',
      }
    }
  );

function App() {

  const [backgroundIndex,setBackgroundIndex]=useState(0);

  function handleChange(index){
    setBackgroundIndex(index)
  }

  return (

    <ThemeProvider theme={theme}>
      <WeatherProvider>
    <div className="App">
      
     <Box sx={boxStyle(backgroundIndex)}>
       <Container maxWidth='xs' className="Contents-container"  sx={containerStyle}>
        <Swiper handleChange={handleChange} />
       </Container>
       
       <Bottom/>
     </Box>
      
    </div>
    </WeatherProvider>
    </ThemeProvider>
  );
}

export default App;
