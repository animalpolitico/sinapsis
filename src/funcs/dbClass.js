import moment from 'moment';
import 'moment/locale/es';
moment.locale('es');

var ntol = require('number-to-letter');
var slugify = require('slugify');

export default class DbFactory {

  /**
  * Construye la clase a partir de un array
  *
  * @param array
  * @return void
  **/
  constructor(DbInfo){
    if(!DbInfo){
      DbInfo = [];
      console.error('Sinapsis: No hay ninguna estructura de formulario seleccionada. Esto ocasionará errores inesperados.');
    }
    this.classVersion = '0.0.1';
    this.version = 0;
    this.originalData = DbInfo;
  }

  /**
  * Crea un objeto que después podrá ser exportado
  *
  * @param void
  * @return obj
  **/
  set(){
    this.obj = {
      projectStructure: this.originalData,
      classVersion: this.classVersion,
      version: this.version
    };
    return this.setCreated();
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
    this.version++;
    this.obj.version = this.version;
    return this.obj;
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




}
