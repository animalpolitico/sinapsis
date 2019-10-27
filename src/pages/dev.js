import React from 'react';
import moment from 'moment';
import 'moment/locale/es';
import formatMoney from 'format-money';
import * as d3 from "d3";
import { saveAs } from 'file-saver';
import DbFactory from '../funcs/dbClass';
import { getLatLng } from 'react-places-autocomplete';

moment.locale('es');
var ntol = require('number-to-letter');
var slugify = require('slugify');

const csvjson =require('csvtojson')
const uuidv4 = require('uuid/v4');
const address = require('../static/consumable/addresses.json');
const abook = require('../static/consumable/abook.json');
window.abook = abook;
if(!window.abook){
  window.abook = {};
}
var dbf = new DbFactory();
var dbf_obj = dbf.set();
window.dbf = dbf;

export default class DevSandbox extends React.Component{

  componentDidMount(){

  }

  trigger(){
    var self = this;
    setTimeout(function(){
      self.getLatLng(0);
    }, 10)
  }

  async getLatLng(index){
    try{
      var self = this;
      var a = address[index];
      if(!a){
        return;
      }
      var s = slugify(a, {lower: true});
      if(window.abook[s] && index < address.length){
        console.log('Skipping', index);
        setTimeout(function(){
          self.getLatLng(index + 1);
        }, 100);
        return;
      }
      console.log('Rendering', index, 'of', address.length);
      try{
        var r = await dbf.geocode(a);
      }catch(ex){
        console.log('Error #1', ex);
      }
      if(r && r.length){
        try{
          var p = await getLatLng(r[0]);
        }catch(ex){
          console.log('ERROR', ex);
        }
        if(p){
          window.abook[s] = {
            latlng: p,
            name: a,
            googleResult: r[0].formatted_address,
            slug: s
          }
        }
      }
      if(index < (address.length - 1)){
        setTimeout(function(){
          self.getLatLng(index + 1);
        }, 350)
      }else{
        var j = JSON.stringify(window.abook);
        var blob = new Blob([j], {type: "application/json;charset=utf-8"});
        saveAs(blob, 'addressesBook.json');
      }
    }catch{
      var j = JSON.stringify(window.abook);
      var blob = new Blob([j], {type: "application/json;charset=utf-8"});
      saveAs(blob, 'addressesBook.json');
    }
  }

  render(){
    return(
      <button onClick={() => this.trigger()}>Hola</button>
    )
  }

}
