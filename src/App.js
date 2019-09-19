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

const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#2a2a2a'
      },
      secondary: {
        main: '#f0f0f0'
      }
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
                <Route path={buildLink("/")} exact component={Index} />
                <Route path={buildLink("/cruzar")} exact component={Cruzar} />
                <Route path={buildLink("/construir/:dbid")} component={DbBuilderPage} />
                <Route path={buildLink("/construir")} exact component={DbBuilderPage} />
                <Route path={buildLink("/devsandbox")} exact component={DevSandbox} />
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
