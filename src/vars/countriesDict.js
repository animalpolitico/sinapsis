const slugify = require('slugify');
const store = require('store');

export const countries = [
  {
    name: 'México',
    code: 'MEX',
    iso: 'MX',
    currency: 'MXN',
    currencySign: '$',
    currencyName: 'Peso Mexicano',
    toMXN: 1,
    img: require('../static/flags/mexico.svg'),
    coords: [-102.552784, 23.634501],
  },
  {
    name: 'Paraguay',
    code: 'PRY',
    iso: 'PY',
    currency: 'PYG',
    currencySign: '₲',
    currencyName: 'Guaraní Paraguayo',
    toMXN: 0.0030,
    translatedBy: ['Maricarmen Sequera', 'TEDIC NGO'],
    img: require('../static/flags/paraguay.svg'),
    coords: [-58.443832, -23.442503],
  },
  {
    name: 'Brasil',
    code: 'BRA',
    iso: 'BR',
    currency: 'BRL',
    currencySign: 'R$',
    currencyName: 'Real',
    toMXN: 4.70,
    translatedBy: ['Gisele da Silva Craveiro', 'Colab-USP/ILDA'],
    img: require('../static/flags/brasil.svg'),
    coords: [-51.92528, -14.235004],
  },
  {
    name: 'Chile',
    code: 'CHL',
    iso: 'CL',
    currency: 'CLP',
    currencySign: '$',
    currencyName: 'Peso Chileno',
    toMXN: 0.026,
    img: require('../static/flags/chile.svg'),
    coords: [-71.542969, -35.675147],
  },
  {
    name: 'República Dominicana',
    code: 'DOM',
    iso: 'DO',
    currencySign: 'RD$',
    currency: 'DOP',
    currencyName: 'Peso Dominicano',
    toMXN: 0.36,
    translatedBy: ['Daniel Harel'],
    img: require('../static/flags/dominican-republic.svg'),
    coords: [-70.162651, 18.735693],
  },
  {
    name: 'Bolivia',
    code: 'BOL',
    iso: 'BO',
    currency: 'BOB',
    currencySign: 'B$',
    currencyName: 'Boliviano',
    toMXN: 2.76,
    translatedBy: ['Raisa Valda Ampuero', 'Warmi.Red'],
    img: require('../static/flags/bolivia.svg'),
    coords: [-63.588653, -16.290154],
  },
  {
    name: 'Costa Rica',
    code: 'CRI',
    iso: 'CR',
    currency: 'CRC',
    currencyName: 'Colón',
    currencySign: '₡',
    toMXN: 0.033,
    img: require('../static/flags/costa-rica.svg'),
    translatedBy: ['Ana Sofía Ruiz', 'Iniciativa Latinoamericana por los Datos Abiertos (ILDA)'],
    coords: [-83.753428, 9.748917],
  },
  {
    name: 'Perú',
    code: 'PER',
    iso: 'PE',
    toMXN: 5.70,
    currency: 'PEN',
    currencyName: 'Sol',
    currencySign: 'S/',
    img: require('../static/flags/peru.svg'),
    translatedBy: ['Gabriela Flores Ch.', 'Asociación civil Japiqay, Memoria y Ciudadanía'],
    coords: [-75.015152, -9.189967],
  },
  {
    name: 'Panamá',
    code: 'PAN',
    iso: 'PA',
    toMXN: 19.5,
    currency: 'USD',
    currencyName: 'Dólar Estadounidense',
    currencySign: '$',
    img: require('../static/flags/panama.svg'),
    translatedBy: ['Lia Hernández', 'IPANDETEC'],
    coords: [-80.782127, 8.537981],
  },
  {
    name: 'Venezuela',
    code: 'VEN',
    iso: 'VE',
    currency: 'VEF',
    currencySign: 'Bs.',
    currencyName: 'Bolívar Soberano',
    toMXN: 1.93470,
    img: require('../static/flags/venezuela.svg'),
    translatedBy: ['Yuleina Carmona'],
    coords: [-66.58973, 6.42375],
  },
  {
    name: 'Guatemala',
    code: 'GTM',
    iso: 'GT',
    currency: 'GTQ',
    currencySign: 'Q',
    currencyName: 'Quetzal',
    toMXN: 2.48,
    img: require('../static/flags/guatemala.svg'),
    translatedBy: ['Suchit Chávez', 'Plaza Pública'],
    coords: [-90.230759, 15.783471],
  },
  {
    name: 'Honduras',
    code: 'HND',
    iso: 'HN',
    currency: 'HNL',
    toMXN: 0.77,
    currencySign: 'L',
    currencyName: 'Lempira',
    img: require('../static/flags/honduras.svg'),
    translatedBy: ['Felisa Franco', 'Secretaría de Finanzas'],
    coords: [-86.241905, 15.199999],
  },
  {
    name: 'Ecuador',
    code: 'ECU',
    iso: 'EC',
    toMXN: 19.5,
    currency: 'USD',
    currencySign: '$',
    currencyName: 'Dólar Estadounidense',
    img: require('../static/flags/ecuador.svg'),
    translatedBy: ['Camilo Burneo'],
    coords: [-78.183406, 	-1.831239],
  },
  {
    name: 'Argentina',
    code: 'ARG',
    iso: 'AR',
    toMXN: 0.32,
    currency: 'ARS',
    currencySign: '$',
    currencyName: 'Peso Argentino',
    translatedBy: ['Nicolás'],
    img: require('../static/flags/argentina.svg'),
    coords: [-63.616672, -38.416097],
  },
  {
    name: 'Colombia',
    code: 'COL',
    iso: 'CO',
    toMXN: 0.0057,
    currency: 'COP',
    currencyName: 'Peso Colombiano',
    currencySign: '$',
    img: require('../static/flags/colombia.svg'),
    translatedBy: ['Juliana Galvis', 'Datasketch'],
    coords: [-74.297333, 4.570868],
  },
];

