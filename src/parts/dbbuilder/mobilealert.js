import React from 'react'
import Icon from '@material-ui/core/Icon';

export default class DbMobileAlert extends React.Component{
  state = {
    show: true
  }
  render(){
    if(!this.state.show){
      return null;
    }
    return(
      <div className="mobile_alert">
        <div className="mobile_alert_icon">
          <Icon>warning</Icon>
        </div>
        <div className="mobile_alert_text">
          Estás navegando Sinapsis en su versión light. Para utilizar todas las capacidades de la herramienta ÁBRELA EN UNA COMPUTADORA DE ESCRITORIO
        </div>
      </div>
    )
  }
}
