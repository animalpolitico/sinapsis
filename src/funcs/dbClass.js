import moment from 'moment';
import 'moment/locale/es';
import { saveAs } from 'file-saver';
import formatMoney from 'format-money';
moment.locale('es');
var ntol = require('number-to-letter');
var slugify = require('slugify');
var JSZip = require("jszip");

const uuidv4 = require('uuid/v4');
var gen = require('color-generator');

var onProjectModified = new Event('sinapsisModified');



export default class DbFactory {

  /**
  * Construye la clase a partir de un array
  *
  * @param array
  * @return void
  **/
  constructor(){
    this.classVersion = '0.0.1';
    this.version = 0;
    this.saves = 0;
    this.manualSaves = 0;
    this.originalData = [];
  }

  /**
  * Crea un objeto que después podrá ser exportado
  *
  * @param void
  * @return obj
  **/
  set(){
    this.obj = {
      uid: this.createUid(),
      info: {
        name: 'Proyecto sin nombre',
        slug: 'proyecto-sin-nombre'
      },
      allowAutoSave: true,
      projectStructure: 'sinapsis_empresas',
      classVersion: this.classVersion,
      saves: 0,
      modified: false,
      version: this.version
    };
    return this.setCreated();
  }

  setFile(t){
    var obj = JSON.parse(decodeURI(atob(t)));
    this.obj = obj;
    return obj;
  }

  /**
  * Establece la fecha inicial
  *
  * @param void
  * @return obj
  **/
  setCreated(){
    if(this.obj.created){
      return this.obj;
    }
    var created = moment.now();
    this.obj.created = created;
    return this.obj;
  }

  /**
  * Establece el nombre de la base
  *
  * @param string
  * @return obj
  **/
  setName(v){
    var o = this.obj;
    if(!o.info){
      o.info = {};
    }
    o.info.name = v;
    o.info.slug = slugify(v, {lower: true});
    this.obj = o;
    this.setModified();
    return o;
  }

  /**
  * Establece la fecha de modificación
  *
  * @param void
  * @return obj
  **/
  setModified(){
    var modified = moment.now();
    this.obj.modified = modified;
    this.obj.version = this.obj.version + 1;
    window.dispatchEvent(onProjectModified);
    return this.obj;
  }

  /**
  * Crea los cruces
  *
  * @param void
  * @return obj
  **/
  getMatches(){
    var self = this;
    var db = this.getDbs();
    var dbA = Object.values(db);
    /* Obtiene todos los campos */
    var normalized = [];
    dbA.map(function(_db){
      var dbfields = [];
      var empresas = _db.empresas;
      if(empresas){
        var empresasA = Object.values(empresas);
        empresasA.map(function(empresa){
          var eField = {
            id: empresa.uid,
            value: empresa.name,
            fromdb: _db.id,
            type: 'empresa',
            sum: self.getEmpresaSum(empresa),
            matchWith: ['empresa', 'person']
          };
          dbfields = [...dbfields, eField];
          var fields = self.getEmpresaMatchableFields(_db.id, empresa.uid);
          fields.map(function(f){
            f.type = f.matchWith[0];
            f.empresauid = empresa.uid;
            dbfields = [...dbfields, f]
          });
        })
        normalized = [...normalized, ...dbfields];
      }
    })
    var nodes = {};
    normalized.map(function(f){
      var slug = slugify(f.type + '-' + f.value, {lower: true});
      if(f.id){
        slug = f.id;
      }
      if(!nodes[slug]){
        nodes[slug] = {
          id: slug,
          name: f.value,
          type: f.type,
          fields: [],
          links: []
        }
        if(f.sum){
          nodes[slug].sum = f.sum;
        }
      }
      nodes[slug].fields.push(f);
      if(f.type !== 'empresa' ){
        nodes[slug].links.push({
          source: slug,
          target: f.empresauid
        })
      }
    })


    /* Solo campos con conexiones */
    var fnodes = {};
    for(var key in nodes){
      var n = nodes[key];
      if(n.fields.length > 1 || n.type == 'empresa'){
        fnodes[key] = n;
      }
    }


    nodes = fnodes;

    var finalObj = {
      nodes: [],
      links: []
    };

    Object.values(nodes).map(function(e){
      var links = e.links;
      finalObj.links = [...finalObj.links, ...links];
      delete e.links;
      finalObj.nodes = [...finalObj.nodes, e];
    });

    return finalObj;
  }

