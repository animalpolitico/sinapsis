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
    this.originalData = DbInfo;
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



}
