import {makeStyles } from '@material-ui/core/styles';


export default makeStyles(()=>({
  root: {
    minWidth:280,
    maxWidth: 345,
    margin:'4px 6px',
  },
  media: {
    height: 25,
    paddingTop: '56.25%', // 16:9
  },
  title:{
    marginTop:'2px',
    marginLeft:'5px',
    justifyContent:'center',
  },
  avatar: {
    backgroundColor:'red',
  },
  text:{
    
    justifyContent:'center',
  }
  
  

}))