  /**
  * Obtiene la suma de empresa
  *
  * @param empresa
  * @return int
  **/
  getEmpresaSum(empresa){
    if(!empresa.fields){
      return 0;
    }
    var f = Object.values(empresa.fields);
    var i = 0;
    f.map(function(d){
      if(d.sumWith){
        i += parseFloat(d.value)
      }
    });
    return i;
  }


  /**
  * Obtiene el timestamp de modificación
  *
  * @param void
  * @return int | false
  **/
  getModified(){
    return this.obj.modified;
  }

  /**
  * Normaliza la base de datos y la desanida
  *
  * @param void
  * @return array
  **/
  normalize(){
    var o = [];
    var d = this.originalData;
    for(var i = 0; i < d.length; i++){
      var e = d[i];
      var has_groups = e.groups;
      if(has_groups){
        var branchName = e.name;
        for(var j = 0; j < e.groups.length; j++){
          var group = e.groups[j];
          /* Determina si tiene subgrupos */
          if(!group.groups){
            var inputs = this.getGroupInputs(group, branchName);
            o = [...o, ...inputs];
          }else{
            for(var k = 0; k < group.groups.length; k++){
              var subgroup = group.groups[k];
              var inputs = this.getGroupInputs(subgroup, branchName);
              o = [...o, ...inputs];
            }
          }
        }
      }else{
        var inputs = e.inputs.map(function(i){
          i.branchName = e.name;
          i.groupName = e.name;
          return i;
        })
        o = [...o, ...inputs];
      }
    }
    return o;
  }

  /**
  * Obtiene los inputs de un grupo
  *
  * @param array group
  * @return array
  **/
  getGroupInputs(group, branchName){
    var o = [];
    var groupName = group.name;
    var inputs = group.inputs;
    if(!inputs){
      var inputs = group.inputGroup.inputs;
    }
    if(inputs){
      for(var k = 0; k < inputs.length; k++){
        var input = inputs[k];
        input.branchName = branchName;
        input.groupName = groupName;
        o.push(input);
      }
    }
    return o;
  }

  /**
  * Obtiene el objeto principal
  *
  * @param void
  * @return object
  **/
  getMainObject(){
    var g = this.originalData;
    var f = g.filter(function(g){
      return g.ismain ? true : false;
    });
    return f[0];
  }

  /**
  * Obtiene el tamaño aproximado del objeto
  *
  * @param void
  * @return int bits
  **/
  getObjectSize(){
    var j = JSON.stringify(this.obj);
    return j.length;
  }

  /**
  * Obtiene el JSON para autoguardado
  *
  * @param void
  * @return string (JSON)
  **/
  getAutoSaveFile(){
    var d = this.obj;
    if(!d.autosaves){
      d.autosaves = 0;
    }
    d.autosaves = d.autosaves + 1;
    d.autoSavedAt = moment.now();
    var j = JSON.stringify(d);
    return j;
  }

  /**
  * Construye un archivo .sinapsis
  *
  * @param void
  * @return Blob
  **/
  createProjectFile(){
    var d = this.obj;
    d.savedAt = moment.now();
    d.saves = d.saves + 1;
    var s = JSON.stringify(d);
    var j = btoa(encodeURI(s));
    var txt = j;
    var kbsize = txt.length * 0.000125;
    var name = d.info.slug + '_v'+ d.version + '_b_' + d.saves;
    var zip = new JSZip();
    zip.file(name + '.sinapsis', txt, {binary: true});
    zip.file(name + '_dev.json', s, {binary: true});
    zip.generateAsync({type: "blob"})
    .then(function(content) {
        saveAs(content, name + ".zip");
    });
  }

