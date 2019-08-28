import React from 'react'
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
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
  render(){
    return(
      <div className="ss_dbbuilder_sidebar">
        <DBNewDatabase />
      </div>
    )
  }
}
