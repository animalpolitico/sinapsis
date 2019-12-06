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
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';
import DbInput from '../inputs';
import Tooltip from '@material-ui/core/Tooltip';
import { isMexico } from '../../../vars/countriesDict';
export default class DbFormGroupInfoGeneral extends React.Component{
  state = {
    open: true
  }
  componentDidMount(){
  }
  render(){

    var entidad = this.props.empresa.fields['entidad-federativa'];
    var has_entidad = entidad && entidad.value;

    return(
      <>
      <ExpansionPanel expanded={this.state.open} onChange={(e, ex) => this.setState({open: ex})}>
        <ExpansionPanelSummary expandIcon={<Icon>expand_more</Icon>}>
          <div className="dbef_n">
            <div className="dbef_n_n">
              Información general
              {
                isMexico() ?
                <div className="dbef_n_tooltip">
                  <Tooltip
                    title="Puedes conseguir esta información desde SIGER. Da clic para visitar el sitio"
                  >
                    <a href="https://rpc.economia.gob.mx/" target="_blank">
                      <Icon size="small">help</Icon>
                    </a>
                  </Tooltip>
                </div>
                : null
              }
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
            <DbInput
              onChange={(slug, obj) => this.props.parent.insertField(slug, obj)}
              matchWith={['rfc']}
              validate={['rfc']}
              name="RFC"
              type="text"
              description="Clave que otorga el Servicio de Administración Tributaria (SAT), ésta es la Cédula de Identificación Fiscal de la empresa."
              errorType="warning"
              errorLegend="Quizá debas eliminar guiones o puntos"
              empresa={this.props.empresa}
            />
            <DbInput
              onChange={(slug, obj) => this.props.parent.insertField(slug, obj)}
              name="Folio Mercantil"
              type="text"
              unique
              description="Las empresas tienen la obligación de inscribirse en el Registro Público del Comercio para que la sociedad sepa de su existencia. Cuando una empresa queda inscrita en el Registro éste le asigna un folio mercantil para identificarla."
              errorType="warning"
              errorLegend="Ya insertaste este folio mercantil"
              empresa={this.props.empresa}
            />

            <DbInput
              onChange={(slug, obj) => this.props.parent.insertField(slug, obj)}
              name="Objeto social"
              type="text"
              multiline
              description='Es la descripción de las actividades que va a llevar a cabo la empresa, por ejemplo "consultoría en tecnología" o "servicios de arquitectura y construcción"'
              empresa={this.props.empresa}
            />
            <DbInput
              onChange={(slug, obj) => this.props.parent.insertField(slug, obj)}
              name="Número de empleados"
              type="text"
              empresa={this.props.empresa}
            />
            <DbInput
              onChange={(slug, obj) => this.props.parent.insertField(slug, obj)}
              name="Fecha de creación"
              type="date"
              matchWith={['date']}
              empresa={this.props.empresa}
            />
            <DbInput
              onChange={(slug, obj) => this.props.parent.insertField(slug, obj)}
              name="Capital social mínimo"
              type="currency"
              description='Se refiere a la cantidad de dinero con la que se registró la empresa.'
              db={this.props.parent.props.db}
              empresa={this.props.empresa}
            />
            <DbInput
              onChange={(slug, obj) => this.props.parent.insertField(slug, obj)}
              name="Dirección fiscal"
              matchWith={['address']}
              type="address"
              description='Domicilio de la empresa, ésta debe aparecer en los contratos o convenios'
              empresa={this.props.empresa}
            />
          {
            has_entidad ?
            <DbInput
              onChange={(slug, obj) => this.props.parent.insertField(slug, obj)}
              name="Entidad Federativa"
              description='En qué estado se creó la empresa (CDMX, Veracruz, Chiapas, etc). Este dato se encuentra en el acta constitutiva'
              empresa={this.props.empresa}
            />
          : null
          }

            <DbInput
              onChange={(slug, obj) => this.props.parent.insertField(slug, obj)}
              matchWith={['phone']}
              mask="tel"
              name="Teléfono"
              type="text"
              description='Número telefónico de la empresa (procura no usar guiones, ni paréntesis, ni espacios)'
              empresa={this.props.empresa}
            />
            <DbInput
              onChange={(slug, obj) => this.props.parent.insertField(slug, obj)}
              matchWith={['website']}
              validate={['website']}
              name="Sitio web"
              type="text"
              description='Dirección electrónica del sitio web de la empresa'
              errorLegend="Sitio web inválido"
              empresa={this.props.empresa}
            />
            <DbInput
              onChange={(slug, obj) => this.props.parent.insertField(slug, obj)}
              matchWith={['email']}
              validate={['email']}
              name="Correo electrónico"
              type="text"
              description='Dirección de correo electrónico de la empresa'
              errorLegend="Correo electrónico inválido"
              empresa={this.props.empresa}
            />
          </div>
        </ExpansionPanelDetails>
        {this.props.children}
      </ExpansionPanel>
      </>
    )
  }
}
