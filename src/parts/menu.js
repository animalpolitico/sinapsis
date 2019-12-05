import React from 'react';
import buildLink from "../funcs/buildlink";


export default class SSMenuHomeBar extends React.Component{
  state = {
    show: false
  }
  componentDidMount(){
    var self = this;
    window.scroll(0,0);
    window.addEventListener('scroll', function(e){
      var ty = document.getElementById('ss_my').getBoundingClientRect().top;
      var s = ty <= 0;
      self.setState({
        show: s
      })
    })

  }
  render(){
    if(!this.state.show){
      return null;
    }
    return(
      <div className="ssmhb">
        <div className="ssmhb_row">
          <div className="ssmhb_row_td ssmhb_logo">
            <a href="https://animalpolitico.com" target="_blank">
              <img src={require('../static/api.png')} />
            </a>
          </div>
          <div className="ssmhb_row_td ssmhb_slogo">
            <img src={require('../static/logo.png')} />
          </div>
          <div className="ssmhb_row_td ssmhb_actions">
            <div className="ssmhb_actions_td">
              <div className="ssmhb_actions_td_btn" onClick={() => this.props.history.push(buildLink('/herramienta'))}>
                Ir a la herramienta
              </div>
            </div>

          </div>

        </div>
      </div>
    )
  }
}
