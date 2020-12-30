import React,{useState,useEffect} from 'react';
import { TextField,Button, Typography,Paper,FormControl,Input,InputLabel,FormHelperText, Container } from '@material-ui/core';
import FileBase64 from 'react-file-base64'

import { makeStyles } from '@material-ui/core/styles';

import {useDispatch,useSelector} from 'react-redux';
import {createPost,updatePost} from '../../actions/posts'
/**
* @author
* @function Form
**/
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      padding:'5px 5px 5px 5px ',

      },
      minHeight:450,
      padding:'5px 5px 5px 5px ',
  },
  paper:{
    borderRadius:20,
    justifyContent:'center',
    margin:'auto',
    minWidth:320,
    maxWidth:600,
  },
  textField: {
    marginLeft: theme.spacing(0),
    marginRight: theme.spacing(0),
    
  },
  heading:{
    justifyContent:'center',
    color:'#190061',
    fontWeight:'bolder',
  },
}));
 

const Form = ({currentId,setCurrentId}) => {
    const classes = useStyles();
    const post=useSelector((state)=>currentId? state.posts.find((p)=>p._id===currentId):null);
    useEffect(()=>{
      if(post) setPostData(post);
    },[post])
    const dispatch =useDispatch();
    const [postData,setPostData]=useState({
      creator:'',
      title:'',
      message:'',
      selectedfile:'',
    });
    const submitEvent=(e)=>{
      e.preventDefault();
      if(currentId){
        dispatch(updatePost(currentId,postData));
      }
      else{
      dispatch(createPost(postData));
      }
      clear();
    }
    const clear=()=>{
      setCurrentId(null);
      setPostData({
        creator:'',
        title:'',
        message:'',
        selectedfile:'',
      })
    }

  return(
      <Paper className={classes.paper}>
        <Container>
       <form className={classes.root} autoComplete="off" noValidate onSubmit={submitEvent} >
         <Typography className={classes.heading} variant="h4">{currentId?'Editing Your Post':'Creating a Post'} </Typography>
         <TextField className={classes.textField} name="creator" variant="outlined" label="Creator" fullWidth
         value={postData.creator}
         onChange={(e)=>setPostData({...postData,creator:e.target.value})} required="True"/>
         <TextField className={classes.textField} name="title" variant="outlined" label="title" fullWidth
         value={postData.title}
         onChange={(e)=>setPostData({...postData,title:e.target.value})} required/>
         <TextField className={classes.textField} name="message" variant="outlined" label="recipe" fullWidth
         value={postData.message}
         onChange={(e)=>setPostData({...postData,message:e.target.value})} required/>
         <div > 
          <FileBase64
          type="file"
          multiple={true}
          onDone={([{base64}])=>{setPostData({...postData,selectedfile:base64});console.log(base64)}}/>
         </div>
         <Button variant="contained" color="primary" size="large"  type="submit" fullwidth>Submit</Button>
         <Button variant="contained" color="secondary" size="small" onClick={clear} fullwidth>Reset</Button>

         </form> 
         </Container>
         </Paper>        
      
    
   )

 }

export default Form