  /**
  * Obtiene las bases de datos
  *
  * @param void
  * @return array
  **/
  getDbs(){
    var dbs = this.obj.dbs;
    if(!dbs){
      dbs = {};
    }
    return dbs;
  }

  /**
  * Crea un uid
  *
  * @param void
  * @return string
  **/
  createUid(){
    return uuidv4();
  }

  /**
  * Crea una base de datos
  *
  * @param void
  * @return uid
  **/
  addDb(){
    var dbs = this.getDbs();
    var x = Object.values(dbs).length;
    var uid = this.createUid();
    var o = {
      id: uid,
      name: 'Nueva base de datos #'+ (x+1),
      created: moment.now(),
      color: gen().rgbString()
    }
    dbs[uid] = o;
    this.setModified();
    this.obj.dbs = dbs;
    return uid;
  }



  /**
  * Reemplaza el objeto de la base de datos
  *
  * @param uid
  * @return dbs
  **/
  editDb(uid, db){
    var dbs = this.getDbs();
    db.modified = moment.now();
    dbs[uid] = db;
    this.setModified();
    return dbs;
  }

  /**
  * Añade una empresa a una base de datos
  *
  * @param db
  * @return db
  **/
  addEmpresaToDb(db, v){
    if(!db.empresas){
      db.empresas = {};
    }
    var empresa = {
      name: v,
      slug: slugify(v, {lower: true}),
      uid: this.createUid()
    };
    db.empresas[empresa.uid] = empresa;
    this.editDb(db.id, db);
    return [db, empresa];
  }

  /**
  * Obtiene la base de datos
  *
  * @param uid
  * @return obj
  **/
  getDb(uid){
    var dbs = this.getDbs();
    return dbs[uid];
  }

  /**
  * Elimina una base de datos
  *
  * @param db
  * @return void
  **/
  deleteDb(db){
    var uid = db.id;
    delete this.obj.dbs[uid];
    this.setModified();
  }

  /**
  * Elimina una empresa
  *
  * @param db
  * @param uid
  * @return void
  **/
  deleteEmpresa(db, uid){
    delete this.obj.dbs[db.id].empresas[uid];
    this.setModified();
  }

  /**
  * Añade campos a una empresa
  *
  * @param dbuid
  * @param euid
  * @param fields
  **/
  addFieldsToEmpresa(dbuid, euid, fields){
    var obj = this.obj;
    var e = obj.dbs[dbuid].empresas[euid];
    e.fields = fields;
    this.obj.dbs[dbuid].empresas[euid] = e;
    this.obj.dbs[dbuid].modified = moment.now();
    this.setModified();
    return e;
  }

  /**
  * Añade campos a una empresa respecto a un guid
  *
  * @param dbuid
  * @param euid
  * @param guid
  * @param fields
  **/
  addFieldsFromGuid(dbuid, euid, guid, fields){
    var obj = this.obj;
    var e = obj.dbs[dbuid].empresas[euid];
    var dbfields = e.fields;
    if(!dbfields){
      dbfields= {};
    }
    for(var key in fields){
      var f = fields[key];
      dbfields[key] = f;
    }
    this.obj.dbs[dbuid].empresas[euid].fields = dbfields;
    this.obj.dbs[dbuid].modified = moment.now();
    this.setModified();
  }


  /**
  * Guarda el nombre de una empresa
  *
  * @param dbuid
  * @param euid
  * @param name
  **/
  modifyEmpresaName(dbuid, euid, name){
    var obj = this.obj;
    var e = obj.dbs[dbuid].empresas[euid];
    e.name = name;
    e.slug = slugify(name, {lower: true});
    this.obj.dbs[dbuid].empresas[euid] = e;
    this.obj.dbs[dbuid].modified = moment.now();
    this.setModified();
    return e;
  }

  /**
  * Obtiene la empresa de una db
  *
  * @param dbuid
  * @param euid
  **/
  getEmpresa(dbuid, euid){
    try{
      var e = this.obj.dbs[dbuid].empresas[euid];
      return e;
    }catch{
      console.error('No se encontró a la empresa.');
    }
  }

