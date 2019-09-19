import React from 'react';
import moment from 'moment';
import 'moment/locale/es';
import formatMoney from 'format-money';
import estafa from '../static/csvs/estafa-maestra.csv';
import EstafaJson from '../static/jsons/estafa-maestra.json';
import * as d3 from "d3";
import { saveAs } from 'file-saver';
import { snps_ka } from '../vars/compatibilityArray';
import { convertToSinapsisFile } from '../funcs/covertToSinapsis';
moment.locale('es');
var ntol = require('number-to-letter');
var slugify = require('slugify');

const csvjson =require('csvtojson')
const uuidv4 = require('uuid/v4');


export default class DevSandbox extends React.Component{

  componentDidMount(){
    var cls = new ConvertOldToDb('Estafa Maestra', estafa);
    // var d = convertToSinapsisFile(EstafaJson);

  }

  render(){
    return(
      <div>
        Hola
      </div>
    )
  }
}




class ConvertOldToDb{
  constructor(name, file){
    this.name = name;
    this.file = file;
    this.uid = uuidv4();
    this.slug = slugify(this.name, {lower: true});
    this.get();
  }

  async get(){
    var c = await d3.csv(this.file);
    var a = Object.values(c);
    a.pop();
    this.array = a;
    this.set();
  }

  set(){
    this.setInitialObject();
    this.cleanEmpresas();
    this.setEmpresas();
    this.save();
  }

  setEmpresas(){
    var self = this;
    this.empresas.map(function(empresa){
      self.setEmpresa(empresa);
    })
    console.log('t', this.obj);
  }

  setEmpresa(fields){
    var n = fields[0];
    var uid = uuidv4();
    var s = slugify(n, {lower: true});

    var obj = {
      name: n,
      slug: s,
      uid: uid,
      fields: {}
    };

    this.obj.empresas[uid] = obj;

    this.setEmpresaFields(fields, uid);
  }

