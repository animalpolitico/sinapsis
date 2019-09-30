import * as d3 from "d3";
export function convertToSinapsisFile(file){
  var s = JSON.stringify(file);
  var j = btoa(encodeURI(s));

  // console.log('j', j);

}
