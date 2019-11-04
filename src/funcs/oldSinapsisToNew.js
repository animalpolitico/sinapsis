import moment from 'moment';
import 'moment/locale/es';
import formatMoney from './formatMoney';
import * as d3 from "d3";
import { snps_ka } from '../vars/compatibilityArray';
import { saveAs } from 'file-saver';
moment.locale('es');
var ntol = require('number-to-letter');
var slugify = require('slugify');

const csvjson =require('csvtojson')
const uuidv4 = require('uuid/v4');



export default class ConvertOldToDb{
  constructor(name, file, alreadyConverted){
    this.name = name;
    this.file = file;
    this.alreadyConverted = alreadyConverted ? true : false;
    this.uid = uuidv4();
    this.empresas = [];
    this.slug = slugify(this.name, {lower: true});
    this.get();
  }

  async get(){
    if(!this.alreadyConverted){
      var c = d3.csvParse(this.file);
    }else{
      var c = this.file;
    }
    var a = Object.values(c);
    a.pop();
    this.array = a;
    this.set();
  }

  set(){
    this.setInitialObject();
    this.cleanEmpresas();
    this.setEmpresas();
    // this.save();
  }

  setEmpresas(){
    var self = this;
    this.empresas.map(function(empresa){
      self.setEmpresa(empresa);
    })
    this.filterFields();
  }

