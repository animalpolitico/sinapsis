import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import RadioGroup from '@material-ui/core/RadioGroup';
import FPSStats from "react-fps-stats";
import Radio from '@material-ui/core/Radio';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import moment from 'moment';
import 'moment/locale/es';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import CircularProgress from '@material-ui/core/CircularProgress';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import * as d3 from "d3";

/** Componentes **/
import DbFactory from '../funcs/dbClass';
import DbBuilderToolbar from '../parts/dbbuilder/toolbar';
import DbEditEmpresa from '../parts/dbbuilder/edit';
import DbViz from '../parts/dbviz/dbviz';
import DbMobileAlert from '../parts/dbbuilder/mobilealert';

import oldToNew from '../funcs/oldSinapsisToNew';
import { predbs } from '../vars/rel';
import Flag from "react-flags";
import { countries, getLang, _t, getCurrencies } from "../vars/countriesDict";
import { Resizable, ResizableBox } from 'react-resizable';

import buildLink from "../funcs/buildlink";
import {Helmet} from "react-helmet";

var dbf = new DbFactory();
var dbf_obj = dbf.set();
window.dbf = dbf;

var store = require('store')
var onDrawerToggle = new Event('sinapsisDrawerToggle');
var onBigChanges = new Event('sinapsisBigModified');
var startLoad = new Event('sinapsisStartLoad');
var endLoad = new Event('sinapsisEndLoad');
var slugify = require('slugify');

var mobile = require('is-mobile');




export default class DbBuilderPage extends React.Component{
  state = {
    control: '',
    showcontrol: true,
    recoveroptions: [],
    showrecoveroptions: false,
    isautosaving: false,
    uid: null,
    hasloaded: false,
    showfps: false,
    fromFile: false,
    loadedDbs: []
  }

  componentDidMount(){
    var self = this;
    this.startAutosave();
    this.set();
    window.scroll(0,0);
    /* Previene cerrar el navegador */
    window.addEventListener("beforeunload", (ev) => {
        ev.preventDefault();
        return ev.returnValue = '¿Deseas cerrar la pestaña?';
    });

    window.addEventListener('keypress', function(e){
      var w = e.which;
      // if(w == 36){
      //   self.setState({
      //     showfps: !self.state.showfps
      //   })
      // }
    })

    // window.addEventListener('mousewheel', function(e){
    //   if(e.ctrlKey){
    //     console.log('Prevent');
    //     e.preventDefault();
    //     return false;
    //   }
    // },{passive: false})
    //
    // window.addEventListener('DOMMouseScroll', function(e){
    //   if(e.ctrlKey){
    //     e.preventDefault();
    //     return;
    //   }
    // })

  }

  set(){
    var self = this;
    var uid = this.props.match.params.dbid;
    if(uid){
      this.setState({
        uid: uid,
        showcontrol: false,
        hasloaded: true
      })
      document.body.classList.add('ss_platform');
      var obj = store.get('sinapsis_'+uid);
      if(obj && !this.state.fromFile){
        var obj_j = JSON.parse(obj);
        if(!obj_j.recovered){
          obj_j.recovered = 0;
        }
        obj_j.recovered = obj_j.recovered + 1;
        obj_j.recoveredAt = moment.now();
        window.dbf.obj = obj_j;
        this.setState({
          showcontrol: false,
          showrecoveroptions: false
        })
      }else{
        if(uid !== 'estafa-maestra'){
          var url = buildLink('/construir/'+uid);
          this.props.history.push(url);
        }else{
          var hasE = window.dbf.obj.dbs && Object.values(window.dbf.obj.dbs).length > 0;
          if(!hasE){
            self.loadEstafa(true);
          }
        }
      }
      document.body.classList.remove('ss_showing_drawer');

    }else{
      this.setState({
        uid: this.props.match.params.dbid,
        showcontrol: true
      })
      document.body.classList.remove('ss_platform');
    }
  }

  componentDidUpdate(){
    if(this.props.match.params.dbid !== this.state.uid){
      var s = true;
      if(!this.props.match.params.dbid && this.state.hasloaded){
        s = window.confirm('¿Deseas regresar? Guarda tu archivo para no perder los cambios hechos.');
      }
      if(s){
        this.set();
      }
    }
  }


  componentWillUnmount(){
    // window.removeEventListener('close', this.preventTabClosing);
    clearInterval(this.autosaveint);
  }

  preventTabClosing(){
    return false;
  }

  startAutosave(){
    var self = this;
    var maxkbsize = 1000;
    window.addEventListener('sinapsisModified', function(){
      var isok = !self.state.showcontrol && window.dbf.obj.allowAutoSave;
      if(isok){
        self.setState({
          isautosaving: true
        })
        clearTimeout(self.autosavingT);
        var f = dbf.getAutoSaveFile();
        var s = f.length;
        var kbsize = s * 0.000125;
        if(kbsize < maxkbsize){
          var ky = 'sinapsis_' + dbf.obj.uid;
          try{
            store.set(ky, f);
            self.autosavingT = setTimeout(function(){
              self.setState({
                isautosaving: false
              })
            }, 1000)
          }catch{
            console.warn('Storage size exceeded');
          }
        }
      }
    });
  }

  async loadEstafa(f){
    window.dispatchEvent(startLoad);
    var e = require('../static/csvs/estafa-maestra.csv');
    var c = await d3.csv(e);
    var n = new oldToNew('Estafa Maestra', c, true);
    var j = n.save();

    window.dbf.obj.info.name = 'Estafa Maestra';
    window.dbf.obj.info.slug = 'estafa-maestra';
    window.dbf.obj.dbs = {};
    window.dbf.obj.dbs[j.id] = j;
    window.dbf.obj.dbs[j.id].country = "MEX";
    window.dbf.obj.hasEstafa = true;

    this.props.history.push(buildLink('/construir/estafa-maestra'));

    this.setState({
      showcontrol: false,
      hasloaded: true,
    })

    if(f){
      this.sidebar.fetchDbs();
      this.toolbar.forceName();
      this.viz.nodes.set();
    }

  }

