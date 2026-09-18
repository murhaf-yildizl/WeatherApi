import { cities } from "./cities/cities"

export function boxStyle(index){
    if(index>=cities.length)
        index=0;
    return{
       height: '100vh',
       width: '100%',
       background: `linear-gradient(rgba(215, 14, 14, 0.54), rgba(36, 14, 181, 0.64)),
                    url('/assets/images/${cities[index]}.png')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      alignContent:'center'
    }
}
export const containerStyle={ 
    padding: '0 !important',
     backgroundColor:'rgba(179, 39, 60, 0.48)',
     borderRadius:'20px',
     boxShadow:'0 10px 1px #5555552b'}    