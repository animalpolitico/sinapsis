import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import red from '@material-ui/core/colors/red';
import './styles/style.css'

/* Partes */
import Header from './parts/header';
import Footer from './parts/footer';

/* Páginas */
import Index from './pages/index';
import Cruzar from './pages/cruzar';
import DbBuilderPage from './pages/dbbuilder';
import NotFound from './pages/404';

const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#1f2153'
      },
    },
});



export default class App extends React.Component{

  render(){
    return(
      <ThemeProvider theme={theme}>
        <Router>
          <div id="wrapper">
          <Header />
            <div id="binder">
              <Switch>
                <Route path="/" exact component={Index} />
                <Route path="/cruzar" exact component={Cruzar} />
                <Route path="/construir" exact component={DbBuilderPage} />
                <Route path="*" component={NotFound} />
              </Switch>
            </div>
          <Footer />
          </div>
        </Router>
      </ThemeProvider>
    )
  }
}