  startNewProject(){
    var obj = window.dbf.set();
    var url = buildLink('/construir/' + obj.uid);
    this.props.history.push(url);
    this.setState({
      control: 'newproject',
      showcontrol: false,
      hasloaded: true
    })
  }

  loadFile(e){
    window.dispatchEvent(startLoad);
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
        var url = buildLink('/construir/' + obj.uid);
        self.props.history.push(url);
        self.setState({
          control: 'fromfile',
          showcontrol: false,
          hasloaded: true,
          fromFile: true
        })
        self.sidebar.fetchDbs();
        window.dispatchEvent(onBigChanges);
      }
    }

  }

  goBack(){
    this.props.history.push(buildLink('/construir'));
  }

  intentToRecover(){
    var possibleDbs = [];
    store.each(function(value, key){
      if(key.indexOf('sinapsis_') > -1){
        var o = JSON.parse(value);
        possibleDbs.push(o);
      }
    })
    this.setState({
      showrecoveroptions: true,
      recoveroptions: possibleDbs
    })
  }

  selectRecoveredProject(){
    var uid = this.state.selectedToRecover;
    if(!uid){
      return;
    }
    var obj = store.get('sinapsis_'+uid);
    var obj_j = JSON.parse(obj);
    if(!obj_j.recovered){
      obj_j.recovered = 0;
    }
    obj_j.recovered = obj_j.recovered + 1;
    obj_j.recoveredAt = moment.now();
    window.dbf.obj = obj_j;

    this.props.history.push('/construir/' + obj_j.uid);
    this.setState({
      showcontrol: false,
      showrecoveroptions: false
    })
  }

  render(){
    var self = this;
    var title = "Construir";
    if(!this.state.showcontrol){
      var title = "Proyecto: " + window.dbf.obj.info.name;
    }
    var cs = ["ss_page"];
    if(mobile()){
      cs.push('ss_mobile');
    }

    return(
      <div className={cs.join(' ')}>
        <Helmet>
          <title>{title + ' >> Sinapsis'}</title>
        </Helmet>
        <DbLoader />
          {
            mobile() ?
            <DbMobileAlert />
            : null
          }
        {
          this.state.showfps ?
          <div className="ss_page_fps">
            <FPSStats />
          </div>
          : null
        }

        {
          this.state.showcontrol ?
            <DbInicio parent={this}/>
          :
            <div>

              <DbBuilderToolbar parent={this} ref={(ref) => this.toolbar = ref}/>
              <div className="ss_dbbuilder">
                <DbBuilderSidebar ref={(ref) => this.sidebar = ref} parent={this}/>
                <DbViz ref={(ref) => this.viz = ref}/>
              </div>
            </div>
        }
      </div>
    )
  }
}

class DbInicio extends React.Component{

  state = {
    lang: 'MEX'
  }

  componentDidMount(){
    this.setLang();
  }

  setLang(so){
    var def = "MEX";
    if(!so){
      var s = store.get('sinapsis_lang');
    }else{
      s = so;
    }
    var l = s ? s : def;
    store.set('sinapsis_lang', l);
    this.setState({
      lang: l
    })
  }



