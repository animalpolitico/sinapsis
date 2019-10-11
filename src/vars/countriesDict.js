var slugify = require('slugify');
var store = require('store')

export const countries = [
  {
    name: 'México',
    code: 'MEX',
    coords: [-102.552784, 23.634501]
  },
  {
    name: 'Paraguay',
    code: 'PRY',
    translatedBy: ['Maricarmen Sequera', 'TEDIC NGO'],
    coords: [-58.443832, -23.442503]
  },
  {
    name: 'República Dominicana',
    code: 'DOM',
    translatedBy: ['Daniel Harel'],
    coords: [-70.162651, 18.735693]
  },
  {
    name: 'Bolivia',
    code: 'BOL',
    translatedBy: ['Raisa Valda Ampuero', 'Warmi.Red'],
    coords: [-63.588653, -16.290154]
  },
  {
    name: 'Costa Rica',
    code: 'CRI',
    translatedBy: ['Ana Sofía Ruiz', 'Iniciativa Latinoamericana por los Datos Abiertos (ILDA)'],
    coords: [-83.753428, 9.748917]
  },
  {
    name: 'Perú',
    code: 'PER',
    translatedBy: ['Gabriela Flores Ch.', 'Asociación civil Japiqay, Memoria y Ciudadanía'],
    coords: [-75.015152, -9.189967]
  },
  {
    name: 'Panamá',
    code: 'PAN',
    translatedBy: ['Lia Hernández', 'IPANDETEC'],
    coords: [-80.782127, 8.537981]
  },
  {
    name: 'Venezuela',
    code: 'VEN',
    translatedBy: ['Yuleina Carmona'],
    coords: [-66.58973, 6.42375]
  },
  {
    name: 'Guatemala',
    code: 'GTM',
    translatedBy: ['Suchit Chávez', 'Plaza Pública'],
    coords: [-90.230759, 15.783471]
  },
  {
    name: 'Honduras',
    code: 'HND',
    translatedBy: ['Felisa Franco', 'Secretaría de Finanzas'],
    coords: [-86.241905, 15.199999]
  },
  {
    name: 'Ecuador',
    code: 'ECU',
    translatedBy: ['Camilo Burneo'],
    coords: [-78.183406, 	-1.831239]
  },
  {
    name: 'Argentina',
    code: 'ARG',
    translatedBy: ['Nicolás'],
    coords: [-63.616672, -38.416097]
  },
  {
    name: 'Colombia',
    code: 'COL',
    translatedBy: ['Juliana Galvis', 'Datasketch'],
    coords: [-74.297333, 4.570868]
  }
];

countries.sort(function(a, b){
  var ab = a.name;
  var bb = b.name;
  if(ab > bb){
    return 1;
  }else if(bb > ab){
    return -1;
  }else{
    return 0;
  }
})

