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
import TransactionRow from '../transaction';

const uuidv4 = require('uuid/v4');
var slugify = require('slugify');


export default class DbFormGroupTransferencias extends React.Component{
  state = {
    open: false,
    isedit: false,
    transferenciaType: '-',
    fields: {},
    modalChanged: false
  }

  componentDidMount(){
    this.refs = [];
  }

  close(){
    this.setState({
      open: false,
      modalChanged: false,
      isEdit: false,
      transferenciaType: '-'
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
    if(this.state.transferenciaType == 'emisor' && !this.state.isedit){
      var neweid = window.dbf.addEmpresaFromTransferencia(this.props.parent.props.db, this.props.empresa, this.state.guid, fs);
      for(var key in fs){
        fs[key].linkedWith = neweid;
      }
    }
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

  onSelectTransferenciaType(e){
    var t = e.target.value;
    var preSlug = 'tipo transferencia';
    var slug = slugify(preSlug);
    var obj = {
      group: 'transferencia',
      value: t,
      bigGroup: 'transferencia',
      isvalid: true,
      guid: this.state.guid,
      groupUid: this.state.guid,
      name: 'Tipo de transferencia'
    };
    this.setState({
      transferenciaType: t
    })
    this.insertField(slug, obj, true);
  }

  getGroup(){
    var dbuid = this.props.parent.props.db.id;
    var euid = this.props.empresa.uid;
    var gr = window.dbf.getEmpresaGroupsByGroup(dbuid, euid, 'transferencia');
    // console.log('GR-T', gr);
    return gr;
  }

  editTransferencia(guid, transferencia){
    var e = transferencia[0].value;
    this.setState({
      transferenciaType: e
    })
    this.open(guid);
  }

  render(){
    var self = this;
    var addL = this.state.isedit ? 'Editar' : 'Agregar';
    var transferencias = this.getGroup();
    return(
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<Icon>expand_more</Icon>}>
          <div className="dbef_n">
            <div className="dbef_n_n">
              Transferencias <span className="dbef_n_n_badge">{transferencias.length}</span>
            </div>
            <div className="dbef_n_ctas">
              <div className="dbef_n_ctas_c" onClick={() => this.open()}>Añadir</div>
            </div>
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div className="db_empresa_container_group_form">
            {
              transferencias.length ?
              <div className="db_empresa_container_group_form_innerlist">
                {
                  transferencias.map(function(e, k){
                    return (
                      <TransactionRow
                        parent={self}
                        g={e}
                        key={k}
                        empresa={self.props.empresa}
                        count={k + 1}
                        onClick={(uid) => self.editTransferencia(uid, e)}
                        singleName="Transferencia"
                      />
                    )
                  })
                }
              </div>
              :
              <div className="db_empresa_container_group_form_empty">
                Sin transferencias
              </div>
            }
          </div>
        </ExpansionPanelDetails>

        {/* Modal */}
        <Dialog open={this.state.open} onClose={() => this.close()} className="ss_modal_edit">
          <DialogTitle>{addL} transferencia</DialogTitle>
          <DialogContent>
            <div className="db_empresa_container_group_form">
              {
                !this.state.isedit ?
              <div className="ss_db_input_select">
                {/* Selecciona el tipo de persona */}
                <select onChange={(e) => this.onSelectTransferenciaType(e)}>
                  <option value="-" selected disabled>Selecciona un tipo de transferencia</option>
                  <option value="emisor">Emisor</option>
                  <option value="receptor">Receptor</option>
                </select>
              </div>
              : null
              }
              {
                this.state.transferenciaType == 'emisor' ?
                <>
                  <DbInput
                    onChange={(slug, obj) => this.insertField(slug, obj)}
                    matchWith={['empresa', 'instancia', 'person']}
                    name="recursos"
                    aka="¿A quién otorgó los recursos?"
                    type="text"
                    category="receptor"
                    group="transferencia"
                    empresa={this.props.empresa}
                    db={this.props.parent.props.db}
                    ref={this.setChildRef}
                  />
                  <DbInput
                    onChange={(slug, obj) => this.insertField(slug, obj)}
                    name="Monto de la transferencia"
                    type="currency"
                    group="transferencia"
                    category="monto"
                    sustractFromTotal
                    empresa={this.props.empresa}
                    db={this.props.parent.props.db}
                    ref={this.setChildRef}
                  />
                </>
              : null}
              {
                this.state.transferenciaType == 'receptor' ?
                <>
                  <DbInput
                    onChange={(slug, obj) => this.insertField(slug, obj)}
                    matchWith={['empresa', 'instancia', 'person']}
                    name="recursos"
                    aka="¿Quién otorgó los recursos?"
                    type="text"
                    category="emisor"
                    group="transferencia"
                    empresa={this.props.empresa}
                    db={this.props.parent.props.db}
                    ref={this.setChildRef}
                  />
                  <DbInput
                    onChange={(slug, obj) => this.insertField(slug, obj)}
                    name="Monto de la transferencia"
                    type="currency"
                    group="transferencia"
                    category="monto"
                    sumWith={['montos_transferencia', 'montos_totales']}
                    empresa={this.props.empresa}
                    db={this.props.parent.props.db}
                    ref={this.setChildRef}
                  />
                </>
              : null}


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
