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
import Tooltip from '@material-ui/core/Tooltip';
import { isMexico, _t } from '../../../vars/countriesDict';

const uuidv4 = require('uuid/v4');
var slugify = require('slugify');


export default class DbFormGroupTransferencias extends React.Component{
  state = {
    open: false,
    isedit: false,
    transferenciaType: '-',
    fields: {},
    modalChanged: false,
    contratoType: ''
  }

  componentDidMount(){
    this.refs = [];
    var self = this;
    window.addEventListener('keydown', function(e){
      var w = e.which;
      var bc = document.body.classList.contains('ss_focusing_input');
      if(w == 13 && !bc && self.state.open){
        self.add();
      }
    })
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
    var self = this;
    window.dispatchEvent(new Event('sinapsisStartLoad'));
    setTimeout(function(){
      var fs = self.state.fields;
      var _f = fs;
      var dbuid = self.props.parent.props.db.id;
      var euid = self.props.empresa.uid;
      window.dbf.addFieldsFromGuid(dbuid, euid, self.state.guid, fs);
      if(!self.state.isedit && self.state.transferenciaType == "emisor"){
        self.addNewEmpresa(fs);
      }
      self.close();
      window.dispatchEvent(new Event('sinapsisEndLoad'));
    }, 300)

  }

  addNewEmpresa(z){
    var y = JSON.stringify(z);
    window.dbf.addEmpresaFromTransferencia(this.props.parent.props.db, this.props.empresa, this.state.guid, y);
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
    console.log('t', t);
    var preSlug = 'tipo transferencia';
    var slug = slugify(preSlug);
    var obj = {
      group: 'transferencia',
      value: t,
      bigGroup: 'transferencia',
      isvalid: true,
      category: t,
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
    var e = transferencia[0].category;
    console.log('E', e, transferencia);
    this.setState({
      transferenciaType: e
    })
    this.open(guid);
  }

  render(){
    var self = this;
    var addL = this.state.isedit ? 'Guardar' : 'Agregar';
    var transferencias = this.getGroup();
    var type = this.state.contratoType;
    return(
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<Icon>expand_more</Icon>}>
          <div className="dbef_n">
            <div className="dbef_n_n">
              Transferencias <span className="dbef_n_n_badge">{transferencias.length}</span>
              {
                isMexico() ?
                <div className="dbef_n_tooltip">
                  <Tooltip
                    title="Puedes conseguir esta información desde la ASF. Da clic para visitar el sitio"
                  >
                    <a href="https://www.asf.gob.mx/Default/Index" target="_blank">
                      <Icon size="small">help</Icon>
                    </a>
                  </Tooltip>
                </div>
                : null
              }
            </div>
            <div className="dbef_n_ctas">
              <div className="dbef_n_ctas_c" onClick={() => this.open()}>Agregar</div>
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
                  <option value="-" selected>Selecciona un tipo de transferencia</option>
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
                    name="recursos"
                    aka="Nombre de la empresa que recibió los recursoss"
                    type="text"
                    category="receptor"
                    group="transferencia"
                    autoComplete={['empresa']}
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
                <div className="ss_db_input_select">
                  <div className="db_empresa_container_group_radios_title">
                    ¿Quién otorga los recursos?
                  </div>
                  <select onChange={(e) => this.setState({contratoType: e.target.value, res: true})} value={type}>
                    <option value="" disabled selected>Selecciona...</option>
                    <option value="empresa">Empresa</option>
                    <option value="instancia">{_t('Instancia / Dependencia')}</option>
                  </select>
                </div>
                {
                  this.state.res ?
                <>
                  <DbInput
                    onChange={(slug, obj) => this.insertField(slug, obj)}
                    name="recursos"
                    aka={this.state.contratoType == "empresa" ? "Nombre de la empresa que otorga los recursos" : "Nombre de la instancia que otorga los recursos"}
                    type="text"
                    category="emisor"
                    group="transferencia"
                    autoComplete={[this.state.contratoType]}
                    empresa={this.props.empresa}
                    db={this.props.parent.props.db}
                    ref={this.setChildRef}
                    matchWith={ this.state.contratoType ? [this.state.contratoType] : null}
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
                {
                  this.state.contratoType == "instancia" ?
                  <DbInput
                    onChange={(slug, obj) => this.insertField(slug, obj)}
                    name="Número de convenio relacionado"
                    group="transferencia"
                    matchWith={['convenio']}
                    empresa={this.props.empresa}
                    db={this.props.parent.props.db}
                    ref={this.setChildRef}
                  />
                : null
                }

                </>
              : null }
              </>
              : null}


            </div>
          </DialogContent>
          <DialogActions>
            <Button color="secondary" onClick={() => this.close()}>
              Cancelar
            </Button>
            <Button  color="secondary" onClick={() => this.add()}>
              {addL}
            </Button>
          </DialogActions>
        </Dialog>
      </ExpansionPanel>
    )
  }
}
