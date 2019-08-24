import React from 'react'
import Typing from 'react-typing-animation';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { Link } from "react-router-dom";

export default class Index extends React.Component{
  state = {
    finishT: false
  }
  render(){
    var ctasC = [];
    if(this.state.finishT){
      ctasC.push('ss_hb_finished');
    }
    return(
      <div className="ss_page" id="ss_page_home">
        <div className="ss_hb_cols">
          <div className="ss_hb_col">
            <div id="ss_home_brain_text">
              <Typing speed={55} onFinishedTyping={() => this.setState({finishT: true})}>
                <div className="ss_hb_tt"><div>Herramienta</div><br/><div>para descubrir</div><br/><div>conexiones</div><br/><div>entre empresas</div></div>
              </Typing>
            </div>
            <div id="ss_hb_ctas" className={ctasC.join(' ')}>
              <Button color="primary" size="large" variant="outlined">
                Crear una base de datos
              </Button>
              <Link to="/cruzar">
              <Button color="primary" size="large" variant="contained">
                Comenzar a cruzar
              </Button>
              </Link>
            </div>
          </div>
          <div className="ss_hb_col">
            <div id="ss_home_brain_img"><div></div></div>
          </div>
        </div>
      </div>
    )
  }
}
