import { Divider } from '@mui/material';
import Header from './Header';
import Body from './Body';
import { useTranslation } from 'react-i18next';
 
 export default function SwiperSlideComp({index=0})
 {
       const { i18n } = useTranslation();
       const direction=i18n.language=='ar'?'rtl':'ltr';

    return (
        
   
          
            <div dir={direction} className="Contents" style={{display:'flex',flexDirection:'column',justifyContent:'space-between',alignItems:'center',padding:'10px 12px'}}>
        
              <Header index={index} />
              <Divider sx={{backgroundColor: 'white', height: '1px', width: '100%', padding:0}} />
              <Body index={index} />
           </div>  
      
          
         
 
    )
 }