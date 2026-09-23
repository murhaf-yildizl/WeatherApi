import { useTranslation } from 'react-i18next';
import Header from './Header' 
import Body from './Body';
import { BodyStyle } from './WeatherStyle';

 export default function SwiperSlideComp({index=0})
 {
       const { i18n } = useTranslation();
       const direction=i18n.language=='ar'?'rtl':'ltr';

    return (
        
   
          
            <div dir={direction} className="Contents" style={BodyStyle.bodyContents}>
                  <Header index={index}/>  
                  <Body index={index}/>
                               
           </div>  
      
          
         
 
    )
 }