import React from 'react'
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

import moment from 'moment';
import 'moment/locale/es';

import DbFactory from '../funcs/dbClass';
import { sinapsisDbObject } from '../vars/sinapsisDbStructure';

/** Componentes **/
import DbBuilderToolbar from '../parts/dbbuilder/toolbar';
import DBNewDatabase from '../parts/dbbuilder/newdb';


var dbf = new DbFactory(sinapsisDbObject);
var dbf_obj = dbf.set();
window.dbf = dbf;

export default class DbBuilderPage extends React.Component{
  state = {
    control: ''
  }
  forceRender(){
    this.setState({
      control: 'fromfile'
    })
  }
  render(){
    console.log('rerendering');
    return(
      <div className="ss_page">
        <DbBuilderToolbar parent={this} ref={(ref) => this.toolbar = ref}/>
        <div className="ss_dbbuilder">
          <DbBuilderSidebar />
        </div>
      </div>
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
    this.fetchDbs();
    this.refs = {};
  }

  componentDidUpdate(p, s){
    var dbf = window.dbf;
    var uid = dbf.obj.uid;

    if(uid !== s.uid){
      this.fetchDbs();
    }

  }

  fetchDbs(){
    var dbf = window.dbf;
    this.setState({
      uid: dbf.obj.uid,
      dbs: dbf.getDbs()
    })
  }
  addDB(){
    var self = this;
    var dbf = window.dbf;
    var dbId = dbf.addDb();
    this.fetchDbs();
    setTimeout(function(){
      self.refs[dbId].handleClick();
    }, 10);
  }
  selectDb(uid){
    var dbf = window.dbf;
    var db = dbf.getDb(uid);
    this.setState({
      db: db
    })
  }
  render(){
    var self = this;
    var navCs = ['ss_dbbuilder_sidebar_dbs_nav'];
    var dbsA = Object.values(this.state.dbs);
    if(dbsA.length > 1){
      navCs.push('ss_overflow');
    }
    return(
      <div className="ss_dbbuilder_sidebar">
        <div className="ss_dbbuilder_sidebar_dbs">
            <div className={navCs.join(' ')}>
              {
                dbsA.map(function(db, k){
                  return <DbDbsNavigationTd ref={(ref) => self.refs[db.id] = ref} parent={self} key={k} db={db} />
                })
              }
              <DbDbsNavigationNewDb parent={this}/>
            </div>
            <div className="ss_dbbuilder_sidebar_dbs_view">
              {
                this.state.db ?
                <DbView db={this.state.db} navRef={this.refs[this.state.db.id]}/>
                : null
              }
            </div>
        </div>
      </div>
    )
  }
}

class DbView extends React.Component{
  state = {
    showdialog: false,
    dialogValue: ''
  }
  componentDidMount(){
    this.set();
  }
  componentDidUpdate(p, n){
    if(p.db.id !== this.props.db.id){
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
    this.setState({
      showdialog: true
    })
  }
  handleDialogClose(){
    this.setState({
      showdialog: false,
      dialogValue: ''
    })
  }
  addEmpresa(){
    var v = this.state.dialogValue;
    this.handleDialogClose();
    var db = window.dbf.addEmpresaToDb(this.state.db, v);
    this.setState({
      db: db
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
              <Icon style={{color: this.state.db.color}}>dns</Icon>
              <input
                type="text"
                value={this.state.db.name}
                onChange={(e) => this.handleNameChange(e)}
              />
            </div>
            <div className="ss_db_view_empresas">
              <div className="ss_db_view_empresas_title">
                <span>Empresas en la base</span>
                <div className="ss_db_view_empresas_title_btn" style={{cursor: 'pointer'}} onClick={() => this.showAddDialog()}>Agregar</div>
              </div>
              <DbEmpresasList parent={this} db={this.state.db} />
            </div>

          </div>
          : null
        }
        <Dialog open={this.state.showdialog} onClose={() => this.handleDialogClose()}>
          <DialogTitle id="form-dialog-title">Nueva empresa</DialogTitle>
            <DialogContent style={{width: 400}}>
            <DialogContentText>
              Inserta la razón social de la empresa, después podrás añadir mucha más información.
            </DialogContentText>
            <TextField
              autoFocus
              label="Razón social de la empresa"
              fullWidth
              onChange={(e) => this.setState({dialogValue: e.target.value})}
              required
            />
          </DialogContent>
          <DialogActions>
            <Button color="primary" onClick={() => this.handleDialogClose()}>
              Cerrar
            </Button>
            <Button color="primary" disabled={!canAdd} onClick={() => this.addEmpresa()}>
              Agregar
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}

class DbEmpresasList extends React.Component{
  render(){
    var db = this.props.db;
    var em = db.empresas;
    if(em){
      var hasEmpresas = Object.values(em).length > 0;
    }else{
      var hasEmpresas = false;
    }
    return(
      <div className="ss_db_ve_c">
        {
          hasEmpresas ?
          <div className="ss_db_ve_c_empresas_list">
            {
              Object.values(em).map(function(empresa, k){
                return <DbEmpresa empresa={empresa} db={db} key={k} />
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
                <a href="javascript:void(0)" onClick={() => this.props.parent.showAddDialog()}>Agregar empresa</a>
              </div>
            </div>
          </div>
        }
      </div>
    )
  }
}

class DbEmpresa extends React.Component{
  render(){
    var e = this.props.empresa;
    var cs = ['db_empresa'];
    if(!e.fields){
      cs.push('ss_new');
    }

    var fieldsSize = 1;
    if(e.fields){
      fieldsSize += e.fields.length;
    }

    return(
      <div className={cs.join(' ')} data-slug={e.slug}>
        <div className="db_empresa_container">
          <div className="db_empresa_container_indicator"></div>
          <div className="db_empresa_container_name">
            {e.name}
          </div>
          <div className="db_empresa_container_info">

          </div>
        </div>
      </div>
    )
  }
}

class DbDbsNavigationNewDb extends React.Component{
  render(){
    return(
      <div className="ss_dbbuilder_sidebar_dbs_nav_td ss_db_newdb" onClick={() => this.props.parent.addDB()}>
        <Icon>add</Icon><span className="ss_db_nav_s">Nueva base de datos</span>
      </div>
    )
  }
}

class DbDbsNavigationTd extends React.Component{
  state = {
    name: '',
    isblurred: true
  }
  componentDidMount(){
    this.set();
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
    return (
      <div
        id={'ss_nav_'+db.id}
        className="ss_dbbuilder_sidebar_dbs_nav_td"
        onClick={(e) => this.handleClick(e)}
        >
        <div className="ss_dbbuilder_sidebar_dbs_nav_td_input" title={this.state.name}>
          <div className="ss_dbtab_circle" style={{backgroundColor: db.color}}></div><span>{this.state.name}</span>
        </div>
      </div>
    )
  }
}
