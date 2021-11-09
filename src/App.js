import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'


import { createMuiTheme, ThemeProvider } from '@material-ui/core'
import { purple } from '@material-ui/core/colors'
import Layout from './components/Layout'
import Grid from '@material-ui/core/Grid'
import Content from './pages/Content'
import Right from './pages/Right'
import Tables from './pages/Tables'
import Delivery from './pages/Delivery'
import Away from './pages/Away'


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#fefefe'
    },
    secondary: purple
  },
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Switch>
          <Grid container>
            <Route exact path="/">
            <Grid item sm={6} >
          <Content />
        </Grid>
        <Grid item sm={6} >
            <Right/>
            
        </Grid>
            </Route>
           
            <Route path="/tables">
            <Grid item sm={12} >
          <Tables />
          </Grid>
            </Route>
            
             <Route exact path="/delivery">
               <Grid item sm={6}>
                 <Delivery/>
               </Grid>
               <Grid item sm={6} >
            <Right/>
            
        </Grid>
             </Route>

             <Route exact path="/away">
               <Grid item sm={6}>
                 <Away/>
               </Grid>
               <Grid item sm={6} >
            <Right/>
            
        </Grid>
             </Route>
         
           </Grid>

          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
