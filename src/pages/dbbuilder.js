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

/** Bases de datos precargadas **/
import PreDB_Estafa from '../static/consumable/estafa-maestra.json';
import PreDB_SATDef from '../static/consumable/sat-definitivos.json';

import oldToNew from '../funcs/oldSinapsisToNew';
import { predbs } from '../vars/rel';
import Flag from "react-flags";
import { countries, getLang } from "../vars/countriesDict";
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

var dbsPre = {
  'estafa-maestra': PreDB_Estafa,
  'sat-definitivos': PreDB_SATDef
}


export default class DbBuilderPage extends React.Component{
  state = {
    control: '',
    showcontrol: true,
    recoveroptions: [],
    showrecoveroptions: false,
    isautosaving: false,
    uid: null,
    hasloaded: false
  }

  componentDidMount(){
    this.startAutosave();
    this.set();
    window.scroll(0,0);
    /* Previene cerrar el navegador */
    window.addEventListener("beforeunload", (ev) => {
        ev.preventDefault();
        return ev.returnValue = '¿Deseas cerrar la pestaña?';
    });
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
      if(obj){
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
        s = window.confirm('¿Deseas regresar? Es posible que los cambios que implementaste no se puedan guardar.');
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

    this.props.history.push(buildLink('/construir/estafa-maestra'));

    this.setState({
      showcontrol: false,
      hasloaded: true
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
          hasloaded: true
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
    return(
      <div className="ss_page">
        <Helmet>
          <title>{title + ' >> Sinapsis'}</title>
        </Helmet>
        <DbLoader />
        {
          this.state.showcontrol ?
            <DbInicio parent={this}/>
          :
            <div>
              <DbBuilderToolbar parent={this} ref={(ref) => this.toolbar = ref}/>
              <div className="ss_dbbuilder">
                <DbBuilderSidebar ref={(ref) => this.sidebar = ref}/>
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

            <div className="ss_db_choose_td">
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
                  Cargar proyecto
                </div>
                <Icon>merge_type</Icon>
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
          </div>
        </div>
      </div>
    )
  }
}

class DbLoader extends React.Component{
  state = {
    loading: false
  }

  componentDidMount(){
    var self = this;
    window.addEventListener('sinapsisStartLoad', function(){
      self.setState({
        loading: true
      })
    })

    window.addEventListener('sinapsisEndLoad', function(){
      self.setState({
        loading: false
      })
    })

  }

  render(){
    return(
      <>
      {
        this.state.loading ?
        <div id="ssdb_loader">
          <div id="ssdb_loader_c">
            <CircularProgress color="secondary"/>
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
      self.selectDb(dbid);
      self.refs[dbid].handleClick();
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
    borrar: ''
  }
  componentDidMount(){
    this.set();
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
      var data = window.dbf.addEmpresaToDb(this.state.db, v);
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
    window.dbf.deleteDb(this.state.db);
    this.props.parent.fetchDbs();
    window.dispatchEvent(onBigChanges);
    this.setState({
      showDeleteDialog: false
    })
    this.empresalist.closeDrawer();
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

  render(){
    var dbf = window.dbf;
    var nameCs = ['ss_db_view_name'];
    if(this.state.nameError){
      nameCs.push('ss_error');
    }
    var canAdd = this.state.dialogValue.length > 0;
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
                <span>Empresas en la base</span>
                <div className="ss_db_view_empresas_title_btn" style={{cursor: 'pointer'}} onClick={() => this.showAddDialog()}>Agregar</div>
              </div>
              <DbEmpresasList ref={(ref) => this.empresalist = ref} parent={this} db={this.state.db} />
            </div>

          </div>
          : null
        }
        <Dialog open={this.state.showdialog} onClose={() => this.handleDialogClose()}>
          <DialogTitle id="form-dialog-title">Empresa nueva</DialogTitle>
            <DialogContent style={{width: 400}}>
            <DialogContentText>
              Escribe el nombre de la empresa, más adelante podrás añadir el resto de información.
            </DialogContentText>
            <TextField
              autoFocus
              label="Razón social de la empresa"
              fullWidth
              color="secondary"
              onChange={(e) => this.setState({dialogValue: e.target.value})}
            />
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
      var isnotfocusing = ! document.body.classList.contains('ss_focusing_input');
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
      empresa: em
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
    var row_id = 'e_'+em.uid;
    var _em = document.getElementById(row_id);
    var t = _em.offsetTop;
    var lc = this.listContainer;
    var lch = lc.offsetHeight;
    var lcs = lc.scrollTop;
    if((lcs + lch) < t || t < lcs){
      lc.scrollTop = t - 200;
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
                    key={k}
                    index={k}
                    parent={self}
                    active={self.state.empresa.uid == empresa.uid}
                />)
              })
            }
          </div>
          :
          <div className="ss_db_ve_c_nocontent">
            <div className="ss_db_ve_c_nocontent_icon">
              <Icon>dns</Icon>
            </div>
            <div className="ss_db_ve_c_nocontent_des">
              <p>Sin empresas</p>
              <div className="ss_db_ve_c_nocontent_des_cta">
                <a href="#" onClick={() => this.props.parent.showAddDialog()}>Agregar empresa</a>
              </div>
            </div>
          </div>
        }
        {
          this.state.showedit ?
          <div className="db_empresa_edit">
            <DbEditEmpresa db={this.props.db} empresa={this.state.empresa} parent={this} />
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
    selectedDb: null
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

  selectPreDB(path, name){
    console.log('PATH', path, name);
    this.setState({
      selectedDb: path,
      selectedName: name
    })
  }

  async addPreDb(){
    var self = this;
    var v = this.state.selectedDb;
    var n = this.state.selectedName;
    window.dispatchEvent(startLoad);
    this.setState({
      openModal: false,
      selectedDb: null,
      selectedName: null
    })
    var c = await d3.csv(v);
    var ont = new oldToNew(n, c, true);
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
              if(ok){
                return <PreDb parent={self} p={predb} />
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

    var ts = '< 10 segundos';
    if(m > 2){
      if(m < 10){
        ts = '< 1 minuto';
      }else{
        var mm = Math.ceil(m / 10);
        ts = mm + ' minuto' + (mm > 1 ? 's' : '');
      }
    }

    var showAlert = m > 10;

    return(
      <div className="ss_predb_select">
        <input type="radio" name="predb_input" onChange={(e) => this.props.parent.selectPreDB(p.file, p.name)}/>
        <div className="ss_predb_select_info">
        <div className="ss_predb_select_name">
          {p.name}
        </div>
        <div className="ss_predb_select_author">
          De <strong>{p.author}</strong>
        </div>

        <div className="ss_predb_select_country">
          <img src={p.flag} />
          <span>{p.countryLabel}</span>
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
    isblurred: true
  }
  componentDidMount(){
    var self = this;
    this.set();
    if(this.props.index === 0){
      setTimeout(function(){
        self.handleClick();
      }, 100);
    }
  }
  set(){
    var db = this.props.db;
    this.setState({
      name: db.name
    })
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

  render(){
    var db = this.props.db;
    var cs = ["ss_dbbuilder_sidebar_dbs_nav_td"];
    if(!this.state.showing){
      cs.push('ss_inactive');
    }
    return (
      <div
        id={'ss_nav_'+db.id}
        className={cs.join(' ')}
        onClick={(e) => this.handleClick(e)}
        >
        <div className="ss_dbbuilder_sidebar_dbs_nav_td_input" title={this.state.name}>
          <div className="ss_dbtab_circle" style={{backgroundColor: 'white'}}></div><span>{this.state.name}</span>
        </div>
      </div>
    )
  }
}
