import { getISO } from '../vars/countriesDict';
const queryString = require('query-string');
export function GCBuildLink(a){
  var iso = getISO();
  var baseUrl= "https://maps.googleapis.com/maps/api/geocode/json";
  var params = {
    'key': "AIzaSyAXc86Sj6eDybMXNU-201kM-d740uoaMqk",
    'address': a,
    'language': 'es',
    'region': iso
  };
  var paramString = queryString.stringify(params);
  var url = baseUrl + '?' + paramString;
  return url;
}