countries.sort((a, b) => {
  const ab = a.name;
  const bb = b.name;
  if (ab > bb) {
    return 1;
  } if (bb > ab) {
    return -1;
  }
  return 0;
});

const dict = {
  rfc: {
    PRY: 'RUC',
    DOM: 'RNC',
    BOL: 'NIT',
    CRI: 'RUT',
    PER: 'RUC',
    PAN: 'RUC',
    VEN: 'RIF',
    GTM: 'NIT',
    HND: 'RTN',
    ECU: 'RUC',
    ARG: 'CUIT',
    COL: 'NIT',
    BRA: 'CNPJ',
    CHL: 'RUT',
  },
  'objeto-social': {
    PRY: 'Actividades económicas',
    DOM: 'Actividad económica',
    BOL: 'Actividad principal',
    VEN: 'Actividad comercial',
    GTM: 'Objeto',
    HND: 'Actividad comercial',
    ECU: 'Actividad económica',
    CHL: 'Giro/Objeto',
  },
  'capital-social-minimo': {
    PRY: 'Capital social mínimo',
    DOM: 'Capital social',
    BOL: 'Capital social',
    CRI: 'Capital social mínimo',
    PER: 'Capital social inicial',
    PAN: 'Capital social mínimo',
    VEN: 'Capital suscrito',
    GTM: 'Capital social autorizado',
    HND: 'Capital social autorizado',
    ECU: 'Capital social',
    ARG: 'Capital social',
    COL: 'Capital suscrito',
    CHL: 'Capital',
  },
  accionista: {
    GTM: 'Socio',
    BRA: 'Acionista',
    CHL: 'Accionista / Socio',
  },
  accionistas: {
    GTM: 'Socios',
  },
  comisario: {
    PRY: 'Síndico',
    DOM: 'Comisario de cuentas',
    BOL: 'Comité de vigilancia',
    CRI: 'Fiscal',
    PER: 'Auditor',
    PAN: 'Fiscal',
    VEN: 'Auditor',
    GTM: 'Mandatario',
    HND: 'Comisario',
    ECU: 'Comisario',
    ARG: 'Tesorero',
    COL: 'Revisor fiscal',
    BRA: 'Auditor',
  },
  comisarios: {
    PRY: 'Síndicos',
    DOM: 'Comisarios de cuentas',
    BOL: 'Comité de vigilancia',
    CRI: 'Fiscales',
    PER: 'Auditores',
    PAN: 'Fiscales',
    VEN: 'Auditores',
    GTM: 'Mandatarios',
    HND: 'Comisarios',
    ECU: 'Comisarios',
    ARG: 'Tesoreros',
    COL: 'Revisores fiscales',
  },
  notaria: {
    PRY: 'Escribanía',
    DOM: 'Oficina notarial',
    BOL: 'Notaría de Fe Pública',
    CRI: 'Notaría',
    PER: 'Notaría',
    PAN: 'Notaría',
    VEN: 'Notaría',
    GTM: 'Despacho legal',
    HND: 'Notaría',
    ECU: 'Notaría',
    ARG: 'Escribanía',
    BRA: 'Cartório',
    COL: 'Cámara de comercio',
  },
  'nombre-del-notario': {
    PRY: 'Nombre del escribano',
    BOL: 'Nombre del notario de fe pública',
    ARG: 'Nombre del escribano',
    BRA: 'Notário nome',
  },
  'no.-notaria': {
    PRY: 'No. de escribanía',
    DOM: 'No. de oficina notarial',
    BOL: 'No. de notaría de Fe Pública',
    CRI: 'No. de notaría',
    PER: 'No. de notaría',
    PAN: 'No. de notaría',
    VEN: 'No. de notaría',
    GTM: 'No. de despacho legal',
    HND: 'No. de notaría',
    ECU: 'No. de notaría',
    ARG: 'No. de escribanía',
    COL: 'No. de cámara de comercio',
    BRA: 'No. do cartório',
  },
  'numero-de-notaria': {
    PRY: 'No. de escribanía',
    DOM: 'No. de oficina notarial',
    BOL: 'No. de notaría de Fe Pública',
    CRI: 'No. de notaría',
    PER: 'No. de notaría',
    PAN: 'No. de notaría',
    VEN: 'No. de notaría',
    GTM: 'No. de despacho legal',
    HND: 'No. de notaría',
    ECU: 'No. de notaría',
    ARG: 'No. de escribanía',
    BRA: 'No. do cartório',
    COL: 'No. de cámara de comercio',
  },
  'direccion-de-notaria': {
    PRY: 'Dirección de escribanía',
    DOM: 'Dirección de oficina notarial',
    BOL: 'Dirección de notaría de Fe Pública',
    CRI: 'Dirección de notaría',
    PER: 'Dirección de notaría',
    PAN: 'Dirección de notaría',
    VEN: 'Dirección de notaría',
    GTM: 'Dirección de despacho legal',
    HND: 'Dirección de notaría',
    ECU: 'Dirección de notaría',
    ARG: 'Dirección de escribanía',
    COL: 'Dirección de cámara de comercio',
    BRA: 'Endereço do cartório',
  },
  'instancia-dependencia': {
    PRY: 'Dependencia',
    DOM: 'Dependencia',
    BOL: 'Secretaría',
    CRI: 'Ministerio / Dirección',
    PER: 'Dependencia / Instancia gubernamental',
    PAN: 'Institución',
    VEN: 'Ministerio',
    GTM: 'Dependencia',
    HND: 'Institución del sector público',
    ECU: 'Ministerio',
    ARG: 'Dependencia',
    COL: 'Ministerio / Secretaría',
    BRA: 'Órgão',
    CHL: 'Ministerio',
  },
  'titular-de-instancia': {
    PRY: 'Funcionario de dependencia',
    DOM: 'Funcionario de dependencia',
    BOL: 'Funcionario de secretaría',
    CRI: 'Funcionario de ministerio',
    PER: 'Funcionario de dependencia',
    PAN: 'Funcionario de institución',
    VEN: 'Funcionario de ministerio',
    GTM: 'Funcionario de dependencia',
    HND: 'Funcionario de institución',
    ECU: 'Ministro',
    ARG: 'Funcionario de dependencia',
    COL: 'Funcionario público',
    BRA: 'Funcionário',
  },
};

