import React from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import PropTypes from 'prop-types';
var slugify = require('slugify');

export default class DbEditEmpresa extends React.Component{
  componentDidUpdate(op, os){
    if(this.props.empresa.uid !== op.empresa.uid){
      this.setState({
        fields: {}
      })
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
  }

  handleNameChange(slug, obj){
    var name = obj.value;
    window.dbf.modifyEmpresaName(this.props.db.id, this.props.empresa.uid, name);
    this.insertField(slug, obj);
  }

  render(){
    return(
      <div className="db_empresa_edit_container">
        <DbEditEmpresaDbInfo {...this.props} />
        <div className="db_empresa_container_form">
          <div className="db_empresa_container_group">
            <div className="db_empresa_container_group_title">General</div>
            <div className="db_empresa_container_group_form">
              <DbInput
                onChange={(slug, obj) => this.handleNameChange(slug, obj)}
                matchWith={['empresa']}
                name="Razón social"
                type="text"
                defaultValue={this.props.empresa.name}
                hint="Nombre de la empresa o persona"
                required
                empresa={this.props.empresa}
              />
              <DbInput
                onChange={(slug, obj) => this.insertField(slug, obj)}
                matchWith={['rfc']}
                validate={['rfc']}
                name="RFC"
                type="text"
                empresa={this.props.empresa}
              />
              <DbInput
                onChange={(slug, obj) => this.insertField(slug, obj)}
                name="Folio Mercantil"
                type="text"
                unique
                empresa={this.props.empresa}
              />
              <DbInput
                onChange={(slug, obj) => this.insertField(slug, obj)}
                name="Objeto social"
                type="text"
                multiline
                empresa={this.props.empresa}
              />
              <DbInput
                onChange={(slug, obj) => this.insertField(slug, obj)}
                name="Fecha de creación"
                type="date"
                empresa={this.props.empresa}
              />
              <DbInput
                onChange={(slug, obj) => this.insertField(slug, obj)}
                name="Capital social mínimo"
                type="currency"
                empresa={this.props.empresa}
              />
              <DbInput
                onChange={(slug, obj) => this.insertField(slug, obj)}
                name="Dirección fiscal"
                matchWith={['address']}
                type="address"
                empresa={this.props.empresa}
              />
              <DbInput
                onChange={(slug, obj) => this.insertField(slug, obj)}
                matchWith={['phone']}
                mask="tel"
                name="Teléfono"
                type="text"
                empresa={this.props.empresa}
              />
              <DbInput
                onChange={(slug, obj) => this.insertField(slug, obj)}
                matchWith={['website']}
                validate={['website']}
                name="Sitio web"
                type="text"
                empresa={this.props.empresa}
              />
              <DbInput
                onChange={(slug, obj) => this.insertField(slug, obj)}
                matchWith={['email']}
                validate={['email']}
                name="Correo electrónico"
                type="text"
                empresa={this.props.empresa}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

class DbInput extends React.Component{
  state = {
    haschanged: false
  }

  componentDidMount(){
    this.setInitialValue();
  }

  setInitialValue(){
    var em = this.props.empresa;
    var fs = em.fields;
    if(!fs){
      fs = {};
    }
    var v = "";
    var slug = this.getFieldSlug();
    var field = fs[slug];
    if(field){
      v = field.value;
    }
    if(this.props.defaultValue){
      v = this.props.defaultValue;
    }
    this.setState({
      value: v
    })
  }

  componentDidUpdate(op, os){
    if(this.props.empresa.uid !== op.empresa.uid){
      this.setInitialValue();
    }
  }

  setValue(v){
    this.setState({
      value: v,
      haschanged: true
    })
  }

  handleFocus(){

  }

  validate(){
    var isvalid = true;
    /**
    * VALIDACIÓN
    **/
    this.setState({
      isvalid: isvalid
    })
    return isvalid;
  }

  handleBlur(){
    var valid = this.validate();
    if(valid && this.state.haschanged){
      this.saveLocalChanges();
    }
  }

  getFieldSlug(){
    var slug = slugify(this.props.name, {lower: true});
    return slug;
  }

  saveLocalChanges(){
    var slug = slugify(this.props.name, {lower: true});
    var obj = {
      name: this.props.name,
      matchWith: this.props.matchWith,
      slug: slug,
      value: this.state.value,
    }
    this.props.onChange(slug, obj);
  }

  render(){
    return(
      <div className="ss_db_input">
        <div className="ss_db_input_container">
          <div className="ss_db_input_container_input">
            <input
              type="text"
              value={this.state.value}
              onChange={(e) => this.setValue(e.target.value)}
              onFocus={() => this.handleFocus()}
              onBlur={() => this.handleBlur()}
            />
          </div>
          <div className="ss_db_input_container_label">
            {this.props.name}
          </div>
        </div>
      </div>
    )
  }
}

DbInput.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
}

DbInput.defaultProps = {
  matchWith: [],
  validate: [],
  format: []
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
