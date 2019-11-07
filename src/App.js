import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import red from '@material-ui/core/colors/red';
import './styles/style.css'
import buildLink from "./funcs/buildlink";

/* Partes */
import Header from './parts/header';
import Footer from './parts/footer';

/* Páginas */
import Index from './pages/index';
import Cruzar from './pages/cruzar';
import DbBuilderPage from './pages/dbbuilder';
import DevSandbox from './pages/dev';
import NotFound from './pages/404';

var mobile = require('is-mobile');


const theme = createMuiTheme({
    palette: {
      type: 'dark',
      primary: {
        main: '#2a2a2a'
      },
      secondary: {
        main: '#6690f0'
      }
    },
});



export default class App extends React.Component{
  state = {
    haserror: false
  }

  componentDidCatch(error, info){
  }

  render(){
    return(
      <ThemeProvider theme={theme}>
        <Router>
          <div id="wrapper" className={mobile() ? 'wrapper_mobile' : ''}>
            <div id="binder">
              <Switch>
                <Route path={buildLink("/")} exact component={Index} />
                <Route path={buildLink("/cruzar")} exact component={Cruzar} />
                <Route path={buildLink("/herramienta/:dbid")} component={DbBuilderPage} />
                <Route path={buildLink("/herramienta")} exact component={DbBuilderPage} />
                <Route path={buildLink("/devsandbox")} exact component={DevSandbox} />
                <Route path="*" component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </ThemeProvider>
    )
  }
}
