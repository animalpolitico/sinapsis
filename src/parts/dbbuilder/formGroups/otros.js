import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import DbInput from '../inputs';
import formatMoney from 'format-money';
import TransactionRow from '../transaction';
const uuidv4 = require('uuid/v4');
var slugify = require('slugify');


export default class DbFormGroupOtros extends React.Component{
  state = {
    open: false,
    isedit: false,
    fields: {},
    modalChanged: false,
    name: null,
    matchWith: null,
    category: null,
    type: null
  }

  componentDidMount(){
    this.refs = [];
  }

  close(){
    this.setState({
      open: false,
      modalChanged: false,
      isEdit: false
    })
  }

  open(guid){
    var self = this;
    var isEdit = false;
    if(!guid){
      guid = uuidv4();
    }else{
      isEdit = true;
    }
    this.setState({
      open: true,
      guid: guid,
      fields: {},
      isedit: isEdit
    })
  }

  setChildRef = e => {
    try{
      if(this.state.isedit){
        var guid = this.state.guid;
        e.setValueFromGuid(guid);
      }
    }catch(err){
      console.warn('Sinapsis warning', err);
    }

  }

  add(){
    var fs = this.state.fields;
    var dbuid = this.props.parent.props.db.id;
    var euid = this.props.empresa.uid;
    // console.log('Adding', fs);

    window.dbf.addFieldsFromGuid(dbuid, euid, this.state.guid, fs);
    this.close();
  }

  insertField(slug, obj, blockchanged){
    slug = this.state.guid + '-' + slug;
    var fs = this.state.fields;
    obj.guid = this.state.guid;
    obj.groupUid = this.state.guid;
    fs[slug] = obj;
    this.setState({
      fields: fs,
    })
    if(!blockchanged){
      this.setState({
        modalChanged: true
      })
    }
  }

  getGroup(){
    var type = "otros";
    var dbuid = this.props.parent.props.db.id;
    var euid = this.props.empresa.uid;
    var gr = window.dbf.getEmpresaGroupsByGroup(dbuid, euid, type);
    return gr;
  }

  edit(guid, t){
    console.log('EDIT', guid, t);
    this.setState({
      matchWith: t.matchWith,
      category: t.category,
      type: t.type,
      name: t.name
    })
    this.open(guid);
  }

  onSelectOtrosType(e){
    var v = e.target.value;
    var target = e.target;
    var name = target.options[target.selectedIndex].text;
    var t = v;
    var type = "text";
    var ismonto = false;
    var matchWith = [t];
    if(t == 'monto_otorgado' || t == 'monto_recibido'){
      t = 'monto';
      type = "currency";
      ismonto = true;
      matchWith = false;
    }

    this.setState({
      matchWith: matchWith,
      category: v,
      type: type,
      name: name
    })


  }

  render(){
    var self = this;
    var addL = this.state.isedit ? 'Guardar' : 'Agregar';
    var otros = this.getGroup();

    return(
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<Icon>expand_more</Icon>}>
          <div className="dbef_n">
            <div className="dbef_n_n">
              Otros relacionados <span className="dbef_n_n_badge">{otros.length}</span>
            </div>
            <div className="dbef_n_ctas">
              <div className="dbef_n_ctas_c" onClick={() => this.open()}>Agregar</div>
            </div>
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div className="db_empresa_container_group_form">
            <div className="db_empresa_container_group_form_innerlist">
              {
                otros.map(function(g){
                  return(
                    <OtrosRow p={g} parent={self} onClick={(guid, t) => self.edit(guid, t)} />
                  )
                })
              }
            </div>
          </div>
        </ExpansionPanelDetails>

        {/* Modal */}
        <Dialog open={this.state.open} onClose={() => this.close()} className="ss_modal_edit">
          <DialogTitle>{addL} otro</DialogTitle>
          <DialogContent>
            <div className="db_empresa_container_group_form">
              {
                !this.state.isedit ?
              <div className="ss_db_input_select">
                {/* Selecciona el tipo de persona */}
                <select onChange={(e) => this.onSelectOtrosType(e)} value={this.state.category}>
                  <option value="-" selected disabled>Tipo</option>
                  <option value="empresa">Nombre de empresa</option>
                  <option value="person">Nombre de persona</option>
                  <option value="address">Dirección</option>
                  <option value="rfc">RFC</option>
                  <option value="date">Fecha</option>
                  <option value="email">Correo electrónico</option>
                  <option value="website">Sitio web</option>
                  <option value="convenio">Número de contrato o convenio</option>
                  <option value="instancia">Dependencia / Instancia</option>
                  <option value="monto_recibido">Monto recibido</option>
                  <option value="monto_otorgado">Monto otorgado</option>
                  <option value="titular">Titular de instancia</option>
                  <option value="cfdi">CFDI</option>
                </select>
              </div>
              : null
              }
              {
                this.state.category ?

                <>
                  <DbInput
                    onChange={(slug, obj) => this.insertField(slug, obj)}
                    name={this.state.name}
                    type={this.state.type}
                    matchWith={this.state.matchWith}
                    category={this.state.category}
                    group="otros"
                    empresa={this.props.empresa}
                    db={this.props.parent.props.db}
                    ref={this.setChildRef}
                  />
                </>

              : null
              }

            </div>
          </DialogContent>
          <DialogActions>
            <Button color="secondary" onClick={() => this.close()}>
              Cancelar
            </Button>
            <Button disabled={!this.state.modalChanged} color="secondary" onClick={() => this.add()}>
              {addL}
            </Button>
          </DialogActions>
        </Dialog>
      </ExpansionPanel>
    )
  }
}

class OtrosRow extends React.Component{
  edit(){
    try{
      var t = this.props.p[0];
      var guid = t.guid;
      this.props.onClick(guid, t);
    }catch{
      console.warn('Sin elementos');
    }
  }

  getName(){
    var t = this.props.p[0];
    var s = t.name + ': ';
    var v = t.value;
    if(t.type == "monto" || t.category.indexOf('monto') > -1){
      v = formatMoney(v);
    }
    s = s + v;
    return s;
  }

  delete(){
    var g = this.props.p;
    var t = g[0];
    var euid = t.empresauid;
    var dbid = t.fromdb;
    var guid = t.groupUid;

    window.dbf.deleteGroup(guid, euid, dbid);
  }


  render(){
    var n = this.getName();
    return(
      <div className="ss_transaction_row" >
        <div className="ss_transaction_row_c" onClick={() => this.edit()}>
          <div className="ss_transaction_row_n">
            {n}
          </div>
        </div>
        <div className="ss_transaction_row_d" onClick={() => this.delete()}>
          <Icon size="small">delete</Icon>
        </div>
      </div>
    )
  }
}