  setEmpresaFields(fields, uid){
    var e = this.obj.empresas[uid];
    var f = e.fields;

    fields.map(function(value, i){
      if(snps_ka[i] && (i < 11 || (i > 31 && 35 > i ))){
        var slug = slugify(snps_ka[i].name, {lower: true});
        if(snps_ka[i].group){
          slug = slugify(snps_ka[i].group, {lower: true}) + '-' + slug;
        }
        var ff = {
          name: snps_ka[i].name,
          slug: slug,
          isvalid: true,
          value: value,
          empresauid: uid
        };
        if(snps_ka[i].type){
          ff.type = snps_ka[i].type;
        }
        if(snps_ka[i].group){
          ff.group = snps_ka[i].group;
        }
        if(snps_ka[i].matchWith){
          ff.matchWith = snps_ka[i].matchWith;
        }
        if(value){
          f[slug] = ff;
        }
      }
    });

    /** Representante legal **/
    var range = [11, 13];
    var _fields = this.groupByRange(fields, range);
    _fields.map(function(arr, ind){
      if(ind < 1){
        var cuid = uuidv4();
        var x = 0;
        for(var key in arr){
          var value = arr[key];
          var inf = snps_ka[key];
          var preslug = slugify(inf.bigGroup + '-' + inf.name, {lower: true});
          var slug = slugify(cuid + '-' + preslug, {lower: true});
          var ff = {
            name: inf.name,
            slug: preslug,
            isvalid: true,
            value: value,
            group: inf.bigGroup,
            groupUid: cuid,
            empresauid: uid
          };
          if(inf.type){
            ff.type = inf.type;
          }
          if(inf.category){
            ff.category = inf.category;
          }
          if(inf.matchWith){
            ff.matchWith = inf.matchWith;
          }
          if(value){
            f[slug] = ff;
            x++;
          }
        }
        if(x > 0){
          var slug = slugify(cuid + '-tipo-persona' , {lower: true});
          var ff = {
            name: "Tipo de persona",
            slug: slug,
            isvalid: true,
            value: inf.bigGroup,
            group: inf.bigGroup,
            bigGroup: "persona",
            groupUid: cuid,
          };
          f[slug] = ff;
        }
      }
    })

    /** Accionistas **/
    var range = [16, 21];
    var _fields = this.groupByRange(fields, range);
    _fields.map(function(arr, ind){
        var cuid = uuidv4();
        var x = 0;
        for(var key in arr){
          var value = arr[key];
          var inf = snps_ka[key];
          var preslug = slugify(inf.bigGroup + '-' + inf.name, {lower: true});
          var slug = slugify(cuid + '-' + preslug, {lower: true});
          var ff = {
            name: inf.name,
            slug: preslug,
            isvalid: true,
            value: value,
            group: inf.bigGroup,
            groupUid: cuid,
            empresauid: uid
          };
          if(inf.type){
            ff.type = inf.type;
          }
          if(inf.category){
            ff.category = inf.category;
          }
          if(inf.matchWith){
            ff.matchWith = inf.matchWith;
          }
          if(inf.sumWith){
            ff.sumWith = inf.sumhWith;
          }
          if(value && !inf.bypass){
            f[slug] = ff;
            x++;
          }
        }
        if(x > 0){
          var slug = slugify(cuid + '-tipo-persona' , {lower: true});
          var ff = {
            name: "Tipo de persona",
            slug: slug,
            isvalid: true,
            value: inf.bigGroup,
            group: inf.bigGroup,
            bigGroup: "persona",
            groupUid: cuid,
          };
          f[slug] = ff;
        }
    })
    /** Admin **/
    var range = [22, 24];
    var _fields = this.groupByRange(fields, range);
    _fields.map(function(arr, ind){
        var cuid = uuidv4();
        var x = 0;
        for(var key in arr){
          var value = arr[key];
          var inf = snps_ka[key];
          var preslug = slugify(inf.bigGroup + '-' + inf.name, {lower: true});
          var slug = slugify(cuid + '-' + preslug, {lower: true});
          var ff = {
            name: inf.name,
            slug: preslug,
            isvalid: true,
            value: value,
            group: inf.bigGroup,
            groupUid: cuid,
            empresauid: uid
          };
          if(inf.type){
            ff.type = inf.type;
          }
          if(inf.category){
            ff.category = inf.category;
          }
          if(inf.matchWith){
            ff.matchWith = inf.matchWith;
          }
          if(inf.sumWith){
            ff.sumWith = inf.sumhWith;
          }
          if(value && !inf.bypass){
            f[slug] = ff;
            x++;
          }
        }
        if(x > 0){
          var slug = slugify(cuid + '-tipo-persona' , {lower: true});
          var ff = {
            name: "Tipo de persona",
            slug: slug,
            isvalid: true,
            value: inf.bigGroup,
            group: inf.bigGroup,
            bigGroup: "persona",
            groupUid: cuid,
          };
          f[slug] = ff;
        }
    })
    /** Consejero **/
    var range = [27, 29];
    var _fields = this.groupByRange(fields, range);
    _fields.map(function(arr, ind){
        var cuid = uuidv4();
        var x = 0;
        for(var key in arr){
          var value = arr[key];
          var inf = snps_ka[key];
          var preslug = slugify(inf.bigGroup + '-' + inf.name, {lower: true});
          var slug = slugify(cuid + '-' + preslug, {lower: true});
          var ff = {
            name: inf.name,
            slug: preslug,
            isvalid: true,
            value: value,
            group: inf.bigGroup,
            groupUid: cuid,
            empresauid: uid
          };
          if(inf.type){
            ff.type = inf.type;
          }
          if(inf.category){
            ff.category = inf.category;
          }
          if(inf.matchWith){
            ff.matchWith = inf.matchWith;
          }
          if(inf.sumWith){
            ff.sumWith = inf.sumhWith;
          }
          if(value && !inf.bypass){
            f[slug] = ff;
            x++;
          }
        }
        if(x > 0){
          var slug = slugify(cuid + '-tipo-persona' , {lower: true});
          var ff = {
            name: "Tipo de persona",
            slug: slug,
            isvalid: true,
            value: inf.bigGroup,
            group: inf.bigGroup,
            bigGroup: "persona",
            groupUid: cuid,
          };
          f[slug] = ff;
        }
    })


    /** Contratos **/
    var range = [37, 45];
    var _fields = this.groupByRange(fields, range);
    _fields.map(function(arr, ind){
        var cuid = uuidv4();
        var x = 0;
        for(var key in arr){
          var value = arr[key];
          var inf = snps_ka[key];
          var preslug = slugify(inf.bigGroup + '-' + inf.name, {lower: true});
          var slug = slugify(cuid + '-' + preslug, {lower: true});
          var ff = {
            name: inf.name,
            slug: preslug,
            isvalid: true,
            value: value,
            group: inf.bigGroup,
            groupUid: cuid,
            guid: cuid,
            empresauid: uid
          };
          if(inf.type){
            ff.type = inf.type;
          }
          if(inf.category){
            ff.category = inf.category;
          }
          if(inf.matchWith){
            ff.matchWith = inf.matchWith;
          }
          if(inf.sumWith){
            ff.sumWith = inf.sumWith;
          }
          if(inf.sumWith && value){
            value = value.replace(/[^0-9.]/g, '');
            value = parseFloat(value);
            ff.value = value;
          }
          if(value && !inf.bypass){
            f[slug] = ff;
            x++;
          }
        }
    })

    /** Convenios **/
    var range = [53, 63];
    var _fields = this.groupByRange(fields, range);
    _fields.map(function(arr, ind){
        var cuid = uuidv4();
        var x = 0;
        for(var key in arr){
          var value = arr[key];
          var inf = snps_ka[key];
          var preslug = slugify(inf.bigGroup + '-' + inf.name, {lower: true});
          var slug = slugify(cuid + '-' + preslug, {lower: true});
          var ff = {
            name: inf.name,
            slug: preslug,
            isvalid: true,
            value: value,
            group: inf.bigGroup,
            groupUid: cuid,
            guid: cuid,
            empresauid: uid
          };
          if(inf.type){
            ff.type = inf.type;
          }
          if(inf.category){
            ff.category = inf.category;
          }
          if(inf.matchWith){
            ff.matchWith = inf.matchWith;
          }
          if(inf.sumWith){
            ff.sumWith = inf.sumWith;
          }
          if(inf.sumWith && value){
            value = value.replace(/[^0-9.]/g, '');
            value = parseFloat(value);
            ff.value = value;
          }
          if(value && !inf.bypass){
            f[slug] = ff;
            x++;
          }
        }
    })

    /** Transferencias a empresa **/
    var range = [64, 65];
    var _fields = this.groupByRange(fields, range);
    _fields.map(function(arr, ind){
        var cuid = uuidv4();
        var x = 0;
        for(var key in arr){
          var value = arr[key];
          var inf = snps_ka[key];
          var preslug = slugify(inf.bigGroup + '-' + inf.name, {lower: true});
          var slug = slugify(cuid + '-' + preslug, {lower: true});
          var ff = {
            name: inf.name,
            slug: preslug,
            isvalid: true,
            value: value,
            group: inf.bigGroup,
            groupUid: cuid,
            guid: cuid,
            empresauid: uid
          };
          if(inf.type){
            ff.type = inf.type;
          }
          if(inf.category){
            ff.category = inf.category;
          }
          if(inf.matchWith){
            ff.matchWith = inf.matchWith;
          }
          if(inf.sumWith){
            ff.sumWith = inf.sumWith;
          }
          if(inf.sumWith && value){
            value = value.replace(/[^0-9.]/g, '');
            value = parseFloat(value);
            ff.value = value;
          }
          if(value && !inf.bypass){
            f[slug] = ff;
            x++;
          }
        }
        if(x > 0){
          var slug = slugify(cuid + '-tipo-transferencia' , {lower: true});
          var ff = {
            name: "Tipo de transferencia",
            isvalid: true,
            value: "receptor",
            group: "transferencia",
            bigGroup: "transferencia",
            groupUid: cuid,
            guid: cuid
          };
          f[slug] = ff;
        }
    })

    var range = [66,67];
    var _fields = this.groupByRange(fields, range);
    _fields.map(function(arr, ind){
        var cuid = uuidv4();
        var x = 0;
        for(var key in arr){
          var value = arr[key];
          var inf = snps_ka[key];
          var preslug = slugify(inf.bigGroup + '-' + inf.name, {lower: true});
          var slug = slugify(cuid + '-' + preslug, {lower: true});
          var ff = {
            name: inf.name,
            slug: preslug,
            isvalid: true,
            value: value,
            group: inf.bigGroup,
            groupUid: cuid,
            guid: cuid,
            empresauid: uid
          };
          if(inf.type){
            ff.type = inf.type;
          }
          if(inf.category){
            ff.category = inf.category;
          }
          if(inf.matchWith){
            ff.matchWith = inf.matchWith;
          }
          if(inf.sumWith){
            ff.sumWith = inf.sumWith;
          }
          if(inf.sumWith && value){
            value = value.replace(/[^0-9.]/g, '');
            value = parseFloat(value);
            ff.value = value;
          }
          if(value && !inf.bypass){
            f[slug] = ff;
            x++;
          }
        }
        if(x > 0){
          var slug = slugify(cuid + '-tipo-transferencia' , {lower: true});
          var ff = {
            name: "Tipo de transferencia",
            isvalid: true,
            value: "emisor",
            group: "transferencia",
            bigGroup: "transferencia",
            groupUid: cuid,
            guid: cuid
          };
          f[slug] = ff;
        }
    })

    var range = [68, 69];
    var _fields = this.groupByRange(fields, range);
    _fields.map(function(arr, ind){
        var cuid = uuidv4();
        var x = 0;
        for(var key in arr){
          var value = arr[key];
          var inf = snps_ka[key];
          var preslug = slugify(inf.bigGroup + '-' + inf.name, {lower: true});
          var slug = slugify(cuid + '-' + preslug, {lower: true});
          var ff = {
            name: inf.name,
            slug: preslug,
            isvalid: true,
            value: value,
            group: inf.bigGroup,
            groupUid: cuid,
            guid: cuid,
            empresauid: uid
          };
          if(inf.type){
            ff.type = inf.type;
          }
          if(inf.category){
            ff.category = inf.category;
          }
          if(inf.matchWith){
            ff.matchWith = inf.matchWith;
          }
          if(inf.sumWith){
            ff.sumWith = inf.sumWith;
          }
          if(inf.sumWith && value){
            value = value.replace(/[^0-9.]/g, '');
            value = parseFloat(value);
            ff.value = value;
          }
          if(value && !inf.bypass){
            f[slug] = ff;
            x++;
          }
        }
        if(x > 0){
          var slug = slugify(cuid + '-tipo-transferencia' , {lower: true});
          var ff = {
            name: "Tipo de transferencia",
            isvalid: true,
            value: "receptor",
            group: "transferencia",
            bigGroup: "transferencia",
            groupUid: cuid,
            guid: cuid
          };
          f[slug] = ff;
        }
    })

  }

