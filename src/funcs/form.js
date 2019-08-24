var ntol = require('number-to-letter');
var slugify = require('slugify')

export default class FormFactory {

  /**
  * Construye la clase a partir de un array
  *
  * @param array formArray
  * @return FormFactory
  **/
  constructor(formArray){
    if(!formArray){
      formArray = [];
      console.error('No hay ninguna estructura de formulario seleccionada. Esto ocasionará errores inesperados.');
    }
    this.originalData = formArray;
    this.data = this.build();
    this.size = this.data.length;
  }

  /**
  * Crea el ID de un campo
  *
  * @param {} field
  * @return string
  **/
  getFieldId(e){
    var s = e.group;
    if(e.subgroup){
      s += '-' + e.subgroup;
    }
      s += '-' + e.name;
    return slugify(s, {
      lower: true
    });
  }

  /**
  * Filtra y agrega campos al objeto principal
  *
  * @param void
  * @return formObject
  **/
  build(){
    var self = this;
    var currentGroup, currentSubGroup;
    var groupIndex, subgroupIndex = 0;
    var f = this.originalData.map(function(e, d){
      e.index = d;
      e.indexAsLetter = ntol(e.index);
      e.id = self.getFieldId(e);
      /* Establece el índice del grupo */
      if(e.group){
        if(e.group !== currentGroup){
          groupIndex = -1;
        }
        groupIndex++;
        e.groupIndex = groupIndex;
        currentGroup = e.group;
      }

      /* Establece el índice del subgrupo */
      if(e.subgroup){
        if(e.subgroup !== currentSubGroup){
          subgroupIndex = -1;
        }
        subgroupIndex++;
        e.subgroupIndex = subgroupIndex;
        currentSubGroup = e.subgroup;
      }
      return e;
    });

    return f;
  }

  /**
  * Agrupa por un atributo
  *
  * @param string
  * @return obj
  **/
  groupByAttr(attr){
    var d = this.data;
    var o = {};
    d.map(function(e){
      var t = e[attr];
      if(!o[t]){
        o[t] = [];
      }
      o[t].push(e);
    })
    return o;
  }

  /**
  * Obtiene los grupos
  *
  * @param void
  * @return obj
  **/
  getGroups(){
    return Object.values(this.groupByAttr('group'));
  }

  /**
  * Filtra el objeto a si tiene un atributo
  *
  * @param string key
  * @param mixed value, si no se coloca solo considera la key
  * @return array formObject
  **/
  getFieldsByAttr(attr, value){
    var d = this.data;
    d = d.filter(function(e, i){
      var hs = e[attr];
      if(hs && value){
        if(Array.isArray(hs)){
          return hs.indexOf(value) > -1;
        }else{
          return hs == value;
        }
      }else{
        return hs ? true : false;
      }
    });
    return d;
  }

  /**
  * Obtiene el campo principal
  * Este campo se determina con el atributo main
  *
  * @param void
  * @return obj | false
  **/
  getMainField(){
    var rs = this.getFieldsByAttr('main', true);
    if(rs.length){
      return rs[0];
    }else{
      console.error('Sinapsis: Error en la retribución del campo principal. Asegúrate de tener al menos un campo con el atributo main=true');
      return false;
    }
  }
}
