import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import Icon from '@material-ui/core/Icon';
import moment from 'moment';
import Button from '@material-ui/core/Button';
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

    function setObjectSize(s){
      self.setState({
        objSizeString: s,
        isloading: true
      })
    }

    setInterval(function(){
      if(!self.state.modified){
        return;
      }
      var m = moment(self.state.modified);
      var mm = m.fromNow();
      modifiedCronned(mm);
    }, 1000 * 2);

    setInterval(function(){
      if(!self.state.modified){
        return;
      }
      var l = window.dbf.getObjectSize();
      var kb = l * 0.000125;
      var s = Math.round(kb) + 'KB';
      setObjectSize(s);
    }, 20000);

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
            <Button color="primary" variant="outlined" size="small">
              Protección de datos
            </Button>
            <Button color="primary" variant="outlined" size="small">
              Info. del proyecto
            </Button>
            <Button color="primary" variant="contained" size="small">
              Descargar archivo
            </Button>
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