  groupByRange(fields, range){
    var ia = {};
    var z = 0;
    for(var i = range[0]; i <= range[1]; i++){
      var f = fields[i];
      var a = f.split(';');
      for(var y = 0; y < a.length; y++){
        var v = a[y];
        if(!ia[y]){
          ia[y] = {};
        }
        ia[y][i] = v;
      }
    }
    return Object.values(ia);
  }


  save(){

    var dbs = {};
        dbs[this.uid] = this.obj;

    var project = {
      uid: uuidv4(),
      info: {
        name: this.name,
        slug: this.slug
      },
      allowAutoSave: false,
      projectStructure: "sinapsis_empresas_auto",
      classVersion: "0.0.1",
      saves: 1,
      modified: moment.now(),
      version: 1,
      created: moment.now(),
      dbs: dbs,
      savedAt: moment.now()
    };


    var j = JSON.stringify(project);
    var content = btoa(encodeURI(j));
    // var content = j;


    var blob = new Blob([content], {type: "text/plain;charset=utf-8"});
    saveAs(blob, this.slug + ".sinapsis");
    // saveAs(blob, this.slug + ".json");
  }

  cleanEmpresas(){
    var a = this.array;
    a = a.map(function(e){
      return Object.values(e);
    })
    this.empresas = a;
  }

  setInitialObject(){
    var wrapper = {};
    var obj = {
      id: this.uid,
      name: this.name,
      created: moment.now(),
      color: "rgb(244, 41, 28)",
      modified: moment.now(),
      empresas: {}
    };
    wrapper[this.uid] = obj;
    this.obj = obj;
    this.wrapper = wrapper;
  }

}
