import React from 'react'
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import { shadows } from '@material-ui/system';
import Icon from '@material-ui/core/Icon';

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
  render(){
    return(
      <div className="ss_page">
        <DbBuilderToolbar ref={(ref) => this.toolbar = ref}/>
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
    db: null
  }
  componentDidMount(){
    this.fetchDbs();
    this.refs = {};
  }

  fetchDbs(){
    var dbf = window.dbf;
    this.setState({
      dbs: dbf.getDbs()
    })
  }
  addDB(){
    var self = this;
    var dbf = window.dbf;
    var dbId = dbf.addDb();
    this.fetchDbs();
    // this.selectDb(dbId);
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
      <div className="ss_dbbuilder_sidebar" boxShadow={2}>
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
    console.log('db', db);
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
  render(){
    var dbf = window.dbf;

    var nameCs = ['ss_db_view_name'];
    if(this.state.nameError){
      nameCs.push('ss_error');
    }
    return(
      <div className="ss_db_view">
        {
          this.state.db ?
          <div>
            <div className={nameCs.join(' ')}>
              <Icon>dns</Icon>
              <input
                type="text"
                value={this.state.db.name}
                onChange={(e) => this.handleNameChange(e)}
              />
            </div>
            <div className="ss_db_view_empresas">
              <div className="ss_db_view_empresas_title">Empresas en la base</div>
            </div>
          </div>
          : null
        }
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
          {this.state.name}
        </div>
      </div>
    )
  }
}
