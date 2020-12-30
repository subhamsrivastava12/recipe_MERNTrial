import {makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme)=>({
    appBar:{
        borderRadius:20,
        margin:'20px 0',
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#05386B',
       
    },
    heading:{
        color:'#66FCF1',
        
    },
    subheading:{
        color:'red',
    },
    space:{
        margin:'5px 2px 2px 5px',
    },
    
    form:{
        margin:'5px 0px 5px 0px',
        justifyContent:'center',
        alignItems:'center',
        opacity:0.7,
        
    },
    


}))