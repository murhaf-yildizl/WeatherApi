import { Typography } from "@mui/material";
import {BottomStyle} from "./WeatherStyle"
import i18n from "./Translation";
import { useState } from "react";
import Container from "@mui/material/Container";

export default function()
{
    const[language,setLanguage]=useState("EN");
    
    return (
        <Container maxWidth='xs' sx={{display:'flex',justifyContent:`${language=='Ar'?'end':'start'}`}}>
          <Typography className='TranslateBtn' sx={BottomStyle.translate_btn}
           onClick={()=>{
             setLanguage(i18n.language.toUpperCase())
             i18n.changeLanguage(language.toLowerCase())
                
           
          }}>{language}</Typography>
          </Container>
    );
}