import React from 'react';
import {useSelector} from 'react-redux';
import Post from './post/post';
import {Container,AppBar,Typography,Grow,Grid,CircularProgress} from '@material-ui/core';
import useStyles from './postsStyle';


/**
* @author
* @function 
**/

const Posts = ({setCurrentId}) => {
  const posts=useSelector((state)=>state.posts);
  posts.sort((a,b)=>a.createdAt>b.createdAt?1:-1);
  const classes = useStyles();

  return(
      !posts.length?<CircularProgress/>:(
        
      

    
      
      <Grow in>
        

          <Grid className={classes.mid} container justify="space-between" alignItems="stretch" >
          {            
             posts.map((post)=>(
               <Grid key={post._id} >
                 <Post post={post} setCurrentId={setCurrentId}/>
                 </Grid>

             ))
           }
            
             </Grid>
            
        
      </Grow>
    
     

      
      )
   )

 }

export default Posts;