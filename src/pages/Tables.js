import React from 'react'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import { useHistory, useLocation } from 'react-router-dom'
import { Link }from 'react-router-dom'
import Delivery from './Delivery'
import SearchIcon from '@material-ui/icons/Search'
import { InputBase } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    container: {
      paddingTop: theme.spacing(0),
      marginLeft: theme.spacing(-3),
      
     
    },
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing.unit * 2,
      textAlign: 'center',
      color: theme.palette.text.secondary,
      marginTop:theme.spacing(5),
      minHeight:theme.spacing(20),
      minWidth:theme.spacing(10),
      borderRadius:theme.spacing(5)
      
      
      
    },

    paperr : {
      minHeight: theme.spacing(5),
      borderRadius:theme.spacing(5),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      marginBottom:theme.spacing(2),
      fontSize : 15,
    },

    search:{
     marginLeft :90
    },

    button:{
      padding: theme.spacing.unit * 1,
      textAlign: 'center',
      color: theme.palette.text.secondary,

    },

    btn:{
        marginBottom:10,
        Width:theme.spacing(5)
    },

    buttons:{
        minHeight : theme.spacing(18),
        minWidth:theme.spacing(45),
        borderRadius:theme.spacing(5),
        marginTop:theme.spacing(3),
        marginLeft:theme.spacing(4)
    },

    typo : {
      marginBottom:theme.spacing(13),
      marginLeft:theme.spacing(5)
    },
  
    papers:{
  
      padding: theme.spacing.unit * 1,
      textAlign: 'center',
      marginLeft:theme.spacing(1),
      color: theme.palette.text.secondary,
      borderRadius:50,
      fontSize : 15,
      '&:hover':{
        backgroundColor : "grey"
      }
    },
  }));
  


const Tables = () => {
    const classes = useStyles();
    return (
        <div>
             <Container className={classes.container}>
     <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={2}>
        
        <Button  color="blue" className={classes.btn} variant="contained">Table Reservation
        </Button>
        <Button className={classes.btn} variant="contained">Add Table Section</Button>
        <Button className={classes.btn} variant="contained">Add Table</Button>
       
        
        
        </Grid>
        <Grid item xs={5}>
          <Button className={classes.buttons} variant="contained"   > <Paper elevation="5" className={classes.papers}>Table 1</Paper>
          <Paper elevation="5" className={classes.papers}>Table 1</Paper>
          <Paper elevation="5" className={classes.papers}>Table 1</Paper>
          <Paper elevation="5" className={classes.papers}>Table 1</Paper></Button>
          
        </Grid>
        <Grid item xs={5}>
        <Button className={classes.buttons} variant="contained"   > <Paper elevation="5" className={classes.papers}>Table 1</Paper>
          <Paper elevation="5" className={classes.papers}>Table 1</Paper>
          <Paper elevation="5" className={classes.papers}>Table 1</Paper>
          <Paper elevation="5" className={classes.papers}>Table 1</Paper></Button>
          
        </Grid>

        <Grid item xs ={2}>
        <Paper elevation="5" className={classes.paper}>
          <Paper className={classes.paperr}>Vacant Table</Paper>
          <Paper className={classes.paperr}>Booked Table</Paper>
          <Paper className={classes.paperr}>Orders Accepted</Paper>
          <Paper className={classes.paperr}>Payment Due</Paper>
        </Paper>
          </Grid>
          <Grid item xs={5}>
          <Button className={classes.buttons} variant="contained"   >
          
            <Paper elevation="5" className={classes.papers}>Table 1</Paper>
          <Paper elevation="5" className={classes.papers}>Table 1</Paper>
          <Paper elevation="5" className={classes.papers}>Table 1</Paper>
          <Paper elevation="5" className={classes.papers}>Table 1</Paper></Button>
          
        </Grid>

        <Grid item xs={5}>
          <Button className={classes.buttons} variant="contained"   ><Paper elevation="5" className={classes.papers}>Table 1</Paper>
          <Paper elevation="5" className={classes.papers}>Table 1</Paper>
          <Paper elevation="5" className={classes.papers}>Table 1</Paper>
          <Paper elevation="5" className={classes.papers}>Table 1</Paper></Button>
          
        </Grid>


        
       
        </Grid>
        </div>
    </Container>

        </div>
    )
}

export default Tables
