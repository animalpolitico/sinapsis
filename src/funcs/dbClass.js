import moment from 'moment';
import 'moment/locale/es';
import { saveAs } from 'file-saver';
import { countries, getISO, getLang, getCountryCurrency, getFlag, getCurrentCountry, getCurrencyCountry } from '../vars/countriesDict';
import formatMoney, { convertToActualCurrency } from './formatMoney';
import ConvertDbToCsv from './tocsv';
moment.locale('es');
var ntol = require('number-to-letter');
var slugify = require('slugify');
var JSZip = require("jszip");

const uuidv4 = require('uuid/v4');
var gen = require('color-generator');

const { convertArrayToCSV } = require('convert-array-to-csv');
const abook = require('../static/consumable/abook.json');

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
    this.omitDbs = [];
    this.onlyBS = false;
    this.geocoder = new window.google.maps.Geocoder();
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
        name: 'Sin nombre',
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
  * Oculta la base de datos
  *
  * @param dbid
  * @param toggle
  **/
  hideDbs(dbs){
    var self = this;
    this.omitDbs = dbs;
    var c = dbs;
    this.refresh();
    for(var key in this.obj.dbs){
      this.obj.dbs[key]['hide'] = false;
    }
    dbs.map(function(dbid){
      self.obj.dbs[dbid]['hide'] = true;
    })
  }

  /**
  * Obtiene las bases de datos activas
  *
  * @param void
  * @return array
  **/
  getActiveDbs(){
    var all = this.getDbs();
        all = Object.values(all);
    var omit = this.omitDbs;

    var a = all.filter(function(db){
                  return omit.indexOf(db.id) == -1;
                })
    return a;
  }

  /**
  * Crea un texto en CSV a partir de un array
  *
  * @param array
  * @return blob
  **/
  arrayToCsv(arr){
    var csv = convertArrayToCSV(arr);
    var blob = new Blob([csv], {type: "text/csv;charset=utf-8"});
    return blob;
  }


  /**
  * Obtiene un CSV con estadísticas
  *
  * @param void
  * @return CSV / TXT
  **/
  getStatisticsCSV(){
    var o = [];
    /* Montos */
    var self = this;
    var db = this.getDbs();
    var dbA = Object.values(db);
    dbA.map(function(_db){
      var empresas = _db.empresas;
      if(empresas){
        empresas = Object.values(empresas);
        empresas.map(function(empresa){
          empresa.dbid = _db.id;
          self.getEmpresaSum(empresa, _db.country);
        })
      }
    })




  }





  /**
  * Crea los cruces
  *
  * @param void
  * @return obj
  **/
  getMatches(onlyinall){
    var self = this;
    var db = this.getDbs();
    var filterDb = {};
    var omitDbs = this.omitDbs;
    var categories = this.categories;



    var onlyBS = this.onlyBS;

    for(key in db){
      if(omitDbs.indexOf(key) == -1){
        filterDb[key] = db[key];
      }
    }

    db = filterDb;


    var dbkeys = Object.keys(db);
    var dbA = Object.values(db);
    /* Obtiene todos los campos */
    var normalized = [];
    dbA.map(function(_db){
      var dbfields = [];
      var empresas = _db.empresas;
      if(empresas){
        var empresasA = Object.values(empresas);
        empresasA.map(function(empresa){
          var sum = self.getEmpresaSum(empresa, _db.country);
          var eField = {
            id: empresa.uid,
            value: empresa.name,
            fromdb: _db.id,
            empresauid: empresa.uid,
            type: 'empresa',
            sum: sum,
            matchWith: ['empresa'],
            banderasRojas: self.getBanderasRojas(empresa.uid, _db.id)
          };
          if((onlyBS && eField.banderasRojas.length > 0) || !onlyBS){
            dbfields = [...dbfields, eField];
            var fields = self.getEmpresaMatchableFields(_db.id, empresa.uid);
            fields.map(function(f){
              f.type = f.matchWith[0];
              f.empresauid = empresa.uid;
              f.fromdb = _db.id;
              f.dbName = self.getDb(_db.id).name;
              f.empresaName = self.getEmpresa(_db.id, empresa.uid).name;
              f.empresaSum = sum;
              if((categories && categories.indexOf(f.type) > -1) || !categories){
                dbfields = [...dbfields, f]
              }
            });
          }
        })
        normalized = [...normalized, ...dbfields];
      }
    })
    var nodes = {};
    normalized.map(function(f){
      var v = f.value.replace(/[.\s]/g, '');
      var slug = slugify(f.type + '-' + v, {lower: true, remove: /[*,\/+~.()'"!:@]/g});
      if(f.id){
        slug = f.id;
      }
      /* Fecha */
      if(f.type == "date"){
        var time = moment(v);
        if(time.isValid()){
          slug = time.unix();
        }
      }

      if(!nodes[slug]){
        nodes[slug] = {
          id: slug,
          name: f.value,
          type: f.type,
          fields: [],
        }
        if(f.sum){
          nodes[slug].sum = f.sum;
        }
        if(f.banderasRojas){
          nodes[slug].banderasRojas = f.banderasRojas;
        }
      }
      nodes[slug].fields.push(f);
    })


    /* Solo campos con conexiones */
    var fnodes = {};
    for(var key in nodes){
      var n = nodes[key];
      if(n.type == "empresa"){
        fnodes[key] = n;
      }else{
        var diff = [];
        var dbsin = [];
        n.fields.map(function(_field){
          var euid = _field.empresauid;
          if(dbsin.indexOf(_field.fromdb) == -1){
            dbsin.push(_field.fromdb);
          }
          if(diff.indexOf(euid) == -1){
            diff.push(euid);
          }
        })

        var _add = false;
        if(onlyinall == "all"){
          _add = true;
        }else if(onlyinall == "onlyinall"){
          _add = dbsin.length == dbkeys.length;
        }else if(onlyinall == "twoormore"){
          _add = dbsin.length > 1;
        }else{
          _add = true;
        }
        var add = _add;

        if(diff.length > 1 && add){
          fnodes[key] = n;
        }
      }
    }


    nodes = fnodes;
    var finalObj = {
      nodes: [],
      links: []
    };
    Object.values(nodes).map(function(e){
      finalObj.nodes = [...finalObj.nodes, e];
    });



    return finalObj;
  }

  /**
  * Obtiene el top 10 de montos
  *
  * @param activeDbs
  * @return array
  **/
  getTopMontos(onlydbs, _n){
    if(!_n){
      _n = 10;
    }
    var self = this;
    var db = this.getDbs();
    var dbA = Object.values(db);
    if(onlydbs){
      dbA = dbA.filter(_db => onlydbs.indexOf(_db.id) > -1);
    }
    var o = [];
    dbA.map(function(_db){
      var empresas = _db.empresas;
      if(empresas){
        empresas = Object.values(empresas);
        empresas.map(function(empresa){
          empresa.dbid = _db.id;
          empresa.sum = self.getEmpresaSum(empresa, _db.country);
          if(empresa.sum > 0){
            o.push(empresa);
          }

        })
      }
    })

    o.sort(function(a, b){
      var as = a.sum;
      var bs = b.sum;
      return as < bs ? 1 : -1;
    })
    o = o.slice(0, _n);
    return o;
  }

  /**
  * Obtiene el currency de una base
  *
  * @param dbid
  * @return code
  **/
  getDbCurrencyObj(dbid){
    try{
      var _db = this.getDb(dbid);
      if(_db.currency){
        var c = _db.currency;
      }else{
        if(_db.country){
          var country = _db.country;
          var c = getCountryCurrency(country);
        }else{
          var country = getCurrentCountry();
          var c = country.currency;
        }
      }

      var s = countries.filter(_c => _c.currency == c);
          s = s[0];

      var obj = {
        currency: c,
        country: _db.country,
        name: s.currencyName,
        symbol: s.currencySign,
        toMXN: s.toMXN
      }
    }catch{
      var obj = {
        currency: '',
        name: '',
        symbol: '',
        toMXN: ''
      }
    }

    return obj;
  }

  /**
  * Obtiene el currency de una base
  *
  * @param dbid
  * @return code
  **/
  getDbCurrency(dbid){
    return this.getDbCurrencyObj(dbid).currency;
  }

  /**
  * Construye Analytics de interés
  *
  * @param void
  * @return obj
  **/
  buildAnalytics(onlydbs){
    var db = this.getDbs();
    var dbA = Object.values(db);
    if(onlydbs){
      dbA = dbA.filter(_db => onlydbs.indexOf(_db.id) > -1);
    }
    var interestFields = ['rfc', 'folio-mercantil', 'direccion-fiscal', 'telefono', 'sitio-web', 'correo-electronico', 'representante', 'accionista'];
    var obj = {
      count: 0
    }
    interestFields.map(function(k){
      obj[k] = 0;
    })


    var controlTable = {};

    dbA.map(function(_db){
      var empresas = _db.empresas;
      if(empresas){
        empresas = Object.values(empresas);
        empresas.map(function(empresa){
          obj.count = obj.count + 1;
          var fields = empresa.fields;
          if(fields){
            interestFields.map(function(f){
              if(fields[f] && fields[f].value){
                if(!obj[f]){
                  obj[f] = 0;
                  controlTable[f] = [];
                }
                controlTable[f].push(fields[f].value);
                obj[f] = obj[f] + 1;
              }
            })

            var groups = ['representante', 'accionista'];
            var omitGroup = [];
            for(var key in fields){
              var f = fields[key];
              if(f.group && groups.indexOf(f.group) > -1 && omitGroup.indexOf(f.group) == -1){
                if(!obj[f.group]){
                  obj[f.group] = 0;
                }
                obj[f.group] = obj[f.group] + 1;
                omitGroup.push(f.group);
              }
            }
          }
        })
      }
    })
    return obj;
  }

  /**
  * Construye Analytics de interés
  *
  * @param void
  * @return obj
  **/
  buildAnalyticsBr(onlydbs){
    var db = this.getDbs();
    var dbA = Object.values(db);
    if(onlydbs){
      dbA = dbA.filter(_db => onlydbs.indexOf(_db.id) > -1);
    }
    var interestFields = ['SinAntReg', 'ASFnoLocalizada', 'SATdefinitiva', 'SATpresunta','SATdesvirtuados','SATfavorables', 'NoInscritoRUPC', 'RegCompraNet', 'InscritoRUPC'];
    var obj = {
      count: 0
    }
    interestFields.map(function(k){
      obj[k] = 0;
    })
    var controlTable = {};

    dbA.map(function(_db){
      var empresas = _db.empresas;
      if(empresas){
        empresas = Object.values(empresas);
        empresas.map(function(empresa){
          obj.count = obj.count + 1;
          var fields = empresa.fields;
          if(fields){
            fields = Object.values(fields);
            var f = fields.filter(_f => _f.slug == "banderas-rojas");
            if(f.length){
              var bs = f[0].bs;
              if(bs){
                bs.map(e => obj[e] = obj[e] + 1);
              }
            }
          }
        })
      }
    })
    return obj;
  }

  /**
  * Obtiene todas las direcciones con latitud y longitud
  *
  * @param void
  * @return array
  **/
  getLatLngAddress(){
    var o = [];
    var db = this.getDbs();
    var dbA = Object.values(db);
    dbA.map(function(_db){
      var dbfields = [];
      var empresas = _db.empresas;
      if(!empresas){
        empresas = {};
      }
          empresas = Object.values(empresas);
      if(empresas){
        empresas.map(function(empresa){
          var fields = empresa.fields;
              fields = Object.values(fields);

          /* Busca en el libro de direcciones */
          fields.map(function(f){
            if(f.type == "address"){
              var s = slugify(f.value, {lower: true});
              if(abook[s]){
                f.latlng = abook[s].latlng;
              }
            }
          })

          var withLatLng = fields.filter(f => f.latlng ? true : false);
          withLatLng.map(function(d){
            o.push(d);
          })
        })
      }
    })
    return o;
  }

  /**
  * Busca si una dirección se puede abrir en Google Maps
  *
  * @param void
  * @return bool
  **/
  isAddressGoogleMaps(a){
    var s = slugify(a, {lower: true});
    return abook[s] ? abook[s] : false;
  }


  /**
  * Obtiene todas los campos de un tipo
  *
  * @param void
  * @return array
  **/
  getByType(t){
    var o = [];
    try{
      var db = this.getDbs();
      var dbA = Object.values(db);
      dbA.map(function(_db){
        var dbfields = [];
        var empresas = _db.empresas;
            empresas = Object.values(empresas);
        if(t == "empresa"){
          o = [...o, ...empresas];
        }
        if(empresas && t !== "empresa"){
          empresas.map(function(empresa){
            var fields = empresa.fields;
                fields = Object.values(fields);
            var withType = fields.filter(f => f.type == t);
            withType.map(function(d){
              o.push(d);
            })
          })
        }
      })
    }catch{

    }

    return o;
  }

  /**
  * Obtiene todas los campos de una category
  *
  * @param void
  * @return array
  **/
  getByCategory(t){
    var o = [];
    try{
      var db = this.getDbs();
      var dbA = Object.values(db);
      dbA.map(function(_db){
        var dbfields = [];
        var empresas = _db.empresas;
            empresas = Object.values(empresas);
        if(empresas){
          empresas.map(function(empresa){
            var fields = empresa.fields;
                fields = Object.values(fields);
            var withType = fields.filter(f => f.category == t);
            withType.map(function(d){
              o.push(d);
            })
          })
        }
      })
    }catch{

    }

    return o;
  }

  /**
  * Obtiene todas los campos de una category
  *
  * @param void
  * @return array
  **/
  getByNewOtros(t){
    var o = [];
    try{
      var db = this.getDbs();
      var dbA = Object.values(db);
      dbA.map(function(_db){
        var dbfields = [];
        var empresas = _db.empresas;
            empresas = Object.values(empresas);
        if(empresas){
          empresas.map(function(empresa){
            var fields = empresa.fields;
                fields = Object.values(fields);
            var withType = fields.filter(f => f.newOtros ? true : false || f.category == "*");
            withType.map(function(d){
              o.push(d);
            })
          })
        }
      })
    }catch{

    }

    return o;
  }

  /**
  * Obtiene todas los campos de un tipo que coincidan con una búsqueda
  *
  * @param void
  * @return array
  **/
  searchByType(v, t){
    var all = this.getByType(t);
    var o = [];
    var control = [];
    if(!v || typeof v !== "string"){
      return o;
    }
    var sv = v.replace(/[.\s]/g, '');
        sv = slugify(sv, {lower: true, remove: /[*+~.,()'"!:@]/g});
    all.map(function(d){
      var dv = t == "empresa" ? d.name : d.value;
      if(dv){
        var vs = dv.replace(/[.\s]/g, '');
            vs = slugify(vs, {lower: true, remove: /[*+~.,()'"!:@]/g});
        var add = false;
        if(sv.length > vs.length){
          if(sv.indexOf(vs) > -1){
            add = true;
          }
        }else{
          if(vs.indexOf(sv) > -1){
            add = true;
          }
        }
        if(add && control.indexOf(vs) == -1){
          control.push(vs);
          o.push(d);
        }
      }
    })
    return o;
  }

  /**
  * Obtiene la suma de transferencias
  *
  * @param void
  * @return int
  **/
  getTransferenciasSum(odbs, onlypositive){
    var self = this;
    var db = this.getDbs();
    var dbA = Object.values(db);
    if(odbs){
      dbA = dbA.filter(_db => odbs.indexOf(_db.id) > -1);
    }
    var count = 0;
    dbA.map(function(_db){
      var dbfields = [];
      var currency = self.getDbCurrency(_db.id);
      var empresas = _db.empresas;
      if(empresas){
        empresas = Object.values(empresas);
        empresas.map(function(em){
          var f = em.fields ? em.fields : {};
              f = Object.values(f);
          var c = self.getEmpresaTransferenciaSum(f);
              c = convertToActualCurrency(c, currency);
          if(onlypositive && c > 0){
            count += c;
          }else if(!onlypositive){
            count += c;
          }
        })
      }
    })
    return count;
  }

  /**
  * Obtiene la suma de licitaciones
  *
  * @param void
  * @return int
  **/
  getLicitacionesSum(odbs, onlypositive){
    var self = this;
    var db = this.getDbs();
    var dbA = Object.values(db);
    if(odbs){
      dbA = dbA.filter(_db => odbs.indexOf(_db.id) > -1);
    }
    var count = 0;
    dbA.map(function(_db){
      var dbfields = [];
      var currency = self.getDbCurrency(_db.id);
      var empresas = _db.empresas;
      if(empresas){
        empresas = Object.values(empresas);
        empresas.map(function(em){
          var f = em.fields ? em.fields : {};
              f = Object.values(f);
          var ls = f.filter(_f => _f.slug == "contrato-monto-total-de-licitacion");
          ls.map(function(_ls){
             var _c = parseFloat(_ls.value);
                 _c = convertToActualCurrency(_c, currency);
             count += _c;
          })
        })
      }
    })
    return count;
  }

  /**
  * Obtiene la suma de convenios
  *
  * @param void
  * @return int
  **/
  getGroupsSum(group, keySlug, montoSlug, odbs){
    var self = this;
    var masterFields = [];
    var db = this.getDbs();
    var dbA = Object.values(db);
    if(odbs){
      dbA = dbA.filter(_db => odbs.indexOf(_db.id) > -1);
    }
    dbA.map(function(_db){
      var dbfields = [];
      var empresas = _db.empresas;
      var currency = self.getDbCurrency(_db.id);

      if(empresas){
        empresas = Object.values(empresas);
        empresas.map(function(empresa){
          var fields = empresa.fields;
              fields = Object.values(fields);
          var convenioFields = fields.filter(function(f){
            return f.group == group;
          })
          if(convenioFields){
            var groups = {};
            convenioFields.map(function(c){
              c.currency = currency;
              var guid = c.guid;
              if(!groups[guid]){
                groups[guid] = [];
              }
              groups[guid].push(c);
            })
            groups = Object.values(groups);
            masterFields = [...masterFields, ...groups];
          }
        })
      }
    })

    var k = keySlug;
    var s = montoSlug;

    var control = {};

    masterFields.map(function(a){
      /* Busca el número de contrato / convenio */
      var controlKey = a.find(function(f){
        return f.slug == k;
      });
      var no = '';
      if(controlKey){
        no = controlKey.value;
      }

      no = slugify(no, {lower: true, remove: /[\/\-*+~.()'"!:@]/g});

      /* Busca el monto */
      var montoKey = a.find(function(f){
        return f.slug == s;
      })
      var m = 0;
      if(montoKey){
        m = parseFloat(montoKey.value);
      }
      if(isNaN(m)){
        m = 0;
      }
      m = convertToActualCurrency(m, a.currency);
      if(!control[no]){
        control[no] = m;
      }
    })

    var af = Object.values(control);

    var i = 0;

    af.map(function(f){
      i += f;
    })

    return i;
  }


  /**
  * Obtiene todos los tipos de "Otros"
  *
  * @param void
  * @return array
  **/
  getNewOtros(){
    var o = [];
    var fs = this.getByNewOtros();
    if(fs){
      fs.map(function(s){
        var v = s.category == "*" ? s.value : s.newOtros;
        if(o.indexOf(v) == -1){
          o.push(v);
        }
      })
    }
    return o;
  }

  /**
  * Obtiene la suma de empresa
  *
  * @param empresa
  * @return int
  **/
  getEmpresaSum(empresa, country){
    if(!empresa.fields){
      return 0;
    }
    country = !country ? 'MEX' : country;
    var currency = getCountryCurrency(country);

    var f = Object.values(empresa.fields);
    var i = 0;
    f.map(function(d){
      if(d.sumWith && d.sumWith.indexOf('montos_totales') > -1 && d.group !== "transferencia"){
        i += parseFloat(d.value)
      }
    });

    i += this.getEmpresaTransferenciaSum(f);
    i += this.getEmpresaOtrosSum(f);

    if(isNaN(i)){
      i = 0;
    }

    return convertToActualCurrency(i, currency);
  }

  /**
  * Obtiene un CSV con montos
  *
  * @param void
  * @return void
  **/
  downloadMontos(){
    window.dispatchEvent(new Event('sinapsisStartLoad'));
    var self = this;
    var country = getCurrentCountry();
    var subfix = '('+country.currencySign+' '+country.currency+')';
    var o = [
      ['Empresa', 'Monto neto recibido '+subfix, 'Base de datos', 'Montos en contratos '+subfix, 'Montos en transferencias '+subfix, 'Otros '+subfix, ]
    ]
    var b = [];
    var db = this.getDbs();
    var dbA = Object.values(db);
    dbA.map(function(_db){
      var ccode = _db.country;
      if(!ccode){
        ccode = "MEX";
      }
      var currency = getCountryCurrency(ccode);
      var empresas = _db.empresas;
      if(!empresas){
        empresas = {};
      }
          empresas = Object.values(empresas);
      empresas.map(function(empresa){
        if(!empresa.fields){
          empresa.fields = {};
        }
        var f = Object.values(empresa.fields);
        var transfer = self.getEmpresaTransferenciaSum(f);
            transfer = convertToActualCurrency(transfer, currency)
        var otros = self.getEmpresaOtrosSum(f);
            otros = convertToActualCurrency(otros, currency);
        var cf = f.filter(d => d.sumWith && d.group == "contrato");
        var contratos = 0;
        cf.map(v => contratos += v.value);
        contratos = convertToActualCurrency(contratos, currency);
        var ti = [empresa.name,self.getEmpresaSum(empresa, ccode), _db.name, contratos, transfer, otros, ]
        b.push(ti);
      })
    })

    b = b.sort(function(a, b){
      return a[1] <= b[1] ? 1 : -1;
    })

    o = [...o, ...b];

    var blob = this.arrayToCsv(o);

    var slug = "Montos " + this.obj.info.name + " v" + this.obj.version;
        slug = slugify(slug, {lower: true});
    saveAs(blob, slug +'.csv');
    window.dispatchEvent(new Event('sinapsisEndLoad'));
  }



  /**
  * Obtiene la suma de las transferencias de la empresa
  *
  * @param empresa
  * @return int
  **/
  getEmpresaTransferenciaSum(f){
    var i = 0;
    f = f.filter(function(d){
      return d.group == "transferencia";
    });

    var ts = {};

    f.map(function(em){
      if(!ts[em.guid]){
        ts[em.guid] = [];
      }
      ts[em.guid].push(em);
    })

    for(var key in ts){
      var _t = ts[key];
      var monto = 0;
      var type = false;
      _t.map(function(_e){
        var _sst = _e.category;
        if(_sst == "monto"){
          monto = parseFloat(_e.value);
        }
        if(_e.name == "Tipo de transferencia"){
          type = _e.value;
        }
      })

      if(monto && type){
        var multi = 1;
        if(type == "emisor"){
          multi = -1;
        }
        i += (multi * monto);
      }
    }
    return i;
  }

  /**
  * Obtiene la suma de otros
  *
  * @param empresa
  * @return int
  **/
  getEmpresaOtrosSum(f){
    var i = 0;
    f = f.filter(function(d){
      return d.group == "otros" && (d.category == "monto_recibido" || d.category == "monto_otorgado");
    });
    var ts = {};
    f.map(function(em){
      var mult = em.category == "monto_recibido" ? 1 : -1;
      var v = em.value;
          v = parseFloat(v);
      if(isNaN(v)){
        v = 0;
      }
      i += v * mult;
    })

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
  * Obtiene las banderas rojas de la empresa
  *
  * @param euid
  * @param dbid
  * @return array
  **/
  getBanderasRojas(euid, dbuid){
    var o = [];
    var e = this.getEmpresa(dbuid, euid);
    if(!e.fields){
      return o;
    }
    if(e.fields['banderas-rojas'] && e.fields['banderas-rojas'].bs){
      return e.fields['banderas-rojas'].bs;
    }else{
      return o;
    }
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
  * Obtiene los CSVs
  *
  * @param void
  * @return array
  **/
  createProjectCSVs(){
    var self = this;
    /** Bases a CSV */
    var dbs = this.getDbs();
    var csvs = [];
    Object.values(dbs).map(function(db){
      var c = new ConvertDbToCsv(db);
      var co = c.getData();
      co.d = self.arrayToCsv(co.d)
      csvs.push(co);
    })

    return csvs;
  }

  /**
  * Construye un archivo .sinapsis
  *
  * @param void
  * @return Blob
  **/
  createProjectFile(szip){


    var ev = new Event('sinapsisStartLoad');
    window.dispatchEvent(ev);

    var d = this.obj;
    d.savedAt = moment.now();
    d.saves = d.saves + 1;
    var s = JSON.stringify(d);
    var j = btoa(encodeURI(s));
    var txt = j;
    var kbsize = txt.length * 0.000125;
    var name = d.info.slug + '_v'+ d.saves;
    var zip = new JSZip();
    zip.file('leeme.txt', this.getReadMeText(name), {binar: true});
    zip.file(name + '.sinapsis', txt, {binary: true});
    zip.file('dev/'+ name + '_dev.json', s, {binary: true});
    if(szip){
      for(var s_name in szip){
        var _f = szip[s_name];
        zip.file('imagenes/'+s_name, _f);
      }
    }

    var csvs = this.createProjectCSVs();
    if(csvs.length){
      csvs.map(function(c){
        zip.file('csv/'+ c.slug +'.csv', c.d);
      })
    }



    zip.generateAsync({type: "blob"})
    .then(function(content) {
        saveAs(content, name + ".zip");
        var ev = new Event('sinapsisEndLoad');
        window.dispatchEvent(ev);
    });
  }

  /**
  * Obtiene el ReadMe
  *
  * @param void
  * @return string
  **/
  getReadMeText(filename){
    var rows = [
      'sinapsis.lat',
      'Herramienta para descubrir conexiones entre empresas',
      '',
      'Animal Político (www.animalpolitico.com)',
      'México, 2019',
      '',
      '',
      '- - - - - - - - - - - - - - - - - - - - - - - - - - -',
      '',
      '',
      '¡Hola! Nos alegra mucho que estés usando Sinapsis. El archivo .zip que acabas de descargar contiene diversos materiales sobre tu proyecto:',
      '',
      '- CSV: archivos csv (que puedes abrir con Excel o Numbers) con las bases de datos usadas en tu proyecto',
      '- DEV: el archivo .json para que si eres desarrollador lo puedas usar para otros proyectos',
      '- IMAGENES: archivos JPG y PNG para que los insertes en tus publicaciones y archivo SVG para que si sabes usar programas de diseño lo puedas abrir en vectores y transformar',
      '- Archivo .sinapsis: ese es tu proyecto, aquí se guarda toda la información que le hayas añadido y es el que podrás cargar desde cualquier computadora cuando lo quieras seguir trabajando',
      '',
      '',
      '- - - - - - - - - - - - - - - - - - - - - - - - - - -',
      '',
      '',
      '¿Dudas?, ¿sugerencias?, ¿observaciones?:',
      '',
      '- sinapsis@animalpolitico.com',
      '- https://t.me/sinapsislat (grupo de Telegram)'
    ];

    return rows.join('\n');
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
  addDb(currency){
    if(!currency){
      currency = "MXN";
    }

    var country = getCurrencyCountry(currency);

    console.log('country', country, currency);

    var dbs = this.getDbs();
    var x = Object.values(dbs).length;
    var uid = this.createUid();
    var o = {
      id: uid,
      name: 'Nueva base de datos #'+ (x+1),
      created: moment.now(),
      currency: currency,
      country: country,
      color: gen().rgbString()
    }
    dbs[uid] = o;
    this.setModified();
    this.refresh();
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
  addEmpresaToDb(db, v, ispersona){
    if(!db.empresas){
      db.empresas = {};
    }
    var empresa = {
      name: v,
      slug: slugify(v, {lower: true}),
      uid: this.createUid(),
      fields: {}
    };
    db.empresas[empresa.uid] = empresa;

    /* Prestador de servicios */
    if(ispersona){
      var u = this.createUid();
      var s = slugify(u + ' ' + 'tipo persona', {lower: true});
      var i = {
        group: "representante",
        value: "representante",
        bigGroup: "persona",
        isvalid: true,
        guid: u,
        groupUid: u,
        name: "Tipo de persona"
      }
      db.empresas[empresa.uid].fields[s] = i;

      var s = slugify(u + ' ' + 'representante-nombre-completo', {lower: true});
      var i = {
        group: "representante",
        value: "representante",
        bigGroup: "persona",
        isvalid: true,
        guid: u,
        groupUid: u,
        value: v,
        category: "name",
        matchWith: ['person'],
        type: "person",
        empresauid: empresa.uid,
        fromdb: db.id,
        dbName: db.name,
        empresaName: v,
        slug: "representante-nombre-completo",
        name: "Nombre completo"
      }
      db.empresas[empresa.uid].fields[s] = i;


    }




    this.editDb(db.id, db);
    this.refresh();
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
    this.refresh();
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
    this.refresh();
    this.setModified();
  }

  /**
  * Elimina un grupo de campos
  *
  * @param guid, euid, db
  **/
  deleteGroup(guid, euid, dbid){
    try{
      var ev = new Event('sinapsisStartLoad');
      window.dispatchEvent(ev);
      var f = this.getEmpresaFields(dbid, euid);
      var topreserve = f.filter(function(a){
        return a.groupUid !== guid
      });
      var ff = {};
      topreserve.map(function(d){
        ff[d.slug] = d;
      })
      this.obj.dbs[dbid].empresas[euid].fields = ff;
    }catch(ex){
    }

    this.refresh();
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
    this.refresh();
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
    this.refresh();
    this.setModified();
  }

  /**
  * Actualiza el mapa de nodos
  *
  * @param void
  * @return void
  **/
  refresh(){
    var ev = new Event('sinapsisBigModified');
    window.dispatchEvent(ev);

    var ev = new Event('ss_reload_map');
    window.dispatchEvent(ev);

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

    if(key == "transferencia"){
    }

    var o = {};
    f.map(function(field){
      var guid = field.groupUid;
      if(!guid){
        guid = field.guid;
      }
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
  addEmpresaFromTransferencia(db, empresa, guid, y){
    try{
      var z = JSON.parse(y);
      var _gi = null;
      for(var key in z){
        var e = z[key];
        _gi = e.guid;
        if(e.name == "Tipo de transferencia"){
          var ov = e.value;
          var nv = ov == "emisor" ? "receptor" : "emisor";
          e.value = nv;
          e.category = nv;
        }
        if(e.slug == "transferencia-recursos"){
          var lbl = ov == "emisor" ? "¿Quién otorgó los recursos?" : "¿A quién otorgó los recursos?";
          e.name = lbl;
          e.category = ov;
          var ne = e.value;
          if(ov == "emisor"){
            e.value = empresa.name;
          }
        }
      }
      if(ne){
        /* Busca la empresa, si no la crea */
        var guid = this.empresaExists(ne, db);
        if(!guid){
          var rspns = this.addEmpresaToDb(db, ne);
          var guid = rspns[1].uid;
        }
        if(guid !== empresa.uid){
          this.addFieldsFromGuid(db.id, guid, _gi, z);
        }
      }
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


  /**
  * Formatea un número con comas
  *
  * @param float
  * @return string
  **/
  numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }


  /**
  * Determina si una empresa ya existe en la DB
  *
  * @param string
  * @return string | false
  **/
  empresaExists(v, db){
    var vs = v.replace(/[.\s]/g, '');
        vs = slugify(vs, {lower: true, remove: /[*+~.,()'"!:@]/g});
    var empresas = {};

    var e = db.empresas;
    if(e){
      e = Object.values(e);
      e.map(function(emp){
        var semp = emp.name.replace(/[.\s]/g, '');
            semp = slugify(semp, {lower: true, remove: /[*+~.,()'"!:@]/g});
        empresas[semp] = emp.uid;
      })
      if(Object.keys(empresas).indexOf(vs) > -1){
        return empresas[vs];
      }else{
        return false;
      }
    }else{
      return false;
    }
  }


  /**
  * Geocodificia una dirección
  *
  * @param address
  * @return Promise <array>
  **/
  geocode(a){
    var self = this;
    var iso = getISO();
    var o = [];
    if(!a){
      return o;
    }
    return new Promise((resolve, reject) => {
      self.geocoder.geocode(
        {
          address: a,
          componentRestrictions: {
            country: iso,
          }
        }
      ,function(results, status){
        if (status !== window.google.maps.GeocoderStatus.OK) {
          reject(status);
        }
        resolve(results);
      })
    })
  }


}
