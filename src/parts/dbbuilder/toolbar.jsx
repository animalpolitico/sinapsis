import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import Icon from '@material-ui/core/Icon';
import moment from 'moment';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import 'moment/locale/es';
import { countries, getFlag } from "../../vars/countriesDict";
import buildLink from "../../funcs/buildlink";
import Popper from '@material-ui/core/Popper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
var store = require('store')
var mobile = require('is-mobile');
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
    this.setState({
      openPopper: !this.state.openPopper,
      anchor: e.currentTarget
    })
  }

  setLang(code){
    window.dispatchEvent(new Event('sinapsisStartLoad'));
    if(code == "BRA"){
      window.dispatchEvent(new CustomEvent('db_show_alert', {detail: {title: 'Aviso', content: 'Até o momento, somente alguns termos oficiais estão traduzidos. Esperamos disponibilizar a ferramenta completa em português em breve.'}}))
    }
    var self = this;
    self.setState({
      lang: code,
      openPopper: false
    })
    setTimeout(function(){

      store.set('sinapsis_lang', code);
      var ev = new Event('sinapsis_lang_change');
      window.dispatchEvent(ev);
      var ev = new Event('ss_lazy_indicator');
      window.dispatchEvent(ev);
    }, 300)


  }

  goBack(){
    this.props.parent.goBack();
  }

  contactAction(url){
    window.open(url);
    this.setState({
      openContact: false
    })
  }

  forceName(){
    this.toolbarname.forceName();
  }

  saveProject(){
    if(this.props.parent.viz.nodes){
      this.props.parent.viz.nodes.getScreenshot(function(zip){
        window.dbf.createProjectFile(zip);
      });
    }

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
            !mobile() ?
            <div className="ss_db_toolbar_info_td" id="ss_db_toolbar_demo" onClick={() => this.props.parent.goToDemo()}>
              Guía
            </div>
            : null
          }

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
            <div class="ss_db_ctas_td" onClick={() => this.saveProject()}>
              <div id="ss_db_save">
                <Icon>get_app</Icon>
                <div>Guardar archivo</div>
              </div>
            </div>
            <div className="ss_db_ctas_custom ss_db_ctas_custom_lang" >
              <div onClick={(e) => this.intentLangChange(e)}>
                <img src={getFlag()} id="db_ij_country"/>
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
            <div className="ss_db_ctas_custom ss_db_ctas_custom_send" onClick={() => this.setState({openContact: true})}>
              <Icon>help_outline</Icon>
            </div>
            <div className="ss_db_ctas_custom ss_db_ctas_custom_send">
              <a href="https://github.com/animalpolitico/sinapsis" target="_blank">
                <img src={require('../../static/github.svg')} />
              </a>
            </div>
            <Dialog open={this.state.openContact} onClose={() => this.setState({openContact: false})}>
              <DialogTitle id="form-dialog-title">¿Necesitas ayuda?</DialogTitle>
              <DialogContent style={{width: 400}}>
                ¿Necesitas precargar una base de datos?, ¿tienes alguna duda, sugerencia o comentario?
                <br /><br/>
                - <a style={{textDecoration: 'underline'}} href="mailto:sinapsis@animalpolitico.com">sinapsis@animalpolitico.com</a>
                <br/>
                - <a style={{textDecoration: 'underline'}} target="_blank" href="https://t.me/sinapsislat">Grupo de Telegram</a>
              <br/>
              <br/>
              <div style={{opacity: 0.8, lineHeight: 1.1, fontSize: '0.7rem'}}>*Todos los tipos de cambio que utilizamos se actualizan cada 24 horas, utilizando <a style={{textDecoration: 'underline'}} href="https://fixer.io/" target="_blank">fixer.io</a></div>
              </DialogContent>
              <DialogActions>
                <Button color="secondary" onClick={() => this.setState({openContact: false})}>
                  Cerrar
                </Button>
                <Button color="secondary" onClick={() => this.contactAction('https://t.me/sinapsislat')}>
                  Ir a Telegram
                </Button>
                <Button color="secondary" onClick={() => this.contactAction('mailto:sinapsis@animalpolitico.com')}>
                  Escribir correo
                </Button>
              </DialogActions>
            </Dialog>
          </div>
        </div>

      </div>
    )
  }
}

class DbBuilderToolbarName extends React.Component{
  state = {
    focused: false,
    modified: false,
    error: false,
    showEdit: false,
    project_name: 'Proyecto increíble'
  }

  componentDidMount(){
    var self = this;
    window.addEventListener("keypress", function(e){
      if(e.keyCode == 13 && self.state.project_name && self.state.showEdit){
        self.changeProjectName();
      }
    }, true);
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

  handleDialogClose(){
    this.setState({
      showEdit: false
    })
  }

  changeProjectName(){
    window.dbf.setName(this.state.project_name);
    this.handleDialogClose();
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
      <>
      <div className={cs.join(' ')} >
        <div className="ss_db_builder_project_name_goback" onClick={() => window.open("https://animalpolitico.com")}>
          <img src={require('../../static/api.png')} />
        </div>
        <div className="ss_db_builder_project_name_goback" onClick={() => this.goBack()}>
          <img src={require('../../static/imagotipo.png')} />
        </div>
        <div className="ss_db_builder_project_name_placeholder" >
          Proyecto
        </div>
        <div className="ss_db_builder_project_name_inputlike" id="db_ij_projectname">
          {this.state.project_name}
          <div className="ss_db_builder_project_name_icon" onClick={() => this.setState({showEdit: true})}>
            <Icon>edit</Icon>
          </div>
        </div>
      </div>
      <Dialog open={this.state.showEdit} onClose={() => this.handleDialogClose()}>
        <DialogTitle id="form-dialog-title">Nombre del proyecto</DialogTitle>
          <DialogContent style={{width: 400}}>
          <TextField
            autoFocus
            label="Nombre del proyecto"
            fullWidth
            value={this.state.project_name}
            color="secondary"
            onChange={(e) => this.setState({project_name: e.target.value})}
          />
        </DialogContent>
        <DialogActions>
          <Button color="secondary" onClick={() => this.handleDialogClose()}>
            Cerrar
          </Button>
          <Button color="secondary" disabled={!this.state.project_name} onClick={() => this.changeProjectName()}>
            Guardar
          </Button>
        </DialogActions>
      </Dialog>
      </>
    )
  }
}
