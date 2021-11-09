import React from 'react'
import { makeStyles } from '@material-ui/core'
import Drawer from '@material-ui/core/Drawer'
import Typography from '@material-ui/core/Typography'
import { useHistory, useLocation } from 'react-router-dom'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { AddCircleOutlineOutlined, Kitchen, SubjectOutlined } from '@material-ui/icons'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { format } from 'date-fns'
import Avatar from '@material-ui/core/Avatar'
import HomeIcon from '@material-ui/icons/Home'
import Button from '@material-ui/core/Button'
import CalendarTodayIcon from '@material-ui/icons/CalendarToday'
import RefreshIcon from '@material-ui/icons/Refresh'
import LanguageIcon from '@material-ui/icons/Language'
import StorageIcon from '@material-ui/icons/Storage'
import NotificationsIcon from '@material-ui/icons/Notifications'
import FullscreenIcon from '@material-ui/icons/Fullscreen'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import MenuIcon from '@material-ui/core/Menu'
import LocalBarIcon from '@material-ui/icons/LocalBar'

const drawerWidth = 240

const useStyles = makeStyles((theme) => {
  return {
    page: {
      background: '#f9f9f9',
      width: '100%',
      padding: theme.spacing(3),
    },
    root: {
      display: 'flex',
    },
    drawer: {
      width: drawerWidth,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    active: {
      background: '#f4f4f4'
    },
    title: {
      padding: theme.spacing(2),
    },
    appBar: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },

    btn:{
      marginLeft:140
    },
    date: {
      flexGrow: 1
    },
    toolbar: theme.mixins.toolbar,
    avatar: {
      marginLeft: theme.spacing(2)
    }
  }
})

export default function Layout({ children }) {
  const classes = useStyles()
  const history = useHistory()
  const location = useLocation()

  const menuItems = [
    { 
      text: 'Main Category', 
      icon: <SubjectOutlined color="secondary" />, 
      path: '/' 
    },

   
    { 
      text: 'Indian', 
      icon: <AddCircleOutlineOutlined color="secondary" />, 
      path: '/' 
    },
    { 
      text: 'Italian', 
      icon: <AddCircleOutlineOutlined color="secondary" />, 
      path: '/' 
    },
    { 
      text: 'Mexican', 
      icon: <AddCircleOutlineOutlined color="secondary" />, 
      path: '/tables' 
    },
    { 
      text: 'Chinese', 
      icon: <AddCircleOutlineOutlined color="secondary" />, 
      path: '/' 
    },
    { 
      text: 'Main Course', 
      icon: <AddCircleOutlineOutlined color="secondary" />, 
      path: '/' 
    },
    { 
      text: 'Soup', 
      icon: <AddCircleOutlineOutlined color="secondary" />, 
      path: '/' 
    },

    { 
      text: 'Salad', 
      icon: <AddCircleOutlineOutlined color="secondary" />, 
      path: '/' 
    },
    { 
      text: 'Staters', 
      icon: <AddCircleOutlineOutlined color="secondary" />, 
      path: '/' 
    },
    { 
      text: 'Desserts', 
      icon: <AddCircleOutlineOutlined color="secondary" />, 
      path: '/' 
    },
  
    
  ];

  return (
    <div className={classes.root}>
      {/* app bar */}
      <AppBar 
        position="fixed" 
        className={classes.appBar}
        elevation={0}
        color="primary"
      >
        <Toolbar>
         <Button color="secondary">
            <HomeIcon/>
          </Button>
          <Button color="secondary">
            <CalendarTodayIcon/>
          </Button>
          <Button color="secondary">
            <RefreshIcon/>
          </Button>
          <Button color="secondary">
            <LanguageIcon/>
          </Button>
          <Button color="secondary" className={classes.btn}>
            <Kitchen/>
          </Button>
          <Button color="secondary">
            <LocalBarIcon/>
          </Button>
          <Button color="secondary">
            <StorageIcon/>
          </Button>
          <Button color="secondary">
            <NotificationsIcon/>
          </Button>
          <Button color="secondary">
            <FullscreenIcon/>
          </Button>
          <Button color="secondary">
            <ExitToAppIcon/>
          </Button>

         <Button color="secondary" variant="contained">
           Restoscan Logo
         </Button>
        </Toolbar>
      </AppBar>

      {/* side drawer */}
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{ paper: classes.drawerPaper }}
        anchor="left"
      >
        <div>
          <Typography variant="h5" className={classes.title}>
            Title
          </Typography>
        </div>

        {/* links/list section */}
        <List>
          {menuItems.map((item) => (
            <ListItem 
              button 
              key={item.text} 
              onClick={() => history.push(item.path)}
              className={location.pathname == item.path ? classes.active : null}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
        
      </Drawer>

      {/* main content */}
      <div className={classes.page}>
        <div className={classes.toolbar}></div>
        { children }
      </div>
    </div>
  )
}
