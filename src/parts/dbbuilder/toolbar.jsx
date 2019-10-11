import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import Icon from '@material-ui/core/Icon';
import moment from 'moment';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import 'moment/locale/es';
import { countries, getFlag } from "../../vars/countriesDict";
import buildLink from "../../funcs/buildlink";
import Popper from '@material-ui/core/Popper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
var store = require('store')
moment.locale('es');

export default class DbBuilderToolbar extends React.Component{
  state = {
    isloading: false,
    modified: false,
    modifiedString: '',
    objSizeString: '',
    lang: 'MEX',
    openPopper: false
  }
  componentDidMount(){
    this.setCronned();
    var l = this.getLang();
    this.setState({
      lang: l
    })
    var n = window.dbf.obj.info.name;
    this.toolbarname.handleChange(n);
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

  getLang(){
    var def = "MEX";
    var s = store.get('sinapsis_lang');
    return s ? s : def;
  }

  loadFile(e){
    this.setState({
      isloading: true
    })
    var self = this;
    var em = document.getElementById('ss_file_input');
    var f = em.files;
    if(f[0]){
      var file = f[0];
      var reader = new FileReader();
      reader.readAsText(file, "UTF-8");
      reader.onload = function(ev){
        var t =  ev.target.result;
        var obj = window.dbf.setFile(t);
        setTimeout(function(){
          self.props.parent.forceRender();
          self.toolbarname.handleChange(obj.info.name);
          self.setState({
            isloading: false
          })
        }, 500);
      }
    }
  }

  handleIntentToClick(e){

  }

  intentLangChange(e){
    console.log('Intent handleClick');
    this.setState({
      openPopper: !this.state.openPopper,
      anchor: e.currentTarget
    })
  }

  setLang(code){
    this.setState({
      lang: code,
      openPopper: false
    })
    store.set('sinapsis_lang', code);
    var ev = new Event('sinapsis_lang_change');
    window.dispatchEvent(ev);

    var ev = new Event('ss_lazy_indicator');
    window.dispatchEvent(ev);
  }

  goBack(){
    this.props.parent.goBack();
  }

  forceName(){
    this.toolbarname.forceName();
  }

  render(){
    var self = this;
    return(
      <div className="ss_db_toolbar">
        <div className="ss_db_toolbar_info">
          <div className="ss_db_toolbar_info_td">
            <DbBuilderToolbarName parent={this} ref={(ref) => this.toolbarname = ref}/>
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
            <Fab size="small" variant="extended" color="secondary" onClick={() => window.dbf.createProjectFile()}>
              <Icon>get_app</Icon>
              Guardar
            </Fab>
            <div className="ss_db_ctas_custom ss_db_ctas_custom_lang">
              <div onClick={(e) => this.intentLangChange(e)}>
                <img src={getFlag()} />
              <Popper id="ss_popper_lang" open={this.state.openPopper} anchorEl={this.state.anchor}>
                  <ClickAwayListener onClickAway={() => this.setState({openPopper: false})}>
                  <div className="ss_popper_container">
                    {
                      countries.map(function(m){
                        var cs = ["ss_popper_container_button"];
                        if(self.state.lang == m.code){
                          cs.push('ss_btn_active');
                        }
                        return(
                          <div className={cs.join(' ')} onClick={() => self.setLang(m.code)}>
                            <img src={m.img} />
                            <div>{m.name}</div>
                          </div>
                        )
                      })
                    }
                  </div>
                </ClickAwayListener>
              </Popper>
              </div>
            </div>
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

  componentDidMount(){
  }

  forceName(){
    this.handleChange(window.dbf.obj.info.name);
  }

  handleChange(e){
    var v = e;
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

  goBack(){
    this.props.parent.goBack();
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
        <div className="ss_db_builder_project_name_goback" onClick={() => this.goBack()}>
          <Icon>keyboard_backspace</Icon>
        </div>
        <div className="ss_db_builder_project_name_placeholder">
          Proyecto
        </div>
        <input
          type="text"
          placeholder="Nombre del proyecto"
          onChange={(e) => this.handleChange(e.target.value)}
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
