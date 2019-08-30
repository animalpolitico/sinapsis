import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import Icon from '@material-ui/core/Icon';
import moment from 'moment';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import 'moment/locale/es';
moment.locale('es');

export default class DbBuilderToolbar extends React.Component{
  state = {
    isloading: false,
    modified: false,
    modifiedString: '',
    objSizeString: ''
  }
  componentDidMount(){
    this.setCronned()
  }

  setCronned(){
    var self = this;

    function modifiedCronned(mm){
      self.setState({
        modifiedString: mm,
        isloading: false
      })
    }

    setInterval(function(){
      var mdf = window.dbf.getModified();
      if(!mdf){
        return;
      }
      var m = moment(mdf);
      var mm = m.fromNow();
      modifiedCronned(mm);
    }, 1000 * 2);


  }

  render(){
    return(
      <div className="ss_db_toolbar">
        <div className="ss_db_toolbar_info">
          <div className="ss_db_toolbar_info_td">
            <DbBuilderToolbarName parent={this}/>
          </div>
          {
            this.state.modifiedString ?
            <div className="ss_db_toolbar_info_td ss_db_lastmodified">
              Última modificación: <strong>{this.state.modifiedString}</strong>
              {
                this.state.objSizeString ?
                 <span> [{this.state.objSizeString}]</span>
                : null
              }
            </div>
            : null
          }
          <div className="ss_db_toolbar_info_td ss_db_ctas">
            <Fab size="small" color="primary" onClick={() => window.dbf.createProjectFile()}>
              <Icon>info</Icon>
            </Fab>
            <Fab size="small" color="primary" onClick={() => window.dbf.createProjectFile()}>
              <Icon>settings_applications</Icon>
            </Fab>
            <Fab size="small" color="primary" onClick={() => window.dbf.createProjectFile()}>
              <Icon>get_app</Icon>
            </Fab>
          </div>
        </div>
        {
          this.state.isloading ?
          <div className="ss_db_toolbar_progress"><LinearProgress /></div>
          : null
        }
      </div>
    )
  }
}

class DbBuilderToolbarName extends React.Component{
  state = {
    focused: false,
    modified: false,
    error: false,
    project_name: 'Proyecto increíble'
  }

  handleChange(e){
    var v = e.target.value;
    var err = v ? false : true;
    this.setState({
      project_name: v,
      error: err
    })
    this.setModified();
    window.dbf.setName(v);
  }

  setModified(){
    var s = moment.now();
    this.props.parent.setState({
      modified: s
    })
  }

  render(){
    var cs = ["ss_db_builder_project_name"];
    if(this.state.focused){
      cs.push('ss_focused');
    }
    if(this.state.error){
      cs.push('ss_error');
    }
    return(
      <div className={cs.join(' ')}>
        <input
          type="text"
          placeholder="Nombre del proyecto"
          onChange={(e) => this.handleChange(e)}
          onBlur={() => this.setState({focused: false})}
          onFocus={() => this.setState({focused: true})}
          value={this.state.project_name}
        />
        <div className="ss_db_builder_project_name_icon">
          <Icon>edit</Icon>
        </div>
      </div>
    )
  }
}
