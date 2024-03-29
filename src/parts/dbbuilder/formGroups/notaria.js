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
import { _t } from '../../../vars/countriesDict';

export default class DbFormGroupNotaria extends React.Component{
  state = {
    open: false
  }
  render(){
    return(
      <ExpansionPanel open={this.state.open} onChange={(e, ex) => this.setState({open: ex})}>
        <ExpansionPanelSummary expandIcon={<Icon>expand_more</Icon>} >
          <div className="dbef_n">
            <div className="dbef_n_n">
              {_t("Notaría")}
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
              matchWith={['person']}
              name="Nombre del notario"
              type="text"
              description='Nombre completo del notario que firma el acta constitutiva de la empresa.'
              group="Notaría"
              empresa={this.props.empresa}
            />
            <DbInput
              onChange={(slug, obj) => this.props.parent.insertField(slug, obj)}
              matchWith={['no_notaria']}
              name="Número de notaría"
              type="text"
              group="Notaría"
              empresa={this.props.empresa}
            />
            <DbInput
              onChange={(slug, obj) => this.props.parent.insertField(slug, obj)}
              name="Dirección de notaría"
              matchWith={['address']}
              type="address"
              group="Notaría"
              empresa={this.props.empresa}
            />
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    )
  }
}
