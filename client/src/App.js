import React,{useEffect,useState} from 'react'
import {Container,AppBar,Typography,Grow,Grid} from '@material-ui/core';
import {useDispatch} from 'react-redux';
import Posts from './components/posts/posts';
import {getPosts} from './actions/posts';
import Form from './components/form/form';
import useStyles from './Appstyles';
import './App.css';
/**
* @author
* @function App
**/

const App = (props) => {
  const classes = useStyles();
  const dispatch =useDispatch();
  const [currentId,setCurrentId]=useState(null);

  useEffect(()=>{
    dispatch(getPosts());
  },[dispatch,currentId]);
  return(
    <Container maxWidth="lg">
      
      <AppBar className="appBar" className={classes.appBar} position="static" color="inherit">
      <div>
      <div>
        <Typography className={classes.heading} variant="h3" align="center">Amazing Food Recipes</Typography>
      </div>
      
      <div>
      <Typography className={classes.subheading} variant="h5" align="center">Inspire Your Inner Chef</Typography>
      </div>
      </div>
      </AppBar>
      <Grow in>
        <Container>
          <Grid className={classes.space}  container justify="space-between" alignItems="stretch" spacing >
          <Grid className={classes.form} item  xs={12}  md={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId}/>
            </Grid>
            <Grid item  xs={12}  md={8}>
              <Posts setCurrentId={setCurrentId}/>
            </Grid>
            
          </Grid>
        </Container>
      </Grow>
    </Container>
   )

 }

export default App