  render(){
    var self = this;
    return (
      <div>
        <div className="ss_dbbuilder_front">
          <div className="ss_db_choose">
            <div className="ss_db_choose_decorator">
              <div className="ss_db_choose_decorator_logo">
                <Link to={buildLink('/')}>
                  <img src={require('../static/logo.png')} />
                </Link>
              </div>
              <div className="ss_db_choose_decorator_slogan">
                <span></span> Herramienta para descubrir<br /><strong>conexiones entre empresas</strong>
              </div>
            </div>
            <div className="ss_db_choose_lang">
              <div className="ss_db_choose_lang_label">Selecciona tu país</div>
              <div className="ss_db_choose_lang_select">
                <div className="ss_db_choose_lang_select_arr"><Icon>keyboard_arrow_down</Icon></div>
                <select onChange={(e) => self.setLang(e.target.value)}>
                  {
                    countries.map(function(c){
                      return(
                        <option value={c.code} selected={self.state.lang == c.code}>{c.name}</option>
                      )
                    })
                  }
                </select>
              </div>
            </div>

            <div className="ss_db_choose_td ss_db_estafa">
              <div
                onClick={() => this.props.parent.loadEstafa()}
                className="ss_db_choose_td_c"
                style={{backgroundImage: "url('"+  require('../static/ty-estafa.png') +"')"}}
              >
                <div className="ss_db_choose_td_c_d">
                  <div className="ss_db_choose_td_c_l"></div>
                  <div className="ss_db_choose_td_c_c"></div>
                </div>
                <div className="ss_db_choose_td_label">
                  Explorar<br/>
                  la estafa <br />
                  maestra
                </div>
                <Icon>visibility</Icon>
              </div>
            </div>
            <div className="ss_db_choose_td" onClick={() => this.props.parent.startNewProject()}>
              <div className="ss_db_choose_td_c"   style={{backgroundImage: "url('"+  require('../static/ty-new.png') +"')"}}>
                <div className="ss_db_choose_td_c_d">
                  <div className="ss_db_choose_td_c_l"></div>
                  <div className="ss_db_choose_td_c_c"></div>
                </div>
                <Icon>add</Icon>
                <div className="ss_db_choose_td_label">
                  Nuevo proyecto
                </div>
              </div>
            </div>
            <div className="ss_db_choose_td">
              <div className="ss_db_choose_td_c" style={{backgroundImage: "url('"+  require('../static/ty-cargar.png') +"')"}}>
                <div className="ss_db_choose_td_c_d">
                  <div className="ss_db_choose_td_c_l"></div>
                  <div className="ss_db_choose_td_c_c"></div>
                </div>
                <input
                  type="file"
                  accept=".sinapsis,.csv"
                  id="ss_file_input"
                  onChange={(e) => this.props.parent.loadFile(e)}
                />
                <div className="ss_db_choose_td_label">
                  Cargar proyecto anterior<br/><span>(solo archivos .sinapsis)</span>
                </div>
                <Icon>keyboard_capslock</Icon>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

class DbLoader extends React.Component{
  state = {
    loading: false,
    mins: false,
    i: null
  }

  componentDidMount(){
    var self = this;
    window.addEventListener('sinapsisStartLoad', function(e){
      document.body.style.cursor = "wait";
      self.setState({
        loading: true,
      })
    })



    window.addEventListener('sinapsisEndLoad', function(){
      document.body.style.cursor = "default";
      self.setState({
        loading: false,
      })
    })

  }

  setI(){
    var self = this;
    var i = setInterval(function(){
      console.log('i', self.state.ti + 1);
      self.setState({
        ti: self.state.ti + 1
      })
    }, 1000);
    self.setState({
      i: i
    })
  }

  render(){
    return(
      <>
      {
        this.state.loading ?
        <div id="ssdb_loader">
          <div id="ssdb_loader_c">
          </div>
        </div>
        : null
      }
      </>
    )
  }
}

class DbBuilderSidebar extends React.Component{
  state = {
    dbs: [],
    uid: '',
    db: null
  }
  componentDidMount(){
    var self = this;
    this.fetchDbs();
    this.refs = {};


    /** Escucha si se necesita abrir una empresa **/
    window.addEventListener('sinapsisOpenEmpresa', function(e){
      var data = e.detail;
      var euid = data.euid;
      var dbid = data.dbid;
      try{
        self.selectDb(dbid);
        self.refs[dbid].handleClick();
      }catch(ex){

      }

      setTimeout(function(){
        try{
          var e = window.dbf.getEmpresa(dbid, euid);
          self.dbview.empresalist.selectEmpresa(e);
          var ev = new Event('sinapsisEndLoad');
          window.dispatchEvent(ev);
        }catch{

        }

      }, 500);
    })

  }

  componentDidUpdate(p, s){
    var dbf = window.dbf;
    var uid = dbf.obj.uid;

    if(uid !== s.uid){
      this.fetchDbs();
    }
  }

  fetchDbs(){
    var self = this;
    var dbf = window.dbf;
    var dbs = dbf.getDbs();
    this.setState({
      uid: dbf.obj.uid,
      dbs: dbs,
      db: false
    })
    var dbsa = Object.values(dbs);
    if(dbsa.length){
      var ldb = dbsa[dbsa.length - 1];
      setTimeout(function(){
        try{
          self.refs[ldb.id].handleClick();
        }catch(ex){

        }
      }, 150);
    }

  }

  addDB(){
    var self = this;
    var dbf = window.dbf;
    var dbId = dbf.addDb();
    this.fetchDbs();
  }

  selectDb(uid){
    var dbf = window.dbf;
    var db = dbf.getDb(uid);
    window.dbf.obj.selectedDb = uid;
    this.setState({
      db: db
    })
  }

  collapseSidebar(){
    document.body.classList.toggle('ss_show_sidebar');
    window.dispatchEvent(onDrawerToggle);
  }

  render(){
    var self = this;
    var navCs = ['ss_dbbuilder_sidebar_dbs_nav'];
    var dbsA = Object.values(this.state.dbs);
    if(dbsA.length > 1){
      navCs.push('ss_overflow');
    }
    return(
      <ResizableBox
        className="ss_dbbuilder_sidebar"
        width={window.innerWidth * 0.3}
        axis="x"

      >
        <div className="ss_dbbuilder_sidebar_collapse" onClick={() => this.collapseSidebar()}>
          <div className="ss_dbbuilder_sidebar_collapse_icon">
            <Icon>chevron_left</Icon>
          </div>
        </div>

        <div className="ss_dbbuilder_sidebar_dbs">
            <div className={navCs.join(' ')}>
              {
                dbsA.map(function(db, k){
                  return <DbDbsNavigationTd ref={(ref) => self.refs[db.id] = ref} parent={self} index={k} db={db} />
                })
              }
              <DbDbsNavigationNewDb parent={this}/>
            </div>
            <div className="ss_dbbuilder_sidebar_dbs_view">
              {
                this.state.db ?
                <DbView ref={(ref) => this.dbview = ref} db={this.state.db} navRef={this.refs[this.state.db.id]} parent={self}/>
                : null
              }

              {
                dbsA.length == 0 ?
                <div className="ss_dbbuilder_empty_tip">
                  <div className="ss_dbbuilder_empty_tip_icon">
                    <Icon>help_outline</Icon>
                  </div>
                  <div className="ss_dbbuilder_empty_tip_text">
                    <p>¿No sabes por dónde comenzar?</p>
                    <div
                      className="ss_dbbuilder_empty_tip_text_btn"
                      onClick={() => this.props.parent.loadEstafa(true)}
                    >
                      Explora la Estafa Maestra
                    </div>
                  </div>
                </div>
                : null
              }

            </div>
        </div>
      </ResizableBox>
    )
  }
}

class DbView extends React.Component{
  state = {
    showdialog: false,
    showEmpresaAlert: false,
    dialogValue: '',
    showDeleteDialog: false,
    view: true,
    borrar: '',
    empresaType: "empresa"
  }
  componentDidMount(){
    this.set();
    window.addEventListener('sinapsis_lang_change', () => this.set())
  }

  componentDidUpdate(p, n){
    if(p.db.id !== this.props.db.id){
      this.setState({
        view: !this.props.db.hide
      })
      this.set();
    }
  }

  set(){
    var db = this.props.db;
    this.setState({
      db: db,
      nameError: !db.name
    })
  }

  handleNameChange(e){
    var v = e.target.value;
    var db = this.state.db;
    var error = v ? false : true;
    db.name = v;
    this.props.navRef.setState({
      name: v,
      nameError: error
    })
    this.setState({
      db: db,
      nameError: error
    })
    window.dbf.editDb(db.id, db);
  }

  showAddDialog(){
    var self = this;
    this.setState({
      showdialog: true
    })
    window.addEventListener("keypress", function _keyupListener(e){
      if(e.keyCode == 13 && self.state.dialogValue && self.state.showdialog){
        self.addEmpresa();
      }
    }, true);
  }


  handleDialogClose(){
    this.setState({
      showdialog: false,
      dialogValue: ''
    })
  }

  addEmpresa(){
    var v = this.state.dialogValue;
    /** Revisa si la empresa existe en la base de datos **/
    var exists = window.dbf.empresaExists(v, this.state.db)

    this.handleDialogClose();
    if(exists){
      this.setState({
        showEmpresaAlert: true,
        duplicateEmpresa: exists
      })
    }else{
      var ispersona = this.state.empresaType == "persona";

      var data = window.dbf.addEmpresaToDb(this.state.db, v, ispersona);
      this.empresalist.selectEmpresa(data[1])
      this.setState({
        db: data[0]
      })
    }


  }

  intentDelete(){
    this.setState({
      showDeleteDialog: true
    })
  }

  delete(){
    console.log('deleting');
    window.dispatchEvent(new Event('sinapsisStartLoad'));
    var self = this;
    setTimeout(function(){
      window.dbf.deleteDb(this.state.db);
      self.props.parent.fetchDbs();
      window.dispatchEvent(onBigChanges);
      self.setState({
        showDeleteDialog: false
      })
      self.empresalist.closeDrawer();
    }, 500)


  }

  toggleView(){
    var n = !this.state.view;
    this.setState({
      view: n
    })

    this.props.navRef.setState({
      showing: n
    })

    window.dbf.toggleDb(this.state.db.id, n);
  }

  openDuplicate(){
    var e = this.state.duplicateEmpresa;
    var em = window.dbf.getEmpresa(this.state.db.id, e);

    this.empresalist.selectEmpresa(em, true);
    this.setState({
      showEmpresaAlert: false
    })
  }

  changeCurrency(){
    var c = this.state.toChangeCurrency;
    window.dbf.obj.dbs[this.props.db.id].currency = c;
    this.setState({
      openCurrencyChange: false
    })
  }

  render(){
    var dbf = window.dbf;
    var nameCs = ['ss_db_view_name'];
    if(this.state.nameError){
      nameCs.push('ss_error');
    }
    var canAdd = this.state.dialogValue.length > 0;

    var block = this.props.db.blockEdit;

    var currencyObj = dbf.getDbCurrencyObj(this.props.db.id);


    return(
      <div className="ss_db_view">
        {
          this.state.db ?
          <div>
            <div className={nameCs.join(' ')}>
              <input
                type="text"
                value={this.state.db.name}
                onChange={(e) => this.handleNameChange(e)}
              />
              <IconButton size="small" onClick={() => this.intentDelete()}>
                <Icon>delete</Icon>
              </IconButton>
            </div>

            <Dialog open={this.state.showDeleteDialog} onClose={() => this.setState({ showDeleteDialog: false})}>
              <DialogTitle>¿Estás segurx?</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  Se borraran todos los datos que hayas insertado.<br/><br/>
                  Escribe la palabra "BORRAR" para continuar.
                </DialogContentText>
                <input type="text" autoFocus id="ss_borrar_input" onChange={(e) => this.setState({borrar: e.target.value})}/>
              </DialogContent>
              <DialogActions>
                <Button color="secondary" onClick={() => this.setState({ showDeleteDialog: false})}>
                  Cancelar
                </Button>
                <Button disabled={slugify(this.state.borrar, {lower: true}) !== "borrar"} color="secondary" onClick={() => this.delete()}>
                  Borrar definitivamente
                </Button>
              </DialogActions>
            </Dialog>

            <Dialog open={this.state.showEmpresaAlert} onClose={() => this.setState({ showDeleteDialog: false})}>
              <DialogTitle>Empresa duplicada</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  Esta empresa ya existe en esta base de datos.
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button color="secondary" onClick={() => this.setState({ showEmpresaAlert: false})}>
                  Cancelar
                </Button>
                <Button color="secondary" onClick={() => this.openDuplicate()}>
                  Abrir empresa
                </Button>
              </DialogActions>
            </Dialog>

            <div className="ss_db_view_empresas">
              <div className="ss_db_view_empresas_title">
                <span>Empresas en {this.props.db.name}</span>
                {
                  !block ?
                  <div className="ss_db_view_empresas_title_btn" style={{cursor: 'pointer'}} onClick={() => this.showAddDialog()}>Agregar</div>
                  : null
                }
                <div className="ss_db_view_empresas_currency">
                  Montos expresados en <strong>{currencyObj.name + ' ('+currencyObj.symbol+')'}</strong>
                  {
                    !block ?
                    <a href="javascript:void(0)" onClick={() => this.setState({openCurrencyChange: true})}>Editar</a>
                    : null
                  }
                </div>
              </div>

              <Dialog open={this.state.openCurrencyChange} onClose={() => this.setState({openCurrencyChange: false})}>
                <DialogTitle id="form-dialog-title">Moneda</DialogTitle>
                  <DialogContent style={{width: 400}}>
                    <div className="db_empresa_container_group_form">
                      <div className="ss_db_input_select">
                        <select onChange={(e) => this.setState({toChangeCurrency: e.target.value})}>
                          {
                            getCurrencies().map(function(c){
                              return (
                                <option selected={c.currency == currencyObj.currency} value={c.currency}>{c.name} ({c.symbol} {c.currency})</option>
                              )
                            })
                          }
                        </select>
                      </div>
                    </div>
                  </DialogContent>
                <DialogActions>
                  <Button color="secondary" onClick={() => this.setState({openCurrencyChange: false})}>
                    Cerrar
                  </Button>
                  <Button color="secondary"  onClick={() => this.changeCurrency()}>
                    Editar
                  </Button>
                </DialogActions>
              </Dialog>


              {
                block ?
                <div className="ss_db_view_empresas_notice">
                  <Icon>info</Icon>
                  <div>Esta base de datos es solo de lectura, no podrás editar los campos ni agregar nuevas empresas.</div>
                </div>
                : null
              }
              {
                this.props.db.country && this.props.db.country !== getLang() ?
                <div className="ss_db_view_empresas_notice">
                  <Icon>info</Icon>
                  <div>Esta base de datos no pertenece al país que seleccionaste, algunos términos como <strong>{_t('RFC')}</strong> no son exactos.</div>
                </div>
                : null
              }

              <DbEmpresasList blockEdit={block} ref={(ref) => this.empresalist = ref} parent={this} db={this.state.db} />
            </div>

          </div>
          : null
        }
        <Dialog open={this.state.showdialog} onClose={() => this.handleDialogClose()}>
          <DialogTitle id="form-dialog-title">Empresa nueva</DialogTitle>
            <DialogContent style={{width: 400}}>
            <TextField
              autoFocus
              label="Razón social de la empresa"
              fullWidth
              helperText="Escribe el nombre de la empresa, más adelante podrás añadir el resto de información."
              color="secondary"
              onChange={(e) => this.setState({dialogValue: e.target.value})}
            />
            <div className="ss_db_input_select" style={{paddingLeft: 0, paddingRight: 0}}>
              <div className="db_empresa_container_group_radios_title">
                ¿Es empresa o prestador de servicios?
              </div>
              <div className="ss_db_input_select_radios">
                <div className="ss_db_input_select_radios_radio">
                  <input id="ssetype_empresa" checked={this.state.empresaType == "empresa"} type="radio" name="ssetype" onChange={() => this.setState({empresaType: "empresa", res: true})} />
                  <label for="ssetype_empresa">Empresa</label>
                </div>
                <div className="ss_db_input_select_radios_radio">
                  <input id="ssetype_persona" checked={this.state.empresaType == "persona"} type="radio" name="ssetype" onChange={() => this.setState({empresaType: "persona", res: true})} />
                  <label for="ssetype_persona">Prestador de servicios</label>
                </div>
              </div>
            </div>
          </DialogContent>
          <DialogActions>
            <Button color="secondary" onClick={() => this.handleDialogClose()}>
              Cerrar
            </Button>
            <Button color="secondary" disabled={!canAdd} onClick={() => this.addEmpresa()}>
              Agregar
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}

class DbEmpresasList extends React.Component{
  state = {
    showedit: false,
    empresa: {}
  }

  componentDidUpdate(p, s){
    if(p.db.id !== this.props.db.id){
      this.setState({
        forcerender: 2,
        showedit: false,
        empresa: {}
      })
    }
  }

  componentDidMount(){
    var self = this;
    window.addEventListener('keydown', function(e){
      var w = e.which;
      var isnotfocusing = !document.body.classList.contains('ss_focusing_input') && !document.body.classList.contains('ss_showing_search');
      if((w == 40 || w == 38) && self.state.showedit && isnotfocusing){
        var empresas = Object.keys(self.props.db.empresas);
        var maxlength = empresas.length - 1;
        var i = w == 40 ? 1 : -1;
        var euid = self.state.empresa.uid;
        try{
          var c = empresas.indexOf(euid);
          var nc = c + i;
              nc = Math.max(0, nc);
              nc = Math.min(nc, maxlength);
          var neuid = empresas[nc];

          var em = self.props.db.empresas[neuid];
          self.selectEmpresa(em, true);
        }catch(ex){

        }
      }
      if(self.state.showedit && w == 27){
        self.closeDrawer();
      }
    })

  }

  selectEmpresa(em, isolateNode){
    this.setState({
      showedit: true,
      empresa: em,
      blockEdit: this.props.blockEdit
    })
    window.dispatchEvent(new Event('ss_lazy_indicator'));
    window.dispatchEvent(onDrawerToggle);
    document.body.classList.add('ss_showing_drawer');
    window.dbf.obj.selectedEmpresa = em.uid;
    if(isolateNode){
      var dbid = this.props.db.id;
      var name = em.name;
      var slug = slugify(name, {lower: true});
      var sn = false;
      var pn = d3.selectAll('.node')
                  .filter(d => d.type == "empresa" && d.fields[0].fromdb == dbid)
                  .filter(function(d){
                    var s = slugify(d.name, {lower: true})
                    return s == slug;
                  })
                  .each(function(d){
                    sn = d.id;
                  })
      if(sn){
        var ev = new CustomEvent('ss_isolate_node', {'detail': sn});
        window.dispatchEvent(ev);
      }
    }

    /** Scroll de contenedor **/
    try {
      var row_id = 'e_'+em.uid;
      var _em = document.getElementById(row_id);
      var t = _em.offsetTop;
      var lc = this.listContainer;
      var lch = lc.offsetHeight;
      var lcs = lc.scrollTop;
      lc.scrollTop = t - 200;
    }catch(ex){

    }


  }

  closeDrawer(){
    this.setState({
      showedit: false,
      empresa: {}
    })
    document.body.classList.remove('ss_showing_drawer');
    window.dispatchEvent(onDrawerToggle);
    window.dbf.obj.selectedEmpresa = '';
  }

  deleteEmpresa(uid){
    window.dbf.deleteEmpresa(this.props.db, uid);
    this.closeDrawer();
  }

  render(){
    var self = this;
    var db = this.props.db;
    var em = db.empresas;
    if(em){
      var hasEmpresas = Object.values(em).length > 0;
    }else{
      var hasEmpresas = false;
    }
    return(
      <div className="ss_db_ve_c" ref={(ref) => this.listContainer = ref}>
        {
          hasEmpresas ?
          <div className="ss_db_ve_c_empresas_list">
            {
              Object.values(em).map(function(empresa, k){
                return(
                <DbEmpresa
                    empresa={empresa}
                    db={db}
                    blockEdit={self.props.blockEdit}
                    key={k}
                    index={k}
                    parent={self}
                    active={self.state.empresa.uid == empresa.uid}
                />)
              })
            }
          </div>
          :
          <div className="ss_db_ve_c_nocontent" onClick={() => this.props.parent.showAddDialog()}>
            <div className="ss_db_ve_c_nocontent_des">
              <p>Sin empresas</p>
            </div>
          </div>
        }
        {
          this.state.showedit ?
          <div className="db_empresa_edit">
            <DbEditEmpresa db={this.props.db} blockEdit={this.state.blockEdit} empresa={this.state.empresa} parent={this} />
          </div>
          : null
        }
      </div>
    )
  }
}

class DbEmpresa extends React.Component{
  state = {
    showedit: false
  }

  componentDidUpdate(){
  }

  handleClick(){
    window.scroll(0, 0);
    this.props.parent.selectEmpresa(this.props.empresa, true);
  }

  render(){
    var e = this.props.empresa;
    var cs = ['db_empresa'];
    if(!e.fields){
      cs.push('ss_new');
    }

    if(this.props.active){
      cs.push('ss_active');
    }

    var fieldsSize = 1;
    if(e.fields){
      fieldsSize += e.fields.length;
    }
    return(
      <div className={cs.join(' ')} data-slug={e.slug} id={"e_" + e.uid}>
        <div className="db_empresa_container" onClick={() => this.handleClick()}>
          <div className="db_empresa_container_name">
            <small>{this.props.index + 1 +'. '}</small> {e.name}
          </div>
          <div className="db_empresa_container_info">

          </div>
        </div>

      </div>
    )
  }
}

class DbDbsNavigationNewDb extends React.Component{
  state = {
    openPopper: false,
    anchor: null,
    openModal: false,
    selectedDb: null,
    hasOpened: false,
    loadedDbs: [],
  }

  componentDidMount(){
    var self = this;
    window.addEventListener('ss_new_db', function(){
      if(!self.state.hasOpened){
        self.newDB();
        self.setState({
          hasOpened: true
        })
      }
    });
  }
  componentWillUnmount(){
    window.removeEventListener('ss_new_db', this.newDB);
  }

  togglePopper(e){
    /* OLD
    */
    this.setState({
      openPopper: !this.state.openPopper,
      anchor: e.currentTarget
    })
  }
  newDB(){
    this.setState({
      openPopper: false
    })
    this.props.parent.addDB();
    window.dispatchEvent(onBigChanges);
  }

  selectDB(){
    this.setState({
      openPopper: false,
      openModal: true
    })
  }

  closeModal(){
    this.setState({
      openModal: false,
      selectedDb: null
    })
  }

  selectPreDB(path, name, blockEdit, country){
    this.setState({
      selectedDb: path,
      selectedName: name,
      selectedCountry: country,
      blockEdit: blockEdit
    })
  }

  async addPreDb(){
    var self = this;
    var v = this.state.selectedDb;
    var n = this.state.selectedName;
    var block = this.state.blockEdit;
    window.dispatchEvent(new Event('sinapsis_close_edit'));
    window.dispatchEvent(startLoad);
    this.setState({
      openModal: false,
      selectedDb: null,
      selectedName: null,
      blockEdit: false,
      loadedDbs: [...this.state.loadedDbs, n]
    })
    var c = await d3.csv(v);
    setTimeout(function(){
      var ont = new oldToNew(n, c, true);
      var db = ont.save();
      if(!window.dbf.obj.dbs){
        window.dbf.obj.dbs = {};
      }
      window.dbf.obj.dbs[db.id] = db;
      window.dbf.obj.dbs[db.id].blockEdit = block;
      if(self.state.selectedCountry){
        window.dbf.obj.dbs[db.id].country = self.state.selectedCountry;
      }
      window.dbf.setModified();
      window.dispatchEvent(onBigChanges);
      self.props.parent.fetchDbs();
      window.dispatchEvent(endLoad);
    }, 500)



  }

  loadFile(e){
    var self = this;
    var em = document.getElementById('ss_file_input_from_db');
    var f = em.files;
    window.dispatchEvent(startLoad);
    this.setState({
      openModal: false,
      openPopper: false,
    })
    if(f[0]){
      var file = f[0];
      var name = file.name;
      var reader = new FileReader();
      reader.readAsText(file, "UTF-8");
      reader.onload = function(ev){
        var t =  ev.target.result;
        if(!(t.indexOf('EMPRESA:') === 1)){
          self.setState({
            showInvalid: true
          })
          window.dispatchEvent(endLoad);
          return;
        }

        var ont = new oldToNew(name, t);
        var db = ont.save();
        if(!window.dbf.obj.dbs){
          window.dbf.obj.dbs = {};
        }
        window.dbf.obj.dbs[db.id] = db;
        window.dbf.setModified();
        window.dispatchEvent(onBigChanges);
        self.props.parent.fetchDbs();
        window.dispatchEvent(endLoad);
      }
    }
  }

  loadSinapsis(e){
    var self = this;
    var em = document.getElementById('ss_file_input_from_sinapis');
    var f = em.files;
    window.dispatchEvent(startLoad);
    this.setState({
      openModal: false,
      openPopper: false,
    })
    if(f[0]){
      var file = f[0];
      var name = file.name;
      var reader = new FileReader();
      reader.readAsText(file, "UTF-8");
      reader.onload = function(ev){
        var t =  ev.target.result;
        if(!window.dbf.obj.dbs){
          window.dbf.obj.dbs = {};
        }
        var obj = JSON.parse(decodeURI(atob(t)));
        if(obj.dbs){
          var dbs = Object.values(obj.dbs);
          dbs.map(function(_d){
            window.dbf.obj.dbs[_d.id] = _d;
          })
          window.dbf.setModified();
          window.dispatchEvent(onBigChanges);
          self.props.parent.fetchDbs();
          window.dispatchEvent(endLoad);
        }


      }
    }
  }

  downloadCurrentPlantilla(type){
    var ex = type == "xls" ? "xlsx" : "csv";
    var url = process.env.PUBLIC_URL + '/plantilla_sinapsis.' + ex;
    window.open(url);
    this.setState({
      showInvalid: false
    })
  }

  render(){
    var self = this;
    var id = 'ss_db_popper';
    var cs = ["ss_dbbuilder_sidebar_dbs_nav_td", "ss_db_newdb"];
    if(this.state.openPopper){
      cs.push('ss_db_newdb_active');
    }
    return(
      <>
      <div aria-describedby={id} className={cs.join(' ')} onClick={(e) => this.togglePopper(e)}>
        <Icon>add</Icon><span className="ss_db_nav_s">Nueva base de datos</span>
      </div>
      <Popper id={id} open={this.state.openPopper} anchorEl={this.state.anchor}>
        <ClickAwayListener onClickAway={() => this.setState({openPopper: false})}>
        <div className="ss_popper_container">
          <div className="ss_popper_container_button" onClick={() => this.newDB()}>
            <div>Nueva</div>
          </div>
          <div className="ss_popper_container_button"  onClick={() => this.selectDB()}>
            <div>Seleccionar precargada</div>
          </div>
          <div className="ss_popper_container_button ss_poppper_container_button_input">
            <input
              type="file"
              accept=".csv"
              id="ss_file_input_from_db"
              onChange={(e) => this.loadFile(e)}
            />
            <div>Desde plantilla (.csv)</div>
          </div>
          <div className="ss_popper_container_button ss_poppper_container_button_input">
            <input
              type="file"
              accept=".sinapsis"
              id="ss_file_input_from_sinapis"
              onChange={(e) => this.loadSinapsis(e)}
            />
          <div>Desde archivo (.sinapsis)</div>
          </div>
        </div>
      </ClickAwayListener>
      </Popper>
      <Dialog
        open={this.state.showInvalid}
        onClose={() => this.setState({showInvalid: false})}
      >
        <DialogTitle>Error de formato</DialogTitle>
        <DialogContent>
          Este CSV no está en el formato adecuado, para que funcione necesitas trasladar tu base a la plantilla de Sinapsis
        </DialogContent>
        <DialogActions>
          <Button color="secondary" onClick={() => this.setState({showInvalid: false})}>
            Cancelar
          </Button>
          <Button color="secondary" onClick={() => this.downloadCurrentPlantilla('xls')}>
            Descargar en XLS
          </Button>
          <Button color="secondary" onClick={() => this.downloadCurrentPlantilla()}>
            Descargar en CSV
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={this.state.openModal}
        onClose={() => this.closeModal()}
        className="ss_modal_dbpre"
        >
        <DialogTitle>Selecciona una base de datos</DialogTitle>
        <DialogContent>
          <div className="ss_modal_dbpre_select">
          {
            predbs.map(function(predb){
              var ok = true;
              if(predb.onlyIn){
                var ok = predb.onlyIn.indexOf(getLang()) > -1;
              }
              var blockEstafa = false;
              if(predb.name == "Estafa Maestra" && window.dbf.obj.hasEstafa){
                blockEstafa = true;
              }

              if(ok){
                return <PreDb disabled={self.state.loadedDbs.indexOf(predb.name) > -1 || blockEstafa} parent={self} p={predb} />
              }else{
                return null;
              }
            })
          }
          </div>
        </DialogContent>
        <DialogActions>
          <Button color="secondary" onClick={() => this.closeModal()}>
            Cancelar
          </Button>
          <Button color="secondary" disabled={this.state.selectedDb ? false : true} onClick={() => this.addPreDb()}>
            Agregar al proyecto
          </Button>
        </DialogActions>
      </Dialog>
      </>
    )
  }
}

class PreDb extends React.Component{
  render(){
    var p = this.props.p;
    var m = p.size;

    var ts = '10 segundos';
    if(m > 2){
      if(m < 10){
        ts = '1 minuto';
      }else{
        var mm = Math.ceil(m / 10);
        ts = mm + ' minuto' + (mm > 1 ? 's' : '');
      }
    }

    var showAlert = m > 10;

    var block = p.blockEdit ? true : false;

    return(
      <div className="ss_predb_select" disabled={this.props.disabled}>
        <input type="radio" name="predb_input" onChange={(e) => this.props.parent.selectPreDB(p.file, p.name, block, p.country)}/>
        <div className="ss_predb_select_info">
        <div className="ss_predb_select_name">
          {p.name}
        </div>
        <div className="ss_predb_select_author">
          <a href={p.url} target="_blank">De <strong>{p.author}</strong></a>
        </div>

        <div className="ss_predb_select_country">
          <img src={p.flag} />
          <span>{p.countryLabel}</span>
        </div>

        <div className="ss_predb_select_author">
          Última actualización: <strong>{p.last}</strong>
        </div>

        <div className="ss_predb_select_maxtime">
          Tiempo aproximado de carga: <strong>{ts}</strong>
        </div>
        {
          showAlert ?
          <div className="ss_predb_select_alert">
            <Icon>warning</Icon>
            <label>Esta base de datos es muy grande, podrás notar algunos problemas de procesamiento.</label>
          </div>
          : null
        }
        </div>
      </div>
    )
  }
}

class DbDbsNavigationTd extends React.Component{
  state = {
    name: '',
    showing: true,
    isblurred: true,
    borrarText: '',
    showEdit: false,
    name: this.props.db.name
  }
  componentDidMount(){
    var self = this;
    if(this.props.index === 0){
      setTimeout(function(){
        self.handleClick();
      }, 100);
    }

    window.addEventListener("keypress", function(e){
      var w = e.which;
      if(e.keyCode == 13 && self.state.name && self.state.showEdit){
        self.changeDbName();
      }
    }, true);

  }

  handleClick(e){
    var all_actives = document.querySelectorAll('.ss_dbbuilder_sidebar_dbs_nav_td.ss_active');
    if(all_actives){
      for(var i = 0; i < all_actives.length; i++){
        var em = all_actives[i];
        em.classList.remove('ss_active');
      }
    }
    var db = this.props.db;
    var em_id = 'ss_nav_' + db.id;
    var em = document.getElementById(em_id);
    em.classList.add('ss_active');
    this.props.parent.selectDb(db.id);
  }

  handleIntentDelete(){
    this.setState({
      borrarText: '',
      showDelete: true
    })
  }

  handleDialogClose(){
    this.setState({
      showEdit: false
    })
  }
  handleDeleteClose(){
    this.setState({
      showDelete: false
    })
  }

  deleteDb(){
    window.dispatchEvent(startLoad);
    var self = this;

    setTimeout(function(){
      window.dbf.deleteDb(self.props.db);
      self.props.parent.fetchDbs();
      window.dispatchEvent(onBigChanges);
      self.handleDeleteClose();
      window.dispatchEvent(new Event('sinapsis_close_edit'));
    }, 1000);


  }

  changeDbName(){
    var db = this.props.db;
    db.name = this.state.name;
    window.dbf.editDb(db.id, db);
    this.handleDialogClose();
  }

  render(){
    var db = this.props.db;
    var cs = ["ss_dbbuilder_sidebar_dbs_nav_td"];
    if(!this.state.showing){
      cs.push('ss_inactive');
    }

    var candelete = slugify(this.state.borrarText, {lower: true}) == "borrar";

    return (
      <>
      <div
        id={'ss_nav_'+db.id}
        className={cs.join(' ')}
        >
        <div className="ss_dbbuilder_sidebar_dbs_nav_td_input">
          <div className="ss_dbbuilder_sidebar_dbs_nav_td_input_tools">
            <div className="ss_dbbuilder_sidebar_dbs_nav_td_input_tools_tool" title={'Editar nombre de ' + this.state.name} onClick={() => this.setState({showEdit: true})}>
              <Icon>edit</Icon>
            </div>
            <div className="ss_dbbuilder_sidebar_dbs_nav_td_input_tools_tool" title={'Borrar ' + this.state.name} onClick={() => this.handleIntentDelete()} >
              <Icon>delete</Icon>
            </div>
          </div>
          <div className="ssds_n" title={'Ver ' + this.state.name} onClick={(e) => this.handleClick(e)}>{this.state.name}</div>
        </div>
      </div>

      <Dialog open={this.state.showEdit} onClose={() => this.handleDialogClose()}>
        <DialogTitle id="form-dialog-title">Nombre de la base de datos</DialogTitle>
          <DialogContent style={{width: 400}}>
          <TextField
            autoFocus
            label="Nombre de la base de datos"
            fullWidth
            value={this.state.name}
            color="secondary"
            onChange={(e) => this.setState({name: e.target.value})}
          />
        </DialogContent>
        <DialogActions>
          <Button color="secondary" onClick={() => this.handleDialogClose()}>
            Cerrar
          </Button>
          <Button color="secondary" disabled={!this.state.name} onClick={() => this.changeDbName()}>
            Guardar
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={this.state.showDelete} onClose={() => this.handleDeleteClose()}>
        <DialogTitle id="form-dialog-title">¿Borrar {this.props.db.name}?</DialogTitle>
          <DialogContent style={{width: 400}}>
            Esta acción es irreversible. Por favor escribe la palabra "Borrar" para continuar.
          <TextField
            autoFocus
            fullWidth
            value={this.state.borrarText}
            color="secondary"
            onChange={(e) => this.setState({borrarText: e.target.value})}
          />
        </DialogContent>
        <DialogActions>
          <Button color="secondary" onClick={() => this.handleDeleteClose()}>
            Cerrar
          </Button>
          <Button color="secondary" disabled={!candelete} onClick={() => this.deleteDb()}>
            Borrar permanentemente
          </Button>
        </DialogActions>
      </Dialog>

      </>


    )
  }
}
