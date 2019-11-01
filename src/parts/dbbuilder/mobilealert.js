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
        <div className="mobile_alert_close" onClick={() => this.setState({show: false})}><Icon>close</Icon></div>
        <div className="mobile_alert_icon">
          <Icon>warning</Icon>
        </div>
        <div className="mobile_alert_text">
          Esta es una versión light de Sinapsis porque estás en un dispositivo móvil. Para utilizar Sinapsis utiliza un navegador en escritorio.
        </div>
      </div>
    )
  }
}
