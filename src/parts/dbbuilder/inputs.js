import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@material-ui/core/Icon';
import { _t, isMexico, getCurrentCountry, getCurrencyCountry, getFlag } from '../../vars/countriesDict';
import LinearProgress from '@material-ui/core/LinearProgress';
import { getLatLng } from 'react-places-autocomplete';
import formatMoney, {convertToActualCurrency} from '../../funcs/formatMoney';
import Tooltip from '@material-ui/core/Tooltip';


var slugify = require('slugify');
const uuidv4 = require('uuid/v4');
const queryString = require('query-string');

export default class DbInput extends React.Component{
  state = {
    haschanged: false,
    autoCompleteLoading: false,
    isfocus: false,
    autocompleteData: [],
    hasloaded: false,
    value: ""
  }
  componentDidMount(){
    this.setInitialValue();
    this.mi = null;
    var self = this;
    window.addEventListener('sinapsis_lang_change', function(){
      self.validate();
    })
  }
  setInitialValue(){
    var em = this.props.empresa;
    if(em){
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
    }else{
      this.validate();
    }

  }

  componentDidUpdate(op, os){
    if(this.props.empresa){
      if(this.props.empresa.uid !== op.empresa.uid){
        this.setInitialValue();
        this.setState({
          hasloaded: false
        })
      }
    }

  }

  maskValue(v){
    var t = this.props.type;
    if(t == "currency"){
      v = v.toString();
      v = v.replace('$', '');
      v = v.replace(/\,/g, '');
      v = window.dbf.numberWithCommas(v);
    }
    return v;
  }


  setValue(v, forceNoChange){
    var self = this;
    var rawvalue = v;
    v = this.maskValue(v);
    if(this.props.onValue){
      this.props.onValue(v);
    }

    this.setState({
      value: v,
      rawvalue: rawvalue,
      haschanged: forceNoChange ? false : true
    })
    setTimeout(function(){
      self.validate();
      if(self.state.hasloaded){
        self.setAutoComplete();
      }
      self.setState({
        hasloaded: true
      })
    }, 70);
  }

  setAutoComplete(){
    var self = this;
    clearTimeout(this.mi);
    if(this.props.matchWith && this.props.matchWith.indexOf('address') > -1){
      this.mi = setTimeout(function(){
        self.setAutoCompleteAddress();
      }, 500);
    }else if((this.props.matchWith && this.props.matchWith.length) || this.props.autoComplete && this.props.autoComplete.length){
      var c = this.props.matchWith[0];
      if(!this.props.matchWith || !c){
        var c = this.props.autoComplete[0];
      }
      this.mi = setTimeout(function(){
        self.setAutoCompleteStandard(c);
      }, 500);
    }
  }

  setAutoCompleteStandard(type){
    this.setState({
      autoCompleteLoading: true,
    })
    var r = [];
    var all = window.dbf.searchByType(this.state.value, type);
    all.map(function(d){
      var em = {
        label: d.value || d.name,
        type: 'autocompleted',
        additionalData: d
      }
      r.push(em);
    })
    this.setState({
      autocompleteData: r,
      autoCompleteLoading: false
    })
  }

  async setAutoCompleteAddress(){
    if(this.state.autoCompleteLoading){
      console.log('wait');
      return;
    }
    var a = this.state.value;
    if(a && a.length > 2){
      this.setState({
        autoCompleteLoading: true,
      })
      var r = [];
      try{
        var geocode = await window.dbf.geocode(a);
        if(geocode.length){
          geocode.map(function(e){
            var em = {
              label: e.formatted_address,
              type: 'autocompleted_address',
              additionalData: e
            }
            r.push(em)
          })
        }
      }catch(err){
      }
      this.setState({
        autocompleteData: r,
        autoCompleteLoading: false
      })
    }
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
    document.body.classList.add('ss_focusing_input');
    this.setState({
      isfocus: true,
      hasloaded: true
    })
  }

  validateFromRgx(rgx){
    var v = this.state.value.toLowerCase();
    var match = v.match(rgx);
    return match ? true : false;
  }

