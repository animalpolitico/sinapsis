import React from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

/** Partes del formulario **/
import DbFormGroupInfoGeneral from './formGroups/infoGral';
import DbFormGroupNotaria from './formGroups/notaria';
import DbFormGroupPersonas from './formGroups/personas';
import DbFormGroupContrato from './formGroups/contrato';
import DbFormGroupConvenio from './formGroups/convenio';
import DbFormGroupTransferencias from './formGroups/transferencias';

var slugify = require('slugify');
const uuidv4 = require('uuid/v4');

export default class DbEditEmpresa extends React.Component{
  state = {
    showDeleteDialog : false,
    empresaErrors: {},
  }
  componentDidMount(){
    this.searchErrors();
  }
  componentDidUpdate(op, os){
    if(this.props.empresa.uid !== op.empresa.uid){
      this.setState({
        fields: {},
        showDeleteDialog: false,
        empresaErrors: {}
      })
      this.searchErrors();
    }
  }
  insertField(slug, obj){
    var e = window.dbf.getEmpresa(this.props.db.id, this.props.empresa.uid);
    var f = e.fields;
    if(!f){
      f = {};
    }
    f[slug] = obj;
    window.dbf.addFieldsToEmpresa(this.props.db.id, this.props.empresa.uid, f);
    this.searchErrors();
  }
  insertMultipleFields(fields){
    var e = window.dbf.getEmpresa(this.props.db.id, this.props.empresa.uid);
    var f = e.fields;
    for(var key in fields){
      var field = fields[key];
      f[key] = field;
    }
    window.dbf.addFieldsToEmpresa(this.props.db.id, this.props.empresa.uid, f);
    this.searchErrors();
  }
  insertMeta(key, value){
    window.dbf.addMetaToEmpresa(this.props.db.id, this.props.empresa.uid, key, value);
  }
  searchErrors(){
    var err = window.dbf.getEmpresaErrors(this.props.db.id, this.props.empresa.uid);
    this.setState({
      empresaErrors: err
    })
  }
  handleNameChange(value){
    var name = value;
    window.dbf.modifyEmpresaName(this.props.db.id, this.props.empresa.uid, name);
  }
  closeDrawer(){
    this.props.parent.closeDrawer();
  }
  intentDelete(){
    this.setState({
      showDeleteDialog: true
    })
  }
  delete(){
    this.props.parent.deleteEmpresa(this.props.empresa.uid);
    this.setState({
      showDeleteDialog: false
    })
  }
  render(){
    var self = this;
    var haserrors = this.state.empresaErrors.total > 0;
    return(
      <div className="db_empresa_edit_container">
        <div className="db_empresa_edit_close" onClick={() => this.closeDrawer()}>
          <Icon>close</Icon>
        </div>
        <DbEditEmpresaDbInfo {...this.props} />
        <div className="db_empresa_name">
          <div className="db_empresa_name_t">
            <Icon style={{color: this.props.db.color}}>home_work</Icon>
            <div>
              <input
                type="text"
                value={this.props.empresa.name}
                onChange={(e) => this.handleNameChange(e.target.value)}
              />
            </div>
          </div>
          {
            haserrors ?
            <div className="db_empresa_name_errors">
              <div className="db_empresa_name_errors_td" style={{color: 'red'}}>
                <Icon>error</Icon>
                <div>{this.state.empresaErrors.error.length}</div>
              </div>
              <div className="db_empresa_name_errors_td" style={{color: 'yellow'}}>
                <Icon>warning</Icon>
                <div>{this.state.empresaErrors.warning.length}</div>
              </div>
            </div>
            : null
          }
          <div className="db_empresa_name_trash" onClick={() => this.intentDelete()}>
            <Icon>delete_outline</Icon>
          </div>
          <Dialog open={this.state.showDeleteDialog} onClose={() => this.setState({ showDeleteDialog: false})}>
            <DialogTitle>¿Estás segurx?</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Se borraran todos los datos que hayas insertado.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button color="primary" onClick={() => this.setState({ showDeleteDialog: false})}>
                Cancelar
              </Button>
              <Button color="primary" onClick={() => this.delete()}>
                Continuar
              </Button>
            </DialogActions>
          </Dialog>
        </div>
        <div className="db_empresa_container_form">
          <DbFormGroupInfoGeneral empresa={this.props.empresa} parent={this} ref={(ref) => this.infoGeneral = ref}>
            <DbFormGroupNotaria empresa={this.props.empresa} parent={this} />
            <DbFormGroupPersonas empresa={this.props.empresa} parent={this} />
          </DbFormGroupInfoGeneral>
          <DbFormGroupContrato empresa={this.props.empresa} parent={this} />
          <DbFormGroupConvenio empresa={this.props.empresa} parent={this} />
          <DbFormGroupTransferencias empresa={this.props.empresa} parent={this} />
        </div>
      </div>
    )
  }
}



class ModalAddField extends React.Component{
  state = {
    uid: '',
    fields: {},
    children: {}
  }
  componentDidMount(){
    this.set();
  }
  componentDidUpdate(op, os){
    if(op.guid !== this.props.guid || (!op.open && this.props.open)){
      this.set();
    }
  }
  set(){
    this.setChildrens();
    var uid = this.props.guid ? this.props.guid : uuidv4();
    this.setState({
      uid: uid
    })
  }
  setChildrens(){
    var self = this;
    self.childRefs = [];
    var children = React.Children.map(this.props.children, function(child, x){
      return React.cloneElement(child, {
          ref: (ref) => self.childRefs.push(ref),
          db: self.props.db
      });
    })
    this.setState({
      children: children
    })
    if(this.props.guid){
      var guid = this.props.guid;
      setTimeout(function(){
        self.childRefs.map(function(ref){
          var r = ref;
          // r.setValueFromGuid(guid);
        })
      }, 50);
    }
  }
  add(){
    this.props.parent.insertMultipleFields(this.state.fields);
    this.props.onClose();
  }
  close(){
    this.props.onClose();
  }
  insertField(slug, obj){
    var s = this.state.uid + '-' + slug;
    slug = s;
    obj.slug = s;
    obj.groupUid = this.state.uid;

    var f = this.state.fields;
    f[slug] = obj;
    this.setState({
      fields: f
    })

  }

  innerF(){
  }

  render(){
    var addL = this.props.isedit ? 'Editar' : 'Agregar';

    return(
      <Dialog open={this.props.open} onClose={() => this.close()} className="ss_modal_edit">
        <DialogTitle>{addL} {this.props.singleName}</DialogTitle>
        <DialogContent>
          <div className="db_empresa_container_group_form">
            {this.state.children}
          </div>
        </DialogContent>
        <DialogActions>
          <Button color="secondary" onClick={() => this.close()}>
            Cancelar
          </Button>
          <Button color="secondary" onClick={() => this.add()}>
            {addL}
          </Button>
        </DialogActions>
      </Dialog>
    )
  }

}


class DbEditEmpresaDbInfo extends React.Component{
  render(){
    return(
      <div className="db_empresa_edit_container_dbinfo">
        <Icon style={{color: this.props.db.color}}>dns</Icon><span className="ss_dbe_dbname">{this.props.db.name}</span>
      </div>
    )
  }
}
