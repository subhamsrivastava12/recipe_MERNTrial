import React ,{useState}from 'react'
import {Container,Card,CardMedia,Button,CardHeader,AppBar,Typography,Grow,Grid, CardContent, CardActions} from '@material-ui/core';
import useStyles from './poststyles';
import IconButton from '@material-ui/core/IconButton';

import Avatar from '@material-ui/core/Avatar'
import ThumbAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import {useDispatch} from 'react-redux';
import {deletePost,likePost} from './../../../actions/posts' 

/**
* @author
* @function Post
**/

const Post = ({post,setCurrentId}) => {
  const classes = useStyles();
  const dispatch =useDispatch();
  return(
    <Card className={classes.root} >
       <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {post.creator[0]}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
         <Button style={{color:'black'}} size="small" onClick={()=>{
          setCurrentId(post._id)
        }}>
        <MoreHorizIcon fontsize="default"/>
        </Button> </IconButton>
        }
        title={post.title}
        subheader={moment(post.createdAt).fromNow()}
      />
      <CardMedia className={classes.media} image={post.selectedfile} title={post.creator}/>
      
      <Typography className={classes.title}  variant="h5" component="h2">{post.creator}</Typography>
      
        <CardContent>
      <Typography className={classes.text} variant="body2" color="textSecondary" component="p" >{post.message}</Typography>
      
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" onClick={()=>{dispatch(likePost(post._id))}}>
          <ThumbAltIcon fontsize="small"/>
          &nbsp;Like&nbsp;
          {post.likeCount}
        </Button>
        <Button size="small" color="primary" onClick={()=>{dispatch(deletePost(post._id))}}>
          <DeleteIcon fontsize="small"/>
          &nbsp;Delete&nbsp;
        </Button>
      </CardActions>
      

    </Card>
   )

 }

export default Post;