  validateRfc(){
    /* Mex */
    if(isMexico()){
      var regx = /(([ÑA-Z|ña-z|&]{3}|[A-Z|a-z]{4})\d{2}((0[1-9]|1[012])(0[1-9]|1\d|2[0-8])|(0[13456789]|1[012])(29|30)|(0[13578]|1[02])31)(\w{2})([A|a|0-9]{1}))$|^(([ÑA-Z|ña-z|&]{3}|[A-Z|a-z]{4})([02468][048]|[13579][26])0229)(\w{2})([A|a|0-9]{1})/;
      return this.validateFromRgx(regx);
    }else{
      return true;
    }

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
    if(!this.state.hoveringAutocomplete){
      this.setState({
        isfocus: false,
        autoCompleteLoading: false,
      })
      document.body.classList.remove('ss_focusing_input');
    }
    if(this.state.haschanged){
      this.saveLocalChanges();
    }
  }

  getFieldSlug(){
    var inn = this.getInputName();
    var n = this.props.group ? this.props.group + '-' : '';
    if(this.props.group == "transferencia"){
      inn = inn.replace(/[.\s]/g, '');
      inn = slugify(inn, {lower: true});
    }
    n = n + inn;
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

  async saveLocalChanges(){
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

    if(this.props.transferenciaGroup){
      obj.transferenciaGroup = this.props.transferenciaGroup;
    }


    var forceMap = false;
    if(this.state.autocompleted_address){
      var ad = this.state.autocompleted_address;
          ad = ad.additionalData;
      var latlng = await getLatLng(ad);
      if(latlng){
        obj.latlng = latlng;
      }
      forceMap = true;
    }


    if(this.props.onChange){
      window.dispatchEvent(new Event('ss_lazy_indicator'));
      this.props.onChange(slug, obj);
      if(forceMap){
        var ev = new Event('ss_reload_map');
        window.dispatchEvent(ev);
      }
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

  handleAutoSelectData(d){
    var self = this;
    this.setState({
      isfocus: false
    })
    if(d){
      var label = d.label;
      this.setValue(label);

      if(d.type == "autocompleted_address"){
        this.setState({
          autocompleted_address: d
        })
      }

      setTimeout(function(){
        self.saveLocalChanges();
      }, 50)
    }


  }

  getLabel(){
    var l = [];
    l.push(_t(this.getName()));
    var t = this.props.type;

    if(t == "currency"){
      var currency = window.dbf.getDbCurrencyObj(this.props.db.id);
      l.push(<div> (<img src={getFlag(currency.country)} /> {currency.symbol} {currency.currency})</div>);
    }


    return l;
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

    if(this.props.textarea){
      cs.push('ss_textarea');
    }

    /** Google Maps **/
    var show_gm = false;
    if(this.props.matchWith && this.props.matchWith.indexOf('address') > -1 && this.state.value){
      var isl = window.dbf.isAddressGoogleMaps(this.state.value);
      if(isl){
        show_gm = true;
        var fll = '@'+isl.latlng.lat+','+isl.latlng.lng;
        var ggl = isl.googleResult;
        var gm_url = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(ggl);
      }else{
        show_gm = true;
        var gm_url = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(this.state.value);
      }
    }

    var cco = false;
    if(this.props.type == "currency" && this.state.value){
      var cobj = window.dbf.getDbCurrencyObj(this.props.db.id);
      if(cobj.currency !== getCurrentCountry().currency){
        var cco_country = getCurrentCountry().code;
        cco = Math.round(convertToActualCurrency(this.state.value, cobj.currency));
        cco = '~ ' + formatMoney(cco);
      }
    }


    return(
      <div className={cs.join(' ')}>
        <div className="ss_db_input_container">
          <div className="ss_db_input_container_input">
            {
              this.props.textarea ?
              <textarea
                className={ics.join(' ')}
                value={this.state.value}
                placeholder={this.props.placeholder}
                onChange={(e) => this.setValue(e.target.value)}
                onFocus={() => this.handleFocus()}
                onBlur={() => this.handleBlur()}
              ></textarea>
            :
            <input
              className={ics.join(' ')}
              type="text"
              value={this.state.value}
              onChange={(e) => this.setValue(e.target.value)}
              onFocus={() => this.handleFocus()}
              onBlur={() => this.handleBlur()}
            />
            }
          {
            !this.props.hideLabel ?
            <div className="ss_db_input_container_label">
              <div className="ss_db_input_container_label_tl">
                {this.getLabel()}
                {
                  isMexico() && this.props.description?
                  <div className="ssi_tooltip">
                    <Tooltip
                      title={this.props.description}
                    >
                        <Icon size="small">info</Icon>
                    </Tooltip>
                  </div>
                  : null
                }
              </div>
              {
                show_gm ?
                <div className="ss_db_input_container_label_icon" style={{width: "100%"}}>
                  <a href={gm_url} target="_blank" style={{color: "#0072ff"}}>
                    (Ver en Google Maps)
                  </a>
                </div>
                : null
              }

            </div>
            : null
          }

            {
              this.state.isfocus && this.state.value.length > 0 && this.state.autocompleteData.length > 0 ?
              <div
                onMouseEnter={(e) => this.setState({hoveringAutocomplete: true})}
                onMouseLeave={() => this.setState({hoveringAutocomplete: false})}
              >
              <InputAutocomplete
                data={this.state.autocompleteData}
                onSelect={(d) => this.handleAutoSelectData(d)}
                isLoading={this.state.autoCompleteLoading}
              />
            </div>
            : null
            }

            {
              cco ?
              <div className="ss_db_input_container_hint">
                  <img src={getFlag(cco_country)} /> {cco}
                <Tooltip title="Todos los tipos de cambio que utilizamos se actualizan cada 24 horas, utilizando fixer.io">
                  <Icon>help</Icon>
                </Tooltip>
              </div>
              : null
            }
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


class InputAutocomplete extends React.Component{
  state = {
    currentIndex: -1
  }

  componentDidUpdate(ep){
    if(ep.data.length !== this.props.data.length){
      this.setState({
        currentIndex: -1
      })
    }
  }

  componentDidMount(){
    var self = this;
    window.addEventListener('keydown', function(e){
      var w = e.which;
      var ems = self.props.data;
      var max = ems.length;
      if(w == 40 || w == 38){
        var i = w == 40 ? 1 : -1;
        var c = self.state.currentIndex + i;
            c = Math.max(0, c);
            c = Math.min(c, max);
        self.setState({
          currentIndex: c
        })

        try{
          var tid = document.getElementById('autocomplete_'+c);
          var st = tid.offsetTop;
          self.results.scrollTop = st - 10;
        }catch(ex){

        }


      }
      if(w == 13 && self.state.currentIndex > -1){
        var em = ems[self.state.currentIndex];
        self.props.onSelect(em);
      }
    })
  }
  render(){
    var d = this.props.data;
    var self = this;
    this.r = [];
    return(
      <div className="ss_input_autocomplete">
        <div className="ss_input_autocomplete_loader">
        {
          this.props.isLoading ?
            <LinearProgress color="secondary"/>
          : null
        }
        </div>
        <div className="ss_input_autocomplete_results" ref={(ref) => this.results = ref}>
          {d.map(function(_d, i){
            return <InputAutocompleteRow d={_d} index={i} key={i} ref={(ref) => self.r.push(ref)} selected={i == self.state.currentIndex} onSelect={(d) => self.props.onSelect(d)}/>
          })}
        </div>
      </div>
    )
  }
}

class InputAutocompleteRow extends React.Component{
  select(d){
    this.props.onSelect(d);
  }
  render(){
    var d = this.props.d;
    var cs = ["ss_input_autocomplete_row"];
    if(this.props.selected){
      cs.push('ss_selected');
    }
    return(
      <div className={cs.join(' ')} id={"autocomplete_"+this.props.index} onClick={() => this.select(d)}>
        {d.label}
      </div>
    )
  }
}
