import React from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import { isMexico } from '../../vars/countriesDict';


/** Partes del formulario **/
import DbFormGroupInfoGeneral from './formGroups/infoGral';
import DbFormGroupNotaria from './formGroups/notaria';
import DbFormGroupPersonas from './formGroups/personas';
import DbFormGroupContrato from './formGroups/contrato';
import DbFormGroupConvenio from './formGroups/convenio';
import DbFormGroupTransferencias from './formGroups/transferencias';
import DbFormGroupOtros from './formGroups/otros';
import DbFormGroupBanderasRojas from './formGroups/banderasrojas';
import DbFormGroupComentarios from './formGroups/comentarios';

var slugify = require('slugify');
const uuidv4 = require('uuid/v4');

export default class DbEditEmpresa extends React.Component{
  state = {
    showDeleteDialog : false,
    empresaErrors: {},
    empresa_name: this.props.empresa.name
  }
  componentDidMount(){
    var self = this;
    this.searchErrors();

    window.addEventListener('sinapsis_lang_change', function(){
      self.setState({
        s: ''
      })
    })


    window.addEventListener('sinapsis_close_edit', function(){
      self.closeDrawer();
    })

    window.addEventListener("keypress", function(e){
      var w = e.which;
      if(e.keyCode == 13 && self.state.empresa_name && self.state.showEdit){
        self.handleNameChange();
      }
    }, true);


  }
  componentDidUpdate(op, os){
    if(this.props.empresa.uid !== op.empresa.uid){
      this.setState({
        fields: {},
        showDeleteDialog: false,
        empresaErrors: {},
        empresa_name: this.props.empresa.name
      })
      this.searchErrors();
    }
  }
  insertField(slug, obj){
    var self = this;

    try{
      var e = window.dbf.getEmpresa(this.props.db.id, this.props.empresa.uid);
      var c = false;
      var f = e.fields;
      if(!f){
        f = {};
      }
      f[slug] = obj;
      /* ¿Existe parecida?*/
      var ex = window.dbf.findEmpresaBySlug(this.props.empresa.slug, this.props.db.id);
      if(ex && !obj.uid){
        setTimeout(function(){
          self.setState({
            showEditExternal: true,
            controlDbId: self.props.db.id,
            controlEuid: self.props.empresa.uid,
            controlFields: f
          })
        }, 100)

      }else{
        window.dbf.addFieldsToEmpresa(this.props.db.id, this.props.empresa.uid, f, c);
        this.searchErrors();
      }
    }catch(ex){

    }

  }

  continueEdit(c){
    window.dbf.addFieldsToEmpresa(this.state.controlDbId, this.state.controlEuid, this.state.controlFields, c);
    this.setState({
      showEditExternal: false
    })
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

  handleNameChange(){
    var name = this.state.empresa_name;
    window.dbf.modifyEmpresaName(this.props.db.id, this.props.empresa.uid, name);
    this.setState({
      showEdit: false
    })
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
    var cs = ['db_empresa_edit_container'];
    if(this.props.blockEdit){
      cs.push('db_block_edit');
    }
    return(
      <div className={cs.join(' ')}>
        <div className="db_empresa_edit_close" onClick={() => this.closeDrawer()}>
          <Icon>close</Icon>
        </div>
        <DbEditEmpresaDbInfo {...this.props} />
        <div className="db_empresa_name">
          <div className="db_empresa_name_t">
            <div>
              {this.state.empresa_name}
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
          <div className="db_empresa_name_trash" onClick={() => this.setState({showEdit: true})}>
            <Icon>edit</Icon>
          </div>
          <div className="db_empresa_name_trash" onClick={() => this.intentDelete()}>
            <Icon>delete</Icon>
          </div>

          <Dialog open={this.state.showDeleteDialog} onClose={() => this.setState({ showDeleteDialog: false})}>
            <DialogTitle>¿Estás segurx?</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Se borraran todos los datos que hayas insertado.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button color="secondary" onClick={() => this.setState({ showDeleteDialog: false})}>
                Cancelar
              </Button>
              <Button color="secondary" onClick={() => this.delete()}>
                Continuar
              </Button>
            </DialogActions>
          </Dialog>

          <Dialog
            open={this.state.showEditExternal}
            onClose={() => this.setState({showEditExternal: false})}
          >
            <DialogTitle>Editar empresa</DialogTitle>
            <DialogContent>
              <div className="db_empresa_container_group_form dbe_m">
                <div className="db_empresa_container_group_form_title">
                  Esta empresa ya existe en otra base de datos. ¿Deseas aplicar estos cambios en la misma empresa?
                </div>
              </div>
            </DialogContent>
            <DialogActions>
              <Button color="secondary" onClick={() => this.continueEdit(false)}>
                No, mantener los cambios solo en esta base
              </Button>
              <Button color="secondary" onClick={() => this.continueEdit(true)}>
                Sí, aplicar en la otra base de datos
              </Button>
            </DialogActions>
          </Dialog>

          <Dialog open={this.state.showEdit} onClose={() => this.setState({showEdit: false})}>
            <DialogTitle id="form-dialog-title">Editar nombre de empresa</DialogTitle>
              <DialogContent style={{width: 400}}>
              <TextField
                autoFocus
                label="Razón social de la empresa"
                fullWidth
                value={this.state.empresa_name}
                color="secondary"
                onChange={(e) => this.setState({empresa_name: e.target.value})}
              />
            </DialogContent>
            <DialogActions>
              <Button color="secondary" onClick={() => this.handleDialogClose()}>
                Cerrar
              </Button>
              <Button color="secondary" disabled={!this.state.empresa_name} onClick={() => this.setState({showEdit: false})}>
                Guardar
              </Button>
            </DialogActions>
          </Dialog>

        </div>
        <div className="db_empresa_container_form">
          <div className="db_empresa_container_form_divider"></div>
          <DbFormGroupInfoGeneral empresa={this.props.empresa} parent={this} ref={(ref) => this.infoGeneral = ref}>
            <DbFormGroupPersonas dbid={this.props.db.id} empresa={this.props.empresa} parent={this} />
            <DbFormGroupNotaria empresa={this.props.empresa} parent={this} />
          </DbFormGroupInfoGeneral>
          <div className="db_empresa_container_form_divider"></div>
          <DbFormGroupContrato dbid={this.props.db.id} empresa={this.props.empresa} parent={this} />
          <DbFormGroupConvenio dbid={this.props.db.id}  empresa={this.props.empresa} parent={this} />
          <DbFormGroupTransferencias dbid={this.props.db.id}  empresa={this.props.empresa} parent={this} />
          <div className="db_empresa_container_form_divider"></div>
          {
            isMexico() ?
            <DbFormGroupBanderasRojas empresa={this.props.empresa} parent={this} />
            : null
          }
          <DbFormGroupOtros dbid={this.props.db.id}  empresa={this.props.empresa} parent={this} />
          <DbFormGroupComentarios dbid={this.props.db.id}  empresa={this.props.empresa} parent={this} />
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
    var addL = this.props.isedit ? 'Guardar' : 'Agregar';

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
        <span className="ss_dbe_dbname">{this.props.db.name}</span>
      </div>
    )
  }
}