export function _t(word) {
  if (!word) {
    return word;
  }
  const country = getLang();
  const w = slugify(word, { lower: true });
  let o = word;
  if (dict[w] && dict[w][country]) {
    o = dict[w][country];
  }
  return o;
}

export function getCoords() {
  const country = getLang();
  const def = [-102.552784, 23.634501];
  const t = countries.filter((f) => f.code == country);
  if (t.length && t[0].coords) {
    return t[0].coords;
  }
  return def;
}

export function getISO() {
  const country = getLang();
  const t = countries.filter((f) => f.code == country);
  if (t.length && t[0].coords) {
    return t[0].iso;
  }
  return false;
}

export function getCountryCurrency(country) {
  const t = countries.filter((f) => f.code == country);
  if (t.length && t[0].coords) {
    return t[0].currency;
  }
  return 'MXN';
}

export function getCurrencyCountry(currency) {
  const t = countries.filter((f) => f.currency == currency);
  if (t.length && t[0].code) {
    return t[0].code;
  }
  return 'MEX';
}


export function getCurrentCountry() {
  const country = getLang();
  const t = countries.filter((f) => f.code == country);
  if (t.length && t[0].coords) {
    return t[0];
  }
  return countries[0];
}

export function getFlag(code) {
  if (!code) {
    var country = getLang();
  } else {
    var country = code;
  }
  const t = countries.filter((f) => f.code == country);
  if (t.length && t[0].coords) {
    return t[0].img;
  }
  return '';
}

export function getCurrencies() {
  let c = [];
  const control = [];
  countries.map((_c) => {
    if (control.indexOf(_c.currency) == -1) {
      const i = {
        name: _c.currencyName,
        currency: _c.currency,
        symbol: _c.currencySign,
      };

      c.push(i);
      control.push(_c.currency);
    }
  });
  c = c.sort((a, b) => {
    const str1 = a.currency;
    const str2 = b.currency;
    return ((str1 == str2) ? 0 : ((str1 > str2) ? 1 : -1));
  });
  return c;
}

export function getLang() {
  let country = store.get('sinapsis_lang');
  if (!country) {
    country = 'MEX';
  }
  return country;
}

export function isMexico() {
  return getLang() == 'MEX';
}
window.ismexico = isMexico();
