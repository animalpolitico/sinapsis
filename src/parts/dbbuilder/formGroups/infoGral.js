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

export default class DbFormGroupInfoGeneral extends React.Component{
  render(){
    return(
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<Icon>expand_more</Icon>}>
          <div className="dbef_n">
            <div className="dbef_n_n">
              Información general
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
              errorType="warning"
              errorLegend="Revisa que el formato de RFC sea válido"
              empresa={this.props.empresa}
            />
            <DbInput
              onChange={(slug, obj) => this.props.parent.insertField(slug, obj)}
              name="Folio Mercantil"
              type="text"
              unique
              errorType="warning"
              errorLegend="Ya insertaste este folio mercantil"
              empresa={this.props.empresa}
            />
            <DbInput
              onChange={(slug, obj) => this.props.parent.insertField(slug, obj)}
              name="Objeto social"
              type="text"
              multiline
              empresa={this.props.empresa}
            />
            <DbInput
              onChange={(slug, obj) => this.props.parent.insertField(slug, obj)}
              name="Fecha de creación"
              type="date"
              empresa={this.props.empresa}
            />
            <DbInput
              onChange={(slug, obj) => this.props.parent.insertField(slug, obj)}
              name="Capital social mínimo"
              type="currency"
              empresa={this.props.empresa}
            />
            <DbInput
              onChange={(slug, obj) => this.props.parent.insertField(slug, obj)}
              name="Dirección fiscal"
              matchWith={['address']}
              type="address"
              empresa={this.props.empresa}
            />
            <DbInput
              onChange={(slug, obj) => this.props.parent.insertField(slug, obj)}
              matchWith={['phone']}
              mask="tel"
              name="Teléfono"
              type="text"
              empresa={this.props.empresa}
            />
            <DbInput
              onChange={(slug, obj) => this.props.parent.insertField(slug, obj)}
              matchWith={['website']}
              validate={['website']}
              name="Sitio web"
              type="text"
              errorLegend="Sitio web inválido"
              empresa={this.props.empresa}
            />
            <DbInput
              onChange={(slug, obj) => this.props.parent.insertField(slug, obj)}
              matchWith={['email']}
              validate={['email']}
              name="Correo electrónico"
              type="text"
              errorLegend="Correo electrónico inválido"
              empresa={this.props.empresa}
            />
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    )
  }
}
