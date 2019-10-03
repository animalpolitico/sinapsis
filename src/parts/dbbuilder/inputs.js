import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@material-ui/core/Icon';

var slugify = require('slugify');
const uuidv4 = require('uuid/v4');

export default class DbInput extends React.Component{
  state = {
    haschanged: false
  }
  componentDidMount(){
    this.setInitialValue();
  }
  setInitialValue(){
    var em = this.props.empresa;
    if(!this.props.meta){
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
    }else{
      if(em.meta && em.meta[this.props.meta]){
        v = em.meta[this.props.meta];
      }
    }

    if(this.props.defaultValue){
      v = this.props.defaultValue;
    }
    this.setValue(v, true);
  }

  componentDidUpdate(op, os){
    if(this.props.empresa.uid !== op.empresa.uid){
      this.setInitialValue();
    }
  }

  setValue(v, forceNoChange){
    var self = this;
    this.setState({
      value: v,
      haschanged: forceNoChange ? false : true
    })
    setTimeout(function(){
      self.validate();
    }, 70);
  }

  setValueFromGuid(guid){
    var s  = this.getFieldSlug();
        s = guid + '-' + s;
    var f = window.dbf.getEmpresaField(this.props.db.id, this.props.empresa.uid, s);
    if(f){
      if(f.value){
        this.setValue(f.value, true);
      }
    }
  }

  handleFocus(){

  }

  validateFromRgx(rgx){
    var v = this.state.value.toLowerCase();
    var match = v.match(rgx);
    return match ? true : false;
  }

  validateRfc(){
    /* Mex */
    var regx = /(([ÑA-Z|ña-z|&]{3}|[A-Z|a-z]{4})\d{2}((0[1-9]|1[012])(0[1-9]|1\d|2[0-8])|(0[13456789]|1[012])(29|30)|(0[13578]|1[02])31)(\w{2})([A|a|0-9]{1}))$|^(([ÑA-Z|ña-z|&]{3}|[A-Z|a-z]{4})([02468][048]|[13579][26])0229)(\w{2})([A|a|0-9]{1})/;
    return this.validateFromRgx(regx);
  }

  validateWebsite(){
    var regx = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
    return this.validateFromRgx(regx);
  }

  validateEmail(){
    var regx = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    return this.validateFromRgx(regx);
  }

  validate(){
    var self = this;
    var isvalid = true;

    if(this.state.value){
      var validations = this.props.validate;
      validations.map(function(t){
        switch(t){
          case "rfc":
            isvalid = isvalid && self.validateRfc();
          break;
          case "website":
            isvalid = isvalid && self.validateWebsite();
          break;
          case "email":
            isvalid = isvalid && self.validateEmail();
          break;
        }
      })
    }
    if(!this.state.value && this.props.required){
      isvalid = false;
    }

    this.setState({
      isvalid: isvalid
    })
    return isvalid;
  }

  handleBlur(){
    if(this.state.haschanged){
      this.saveLocalChanges();
    }
  }

  getFieldSlug(){
    var n = this.props.group ? this.props.group + '-' : '';
        n = n + this.getInputName();
    var slug = slugify(n, {lower: true});
    return slug;
  }

  filterValue(v){
    var t = this.props.type;

    if(t == "currency"){
      v = v.replace(/[^0-9.]/g, '');
      v = parseFloat(v);
    }

    return v;
  }

  saveLocalChanges(){
    var slug = this.getFieldSlug();
    var obj = {
      name: this.getName(),
      slug: slug,
      isvalid: this.state.isvalid,
      value: this.filterValue(this.state.value),
    }

    if(!this.state.isvalid){
      obj.errorLegend = this.props.errorLegend;
      obj.errorType = this.props.errorType;
    }

    if(this.props.category){
      obj.category = this.props.category;
    }

    if(this.props.matchWith){
      obj.matchWith = this.props.matchWith;
    }

    if(this.props.sumWith){
      obj.sumWith = this.props.sumWith;
    }

    if(this.props.group){
      obj.group = this.props.group;
    }

    if(this.props.groupUid){
      obj.groupUid = this.props.groupUid;
    }
    if(this.props.onChange){
      this.props.onChange(slug, obj);
    }
  }

  getInputName(){
    return this.props.name;
  }

  getName(){
    if(this.props.aka){
      return this.props.aka;
    }else{
      return this.props.name;
    }
  }

  render(){
    var cs = ['ss_db_input'];

    if(this.props.ismain || this.props.multiline || this.props.type == 'address'){
      cs = [...cs, 'ss_large'];
    }

    if(!this.state.isvalid){
      cs = [...cs, 'ss_invalid'];
    }

    cs = [...cs, 'ss_on_error_' + this.props.errorType];

    var ics = [];
    if(this.state.value){
      ics.push('ss_with_value');
    }

    return(
      <div className={cs.join(' ')}>
        <div className="ss_db_input_container">
          <div className="ss_db_input_container_input">
            <input
              className={ics.join(' ')}
              type="text"
              value={this.state.value}
              onChange={(e) => this.setValue(e.target.value)}
              onFocus={() => this.handleFocus()}
              onBlur={() => this.handleBlur()}
            />
            <div className="ss_db_input_container_label">
              {this.getName()}
            </div>
          </div>
          {
            !this.state.isvalid && this.props.errorLegend ?
            <div className="ss_db_input_container_error">
              <Icon>{this.props.errorType == 'error' ? 'error' : 'warning'}</Icon> ({this.props.errorLegend})
            </div>
            : null
          }

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
  format: [],
  errorType: 'error',
  errorLegend: 'Error de formato'
}
