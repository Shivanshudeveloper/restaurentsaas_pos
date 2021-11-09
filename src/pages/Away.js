import React from 'react'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import { useHistory, useLocation } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search'
import { InputBase } from '@material-ui/core'
import { Link }from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    container: {
      paddingTop: theme.spacing(0),
      marginLeft: theme.spacing(-3)
    },
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing.unit * 1,
      textAlign: 'center',
      color: theme.palette.text.secondary,
      
      
      
    },

    search:{
     marginLeft :90
    },

    button:{
      padding: theme.spacing.unit * 1,
      textAlign: 'center',
      color: theme.palette.text.secondary,

    },
  
    papers:{
  
      padding: theme.spacing.unit * 1,
      textAlign: 'center',
      color: theme.palette.text.secondary,
      borderRadius:50,
      fontSize : 15,
      '&:hover':{
        backgroundColor : "grey"
      }
    },
  }));
  

const Away = () => {
    const classes = useStyles();
    return (
        <div>
             <Container className={classes.container}>
     <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
        
        <Button className={classes.search} endIcon={<SearchIcon/>}>
          <InputBase placeholder="Menu Search" variant="h1" ></InputBase>
        </Button>
        </Grid>
        <Grid item xs={4}>
          <Button variant="contained">
          <Link to='/'>Dine in</Link></Button>
        </Grid>
        <Grid item xs={4}>
          <Button variant="contained">
          <Link to='/delivery'>Delivery</Link></Button>
        </Grid>

        <Grid item xs={4}>
          <Button variant="contained">Take Away</Button>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" className={classes.paper}>Direct</Typography>
        </Grid>
        <Grid item xs={4}>
          <Paper elevation="5" className={classes.papers}>Order ID</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper elevation="5" className={classes.papers}>Order ID</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper elevation="5" className={classes.papers}>Order ID</Paper>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" className={classes.paper}>Zomato</Typography>
        </Grid>
        <Grid item xs={4}>
          <Paper elevation="5" className={classes.papers}>Table 1</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper elevation="5" className={classes.papers}>Table 2</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper elevation="5" className={classes.papers}>Table 3</Paper>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" className={classes.paper}>Swiggy</Typography>
        </Grid>
        <Grid item xs={4}>
          <Paper elevation="5" className={classes.papers}>Table 1</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper elevation="5" className={classes.papers}>Table 2</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper elevation="5" className={classes.papers}>Table 3</Paper>
        </Grid>
        </Grid>
        </div>
    </Container>
        </div>
    )
}

export default Away
