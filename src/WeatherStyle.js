export const FontStyle={
    size:{
        fontSize: 'clamp(1rem, 2.5vw, 1.5rem)'
        
    }
    
}

export const DateStyle={
    color:'#13112896',
    alignContent:'center',
    padding:'30px 0 10px 0',
    fontSize: FontStyle.size
}

export const HeaderStyle={
    header:{
        width:'100%',
        display:'flex',
        color:'white',  
        background:'#68797516',
        fontSize:FontStyle.size
           
        
    },
    city_temp:{
        height:'100%',
        alignContent:'center',
        margin:'0 6px',
        fontSize:FontStyle.size
 
    }
 
}



export const BodyStyle={
    body:{
        width:'100%',
        display:'flex',
        justifyContent:'space-between',
        
    },
    bodyContents:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
        alignItems:'center'
    },
    description:{
    display:'flex',
    borderRadius:'20px',    
    margin:'4px 12px',    
    color:'white',
    background: '#68797529',
    fontSize:FontStyle.size,
    fontWeight: '500',
    height:'30px',
    alignItems: 'center',
    justifyContent:'center'
    }
    ,
    temparatue:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center'
    },
    text:{
        color:'white'
    },
    ImageStyle:{
        borderRadius :'20px',
        width:'50%',
        //height:'10vh',
        opacity:'60%'
    }


}


export const BottomStyle={
    translate_btn:{
        marginTop:'20px',
        justifySelf: 'center',
        textAlign: 'end',         
        color: 'white',
        background:'#13112896',
        padding:'5px 14px',
        fontSize:FontStyle.size
        
        }
}

