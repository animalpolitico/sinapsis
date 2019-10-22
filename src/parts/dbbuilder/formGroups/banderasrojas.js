import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CountTo from 'react-count-to';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';
import DbInput from '../inputs';
import Tooltip from '@material-ui/core/Tooltip';
import { isMexico } from '../../../vars/countriesDict';
var slugify = require('slugify');


export default class DbFormGroupBanderasRojas extends React.Component{
  state = {
    open: false,
    bs: []
  }
  componentDidMount(){
    this.fetch();
  }

  fetch(){
    var dbuid = this.props.parent.props.db.id;
    var euid = this.props.empresa.uid;
    var o = window.dbf.getBanderasRojas(euid, dbuid);
    this.setState({
      bs: o
    })
  }

  handleChange(e){
    var bs = [];
    var iis = document.querySelectorAll('.br_i:checked');

    for(var i = 0; i < iis.length; i++){
      var em = iis[i];
      var v = em.value;
      bs.push(v);
    }
    this.setState({
      bs: bs
    })

    var n = "Banderas rojas";
    var s = slugify(n, {lower: true});

    var obj = {
      slug: s,
      bs: bs
    }
    console.log('OBJ', obj);

    this.props.parent.insertField(s, obj);

  }

  render(){
    var bs = this.state.bs;
    return(
      <>
      <ExpansionPanel expanded={this.state.open} onChange={(e, ex) => this.setState({open: ex})}>
        <ExpansionPanelSummary expandIcon={<Icon>expand_more</Icon>}>
          <div className="dbef_n">
            <div className="dbef_n_n">
              Banderas Rojas <span className="dbef_n_n_badge" style={{backgroundColor: "red"}}>{bs.length}</span>
            </div>
            <div className="dbef_n_ctas">
              {
                this.state.open ?
                <div className="dbef_n_ctas_c" onClick={() => this.setState({open: false})}>Guardar</div>
                : null
              }
            </div>
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div className="db_empresa_container_group_form">
            <div className="db_empresa_container_group_rg">
              <div className="db_empresa_container_group_rg_title">
                <div className="rg_title">
                  ¿Es Empresa Fantasma del SAT?
                  {
                    isMexico() ?
                    <div className="dbef_n_tooltip">
                      <Tooltip
                        title="Puedes conseguir esta información desde SAT. Da clic para visitar el sitio"
                      >
                        <a href="http://omawww.sat.gob.mx/cifras_sat/Paginas/datos/vinculo.html?page=ListCompleta69B.html" target="_blank">
                          <Icon size="small">help</Icon>
                        </a>
                      </Tooltip>
                    </div>
                    : null
                  }
                </div>
              </div>
              <div className="db_empresa_container_group_rg_checkboxes">
                <div className="db_empresa_container_group_rg_checkboxes_ch">
                  <input checked={bs.indexOf('SATdefinitiva') > -1} className="br_i" onChange={(e) => this.handleChange(e)} type="radio" name="sat_status" value="SATdefinitiva"></input>
                    <div className="db_empresa_container_group_rg_checkboxes_ch_info">
                      <div className="rg_ch_i_i">
                        <Icon>{bs.indexOf('SATdefinitiva') > -1 ? "radio_button_checked" : "radio_button_unchecked"}</Icon>
                      </div>
                      <div className="rg_ch_i_l">
                        Definitiva
                      </div>
                    </div>
                </div>
                <div className="db_empresa_container_group_rg_checkboxes_ch">
                  <input checked={bs.indexOf('SATdesvirtuados') > -1} className="br_i" onChange={(e) => this.handleChange(e)} type="radio" name="sat_status" value="SATdesvirtuados"></input>
                    <div className="db_empresa_container_group_rg_checkboxes_ch_info">
                      <div className="rg_ch_i_i">
                        <Icon>{bs.indexOf('SATdesvirtuados') > -1 ? "radio_button_checked" : "radio_button_unchecked"}</Icon>
                      </div>
                      <div className="rg_ch_i_l">
                        Desvirtuada
                      </div>
                    </div>
                </div>
                <div className="db_empresa_container_group_rg_checkboxes_ch">
                  <input checked={bs.indexOf('SATpresunta') > -1} className="br_i" onChange={(e) => this.handleChange(e)} type="radio" name="sat_status" value="SATpresunta"></input>
                    <div className="db_empresa_container_group_rg_checkboxes_ch_info">
                      <div className="rg_ch_i_i">
                        <Icon>{bs.indexOf('SATpresunta') > -1 ? "radio_button_checked" : "radio_button_unchecked"}</Icon>
                      </div>
                      <div className="rg_ch_i_l">
                        Presunta
                      </div>
                    </div>
                </div>
                <div className="db_empresa_container_group_rg_checkboxes_ch">
                  <input checked={bs.indexOf('SATfavorables') > -1} className="br_i" onChange={(e) => this.handleChange(e)} type="radio" name="sat_status" value="SATfavorables"></input>
                    <div className="db_empresa_container_group_rg_checkboxes_ch_info">
                      <div className="rg_ch_i_i">
                        <Icon>{bs.indexOf('SATfavorables') > -1 ? "radio_button_checked" : "radio_button_unchecked"}</Icon>
                      </div>
                      <div className="rg_ch_i_l">
                        Sentencias favorables
                      </div>
                    </div>
                </div>
              </div>
            </div>

            <div className="db_empresa_container_group_rg">
              <div  className="db_empresa_container_group_rg_title">
                <input checked={bs.indexOf('RegCompraNet') > -1} onChange={(e) => this.handleChange(e)} className="br_i"  type="checkbox" name="ch_compranet" value="RegCompraNet"></input>
                <div className="rg_title_ch">
                  <Icon>{bs.indexOf('RegCompraNet') > -1 ? "check_box" : "check_box_outline_blank"}</Icon>
                </div>
                <div className="rg_title">
                  No está registrada en Compranet
                  {
                    isMexico() ?
                    <div className="dbef_n_tooltip">
                      <Tooltip
                        title="Puedes conseguir esta información desde SAT. Da clic para visitar el sitio"
                      >
                        <a href="https://compranet.hacienda.gob.mx/web/login.html" target="_blank">
                          <Icon size="small">help</Icon>
                        </a>
                      </Tooltip>
                    </div>
                    : null
                  }
                </div>
              </div>
            </div>

            <div className="db_empresa_container_group_rg">
              <div className="db_empresa_container_group_rg_title">
                <input checked={bs.indexOf('NoInscritoRUPC') > -1} className="br_i"  onChange={(e) => this.handleChange(e)} type="checkbox" name="ch_rupc" value="NoInscritoRUPC"></input>
                <div className="rg_title_ch">
                  <Icon>{bs.indexOf('NoInscritoRUPC') > -1 ? "check_box" : "check_box_outline_blank"}</Icon>
                </div>
                <div className="rg_title">
                  No está inscrito en el RUPC
                  {
                    isMexico() ?
                    <div className="dbef_n_tooltip">
                      <Tooltip
                        title="Puedes conseguir esta información desde el RUPC. Da clic para visitar el sitio"
                      >
                        <a href="https://www.gob.mx/compranet/acciones-y-programas/registro-unico-de-proveedores-y-contratistas-rupc" target="_blank">
                          <Icon size="small">help</Icon>
                        </a>
                      </Tooltip>
                    </div>
                    : null
                  }
                </div>
              </div>
            </div>

            <div className="db_empresa_container_group_rg">
              <div className="db_empresa_container_group_rg_title">
                <input checked={bs.indexOf('ASFnoLocalizada') > -1} className="br_i"  onChange={(e) => this.handleChange(e)} type="checkbox" name="ch_asf" value="ASFnoLocalizada"></input>
                <div className="rg_title_ch">
                  <Icon>{bs.indexOf('ASFnoLocalizada') > -1 ? "check_box" : "check_box_outline_blank"}</Icon>
                </div>
                <div className="rg_title">
                  No está localizada por la ASF
                  {
                    isMexico() ?
                    <div className="dbef_n_tooltip">
                      <Tooltip
                        title="Puedes conseguir esta información desde la ASF. Da clic para visitar el sitio"
                      >
                        <a href="https://asf.gob.mx/Default/Index" target="_blank">
                          <Icon size="small">help</Icon>
                        </a>
                      </Tooltip>
                    </div>
                    : null
                  }
                </div>
              </div>
            </div>

            <div className="db_empresa_container_group_rg">
              <div className="db_empresa_container_group_rg_title">
                <input checked={bs.indexOf('SinAntReg') > -1} className="br_i"  onChange={(e) => this.handleChange(e)} type="checkbox" name="ch_asf" value="SinAntReg"></input>
                <div className="rg_title_ch">
                  <Icon>{bs.indexOf('SinAntReg') > -1 ? "check_box" : "check_box_outline_blank"}</Icon>
                </div>
                <div className="rg_title">No tiene antecedentes registrales</div>
              </div>
            </div>

          </div>
        </ExpansionPanelDetails>
        {this.props.children}
      </ExpansionPanel>
      </>
    )
  }
}

class BanderaRoja extends React.Component{

  render(){
    return(
      <div className="ss_db_br">
        <div className="ss_db_br_name"></div>
      </div>
    )
  }

}