  filterFields(){
    var es = this.obj.empresas;
    var empresasSlug = [];
    for(var key in es){
      var empresa = es[key];
      var slug = empresa.slug;
      empresasSlug.push(slug);
    }
    /* Campos */
    for(var key in es){
      var empresa = es[key];
      var fields = Object.values(empresa.fields);

      /* Contratos solo */
      var contratoFields = fields.filter(function(f){
        return f.group == "contrato";
      })
      /* Si existe la empresa deja el match with como empresa, si no como dependencia */
      contratoFields.map(function(f){
        if(f.slug == "contrato-quien-otorga-los-recursos"){
          var entidad = f.value;
          var _slug = entidad.replace(/[.\s]/g, '');
              _slug = slugify(_slug, {remove: /[*,+~.()'"!:@]/g, lower: true});
          if(empresasSlug.indexOf(_slug) > -1){
            var m = false;
          }else{
            var m = ["instancia"];
          }

          f.type = m ? m[0] : null;
          f.matchWith = m;
        }
      })

      /* Solo nombres de empresas con transferencias receptor */
      var transferenciaFields = fields.filter(function(f){
        return f.group == "transferencia"  && f.name == "recursos";
      })


      transferenciaFields.map(function(f){
        f.matchWith = null;
        f.type = null;
      })
    }
  }

  setEmpresa(fields){

    var n = fields[0];
    var s = n.replace(/[.\s]/g, '');
        s = slugify(s, {remove: /[*+,~.()'"!:@]/g, lower: true});

    var exists = false;
    if(this.empresas[s]){
      exists = true;
      uid = this.empresas[s];
    }else{
      var uid = uuidv4();
      var obj = {
        name: n,
        slug: s,
        uid: uid,
        fields: {}
      };
      this.obj.empresas[uid] = obj;
      this.empresas[s] = uid;
    }
    this.setEmpresaFields(fields, uid);

  }

  setEmpresaFields(fields, uid){
    var dbid = this.uid;
    var e = this.obj.empresas[uid];
    var f = e.fields;

    fields.map(function(value, i){
      value = value.trim();
      if(snps_ka[i] && ((i < 13 || (i > 41 && 45 > i )) || i == 95) ){
        if(!snps_ka[i].bypass){
          var slug = slugify(snps_ka[i].name, {lower: true});
          if(snps_ka[i].group){
            try{
              slug = slugify(snps_ka[i].group, {lower: true}) + '-' + slug;
            }catch(ex){
              console.log('ERROR CON',snps_ka[i].group);
            }
          }
          var ff = {
            name: snps_ka[i].name,
            slug: slug,
            isvalid: true,
            value: value,
            fromdb: dbid,
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
          if(value && value !== "SIN_DATO"){
            f[slug] = ff;
          }
        }

      }
    });

    /** Representante legal **/
    var range = [13, 19];
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
            empresauid: uid,
            guid: cuid
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
            guid: cuid
          };
          f[slug] = ff;
        }
      }
    })

    /** Accionistas **/
    var range = [20, 27];
    var _fields = this.groupByRange(fields, range);
    _fields.map(function(arr, ind){
        var cuid = uuidv4();
        var x = 0;
        for(var key in arr){
          var value = arr[key];
          value = value.trim();
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
            empresauid: uid,
            guid: cuid
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
          if(value && !inf.bypass && value !== "SIN_DATO"){
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
            guid: cuid
          };
          f[slug] = ff;
        }
    })
    /** Admin **/
    var range = [28, 34];
    var _fields = this.groupByRange(fields, range);
    _fields.map(function(arr, ind){
        var cuid = uuidv4();
        var x = 0;
        for(var key in arr){
          var value = arr[key];
          value = value.trim();
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
            empresauid: uid,
            guid: cuid
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
          if(value && !inf.bypass && value !== "SIN_DATO"){
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
            guid: cuid
          };
          f[slug] = ff;
        }
    })
    /** Consejero **/
    var range = [35, 41];
    var _fields = this.groupByRange(fields, range);
    _fields.map(function(arr, ind){
        var cuid = uuidv4();
        var x = 0;
        for(var key in arr){
          var value = arr[key];
          value = value.trim();
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
            empresauid: uid,
            guid: cuid
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
          if(value && !inf.bypass && value !== "SIN_DATO"){
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
            guid: cuid
          };
          f[slug] = ff;
        }
    })

    /** Banderas Rojas**/
    var range = [47, 48];
    var _fields = this.groupByRange(fields, range);
    var bs = [];
    _fields.map(function(ob){
      var i = Object.values(ob);
      i.map(function(_b){
        if(_b){
          bs.push(_b);
        }
      })
    })
    var bsn = "Banderas rojas";
    f['banderas-rojas'] = {
      slug: 'banderas-rojas',
      bs: bs
    }



    /** Contratos **/
    var range = [49, 59];
    var _fields = this.groupByRange(fields, range);
    _fields.map(function(arr, ind){
        var cuid = uuidv4();
        var x = 0;
        for(var key in arr){
          var value = arr[key];
          value = value.trim();
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
          if(value && !inf.bypass && value !== "SIN_DATO"){
            f[slug] = ff;
            x++;
          }
        }
    })

    /** Convenios **/
    var range = [60, 72];
    var _fields = this.groupByRange(fields, range);
    _fields.map(function(arr, ind){
        var cuid = uuidv4();
        var x = 0;
        for(var key in arr){
          var value = arr[key];
          value = value.trim();
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
          if(value && !inf.bypass && value !== "SIN_DATO"){
            f[slug] = ff;
            x++;
          }
        }
    })

    /** Transferencias de dependencia a instancia **/
    var range = [73, 75];
    var _fields = this.groupByRange(fields, range);
    _fields.map(function(arr, ind){
        var cuid = uuidv4();
        var x = 0;
        for(var key in arr){
          var value = arr[key];
          value = value.trim();
          var inf = snps_ka[key];
          var preslug = slugify(inf.bigGroup + '-' + (inf.realName ? inf.realName : inf.name), {lower: true});
          var slug = slugify(cuid + '-' + preslug, {lower: true});
          var ff = {
            name: inf.name,
            slug: preslug,
            isvalid: true,
            value: value,
            group: inf.bigGroup,
            groupUid: cuid,
            fromdb: dbid,
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
          if(value && !inf.bypass && value !== "SIN_DATO"){
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
            guid: cuid,
            fromdb: dbid,
            slug: slug,
          };
          // console.log('TRANSFERENCIA', ff);
          f[slug] = ff;
        }
    })

    /** Transferencia de empresa a esta empresa  **/
    var range = [76,77];
    var _fields = this.groupByRange(fields, range);
    _fields.map(function(arr, ind){
        var cuid = uuidv4();
        var x = 0;
        for(var key in arr){
          var value = arr[key];
          value = value.trim();
          var inf = snps_ka[key];
          var inn = inf.name.replace(/[.\s]/g, '');
          var preslug = slugify(inf.bigGroup + '-' + inn, {lower: true});
          var slug = slugify(cuid + '-' + preslug, {lower: true});
          var ff = {
            name: inf.name,
            slug: preslug,
            isvalid: true,
            fromdb: dbid,
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
          if(value && !inf.bypass && value !== "SIN_DATO"){
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
            aka: "¿Quién recibe la transferencia?",
            group: "transferencia",
            bigGroup: "transferencia",
            fromdb: dbid,
            groupUid: cuid,
            guid: cuid
          };
          f[slug] = ff;
        }
    })

    /** Transferencia de esta empresa a otras empresas **/
    var range = [78, 79];
    var _fields = this.groupByRange(fields, range);
    _fields.map(function(arr, ind){
        var cuid = uuidv4();
        var x = 0;
        for(var key in arr){
          var value = arr[key];
          value = value.trim();
          var inf = snps_ka[key];
          var inn = inf.name.replace(/[.\s]/g, '');
          var preslug = slugify(inf.bigGroup + '-' + inn, {lower: true});
          var slug = slugify(cuid + '-' + preslug, {lower: true});
          var ff = {
            name: inf.name,
            slug: preslug,
            isvalid: true,
            value: value,
            fromdb: dbid,
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
          if(value && !inf.bypass && value !== "SIN_DATO"){
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
            fromdb: dbid,
            bigGroup: "transferencia",
            groupUid: cuid,
            guid: cuid
          };
          f[slug] = ff;
        }
    })

    /** Otros **/
    var otrosRange = [80, 92];
    for(var i = otrosRange[0]; i <= otrosRange[1]; i++){
      var sn = snps_ka[i];
      try{
        var _fields = this.groupByRange(fields, [i, i]);
      }catch(ex){
        var _fields = [];
      }
      _fields.map(function(_f){
        var em = Object.values(_f)[0];
        if(em){
          var t = sn.category;
          var n = sn.name;

          var guid = uuidv4();
          var preslug = slugify('otros ' + n, {lower: true});
          var slug = guid + '-' + preslug;
          var matchWith = [t];
          var type = t;
          if(t.indexOf('monto') > -1){
            em = em.replace(/\,/g, '');
            em = parseFloat(em);
            if(isNaN(em)){
              em = 0;
            }
            type = 'monto';
            matchWith = false;
          }

          if(t == "empresa"){
            matchWith = false;
          }

          var obj = {
            name: n,
            slug: preslug,
            isvalid: true,
            value: em,
            matchWith: matchWith,
            group: "otros",
            guid: guid,
            fromdb: dbid,
            type: type,
            category: t,
            groupUid: guid,
            empresauid: uid
          }
          f[slug] = obj;


        }
      })
    }
    /** OTROS NUEVO **/
    var otrosRange = [93, 94];
    for(var i = 0; i < 1; i++){
      try{
        var _fields = this.groupByRange(fields, otrosRange);
      }catch(ex){
        var _fields = [];
      }
      _fields.map(function(_f){
        var vv = Object.values(_f);
        var em = vv[0];
        if(em){
          var t = em;
          var n = em;
          var guid = uuidv4();
          var preslug = slugify('otros ' + n  , {lower: true});
          var slug = guid + '-' + preslug;
          var matchWith = [t];
          var type = t;
          if(t.indexOf('monto') > -1){
            em = em.replace(/\,/g, '');
            em = parseFloat(em);
            if(isNaN(em)){
              em = 0;
            }
            type = 'monto';
            matchWith = false;
          }

          if(t == "empresa"){
            matchWith = false;
          }
          var obj = {
            name: n,
            slug: preslug,
            isvalid: true,
            value: vv[1],
            matchWith: matchWith,
            group: "otros",
            guid: guid,
            fromdb: dbid,
            type: type,
            newOtros: em,
            category: t,
            groupUid: guid,
            empresauid: uid
          }
          f[slug] = obj;
        }
      })
    }


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
        ia[y][i] = v.replace(/^\s+|\s+$/g, '');
      }
    }
    return Object.values(ia);
  }


  save(){

    // var dbs = {};
    //     dbs[this.uid] = this.obj;
    //
    // var project = {
    //   uid: uuidv4(),
    //   info: {
    //     name: this.name,
    //     slug: this.slug
    //   },
    //   allowAutoSave: true,
    //   projectStructure: "sinapsis_empresas_auto",
    //   classVersion: "0.0.1",
    //   saves: 1,
    //   modified: moment.now(),
    //   version: 1,
    //   created: moment.now(),
    //   dbs: dbs,
    //   savedAt: moment.now()
    // };


    // var j = JSON.stringify(project);
    // var content = btoa(encodeURI(j));
    var content = this.obj;
    return content;

    // // var blob = new Blob([content], {type: "text/plain;charset=utf-8"});
    // // saveAs(blob, this.slug + ".sinapsis");
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
