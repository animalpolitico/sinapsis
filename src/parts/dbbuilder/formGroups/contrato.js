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


export default class DbFormGroupContrato extends React.Component{
  state = {
    open: false,
    isedit: false,
    personType: 'contrato',
    fields: {},
    modalChanged: false,
    contratoType: '',
    licitacion: false,
    res: false
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
      isedit: isEdit,
      res: false
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

  onSelectPersonType(e){
    var t = e.target.value;
    var preSlug = 'tipo persona';
    var slug = slugify(preSlug);
    var obj = {
      group: t,
      value: t,
      bigGroup: 'persona',
      isvalid: true,
      guid: this.state.guid,
      groupUid: this.state.guid,
      name: 'Tipo de persona'
    };
    this.setState({
      personType: t
    })
    this.insertField(slug, obj, true);
  }

  getGroup(){
    var type = "contrato";
    var dbuid = this.props.parent.props.db.id;
    var euid = this.props.empresa.uid;
    var gr = window.dbf.getEmpresaGroupsByGroup(dbuid, euid, type);
    return gr;
  }

  editContrato(guid){
    this.open(guid);
  }

  render(){
    var self = this;
    var addL = this.state.isedit ? 'Guardar' : 'Agregar';
    var contratos = this.getGroup();

    var type = this.state.contratoType;

    if(this.state.isedit && !this.state.res){
      var t = contratos[0].filter(f => f.slug == "contrato-quien-otorga-los-recursos");
      console.log('T', t);
      if(t.length){
        var type = t[0].type;
      }
    }

    var mw = type == "empresa" ? ['empresa'] : ['instancia'];

    var licitacion = this.state.licitacion;

    return(
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<Icon>expand_more</Icon>}>
          <div className="dbef_n">
            <div className="dbef_n_n">
              Contratos <span className="dbef_n_n_badge">{contratos.length}</span>
              {
                isMexico() ?
                <div className="dbef_n_tooltip">
                  <Tooltip
                    title="Puedes conseguir esta información desde CompraNet. Da clic para visitar el sitio"
                  >
                    <a href="https://compranet.hacienda.gob.mx/web/login.html" target="_blank">
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
              contratos.length ?
              <div className="db_empresa_container_group_form_innerlist">
                {
                  contratos.map(function(e, k){
                    return (
                      <TransactionRow
                        parent={self}
                        g={e}
                        key={k}
                        empresa={self.props.empresa}
                        receptorIsEmpresa
                        count={k + 1}
                        onClick={(uid) => self.editContrato(uid)}
                        singleName="Contrato"
                      />
                    )
                  })
                }
              </div>
              :
              <div className="db_empresa_container_group_form_empty">
                Sin contratos
              </div>
            }
          </div>
        </ExpansionPanelDetails>

        {/* Modal */}
        <Dialog open={this.state.open} onClose={() => this.close()} className="ss_modal_edit">
          <DialogTitle>{addL} contrato</DialogTitle>
          <DialogContent>
            <div className="db_empresa_container_group_form">
                  <>
                  <div className="ss_db_input_select">
                    <div className="db_empresa_container_group_radios_title">
                      ¿Quien otorga los recursos es empresa o {_t('instancia / dependencia')}?
                    </div>
                    <select onChange={(e) => this.setState({contratoType: e.target.value, res: true})} value={type}>
                      <option value="" disabled selected>Selecciona...</option>
                      <option value="empresa">Empresa</option>
                      <option value="instancia">{_t('Instancia / Dependencia')}</option>
                    </select>
                  </div>
                  {
                    this.state.res || this.state.isedit ?
                  <>
                    <DbInput
                      onChange={(slug, obj) => this.insertField(slug, obj)}
                      matchWith={mw}
                      name="¿Quién otorga los recursos?"
                      type="text"
                      category="emisor"
                      group="contrato"
                      empresa={this.props.empresa}
                      db={this.props.parent.props.db}
                      ref={this.setChildRef}
                    />
                    <DbInput
                      onChange={(slug, obj) => this.insertField(slug, obj)}
                      name="Número de contrato"
                      matchWith={['convenio']}
                      type="text"
                      group="contrato"
                      empresa={this.props.empresa}
                      db={this.props.parent.props.db}
                      ref={this.setChildRef}
                    />
                    <DbInput
                      onChange={(slug, obj) => this.insertField(slug, obj)}
                      name="Fecha de inicio"
                      type="date"
                      matchWith={['date']}
                      group="contrato"
                      empresa={this.props.empresa}
                      db={this.props.parent.props.db}
                      ref={this.setChildRef}
                    />
                    <DbInput
                      onChange={(slug, obj) => this.insertField(slug, obj)}
                      name="Fecha de término"
                      type="text"
                      matchWith={['date']}
                      group="contrato"
                      empresa={this.props.empresa}
                      db={this.props.parent.props.db}
                      ref={this.setChildRef}
                    />
                    <DbInput
                      onChange={(slug, obj) => this.insertField(slug, obj)}
                      name="Servicio realizado"
                      type="text"
                      group="contrato"
                      empresa={this.props.empresa}
                      db={this.props.parent.props.db}
                      ref={this.setChildRef}
                    />
                    <DbInput
                      onChange={(slug, obj) => this.insertField(slug, obj)}
                      matchWith={['person']}
                      name="Persona que firma"
                      type="text"
                      group="contrato"
                      empresa={this.props.empresa}
                      db={this.props.parent.props.db}
                      ref={this.setChildRef}
                    />
                    <DbInput
                      onChange={(slug, obj) => this.insertField(slug, obj)}
                      name="Cargo de quien firma"
                      type="text"
                      group="contrato"
                      empresa={this.props.empresa}
                      db={this.props.parent.props.db}
                      ref={this.setChildRef}
                    />
                    <DbInput
                      onChange={(slug, obj) => this.insertField(slug, obj)}
                      name="Monto del contrato"
                      type="currency"
                      group="contrato"
                      category="monto"
                      sumWith={['montos_contrato', 'montos_totales']}
                      empresa={this.props.empresa}
                      db={this.props.parent.props.db}
                      ref={this.setChildRef}
                    />
                    <DbInput
                      onChange={(slug, obj) => this.insertField(slug, obj)}
                      matchWith={['person', 'titular']}
                      name="Titular de instancia"
                      type="text"
                      group="contrato"
                      empresa={this.props.empresa}
                      db={this.props.parent.props.db}
                      ref={this.setChildRef}
                    />
                    <div className="db_empresa_container_group_radios">
                      <div className="db_empresa_container_group_radios_title">
                        ¿Fue parte de una licitación?
                      </div>
                      <div className="db_empresa_container_group_radios_radio">
                        <input checked={licitacion} onChange={() => this.setState({licitacion: true, res1: true})} type="radio" name="ss_c_e_t_1" />
                          <div className="db_empresa_container_group_radios_radio_c">
                            Sí
                          </div>
                      </div>
                      <div className="db_empresa_container_group_radios_radio">
                        <input checked={!licitacion} onChange={() => this.setState({licitacion: false, res1: true})} type="radio" name="ss_c_e_t_1" />
                          <div className="db_empresa_container_group_radios_radio_c">
                            No
                          </div>
                      </div>
                    </div>
                    {
                      licitacion ?
                      <>
                        <DbInput
                          onChange={(slug, obj) => this.insertField(slug, obj)}
                          name="Fecha de fallo"
                          type="date"
                          matchWith={['date']}
                          group="contrato"
                          empresa={this.props.empresa}
                          db={this.props.parent.props.db}
                          ref={this.setChildRef}
                        />
                        <DbInput
                          onChange={(slug, obj) => this.insertField(slug, obj)}
                          name="Número de licitación"
                          matchWith={['convenio']}
                          group="contrato"
                          empresa={this.props.empresa}
                          db={this.props.parent.props.db}
                          ref={this.setChildRef}
                        />
                        <DbInput
                          onChange={(slug, obj) => this.insertField(slug, obj)}
                          name="Monto total de licitación"
                          type="currency"
                          group="contrato"
                          empresa={this.props.empresa}
                          db={this.props.parent.props.db}
                          ref={this.setChildRef}
                        />
                      </>
                    : null
                    }
                    </> : null }
                  </>
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
      </ExpansionPanel>
    )
  }
}
