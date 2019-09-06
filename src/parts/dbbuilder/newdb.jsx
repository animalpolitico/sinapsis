import React from 'react';
import InputMask from 'react-input-mask';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
const uuidv4 = require('uuid/v4');

export default class DBNewDatabase extends React.Component{
  state = {
    uuid: uuidv4()
  }
  render(){
    var dbf = window.dbf;
    var gr = dbf.originalData;
    var mn = dbf.getMainObject();
    return(
      <div className="ss_new_db">
        <p>Añadir {mn.name}</p>
        {
          gr.map(function(g){
            return <DBFormGroup g={g} />
          })
        }
      </div>
    )
  }
}

class DBFormGroup extends React.Component{
  render(){
    var g = this.props.g;
    var groups = g.groups;
    if(!groups){
      return <h1>Error</h1>;
    }
    return(
      <div className="ss_ng_g">
        <h1>{g.name}</h1>
        <div className="ss_ng_gg">
          {
            g.groups.map(function(gg){
              return <DBFormGroupGroup g={gg} pg={g} />
            })
          }
        </div>
      </div>
    )
  }
}

class DBFormGroupGroup extends React.Component{
  render(){
    var g = this.props.g;
    var pg = this.props.pg;
    var groupName = g.name;
    var inputs = g.inputs;
    return(
      <div className="ss_ng_gg_igroup">
        <h2>{groupName}</h2>
        {
          inputs ?
          <DBFormRenderInputs inputs={inputs} group={g} pg={pg} />
          : null
        }
      </div>
    )
  }
}

class DBFormRenderInputs extends React.Component{
  render(){
    return(
      <div className="ss_ng_gg_igroup_inputs">
        {
          this.props.inputs.map(function(input, index){
            return <DBFormRenderInput key={index} input={input}/>
          })
        }
      </div>
    )
  }
}

class DBFormRenderInput extends React.Component{
  state = {
    rawvalue: '',
    value: '',
    uuid: uuidv4()
  }

  componentDidMount(){
    this.set()
  }

  set(){
  }

  prepareInput(props){
    var self = this;
    var i = this.props.input;
    var t = i.type;
    var v = i.validate;
    var o = null;
    var onChange = props.onChange;
    if(!onChange){
      onChange = () => false;
    }
    var passableProps = {
      name: this.state.uuid,
      key: this.state.uuid,
    }
    switch(t){
      case "phone":
        o = <InputMask
              mask="99 99 99 99 99"
              maskChar=" "
              type="tel"
              placeholder={i.name}
              onChange={(e) => this.handleChange(e.target.value)}
              {...passableProps}
            />;
      break;
      default:
       o = <input
              type="text"
              placeholder={i.name}
              onChange={(e) => this.handleChange(e.target.value)}
              {...passableProps}
            />
      break;
    }
    return o;
  }

  getInput(props){
    var Input = (props) => this.prepareInput(props);
    return Input;
  }

  filterValue(v){
    return v;
  }

  handleChange(v){
  }

  render(){
    var Input = this.getInput();
    var cs = ['ss_ng_input'];
    return(
      <div
        className={cs.join(' ')}
        id={"ss_ng_input_" + this.state.uuid}
        uid={this.state.uuid}
      >
        <Input />
      </div>
    )
  }
}
