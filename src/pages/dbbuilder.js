import React from 'react'
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';

import moment from 'moment';
import 'moment/locale/es';

import DbFactory from '../funcs/dbClass';
import { sinapsisDbObject } from '../vars/sinapsisDbStructure';

moment.locale('es');

var dbf = new DbFactory(sinapsisDbObject);
dbf.normalize();

export default class DbBuilderPage extends React.Component{
  render(){
    return(
      <h1>Hola</h1>
    )
  }
}
