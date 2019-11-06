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
          Ésta es parte de la visualización de La Estafa Maestra. Si quieres usar la herramienta debes hacerlo en una COMPUTADORA DE ESCRITORIO.
        </div>
      </div>
    )
  }
}
