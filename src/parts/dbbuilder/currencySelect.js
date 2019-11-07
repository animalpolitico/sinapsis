import React from 'react';
import { countries, getLang, _t, getCurrencies, getFlag } from "../../vars/countriesDict";

export default class CurrencySelect extends React.Component{
  render(){
    var self = this;
    return(
      <div className="ss_db_input_select">
        <select onChange={(e) => this.props.onChange(e.target.value)}>
          {
            getCurrencies().map(function(c){
              return (
                <option selected={c.currency == self.props.current} value={c.currency}>{c.name} ({c.symbol} {c.currency})</option>
              )
            })
          }
        </select>
      </div>
    )
  }
}
