import React from 'react'
import Form from '../components/form';
import { sinapsisFormObject } from '../vars/sinapsisFormStructure'


export default class Playground extends React.Component{
  componentDidMount(){
    window.scrollTo(0, 0);
  }
  render(){
    return (
      <div className="ss_page" id="ss_page_cruzar">
        <Form structure={sinapsisFormObject}/>
      </div>
    )
  }
}