const dict = {
  'rfc': {
    "PRY": "RUC",
    "DOM": "RNC",
    "BOL": "NIT",
    "CRI": "RUT",
    "PER": "RUC",
    "PAN": "RUC",
    "VEN": "RIF",
    "GTM": "NIT",
    "HND": "RTN",
    "ECU": "RUC",
    "ARG": "CUIT",
    "COL": "NIT"
  },
  'objeto-social': {
    "PRY": "Actividades económicas",
    "DOM": "Actividad económica",
    "BOL": "Actividad principal",
    "VEN": "Actividad comercial",
    "GTM": "Objeto",
    "HND": "Actividad comercial",
    "ECU": "Actividad económica"
  },
  'capital-social-minimo': {
    "PRY": "Capital social mínimo",
    "DOM": "Capital social",
    "BOL": "Capital social",
    "CRI": "Capital social mínimo",
    "PER": "Capital social inicial",
    "PAN": "Capital social mínimo",
    "VEN": "Capital suscrito",
    "GTM": "Capital social autorizado",
    "HND": "Capital social autorizado",
    "ECU": "Capital social",
    "ARG": "Capital social",
    "COL": "Capital suscrito"
  },
  'accionista': {
    "GTM": "Socio",
  },
  'accionistas': {
    "GTM": "Socios",
  },
  'comisario': {
    "PRY": "Síndico",
    "DOM": "Comisario de cuentas",
    "BOL": "Comité de vigilancia",
    "CRI": "Fiscal",
    "PER": "Auditor",
    "PAN": "Fiscal",
    "VEN": "Auditor",
    "GTM": "Mandatario",
    "HND": "Comisario",
    "ECU": "Comisario",
    "ARG": "Tesorero",
    "COL": "Revisor fiscal"
  },
  'comisarios': {
    "PRY": "Síndicos",
    "DOM": "Comisarios de cuentas",
    "BOL": "Comité de vigilancia",
    "CRI": "Fiscales",
    "PER": "Auditores",
    "PAN": "Fiscales",
    "VEN": "Auditores",
    "GTM": "Mandatarios",
    "HND": "Comisarios",
    "ECU": "Comisarios",
    "ARG": "Tesoreros",
    "COL": "Revisores fiscales"
  },
  'notaria': {
    "PRY": "Escribanía",
    "DOM": "Oficina notarial",
    "BOL": "Notaría de Fe Pública",
    "CRI": "Notaría",
    "PER": "Notaría",
    "PAN": "Notaría",
    "VEN": "Notaría",
    "GTM": "Despacho legal",
    "HND": "Notaría",
    "ECU": "Notaría",
    "ARG": "Escribanía",
    "COL": "Cámara de comercio"
  },
  'nombre-del-notario': {
    "PRY": "Nombre del escribano",
    "BOL": "Nombre del notario de fe pública",
    "ARG": "Nombre del escribano",
  },
  'no.-notaria': {
    "PRY": "No. de escribanía",
    "DOM": "No. de oficina notarial",
    "BOL": "No. de notaría de Fe Pública",
    "CRI": "No. de notaría",
    "PER": "No. de notaría",
    "PAN": "No. de notaría",
    "VEN": "No. de notaría",
    "GTM": "No. de despacho legal",
    "HND": "No. de notaría",
    "ECU": "No. de notaría",
    "ARG": "No. de escribanía",
    "COL": "No. de cámara de comercio"
  },
  'numero-de-notaria': {
    "PRY": "No. de escribanía",
    "DOM": "No. de oficina notarial",
    "BOL": "No. de notaría de Fe Pública",
    "CRI": "No. de notaría",
    "PER": "No. de notaría",
    "PAN": "No. de notaría",
    "VEN": "No. de notaría",
    "GTM": "No. de despacho legal",
    "HND": "No. de notaría",
    "ECU": "No. de notaría",
    "ARG": "No. de escribanía",
    "COL": "No. de cámara de comercio"
  },
  'direccion-de-notaria': {
    "PRY": "Dirección de escribanía",
    "DOM": "Dirección de oficina notarial",
    "BOL": "Dirección de notaría de Fe Pública",
    "CRI": "Dirección de notaría",
    "PER": "Dirección de notaría",
    "PAN": "Dirección de notaría",
    "VEN": "Dirección de notaría",
    "GTM": "Dirección de despacho legal",
    "HND": "Dirección de notaría",
    "ECU": "Dirección de notaría",
    "ARG": "Dirección de escribanía",
    "COL": "Dirección de cámara de comercio"
  },
  'instancia-dependencia': {
    "PRY": "Dependencia",
    "DOM": "Dependencia",
    "BOL": "Secretaría",
    "CRI": "Ministerio / Dirección",
    "PER": "Dependencia / Instancia gubernamental",
    "PAN": "Institución",
    "VEN": "Ministerio",
    "GTM": "Dependencia",
    "HND": "Institución del sector público",
    "ECU": "Ministerio",
    "ARG": "Dependencia",
    "COL": "Ministerio / Secretaría"
  },
  'titular-de-instancia': {
    "PRY": "Funcionario de dependencia",
    "DOM": "Funcionario de dependencia",
    "BOL": "Funcionario de secretaría",
    "CRI": "Funcionario de ministerio",
    "PER": "Funcionario de dependencia",
    "PAN": "Funcionario de institución",
    "VEN": "Funcionario de ministerio",
    "GTM": "Funcionario de dependencia",
    "HND": "Funcionario de institución",
    "ECU": "Ministro",
    "ARG": "Funcionario de dependencia",
    "COL": "Funcionario público"
  },
}

export function _t(word){
  if(!word){
    return word;
  }
  var country = getLang();
  var w = slugify(word, {lower: true});
  var o = word;
  if(dict[w] && dict[w][country]){
    o = dict[w][country];
  }
  return o;
}

export function getCoords(){
  var country = getLang();
  var def = [-102.552784, 23.634501];
  var t = countries.filter(f => f.code == country);
  if(t.length && t[0].coords){
    return t[0].coords;
  }else{
    return def;
  }
}

export function getLang(){
  var country = store.get('sinapsis_lang');
  if(!country){
    country = "MEX";
  }
  return country;
}
