import React from 'react'
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { Link } from "react-router-dom";

export default class Header extends React.Component{
  state = {
    showmenu: false
  }
  toggleMenu(){
    this.setState({
      showmenu: !this.state.showmenu
    })
  }

  render(){
    var cs = ['ss_header_c'];
    if(this.state.showmenu){
      cs.push('ss_showmenu');
    }
    return(
      <div>
        <header id="ss_header">
          <div id="ss_header_c" className={cs.join(' ')}>
            <div id="ss_header_c_ap"><img src={require('../static/ap.svg')}></img></div>
            <Link to="/"><div id="ss_header_c_logo"><span>Sinapsis</span><span className="badge">beta</span></div></Link>
              <div id="ss_header_c_m">
                <div className="ss_header_c_m_menu">
                  <Button color="primary">
                    ¿Qué es Sinapsis?
                  </Button>
                  <Button color="primary" variant="outlined">
                    Tutoriales
                  </Button>
                  <Link to="/construir">
                    <Button color="primary" variant="outlined">
                      Construir base de datos
                    </Button>
                  </Link>
                  <Button color="primary" variant="outlined">
                    Demo
                  </Button>
                  <Link to="/cruzar">
                    <Button color="primary" variant="contained">
                      Crear cruce
                    </Button>
                  </Link>
                </div>
                <div className="ss_header_c_m_dots" onClick={() => this.toggleMenu()}>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
          </div>
        </header>
      </div>
    )
  }
}