  /**
  * Obtiene los campos de una empresa
  *
  * @param dbuid
  * @param euid
  * @return array
  **/
  getEmpresaFields(dbuid, euid){
    try{
      var e = this.getEmpresa(dbuid, euid);
      if(!e.fields){
        e.fields = {};
      }
      var ea = Object.values(e.fields);
    }catch{
      var ea = [];
    }
    return ea;
  }

  /**
  * Obtiene solo los campos que hacen match
  *
  * @param void
  * @return array
  **/
  getEmpresaMatchableFields(dbuid, euid){
    var e = this.getEmpresaFields(dbuid, euid);
    e = e.filter(function(f){
      return f.matchWith && f.matchWith.length
    });
    return e;
  }

  /**
  * Obtiene un campo
  *
  * @param dbuid
  * @param euid
  * @param slug
  * @return obj | false
  **/
  getEmpresaField(dbuid, euid, slug){
    var e = this.getEmpresa(dbuid, euid);
    if(!e.fields){
      e.fields = {};
    }
    var fs = e.fields;
    return fs[slug] ? fs[slug] : false;
  }

  /**
  * Obtiene los errores de empresas
  *
  * @param dbuid
  * @param euid
  * @return array
  **/
  getEmpresaErrors(dbuid, euid){
    var o = {
      error: [],
      warning: [],
      total: 0
    };
    var f = this.getEmpresaFields(dbuid, euid);
    f = f.filter(function(field){
      return !field.isvalid;
    });
    f.map(function(f){
      var s = f.errorLegend;
      if(!o[f.errorType]){
        o[f.errorType] = [];
      }
      o.total = o.total + 1;
      o[f.errorType] = [...o[f.errorType], s];
    })
    return o;
  }

  /**
  * Añade un meta a la empresa
  *
  * @param dbid, euid, key, meta
  * @return void
  **/
  addMetaToEmpresa(dbuid, euid, key, value){
    var e = this.getEmpresa(dbuid, euid);
    if(!e.meta){
      e.meta = [];
    }
    e.meta[key] = value;
    this.obj.dbs[dbuid].empresas[euid] = e;
    this.obj.dbs[dbuid].modified = moment.now();
    this.setModified();
  }

  /**
  * Agrupa campos bajo el atributo group
  *
  * @param string
  * @return obj
  **/
  getEmpresaGroupsByGroup(dbuid, euid, key){
    var f = this.getEmpresaFields(dbuid, euid);
    f = f.filter(function(field){
      return field.group == key;
    })
    var o = {};
    f.map(function(field){
      var guid = field.groupUid;
      if(!o[guid]){
        o[guid] = [];
      }
      o[guid].push(field);
    })
    return Object.values(o);
  }

  /**
  * Añade una empresa a partir de una transferencia
  *
  * @param dbid, euid, guid, fields
  * @return new empresa
  **/
  addEmpresaFromTransferencia(db, empresa, guid, fs){
    try{
      var fields = fs;
      var n = 'Empresa que recibió transferencia de ' + empresa.name;
      Object.values(fields).map(function(field){
        if(field.category == 'receptor'){
          n = field.value;
        }
      })
      var edb = this.addEmpresaToDb(db, n);
      /* Añade la transferencia */
      for(var key in fields){
        fields[key].linkedWith = empresa.uid;
        if(fields[key].category == 'emisor'){
          fields[key].category = 'receptor'
        }
        if(fields[key].bigGroup == 'transferencia'){
          fields[key].value = 'receptor';
        }
      }
      this.addFieldsToEmpresa(db.id, edb[1].uid, fields);
      return edb[1].uid;
    }catch{
      console.warn('Ocurrió un error al agregar la empresa de la transferencia.');
      return false;
    }
  }

  /**
  * Formatea un número a moneda
  *
  * @param float
  * @return string
  **/
  fm(f){
    var o = formatMoney(f);
    return o;
  }
}
