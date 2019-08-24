import React from 'react'
import FormFactory from '../funcs/form'

export default class Form extends React.Component{
  render(){
    var self = this;
    var s = new FormFactory(this.props.structure);
    var groups = s.getGroups();
    console.log('groups', groups);
    return(
      <div className="ss_form">
        {
          groups.map(function(group, e){
            return  <FormGroup key={e} group={group} factory={s} />
          })
        }
      </div>
    )
  }
}

class FormGroup extends React.Component{
  render(){
    var group = this.props.group;
    var groupName = group[0].group;
    return(
      <h2>{groupName}</h2>
    )
  }


}
