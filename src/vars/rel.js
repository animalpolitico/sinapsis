export const predbs = [
  {
    groupName: 'Oficiales Latinoamérica',
    dbs: [
      {
        name: '1,000 empresas más grandes por ingresos en 2017 (total patrimonio)',
        description: 'Empresas fantasma definitivas',
        country: 'COL',
        blockEdit: true,
        countryLabel: 'Colombia',
        author: 'Superintendencia de Sociedades: www.supersociedades.gov.co',
        size: 3,
        slug: 'sat-favorables',
        last: '2019-11-01',
        url: 'http://www.supersociedades.gov.co',
        flag: require('../static/flags/colombia.svg'),
        file: require('../static/csvs/col-patrimonio-2017.csv'),
        only: [
          'Nombre de empresa',
          'RUT',
          'Entidad Federativa',
          'Supervisor',
          'Macrosector',
        ],
      },
    ]
  },
  {
    groupName: 'Investigaciones Animal Político',
    dbs: [
      {
        name: 'Estafa Maestra',
        country: 'MEX',
        countryLabel: 'México',
        author: 'Animal Político & Mexicanos Contra la Corrupción',
        size: 2,
        slug: 'estafa-maestra',
        last: '2019-11-01',
        url: 'https://animalpolitico.com/estafa-maestra',
        flag: require('../static/flags/mexico.svg'),
        file: require('../static/csvs/estafa-maestra.csv'),
      },
      {
        name: 'Empresas Fantasma de Veracruz',
        country: 'MEX',
        countryLabel: 'México',
        author: 'Animal Político',
        size: 1,
        blockEdit: true,
        slug: 'estafa-maestra',
        last: '2019-10-01',
        url: 'https://www.animalpolitico.com/las-empresas-fantasma-de-veracruz',
        flag: require('../static/flags/mexico.svg'),
        file: require('../static/csvs/empresas-fantasma-ver.csv'),
      },
      {
        name: 'La Red Karime-Duarte',
        country: 'MEX',
        countryLabel: 'México',
        author: 'Animal Político & Mexicanos contra la Corrupción',
        size: 1,
        blockEdit: true,
        slug: 'estafa-maestra',
        last: '2019-10-01',
        url: 'https://www.animalpolitico.com/red-karime-duarte/duarte-entrego-millonarios-recursos.html',
        flag: require('../static/flags/mexico.svg'),
        file: require('../static/csvs/red-karime-duarte.csv'),
      },
    ]
  },
  {
    groupName: 'CompraNet 2020',
    dbs: [
  {
    "name": "Contratos de AGN del 2020",
    "description": "Contratos de AGN en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-agn",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/agn.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de AGROASEMEX del 2020",
    "description": "Contratos de AGROASEMEX en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-agroasemex",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/agroasemex.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de AGS del 2020",
    "description": "Contratos de AGS en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-ags",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/ags.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de AICM del 2020",
    "description": "Contratos de AICM en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-aicm",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/aicm.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de API-Coatzacoalcos del 2020",
    "description": "Contratos de API-Coatzacoalcos en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-api-coatzacoalcos",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/api-coatzacoalcos.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de API-Guaymas del 2020",
    "description": "Contratos de API-Guaymas en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-api-guaymas",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/api-guaymas.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de API-Lázaro Cárdenas del 2020",
    "description": "Contratos de API-Lázaro Cárdenas en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-api-lazaro-cardenas",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/api-lazaro-cardenas.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de API-Manzanillo del 2020",
    "description": "Contratos de API-Manzanillo en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-api-manzanillo",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/api-manzanillo.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de API-Salina Cruz del 2020",
    "description": "Contratos de API-Salina Cruz en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-api-salina-cruz",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/api-salina-cruz.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de API-Veracruz del 2020",
    "description": "Contratos de API-Veracruz en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-api-veracruz",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/api-veracruz.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de ASA del 2020",
    "description": "Contratos de ASA en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-asa",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/asa.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de ASEA del 2020",
    "description": "Contratos de ASEA en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-asea",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/asea.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de ASERCA del 2020",
    "description": "Contratos de ASERCA en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-aserca",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/aserca.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de BANCODELBIENESTAR del 2020",
    "description": "Contratos de BANCODELBIENESTAR en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-bancodelbienestar",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/bancodelbienestar.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de BANCOMEXT del 2020",
    "description": "Contratos de BANCOMEXT en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-bancomext",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/bancomext.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de BANJERCITO del 2020",
    "description": "Contratos de BANJERCITO en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-banjercito",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/banjercito.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de BANOBRAS del 2020",
    "description": "Contratos de BANOBRAS en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-banobras",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/banobras.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de BC del 2020",
    "description": "Contratos de BC en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-bc",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/bc.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de BCS del 2020",
    "description": "Contratos de BCS en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-bcs",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/bcs.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de BIENESTAR del 2020",
    "description": "Contratos de BIENESTAR en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-bienestar",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/bienestar.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CAMP del 2020",
    "description": "Contratos de CAMP en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-camp",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/camp.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CAPUFE del 2020",
    "description": "Contratos de CAPUFE en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-capufe",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/capufe.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CDMX del 2020",
    "description": "Contratos de CDMX en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-cdmx",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/cdmx.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CEAV del 2020",
    "description": "Contratos de CEAV en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-ceav",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/ceav.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CECUTT del 2020",
    "description": "Contratos de CECUTT en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-cecutt",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/cecutt.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CENACE del 2020",
    "description": "Contratos de CENACE en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-cenace",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/cenace.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CENAGAS del 2020",
    "description": "Contratos de CENAGAS en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-cenagas",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/cenagas.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CENSIDA del 2020",
    "description": "Contratos de CENSIDA en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-censida",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/censida.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CENTROGEO del 2020",
    "description": "Contratos de CENTROGEO en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-centrogeo",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/centrogeo.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CETI del 2020",
    "description": "Contratos de CETI en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-ceti",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/ceti.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CHIH del 2020",
    "description": "Contratos de CHIH en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-chih",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/chih.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CHIS del 2020",
    "description": "Contratos de CHIS en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-chis",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/chis.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CIAD del 2020",
    "description": "Contratos de CIAD en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-ciad",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/ciad.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CIATEJ del 2020",
    "description": "Contratos de CIATEJ en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-ciatej",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/ciatej.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CIBNOR del 2020",
    "description": "Contratos de CIBNOR en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-cibnor",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/cibnor.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CICESE del 2020",
    "description": "Contratos de CICESE en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-cicese",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/cicese.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CICY del 2020",
    "description": "Contratos de CICY en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-cicy",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/cicy.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CIDE del 2020",
    "description": "Contratos de CIDE en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-cide",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/cide.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CIESAS del 2020",
    "description": "Contratos de CIESAS en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-ciesas",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/ciesas.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CIJ del 2020",
    "description": "Contratos de CIJ en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-cij",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/cij.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CIMAT del 2020",
    "description": "Contratos de CIMAT en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-cimat",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/cimat.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CIMAV del 2020",
    "description": "Contratos de CIMAV en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-cimav",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/cimav.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CINVESTAV del 2020",
    "description": "Contratos de CINVESTAV en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-cinvestav",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/cinvestav.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CIO del 2020",
    "description": "Contratos de CIO en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-cio",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/cio.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CIQA del 2020",
    "description": "Contratos de CIQA en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-ciqa",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/ciqa.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CJEF del 2020",
    "description": "Contratos de CJEF en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-cjef",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/cjef.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CMM del 2020",
    "description": "Contratos de CMM en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-cmm",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/cmm.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CNBBBJ del 2020",
    "description": "Contratos de CNBBBJ en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-cnbbbj",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/cnbbbj.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CNBV del 2020",
    "description": "Contratos de CNBV en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-cnbv",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/cnbv.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CNH del 2020",
    "description": "Contratos de CNH en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-cnh",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/cnh.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CNSF del 2020",
    "description": "Contratos de CNSF en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-cnsf",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/cnsf.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CNSNS del 2020",
    "description": "Contratos de CNSNS en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-cnsns",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/cnsns.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CNTS del 2020",
    "description": "Contratos de CNTS en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-cnts",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/cnts.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de COAH del 2020",
    "description": "Contratos de COAH en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-coah",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/coah.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de COFECE del 2020",
    "description": "Contratos de COFECE en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-cofece",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/cofece.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de COFEPRIS del 2020",
    "description": "Contratos de COFEPRIS en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-cofepris",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/cofepris.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de COL del 2020",
    "description": "Contratos de COL en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-col",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/col.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de COLBACH del 2020",
    "description": "Contratos de COLBACH en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-colbach",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/colbach.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de COLEF del 2020",
    "description": "Contratos de COLEF en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-colef",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/colef.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de COLMICH del 2020",
    "description": "Contratos de COLMICH en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-colmich",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/colmich.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de COLPOS del 2020",
    "description": "Contratos de COLPOS en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-colpos",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/colpos.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de COLSAN del 2020",
    "description": "Contratos de COLSAN en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-colsan",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/colsan.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de COMESA del 2020",
    "description": "Contratos de COMESA en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-comesa",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/comesa.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de COMIMSA del 2020",
    "description": "Contratos de COMIMSA en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-comimsa",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/comimsa.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CONACYT del 2020",
    "description": "Contratos de CONACYT en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-conacyt",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/conacyt.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CONADE del 2020",
    "description": "Contratos de CONADE en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-conade",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/conade.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CONADESUCA del 2020",
    "description": "Contratos de CONADESUCA en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-conadesuca",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/conadesuca.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CONAFOR del 2020",
    "description": "Contratos de CONAFOR en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-conafor",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/conafor.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CONAGUA del 2020",
    "description": "Contratos de CONAGUA en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-conagua",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/conagua.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CONALEP del 2020",
    "description": "Contratos de CONALEP en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-conalep",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/conalep.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CONALITEG del 2020",
    "description": "Contratos de CONALITEG en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-conaliteg",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/conaliteg.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CONANP del 2020",
    "description": "Contratos de CONANP en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-conanp",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/conanp.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CONAPESCA del 2020",
    "description": "Contratos de CONAPESCA en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-conapesca",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/conapesca.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CONAPRED del 2020",
    "description": "Contratos de CONAPRED en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-conapred",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/conapred.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CONDUSEF del 2020",
    "description": "Contratos de CONDUSEF en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-condusef",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/condusef.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CONEVAL del 2020",
    "description": "Contratos de CONEVAL en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-coneval",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/coneval.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CONOCER del 2020",
    "description": "Contratos de CONOCER en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-conocer",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/conocer.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CONSAR del 2020",
    "description": "Contratos de CONSAR en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-consar",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/consar.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CRAE del 2020",
    "description": "Contratos de CRAE en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-crae",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/crae.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CSAEGRO del 2020",
    "description": "Contratos de CSAEGRO en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-csaegro",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/csaegro.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CULTURA del 2020",
    "description": "Contratos de CULTURA en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-cultura",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/cultura.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de DGO del 2020",
    "description": "Contratos de DGO en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-dgo",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/dgo.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de DICONSA del 2020",
    "description": "Contratos de DICONSA en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-diconsa",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/diconsa.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de DIF del 2020",
    "description": "Contratos de DIF en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-dif",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/dif.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de ECHASA del 2020",
    "description": "Contratos de ECHASA en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-echasa",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/echasa.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de ECOSUR del 2020",
    "description": "Contratos de ECOSUR en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-ecosur",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/ecosur.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de ESSA del 2020",
    "description": "Contratos de ESSA en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-essa",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/essa.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de FCE del 2020",
    "description": "Contratos de FCE en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-fce",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/fce.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de FICINE del 2020",
    "description": "Contratos de FICINE en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-ficine",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/ficine.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de FIFOMI del 2020",
    "description": "Contratos de FIFOMI en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-fifomi",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/fifomi.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de FIFONAFE del 2020",
    "description": "Contratos de FIFONAFE en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-fifonafe",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/fifonafe.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de FIRA del 2020",
    "description": "Contratos de FIRA en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-fira",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/fira.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de FIRCO del 2020",
    "description": "Contratos de FIRCO en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-firco",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/firco.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de FIT del 2020",
    "description": "Contratos de FIT en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-fit",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/fit.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de FND del 2020",
    "description": "Contratos de FND en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-fnd",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/fnd.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de FOCIR del 2020",
    "description": "Contratos de FOCIR en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-focir",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/focir.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de FONATUR del 2020",
    "description": "Contratos de FONATUR en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-fonatur",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/fonatur.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de FONATUR Infraestructura del 2020",
    "description": "Contratos de FONATUR Infraestructura en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-fonatur-infraestructura",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/fonatur-infraestructura.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de FONATUR TREN MAYA del 2020",
    "description": "Contratos de FONATUR TREN MAYA en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-fonatur-tren-maya",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/fonatur-tren-maya.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de GACM del 2020",
    "description": "Contratos de GACM en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-gacm",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/gacm.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de GTO del 2020",
    "description": "Contratos de GTO en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-gto",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/gto.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de HG del 2020",
    "description": "Contratos de HG en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-hg",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/hg.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de HGM del 2020",
    "description": "Contratos de HGM en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-hgm",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/hgm.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de HGO del 2020",
    "description": "Contratos de HGO en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-hgo",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/hgo.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de HIM del 2020",
    "description": "Contratos de HIM en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-him",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/him.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de HJM del 2020",
    "description": "Contratos de HJM en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-hjm",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/hjm.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de HRAEB del 2020",
    "description": "Contratos de HRAEB en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-hraeb",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/hraeb.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de HRAEI del 2020",
    "description": "Contratos de HRAEI en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-hraei",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/hraei.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de HRAEO del 2020",
    "description": "Contratos de HRAEO en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-hraeo",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/hraeo.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de HRAEPY del 2020",
    "description": "Contratos de HRAEPY en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-hraepy",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/hraepy.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de HRAEV del 2020",
    "description": "Contratos de HRAEV en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-hraev",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/hraev.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de IEPSA del 2020",
    "description": "Contratos de IEPSA en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-iepsa",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/iepsa.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de IFT del 2020",
    "description": "Contratos de IFT en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-ift",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/ift.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de IMCINE del 2020",
    "description": "Contratos de IMCINE en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-imcine",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/imcine.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de IMP del 2020",
    "description": "Contratos de IMP en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-imp",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/imp.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de IMPI del 2020",
    "description": "Contratos de IMPI en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-impi",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/impi.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de IMSS del 2020",
    "description": "Contratos de IMSS en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-imss",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/imss.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de IMT del 2020",
    "description": "Contratos de IMT en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-imt",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/imt.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de IMTA del 2020",
    "description": "Contratos de IMTA en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-imta",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/imta.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de INACIPE del 2020",
    "description": "Contratos de INACIPE en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-inacipe",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/inacipe.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de INAES del 2020",
    "description": "Contratos de INAES en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-inaes",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/inaes.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de INAH del 2020",
    "description": "Contratos de INAH en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-inah",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/inah.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de INAI del 2020",
    "description": "Contratos de INAI en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-inai",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/inai.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de INAPESCA del 2020",
    "description": "Contratos de INAPESCA en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-inapesca",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/inapesca.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de INBAL del 2020",
    "description": "Contratos de INBAL en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-inbal",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/inbal.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de INCAN del 2020",
    "description": "Contratos de INCAN en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-incan",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/incan.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de INCARD del 2020",
    "description": "Contratos de INCARD en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-incard",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/incard.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de INCMNSZ del 2020",
    "description": "Contratos de INCMNSZ en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-incmnsz",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/incmnsz.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de INDAABIN del 2020",
    "description": "Contratos de INDAABIN en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-indaabin",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/indaabin.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de INDESOL del 2020",
    "description": "Contratos de INDESOL en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-indesol",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/indesol.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de INEA del 2020",
    "description": "Contratos de INEA en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-inea",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/inea.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de INECC del 2020",
    "description": "Contratos de INECC en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-inecc",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/inecc.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de INECOL del 2020",
    "description": "Contratos de INECOL en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-inecol",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/inecol.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de INEEL del 2020",
    "description": "Contratos de INEEL en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-ineel",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/ineel.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de INEGI del 2020",
    "description": "Contratos de INEGI en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-inegi",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/inegi.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de INER del 2020",
    "description": "Contratos de INER en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-iner",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/iner.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de INFONACOT del 2020",
    "description": "Contratos de INFONACOT en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-infonacot",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/infonacot.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de INFOTEC del 2020",
    "description": "Contratos de INFOTEC en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-infotec",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/infotec.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de INGER del 2020",
    "description": "Contratos de INGER en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-inger",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/inger.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de INIFAP del 2020",
    "description": "Contratos de INIFAP en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-inifap",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/inifap.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de INIFED del 2020",
    "description": "Contratos de INIFED en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-inifed",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/inifed.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de INM del 2020",
    "description": "Contratos de INM en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-inm",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/inm.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de INMEGEN del 2020",
    "description": "Contratos de INMEGEN en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-inmegen",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/inmegen.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de INMUJERES del 2020",
    "description": "Contratos de INMUJERES en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-inmujeres",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/inmujeres.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de INP del 2020",
    "description": "Contratos de INP en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-inp",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/inp.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de INPER del 2020",
    "description": "Contratos de INPER en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-inper",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/inper.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de INPI del 2020",
    "description": "Contratos de INPI en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-inpi",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/inpi.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de INPSIQ del 2020",
    "description": "Contratos de INPSIQ en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-inpsiq",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/inpsiq.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de INR del 2020",
    "description": "Contratos de INR en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-inr",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/inr.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de INSP del 2020",
    "description": "Contratos de INSP en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-insp",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/insp.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de IPAB del 2020",
    "description": "Contratos de IPAB en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-ipab",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/ipab.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de IPICYT del 2020",
    "description": "Contratos de IPICYT en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-ipicyt",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/ipicyt.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de IPN del 2020",
    "description": "Contratos de IPN en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-ipn",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/ipn.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de ISSFAM del 2020",
    "description": "Contratos de ISSFAM en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-issfam",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/issfam.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de ISSSTE del 2020",
    "description": "Contratos de ISSSTE en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-issste",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/issste.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de LICONSA del 2020",
    "description": "Contratos de LICONSA en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-liconsa",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/liconsa.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de LOTENAL del 2020",
    "description": "Contratos de LOTENAL en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-lotenal",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/lotenal.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de MEX del 2020",
    "description": "Contratos de MEX en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-mex",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/mex.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de MICH del 2020",
    "description": "Contratos de MICH en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-mich",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/mich.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de MOR del 2020",
    "description": "Contratos de MOR en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-mor",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/mor.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de MORA del 2020",
    "description": "Contratos de MORA en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-mora",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/mora.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de NAFIN del 2020",
    "description": "Contratos de NAFIN en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-nafin",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/nafin.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de NL del 2020",
    "description": "Contratos de NL en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-nl",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/nl.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de OnceTV del 2020",
    "description": "Contratos de OnceTV en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-oncetv",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/oncetv.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de PA del 2020",
    "description": "Contratos de PA en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-pa",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/pa.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de PF del 2020",
    "description": "Contratos de PF en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-pf",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/pf.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de PGR del 2020",
    "description": "Contratos de PGR en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-pgr",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/pgr.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de PR del 2020",
    "description": "Contratos de PR en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-pr",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/pr.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de PRODECON del 2020",
    "description": "Contratos de PRODECON en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-prodecon",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/prodecon.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de PROFECO del 2020",
    "description": "Contratos de PROFECO en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-profeco",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/profeco.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de PROFEDET del 2020",
    "description": "Contratos de PROFEDET en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-profedet",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/profedet.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de PROFEPA del 2020",
    "description": "Contratos de PROFEPA en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-profepa",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/profepa.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de PROMTEL del 2020",
    "description": "Contratos de PROMTEL en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-promtel",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/promtel.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de PRONABIVE del 2020",
    "description": "Contratos de PRONABIVE en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-pronabive",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/pronabive.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de PRS del 2020",
    "description": "Contratos de PRS en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-prs",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/prs.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de PUE del 2020",
    "description": "Contratos de PUE en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-pue",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/pue.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de Q ROO del 2020",
    "description": "Contratos de Q ROO en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-q-roo",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/q-roo.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de QRO del 2020",
    "description": "Contratos de QRO en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-qro",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/qro.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de RAN del 2020",
    "description": "Contratos de RAN en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-ran",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/ran.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de SACM del 2020",
    "description": "Contratos de SACM en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-sacm",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/sacm.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de SADER del 2020",
    "description": "Contratos de SADER en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-sader",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/sader.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de SAE del 2020",
    "description": "Contratos de SAE en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-sae",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/sae.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de SAP del 2020",
    "description": "Contratos de SAP en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-sap",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/sap.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de SAT del 2020",
    "description": "Contratos de SAT en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-sat",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/sat.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de SCT del 2020",
    "description": "Contratos de SCT en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-sct",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/sct.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de SE del 2020",
    "description": "Contratos de SE en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-se",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/se.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de SECTUR del 2020",
    "description": "Contratos de SECTUR en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-sectur",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/sectur.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de SEDENA del 2020",
    "description": "Contratos de SEDENA en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-sedena",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/sedena.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de SEGALMEX del 2020",
    "description": "Contratos de SEGALMEX en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-segalmex",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/segalmex.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de SEGOB del 2020",
    "description": "Contratos de SEGOB en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-segob",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/segob.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de SEMAR del 2020",
    "description": "Contratos de SEMAR en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-semar",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/semar.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de SEMARNAT del 2020",
    "description": "Contratos de SEMARNAT en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-semarnat",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/semarnat.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de SENASICA del 2020",
    "description": "Contratos de SENASICA en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-senasica",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/senasica.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de SENER del 2020",
    "description": "Contratos de SENER en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-sener",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/sener.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de SEP del 2020",
    "description": "Contratos de SEP en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-sep",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/sep.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de SESNSP del 2020",
    "description": "Contratos de SESNSP en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-sesnsp",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/sesnsp.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de SFP del 2020",
    "description": "Contratos de SFP en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-sfp",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/sfp.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de SGM del 2020",
    "description": "Contratos de SGM en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-sgm",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/sgm.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de SHCP del 2020",
    "description": "Contratos de SHCP en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-shcp",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/shcp.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de SIAP del 2020",
    "description": "Contratos de SIAP en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-siap",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/siap.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de SIN del 2020",
    "description": "Contratos de SIN en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-sin",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/sin.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de SLP del 2020",
    "description": "Contratos de SLP en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-slp",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/slp.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de SNICS del 2020",
    "description": "Contratos de SNICS en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-snics",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/snics.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de SON del 2020",
    "description": "Contratos de SON en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-son",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/son.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de SPF del 2020",
    "description": "Contratos de SPF en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-spf",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/spf.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de SPR del 2020",
    "description": "Contratos de SPR en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-spr",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/spr.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de SRE del 2020",
    "description": "Contratos de SRE en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-sre",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/sre.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de SSA del 2020",
    "description": "Contratos de SSA en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-ssa",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/ssa.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de SSPC del 2020",
    "description": "Contratos de SSPC en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-sspc",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/sspc.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de TAB del 2020",
    "description": "Contratos de TAB en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-tab",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/tab.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de TAMPS del 2020",
    "description": "Contratos de TAMPS en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-tamps",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/tamps.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de TELECOMM del 2020",
    "description": "Contratos de TELECOMM en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-telecomm",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/telecomm.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de TFJA del 2020",
    "description": "Contratos de TFJA en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-tfja",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/tfja.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de TVMETRO del 2020",
    "description": "Contratos de TVMETRO en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-tvmetro",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/tvmetro.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de UNADM del 2020",
    "description": "Contratos de UNADM en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-unadm",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/unadm.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de VER del 2020",
    "description": "Contratos de VER en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-ver",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/ver.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de ZAC del 2020",
    "description": "Contratos de ZAC en 2020",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2020-compranet-zac",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2020/zac.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  }
]
  },
  {
    groupName: 'CompraNet 2019',
    dbs: [
  {
    "name": "Contratos de AEFCM del 2019",
    "description": "Contratos de AEFCM en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-aefcm",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/aefcm.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de AEM del 2019",
    "description": "Contratos de AEM en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-aem",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/aem.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de AGN del 2019",
    "description": "Contratos de AGN en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-agn",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/agn.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de AGROASEMEX del 2019",
    "description": "Contratos de AGROASEMEX en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-agroasemex",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/agroasemex.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de AGS del 2019",
    "description": "Contratos de AGS en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-ags",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/ags.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de AICM del 2019",
    "description": "Contratos de AICM en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-aicm",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/aicm.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de APBP del 2019",
    "description": "Contratos de APBP en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-apbp",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/apbp.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de API-Altamira del 2019",
    "description": "Contratos de API-Altamira en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-api-altamira",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/api-altamira.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de API-Coatzacoalcos del 2019",
    "description": "Contratos de API-Coatzacoalcos en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-api-coatzacoalcos",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/api-coatzacoalcos.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de API-Dos Bocas del 2019",
    "description": "Contratos de API-Dos Bocas en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-api-dos-bocas",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/api-dos-bocas.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de API-Ensenada del 2019",
    "description": "Contratos de API-Ensenada en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-api-ensenada",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/api-ensenada.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de API-Guaymas del 2019",
    "description": "Contratos de API-Guaymas en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-api-guaymas",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/api-guaymas.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de API-Lázaro Cárdenas del 2019",
    "description": "Contratos de API-Lázaro Cárdenas en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-api-lazaro-cardenas",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/api-lazaro-cardenas.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de API-Manzanillo del 2019",
    "description": "Contratos de API-Manzanillo en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-api-manzanillo",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/api-manzanillo.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de API-Mazatlán del 2019",
    "description": "Contratos de API-Mazatlán en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-api-mazatlan",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/api-mazatlan.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de API-Progreso del 2019",
    "description": "Contratos de API-Progreso en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-api-progreso",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/api-progreso.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de API-Puerto Madero del 2019",
    "description": "Contratos de API-Puerto Madero en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-api-puerto-madero",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/api-puerto-madero.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de API-Puerto Vallarta del 2019",
    "description": "Contratos de API-Puerto Vallarta en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-api-puerto-vallarta",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/api-puerto-vallarta.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de API-Salina Cruz del 2019",
    "description": "Contratos de API-Salina Cruz en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-api-salina-cruz",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/api-salina-cruz.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de API-Tampico del 2019",
    "description": "Contratos de API-Tampico en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-api-tampico",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/api-tampico.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de API-Topolobampo del 2019",
    "description": "Contratos de API-Topolobampo en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-api-topolobampo",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/api-topolobampo.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de API-Tuxpan del 2019",
    "description": "Contratos de API-Tuxpan en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-api-tuxpan",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/api-tuxpan.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de API-Veracruz del 2019",
    "description": "Contratos de API-Veracruz en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-api-veracruz",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/api-veracruz.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de APRENDEMX del 2019",
    "description": "Contratos de APRENDEMX en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-aprendemx",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/aprendemx.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de ARTF del 2019",
    "description": "Contratos de ARTF en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-artf",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/artf.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de ASA del 2019",
    "description": "Contratos de ASA en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-asa",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/asa.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de ASEA del 2019",
    "description": "Contratos de ASEA en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-asea",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/asea.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de ASERCA del 2019",
    "description": "Contratos de ASERCA en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-aserca",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/aserca.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de BANCODELBIENESTAR del 2019",
    "description": "Contratos de BANCODELBIENESTAR en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-bancodelbienestar",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/bancodelbienestar.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de BANCOMEXT del 2019",
    "description": "Contratos de BANCOMEXT en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-bancomext",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/bancomext.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de BANJERCITO del 2019",
    "description": "Contratos de BANJERCITO en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-banjercito",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/banjercito.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de BANOBRAS del 2019",
    "description": "Contratos de BANOBRAS en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-banobras",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/banobras.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de BC del 2019",
    "description": "Contratos de BC en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-bc",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/bc.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de BCS del 2019",
    "description": "Contratos de BCS en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-bcs",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/bcs.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de BIENESTAR del 2019",
    "description": "Contratos de BIENESTAR en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-bienestar",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/bienestar.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de BIRMEX del 2019",
    "description": "Contratos de BIRMEX en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-birmex",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/birmex.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CAAD del 2019",
    "description": "Contratos de CAAD en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-caad",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/caad.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CAMP del 2019",
    "description": "Contratos de CAMP en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-camp",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/camp.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CAPUFE del 2019",
    "description": "Contratos de CAPUFE en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-capufe",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/capufe.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CCC del 2019",
    "description": "Contratos de CCC en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-ccc",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/ccc.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CDMX del 2019",
    "description": "Contratos de CDMX en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-cdmx",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/cdmx.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CEAV del 2019",
    "description": "Contratos de CEAV en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-ceav",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/ceav.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CECUTT del 2019",
    "description": "Contratos de CECUTT en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-cecutt",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/cecutt.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CENACE del 2019",
    "description": "Contratos de CENACE en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-cenace",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/cenace.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CENAGAS del 2019",
    "description": "Contratos de CENAGAS en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-cenagas",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/cenagas.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CENAM del 2019",
    "description": "Contratos de CENAM en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-cenam",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/cenam.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CENAPRECE del 2019",
    "description": "Contratos de CENAPRECE en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-cenaprece",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/cenaprece.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CENETEC del 2019",
    "description": "Contratos de CENETEC en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-cenetec",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/cenetec.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CENSIA del 2019",
    "description": "Contratos de CENSIA en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-censia",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/censia.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CENSIDA del 2019",
    "description": "Contratos de CENSIDA en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-censida",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/censida.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CENTROGEO del 2019",
    "description": "Contratos de CENTROGEO en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-centrogeo",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/centrogeo.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CETI del 2019",
    "description": "Contratos de CETI en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-ceti",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/ceti.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CHIH del 2019",
    "description": "Contratos de CHIH en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-chih",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/chih.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CHIS del 2019",
    "description": "Contratos de CHIS en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-chis",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/chis.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CIAD del 2019",
    "description": "Contratos de CIAD en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-ciad",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/ciad.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CIATEC del 2019",
    "description": "Contratos de CIATEC en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-ciatec",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/ciatec.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CIATEJ del 2019",
    "description": "Contratos de CIATEJ en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-ciatej",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/ciatej.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CIATEQ del 2019",
    "description": "Contratos de CIATEQ en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-ciateq",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/ciateq.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CIBNOR del 2019",
    "description": "Contratos de CIBNOR en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-cibnor",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/cibnor.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CICESE del 2019",
    "description": "Contratos de CICESE en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-cicese",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/cicese.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CICY del 2019",
    "description": "Contratos de CICY en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-cicy",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/cicy.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CIDE del 2019",
    "description": "Contratos de CIDE en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-cide",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/cide.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CIDESI del 2019",
    "description": "Contratos de CIDESI en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-cidesi",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/cidesi.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CIDETEQ del 2019",
    "description": "Contratos de CIDETEQ en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-cideteq",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/cideteq.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CIESAS del 2019",
    "description": "Contratos de CIESAS en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-ciesas",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/ciesas.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CIJ del 2019",
    "description": "Contratos de CIJ en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-cij",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/cij.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CIMAT del 2019",
    "description": "Contratos de CIMAT en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-cimat",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/cimat.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CIMAV del 2019",
    "description": "Contratos de CIMAV en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-cimav",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/cimav.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CINVESTAV del 2019",
    "description": "Contratos de CINVESTAV en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-cinvestav",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/cinvestav.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CIO del 2019",
    "description": "Contratos de CIO en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-cio",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/cio.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CIQA del 2019",
    "description": "Contratos de CIQA en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-ciqa",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/ciqa.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CJEF del 2019",
    "description": "Contratos de CJEF en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-cjef",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/cjef.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CMM del 2019",
    "description": "Contratos de CMM en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-cmm",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/cmm.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CNB del 2019",
    "description": "Contratos de CNB en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-cnb",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/cnb.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CNBBBJ del 2019",
    "description": "Contratos de CNBBBJ en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-cnbbbj",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/cnbbbj.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CNBV del 2019",
    "description": "Contratos de CNBV en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-cnbv",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/cnbv.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CNEGSR del 2019",
    "description": "Contratos de CNEGSR en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-cnegsr",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/cnegsr.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CNH del 2019",
    "description": "Contratos de CNH en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-cnh",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/cnh.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CNI del 2019",
    "description": "Contratos de CNI en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-cni",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/cni.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CNPSS del 2019",
    "description": "Contratos de CNPSS en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-cnpss",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/cnpss.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CNSF del 2019",
    "description": "Contratos de CNSF en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-cnsf",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/cnsf.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CNSNS del 2019",
    "description": "Contratos de CNSNS en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-cnsns",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/cnsns.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CNTS del 2019",
    "description": "Contratos de CNTS en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-cnts",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/cnts.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de COAH del 2019",
    "description": "Contratos de COAH en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-coah",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/coah.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de COFAA del 2019",
    "description": "Contratos de COFAA en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-cofaa",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/cofaa.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de COFECE del 2019",
    "description": "Contratos de COFECE en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-cofece",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/cofece.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de COFEPRIS del 2019",
    "description": "Contratos de COFEPRIS en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-cofepris",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/cofepris.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de COL del 2019",
    "description": "Contratos de COL en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-col",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/col.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de COLBACH del 2019",
    "description": "Contratos de COLBACH en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-colbach",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/colbach.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de COLEF del 2019",
    "description": "Contratos de COLEF en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-colef",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/colef.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de COLMICH del 2019",
    "description": "Contratos de COLMICH en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-colmich",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/colmich.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de COLPOS del 2019",
    "description": "Contratos de COLPOS en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-colpos",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/colpos.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de COLSAN del 2019",
    "description": "Contratos de COLSAN en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-colsan",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/colsan.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de COMESA del 2019",
    "description": "Contratos de COMESA en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-comesa",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/comesa.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de COMIMSA del 2019",
    "description": "Contratos de COMIMSA en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-comimsa",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/comimsa.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CONACYT del 2019",
    "description": "Contratos de CONACYT en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-conacyt",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/conacyt.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CONADE del 2019",
    "description": "Contratos de CONADE en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-conade",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/conade.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CONADESUCA del 2019",
    "description": "Contratos de CONADESUCA en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-conadesuca",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/conadesuca.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CONADIC del 2019",
    "description": "Contratos de CONADIC en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-conadic",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/conadic.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CONADIS del 2019",
    "description": "Contratos de CONADIS en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-conadis",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/conadis.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CONAFE del 2019",
    "description": "Contratos de CONAFE en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-conafe",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/conafe.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CONAFOR del 2019",
    "description": "Contratos de CONAFOR en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-conafor",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/conafor.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CONAGUA del 2019",
    "description": "Contratos de CONAGUA en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-conagua",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/conagua.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CONALEP del 2019",
    "description": "Contratos de CONALEP en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-conalep",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/conalep.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CONALITEG del 2019",
    "description": "Contratos de CONALITEG en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-conaliteg",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/conaliteg.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CONAMED del 2019",
    "description": "Contratos de CONAMED en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-conamed",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/conamed.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CONAMER del 2019",
    "description": "Contratos de CONAMER en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-conamer",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/conamer.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CONAMPROS del 2019",
    "description": "Contratos de CONAMPROS en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-conampros",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/conampros.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CONANP del 2019",
    "description": "Contratos de CONANP en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-conanp",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/conanp.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CONAPESCA del 2019",
    "description": "Contratos de CONAPESCA en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-conapesca",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/conapesca.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CONAPRED del 2019",
    "description": "Contratos de CONAPRED en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-conapred",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/conapred.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CONASAMI del 2019",
    "description": "Contratos de CONASAMI en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-conasami",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/conasami.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CONAVI del 2019",
    "description": "Contratos de CONAVI en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-conavi",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/conavi.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CONAZA del 2019",
    "description": "Contratos de CONAZA en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-conaza",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/conaza.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CONDUSEF del 2019",
    "description": "Contratos de CONDUSEF en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-condusef",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/condusef.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CONEVAL del 2019",
    "description": "Contratos de CONEVAL en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-coneval",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/coneval.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CONOCER del 2019",
    "description": "Contratos de CONOCER en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-conocer",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/conocer.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CONSAR del 2019",
    "description": "Contratos de CONSAR en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-consar",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/consar.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CONUEE del 2019",
    "description": "Contratos de CONUEE en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-conuee",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/conuee.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CPTM del 2019",
    "description": "Contratos de CPTM en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-cptm",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/cptm.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CRAE del 2019",
    "description": "Contratos de CRAE en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-crae",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/crae.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CRE del 2019",
    "description": "Contratos de CRE en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-cre",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/cre.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CSAEGRO del 2019",
    "description": "Contratos de CSAEGRO en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-csaegro",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/csaegro.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CULTURA del 2019",
    "description": "Contratos de CULTURA en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-cultura",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/cultura.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de DGO del 2019",
    "description": "Contratos de DGO en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-dgo",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/dgo.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de DICONSA del 2019",
    "description": "Contratos de DICONSA en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 11,
    "slug": "2019-compranet-diconsa",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/diconsa.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de DIF del 2019",
    "description": "Contratos de DIF en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-dif",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/dif.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de ECHASA del 2019",
    "description": "Contratos de ECHASA en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-echasa",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/echasa.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de ECOSUR del 2019",
    "description": "Contratos de ECOSUR en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-ecosur",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/ecosur.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de EDUCAL del 2019",
    "description": "Contratos de EDUCAL en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-educal",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/educal.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de ESSA del 2019",
    "description": "Contratos de ESSA en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-essa",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/essa.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de FCE del 2019",
    "description": "Contratos de FCE en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-fce",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/fce.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de FEESA del 2019",
    "description": "Contratos de FEESA en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-feesa",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/feesa.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de FICINE del 2019",
    "description": "Contratos de FICINE en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-ficine",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/ficine.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de FIDENA del 2019",
    "description": "Contratos de FIDENA en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-fidena",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/fidena.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de FIFOMI del 2019",
    "description": "Contratos de FIFOMI en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-fifomi",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/fifomi.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de FIFONAFE del 2019",
    "description": "Contratos de FIFONAFE en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-fifonafe",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/fifonafe.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de FIRA del 2019",
    "description": "Contratos de FIRA en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-fira",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/fira.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de FIRCO del 2019",
    "description": "Contratos de FIRCO en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-firco",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/firco.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de FIT del 2019",
    "description": "Contratos de FIT en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-fit",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/fit.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de FND del 2019",
    "description": "Contratos de FND en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-fnd",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/fnd.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de FOCIR del 2019",
    "description": "Contratos de FOCIR en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-focir",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/focir.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de FONART del 2019",
    "description": "Contratos de FONART en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-fonart",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/fonart.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de FONATUR del 2019",
    "description": "Contratos de FONATUR en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-fonatur",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/fonatur.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de FONATUR Infraestructura del 2019",
    "description": "Contratos de FONATUR Infraestructura en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-fonatur-infraestructura",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/fonatur-infraestructura.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de FONATUR TREN MAYA del 2019",
    "description": "Contratos de FONATUR TREN MAYA en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-fonatur-tren-maya",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/fonatur-tren-maya.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de FONHAPO del 2019",
    "description": "Contratos de FONHAPO en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-fonhapo",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/fonhapo.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de GACM del 2019",
    "description": "Contratos de GACM en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-gacm",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/gacm.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de GRO del 2019",
    "description": "Contratos de GRO en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-gro",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/gro.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de GTO del 2019",
    "description": "Contratos de GTO en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-gto",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/gto.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de HG del 2019",
    "description": "Contratos de HG en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-hg",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/hg.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de HGM del 2019",
    "description": "Contratos de HGM en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-hgm",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/hgm.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de HGO del 2019",
    "description": "Contratos de HGO en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-hgo",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/hgo.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de HIM del 2019",
    "description": "Contratos de HIM en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-him",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/him.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de HJM del 2019",
    "description": "Contratos de HJM en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-hjm",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/hjm.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de HRAEB del 2019",
    "description": "Contratos de HRAEB en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-hraeb",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/hraeb.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de HRAEI del 2019",
    "description": "Contratos de HRAEI en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-hraei",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/hraei.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de HRAEO del 2019",
    "description": "Contratos de HRAEO en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-hraeo",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/hraeo.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de HRAEPY del 2019",
    "description": "Contratos de HRAEPY en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-hraepy",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/hraepy.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de HRAEV del 2019",
    "description": "Contratos de HRAEV en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-hraev",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/hraev.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de IEPSA del 2019",
    "description": "Contratos de IEPSA en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-iepsa",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/iepsa.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de IFT del 2019",
    "description": "Contratos de IFT en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-ift",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/ift.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de IMCINE del 2019",
    "description": "Contratos de IMCINE en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-imcine",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/imcine.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de IMER del 2019",
    "description": "Contratos de IMER en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-imer",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/imer.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de IMJ del 2019",
    "description": "Contratos de IMJ en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-imj",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/imj.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de IMP del 2019",
    "description": "Contratos de IMP en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-imp",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/imp.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de IMPI del 2019",
    "description": "Contratos de IMPI en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-impi",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/impi.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de IMSS del 2019",
    "description": "Contratos de IMSS en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 11,
    "slug": "2019-compranet-imss",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/imss.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de IMT del 2019",
    "description": "Contratos de IMT en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-imt",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/imt.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de IMTA del 2019",
    "description": "Contratos de IMTA en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-imta",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/imta.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de INACIPE del 2019",
    "description": "Contratos de INACIPE en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-inacipe",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/inacipe.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de INADEM del 2019",
    "description": "Contratos de INADEM en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-inadem",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/inadem.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de INAES del 2019",
    "description": "Contratos de INAES en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-inaes",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/inaes.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de INAH del 2019",
    "description": "Contratos de INAH en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-inah",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/inah.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de INAI del 2019",
    "description": "Contratos de INAI en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-inai",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/inai.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de INALI del 2019",
    "description": "Contratos de INALI en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-inali",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/inali.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de INAOE del 2019",
    "description": "Contratos de INAOE en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-inaoe",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/inaoe.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de INAPAM del 2019",
    "description": "Contratos de INAPAM en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-inapam",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/inapam.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de INAPESCA del 2019",
    "description": "Contratos de INAPESCA en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-inapesca",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/inapesca.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de INBAL del 2019",
    "description": "Contratos de INBAL en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-inbal",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/inbal.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de INCAN del 2019",
    "description": "Contratos de INCAN en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-incan",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/incan.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de INCARD del 2019",
    "description": "Contratos de INCARD en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-incard",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/incard.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de INCARURAL del 2019",
    "description": "Contratos de INCARURAL en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-incarural",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/incarural.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de INCMNSZ del 2019",
    "description": "Contratos de INCMNSZ en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-incmnsz",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/incmnsz.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de INDAABIN del 2019",
    "description": "Contratos de INDAABIN en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-indaabin",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/indaabin.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de INDESOL del 2019",
    "description": "Contratos de INDESOL en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-indesol",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/indesol.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de INEA del 2019",
    "description": "Contratos de INEA en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-inea",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/inea.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de INECC del 2019",
    "description": "Contratos de INECC en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-inecc",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/inecc.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de INECOL del 2019",
    "description": "Contratos de INECOL en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-inecol",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/inecol.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de INEEL del 2019",
    "description": "Contratos de INEEL en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-ineel",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/ineel.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de INEGI del 2019",
    "description": "Contratos de INEGI en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-inegi",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/inegi.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de INER del 2019",
    "description": "Contratos de INER en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-iner",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/iner.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de INFONACOT del 2019",
    "description": "Contratos de INFONACOT en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-infonacot",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/infonacot.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de INFOTEC del 2019",
    "description": "Contratos de INFOTEC en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-infotec",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/infotec.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de INGER del 2019",
    "description": "Contratos de INGER en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-inger",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/inger.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de INIFAP del 2019",
    "description": "Contratos de INIFAP en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-inifap",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/inifap.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de INIFED del 2019",
    "description": "Contratos de INIFED en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-inifed",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/inifed.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de ININ del 2019",
    "description": "Contratos de ININ en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-inin",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/inin.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de INM del 2019",
    "description": "Contratos de INM en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-inm",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/inm.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de INMEGEN del 2019",
    "description": "Contratos de INMEGEN en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-inmegen",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/inmegen.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de INMUJERES del 2019",
    "description": "Contratos de INMUJERES en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-inmujeres",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/inmujeres.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de INNN del 2019",
    "description": "Contratos de INNN en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-innn",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/innn.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de INP del 2019",
    "description": "Contratos de INP en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-inp",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/inp.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de INPER del 2019",
    "description": "Contratos de INPER en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-inper",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/inper.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de INPI del 2019",
    "description": "Contratos de INPI en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-inpi",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/inpi.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de INPSIQ del 2019",
    "description": "Contratos de INPSIQ en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-inpsiq",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/inpsiq.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de INR del 2019",
    "description": "Contratos de INR en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-inr",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/inr.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de INSP del 2019",
    "description": "Contratos de INSP en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-insp",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/insp.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de INSUS del 2019",
    "description": "Contratos de INSUS en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-insus",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/insus.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de IPAB del 2019",
    "description": "Contratos de IPAB en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-ipab",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/ipab.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de IPICYT del 2019",
    "description": "Contratos de IPICYT en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-ipicyt",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/ipicyt.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de IPN del 2019",
    "description": "Contratos de IPN en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-ipn",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/ipn.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de ISSFAM del 2019",
    "description": "Contratos de ISSFAM en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-issfam",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/issfam.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de ISSSTE del 2019",
    "description": "Contratos de ISSSTE en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-issste",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/issste.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de JAL del 2019",
    "description": "Contratos de JAL en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-jal",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/jal.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de LICONSA del 2019",
    "description": "Contratos de LICONSA en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-liconsa",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/liconsa.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de LOTENAL del 2019",
    "description": "Contratos de LOTENAL en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-lotenal",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/lotenal.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de MEJOREDU del 2019",
    "description": "Contratos de MEJOREDU en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-mejoredu",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/mejoredu.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de MEX del 2019",
    "description": "Contratos de MEX en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-mex",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/mex.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de MICH del 2019",
    "description": "Contratos de MICH en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-mich",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/mich.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de MOR del 2019",
    "description": "Contratos de MOR en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-mor",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/mor.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de MORA del 2019",
    "description": "Contratos de MORA en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-mora",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/mora.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de NAFIN del 2019",
    "description": "Contratos de NAFIN en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-nafin",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/nafin.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de NAY del 2019",
    "description": "Contratos de NAY en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-nay",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/nay.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de NL del 2019",
    "description": "Contratos de NL en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-nl",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/nl.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de NOTIMEX del 2019",
    "description": "Contratos de NOTIMEX en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-notimex",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/notimex.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de OAX del 2019",
    "description": "Contratos de OAX en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-oax",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/oax.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de OnceTV del 2019",
    "description": "Contratos de OnceTV en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-oncetv",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/oncetv.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de PA del 2019",
    "description": "Contratos de PA en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-pa",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/pa.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de PF del 2019",
    "description": "Contratos de PF en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-pf",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/pf.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de PGR del 2019",
    "description": "Contratos de PGR en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-pgr",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/pgr.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de POI del 2019",
    "description": "Contratos de POI en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-poi",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/poi.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de PR del 2019",
    "description": "Contratos de PR en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-pr",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/pr.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de PRODECON del 2019",
    "description": "Contratos de PRODECON en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-prodecon",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/prodecon.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de PROFECO del 2019",
    "description": "Contratos de PROFECO en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-profeco",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/profeco.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de PROFEDET del 2019",
    "description": "Contratos de PROFEDET en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-profedet",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/profedet.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de PROFEPA del 2019",
    "description": "Contratos de PROFEPA en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-profepa",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/profepa.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de PROMEXICO del 2019",
    "description": "Contratos de PROMEXICO en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-promexico",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/promexico.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de PROMTEL del 2019",
    "description": "Contratos de PROMTEL en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-promtel",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/promtel.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de PRONABIVE del 2019",
    "description": "Contratos de PRONABIVE en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-pronabive",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/pronabive.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de PRONOSTICOS del 2019",
    "description": "Contratos de PRONOSTICOS en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-pronosticos",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/pronosticos.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de PRS del 2019",
    "description": "Contratos de PRS en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-prs",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/prs.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de PUE del 2019",
    "description": "Contratos de PUE en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-pue",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/pue.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de QRO del 2019",
    "description": "Contratos de QRO en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-qro",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/qro.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de QROO del 2019",
    "description": "Contratos de QROO en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-qroo",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/qroo.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de RAN del 2019",
    "description": "Contratos de RAN en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-ran",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/ran.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de SACM del 2019",
    "description": "Contratos de SACM en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-sacm",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/sacm.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de SADER del 2019",
    "description": "Contratos de SADER en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-sader",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/sader.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de SAE del 2019",
    "description": "Contratos de SAE en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-sae",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/sae.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de SAP del 2019",
    "description": "Contratos de SAP en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-sap",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/sap.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de SAT del 2019",
    "description": "Contratos de SAT en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-sat",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/sat.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de SCT del 2019",
    "description": "Contratos de SCT en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-sct",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/sct.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de SCVSHF del 2019",
    "description": "Contratos de SCVSHF en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-scvshf",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/scvshf.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de SE del 2019",
    "description": "Contratos de SE en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-se",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/se.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de SECTUR del 2019",
    "description": "Contratos de SECTUR en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-sectur",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/sectur.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de SEDATU del 2019",
    "description": "Contratos de SEDATU en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-sedatu",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/sedatu.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de SEDENA del 2019",
    "description": "Contratos de SEDENA en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-sedena",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/sedena.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de SEGALMEX del 2019",
    "description": "Contratos de SEGALMEX en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-segalmex",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/segalmex.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de SEGOB del 2019",
    "description": "Contratos de SEGOB en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-segob",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/segob.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de SEMAR del 2019",
    "description": "Contratos de SEMAR en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-semar",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/semar.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de SEMARNAT del 2019",
    "description": "Contratos de SEMARNAT en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-semarnat",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/semarnat.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de SENASICA del 2019",
    "description": "Contratos de SENASICA en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-senasica",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/senasica.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de SENEAM del 2019",
    "description": "Contratos de SENEAM en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-seneam",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/seneam.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de SENER del 2019",
    "description": "Contratos de SENER en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-sener",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/sener.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de SEP del 2019",
    "description": "Contratos de SEP en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-sep",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/sep.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de SEPOMEX del 2019",
    "description": "Contratos de SEPOMEX en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-sepomex",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/sepomex.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de SESNA del 2019",
    "description": "Contratos de SESNA en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-sesna",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/sesna.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de SESNSP del 2019",
    "description": "Contratos de SESNSP en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-sesnsp",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/sesnsp.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de SFP del 2019",
    "description": "Contratos de SFP en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-sfp",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/sfp.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de SGM del 2019",
    "description": "Contratos de SGM en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-sgm",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/sgm.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de SHCP del 2019",
    "description": "Contratos de SHCP en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-shcp",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/shcp.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de SHF del 2019",
    "description": "Contratos de SHF en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-shf",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/shf.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de SIAP del 2019",
    "description": "Contratos de SIAP en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-siap",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/siap.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de SIN del 2019",
    "description": "Contratos de SIN en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-sin",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/sin.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de SLP del 2019",
    "description": "Contratos de SLP en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-slp",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/slp.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de SNICS del 2019",
    "description": "Contratos de SNICS en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-snics",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/snics.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de SON del 2019",
    "description": "Contratos de SON en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-son",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/son.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de SPF del 2019",
    "description": "Contratos de SPF en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-spf",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/spf.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de SPR del 2019",
    "description": "Contratos de SPR en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-spr",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/spr.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de SRE del 2019",
    "description": "Contratos de SRE en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-sre",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/sre.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de SSA del 2019",
    "description": "Contratos de SSA en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-ssa",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/ssa.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de SSPC del 2019",
    "description": "Contratos de SSPC en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-sspc",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/sspc.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de STPS del 2019",
    "description": "Contratos de STPS en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-stps",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/stps.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de TAB del 2019",
    "description": "Contratos de TAB en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-tab",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/tab.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de TAMPS del 2019",
    "description": "Contratos de TAMPS en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-tamps",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/tamps.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de TECNM del 2019",
    "description": "Contratos de TECNM en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-tecnm",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/tecnm.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de TELECOMM del 2019",
    "description": "Contratos de TELECOMM en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-telecomm",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/telecomm.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de TFJA del 2019",
    "description": "Contratos de TFJA en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-tfja",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/tfja.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de TGM del 2019",
    "description": "Contratos de TGM en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-tgm",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/tgm.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de TLAX del 2019",
    "description": "Contratos de TLAX en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-tlax",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/tlax.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de Tribunales Agrarios del 2019",
    "description": "Contratos de Tribunales Agrarios en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-tribunales-agrarios",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/tribunales-agrarios.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de TVMETRO del 2019",
    "description": "Contratos de TVMETRO en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-tvmetro",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/tvmetro.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de UNADM del 2019",
    "description": "Contratos de UNADM en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-unadm",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/unadm.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de UPN del 2019",
    "description": "Contratos de UPN en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-upn",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/upn.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de USCMM del 2019",
    "description": "Contratos de USCMM en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-uscmm",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/uscmm.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de VER del 2019",
    "description": "Contratos de VER en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-ver",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/ver.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de YUC del 2019",
    "description": "Contratos de YUC en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-yuc",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/yuc.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de ZAC del 2019",
    "description": "Contratos de ZAC en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-zac",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/zac.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de ZEE del 2019",
    "description": "Contratos de ZEE en 2019",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2019-compranet-zee",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2019/zee.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  }
]
  },
  {
    groupName: 'CompraNet 2018',
    dbs: [
  {
    "name": "Contratos de AEFCM del 2018",
    "description": "Contratos de AEFCM en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-aefcm",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/aefcm.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de AEM del 2018",
    "description": "Contratos de AEM en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-aem",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/aem.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de AGN del 2018",
    "description": "Contratos de AGN en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-agn",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/agn.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de AGROASEMEX del 2018",
    "description": "Contratos de AGROASEMEX en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-agroasemex",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/agroasemex.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de AGS del 2018",
    "description": "Contratos de AGS en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-ags",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/ags.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de AICM del 2018",
    "description": "Contratos de AICM en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-aicm",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/aicm.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de APBP del 2018",
    "description": "Contratos de APBP en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-apbp",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/apbp.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de API-Altamira del 2018",
    "description": "Contratos de API-Altamira en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-api-altamira",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/api-altamira.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de API-Coatzacoalcos del 2018",
    "description": "Contratos de API-Coatzacoalcos en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-api-coatzacoalcos",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/api-coatzacoalcos.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de API-Dos Bocas del 2018",
    "description": "Contratos de API-Dos Bocas en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-api-dos-bocas",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/api-dos-bocas.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de API-Ensenada del 2018",
    "description": "Contratos de API-Ensenada en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-api-ensenada",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/api-ensenada.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de API-Guaymas del 2018",
    "description": "Contratos de API-Guaymas en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-api-guaymas",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/api-guaymas.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de API-Lázaro Cárdenas del 2018",
    "description": "Contratos de API-Lázaro Cárdenas en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-api-lazaro-cardenas",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/api-lazaro-cardenas.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de API-Manzanillo del 2018",
    "description": "Contratos de API-Manzanillo en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-api-manzanillo",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/api-manzanillo.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de API-Mazatlán del 2018",
    "description": "Contratos de API-Mazatlán en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-api-mazatlan",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/api-mazatlan.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de API-Progreso del 2018",
    "description": "Contratos de API-Progreso en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-api-progreso",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/api-progreso.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de API-Puerto Madero del 2018",
    "description": "Contratos de API-Puerto Madero en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-api-puerto-madero",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/api-puerto-madero.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de API-Puerto Vallarta del 2018",
    "description": "Contratos de API-Puerto Vallarta en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-api-puerto-vallarta",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/api-puerto-vallarta.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de API-Salina Cruz del 2018",
    "description": "Contratos de API-Salina Cruz en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-api-salina-cruz",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/api-salina-cruz.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de API-Tampico del 2018",
    "description": "Contratos de API-Tampico en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-api-tampico",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/api-tampico.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de API-Topolobampo del 2018",
    "description": "Contratos de API-Topolobampo en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-api-topolobampo",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/api-topolobampo.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de API-Tuxpan del 2018",
    "description": "Contratos de API-Tuxpan en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-api-tuxpan",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/api-tuxpan.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de API-Veracruz del 2018",
    "description": "Contratos de API-Veracruz en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-api-veracruz",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/api-veracruz.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de APRENDEMX del 2018",
    "description": "Contratos de APRENDEMX en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-aprendemx",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/aprendemx.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de ARTF del 2018",
    "description": "Contratos de ARTF en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-artf",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/artf.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de ASA del 2018",
    "description": "Contratos de ASA en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-asa",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/asa.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de ASEA del 2018",
    "description": "Contratos de ASEA en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-asea",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/asea.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de ASERCA del 2018",
    "description": "Contratos de ASERCA en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-aserca",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/aserca.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de BANCOMEXT del 2018",
    "description": "Contratos de BANCOMEXT en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-bancomext",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/bancomext.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de BANJERCITO del 2018",
    "description": "Contratos de BANJERCITO en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-banjercito",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/banjercito.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de BANOBRAS del 2018",
    "description": "Contratos de BANOBRAS en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-banobras",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/banobras.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de BANSEFI del 2018",
    "description": "Contratos de BANSEFI en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-bansefi",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/bansefi.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de BC del 2018",
    "description": "Contratos de BC en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-bc",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/bc.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de BCS del 2018",
    "description": "Contratos de BCS en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-bcs",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/bcs.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de BIENESTAR del 2018",
    "description": "Contratos de BIENESTAR en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-bienestar",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/bienestar.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de BIRMEX del 2018",
    "description": "Contratos de BIRMEX en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-birmex",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/birmex.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CAMP del 2018",
    "description": "Contratos de CAMP en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-camp",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/camp.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CAPUFE del 2018",
    "description": "Contratos de CAPUFE en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-capufe",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/capufe.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CCC del 2018",
    "description": "Contratos de CCC en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-ccc",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/ccc.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CDMX del 2018",
    "description": "Contratos de CDMX en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-cdmx",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/cdmx.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CEAV del 2018",
    "description": "Contratos de CEAV en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-ceav",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/ceav.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CECUTT del 2018",
    "description": "Contratos de CECUTT en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-cecutt",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/cecutt.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CENACE del 2018",
    "description": "Contratos de CENACE en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-cenace",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/cenace.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CENAGAS del 2018",
    "description": "Contratos de CENAGAS en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-cenagas",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/cenagas.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CENAM del 2018",
    "description": "Contratos de CENAM en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-cenam",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/cenam.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CENAPRECE del 2018",
    "description": "Contratos de CENAPRECE en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-cenaprece",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/cenaprece.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CENETEC del 2018",
    "description": "Contratos de CENETEC en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-cenetec",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/cenetec.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CENSIDA del 2018",
    "description": "Contratos de CENSIDA en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-censida",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/censida.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CENTROGEO del 2018",
    "description": "Contratos de CENTROGEO en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-centrogeo",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/centrogeo.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CETI del 2018",
    "description": "Contratos de CETI en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-ceti",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/ceti.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CFE del 2018",
    "description": "Contratos de CFE en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-cfe",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/cfe.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CHIH del 2018",
    "description": "Contratos de CHIH en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-chih",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/chih.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CHIS del 2018",
    "description": "Contratos de CHIS en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-chis",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/chis.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CIAD del 2018",
    "description": "Contratos de CIAD en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-ciad",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/ciad.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CIATEC del 2018",
    "description": "Contratos de CIATEC en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-ciatec",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/ciatec.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CIATEJ del 2018",
    "description": "Contratos de CIATEJ en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-ciatej",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/ciatej.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CIATEQ del 2018",
    "description": "Contratos de CIATEQ en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-ciateq",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/ciateq.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CIBNOR del 2018",
    "description": "Contratos de CIBNOR en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-cibnor",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/cibnor.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CICESE del 2018",
    "description": "Contratos de CICESE en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-cicese",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/cicese.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CICY del 2018",
    "description": "Contratos de CICY en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-cicy",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/cicy.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CIDE del 2018",
    "description": "Contratos de CIDE en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-cide",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/cide.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CIDESI del 2018",
    "description": "Contratos de CIDESI en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-cidesi",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/cidesi.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CIDETEQ del 2018",
    "description": "Contratos de CIDETEQ en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-cideteq",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/cideteq.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CIESAS del 2018",
    "description": "Contratos de CIESAS en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-ciesas",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/ciesas.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CIJ del 2018",
    "description": "Contratos de CIJ en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-cij",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/cij.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CIMAT del 2018",
    "description": "Contratos de CIMAT en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-cimat",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/cimat.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CIMAV del 2018",
    "description": "Contratos de CIMAV en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-cimav",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/cimav.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CINVESTAV del 2018",
    "description": "Contratos de CINVESTAV en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-cinvestav",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/cinvestav.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CIO del 2018",
    "description": "Contratos de CIO en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-cio",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/cio.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CIQA del 2018",
    "description": "Contratos de CIQA en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-ciqa",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/ciqa.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CISEN del 2018",
    "description": "Contratos de CISEN en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-cisen",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/cisen.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CJEF del 2018",
    "description": "Contratos de CJEF en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-cjef",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/cjef.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CMM del 2018",
    "description": "Contratos de CMM en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-cmm",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/cmm.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CNB del 2018",
    "description": "Contratos de CNB en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-cnb",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/cnb.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CNBBBJ del 2018",
    "description": "Contratos de CNBBBJ en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-cnbbbj",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/cnbbbj.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CNBV del 2018",
    "description": "Contratos de CNBV en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-cnbv",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/cnbv.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CNEGSR del 2018",
    "description": "Contratos de CNEGSR en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-cnegsr",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/cnegsr.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CNH del 2018",
    "description": "Contratos de CNH en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-cnh",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/cnh.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CNPSS del 2018",
    "description": "Contratos de CNPSS en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-cnpss",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/cnpss.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CNSF del 2018",
    "description": "Contratos de CNSF en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-cnsf",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/cnsf.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CNSNS del 2018",
    "description": "Contratos de CNSNS en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-cnsns",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/cnsns.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CNTS del 2018",
    "description": "Contratos de CNTS en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-cnts",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/cnts.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de COAH del 2018",
    "description": "Contratos de COAH en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-coah",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/coah.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de COFAA del 2018",
    "description": "Contratos de COFAA en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-cofaa",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/cofaa.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de COFECE del 2018",
    "description": "Contratos de COFECE en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-cofece",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/cofece.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de COFEPRIS del 2018",
    "description": "Contratos de COFEPRIS en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-cofepris",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/cofepris.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de COL del 2018",
    "description": "Contratos de COL en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-col",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/col.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de COLBACH del 2018",
    "description": "Contratos de COLBACH en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-colbach",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/colbach.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de COLEF del 2018",
    "description": "Contratos de COLEF en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-colef",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/colef.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de COLMICH del 2018",
    "description": "Contratos de COLMICH en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-colmich",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/colmich.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de COLPOS del 2018",
    "description": "Contratos de COLPOS en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-colpos",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/colpos.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de COLSAN del 2018",
    "description": "Contratos de COLSAN en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-colsan",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/colsan.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de COMESA del 2018",
    "description": "Contratos de COMESA en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-comesa",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/comesa.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de COMIMSA del 2018",
    "description": "Contratos de COMIMSA en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-comimsa",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/comimsa.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CONACYT del 2018",
    "description": "Contratos de CONACYT en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-conacyt",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/conacyt.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CONADE del 2018",
    "description": "Contratos de CONADE en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-conade",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/conade.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CONADESUCA del 2018",
    "description": "Contratos de CONADESUCA en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-conadesuca",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/conadesuca.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CONADIC del 2018",
    "description": "Contratos de CONADIC en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-conadic",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/conadic.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CONADIS del 2018",
    "description": "Contratos de CONADIS en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-conadis",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/conadis.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CONAFE del 2018",
    "description": "Contratos de CONAFE en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-conafe",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/conafe.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CONAFOR del 2018",
    "description": "Contratos de CONAFOR en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-conafor",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/conafor.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CONAGUA del 2018",
    "description": "Contratos de CONAGUA en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-conagua",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/conagua.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CONALEP del 2018",
    "description": "Contratos de CONALEP en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-conalep",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/conalep.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CONALITEG del 2018",
    "description": "Contratos de CONALITEG en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-conaliteg",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/conaliteg.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CONAMED del 2018",
    "description": "Contratos de CONAMED en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-conamed",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/conamed.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CONAMER del 2018",
    "description": "Contratos de CONAMER en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-conamer",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/conamer.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CONAMPROS del 2018",
    "description": "Contratos de CONAMPROS en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-conampros",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/conampros.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CONANP del 2018",
    "description": "Contratos de CONANP en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-conanp",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/conanp.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CONAPESCA del 2018",
    "description": "Contratos de CONAPESCA en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-conapesca",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/conapesca.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CONAPRED del 2018",
    "description": "Contratos de CONAPRED en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-conapred",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/conapred.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CONASAMI del 2018",
    "description": "Contratos de CONASAMI en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-conasami",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/conasami.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CONAVI del 2018",
    "description": "Contratos de CONAVI en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-conavi",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/conavi.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CONAZA del 2018",
    "description": "Contratos de CONAZA en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-conaza",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/conaza.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CONDUSEF del 2018",
    "description": "Contratos de CONDUSEF en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-condusef",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/condusef.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CONEVAL del 2018",
    "description": "Contratos de CONEVAL en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-coneval",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/coneval.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CONOCER del 2018",
    "description": "Contratos de CONOCER en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-conocer",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/conocer.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CONSAR del 2018",
    "description": "Contratos de CONSAR en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-consar",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/consar.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CONUEE del 2018",
    "description": "Contratos de CONUEE en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-conuee",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/conuee.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CPTM del 2018",
    "description": "Contratos de CPTM en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-cptm",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/cptm.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CRAE del 2018",
    "description": "Contratos de CRAE en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-crae",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/crae.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CRE del 2018",
    "description": "Contratos de CRE en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-cre",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/cre.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CSAEGRO del 2018",
    "description": "Contratos de CSAEGRO en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-csaegro",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/csaegro.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de CULTURA del 2018",
    "description": "Contratos de CULTURA en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-cultura",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/cultura.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de DGO del 2018",
    "description": "Contratos de DGO en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-dgo",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/dgo.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de DICONSA del 2018",
    "description": "Contratos de DICONSA en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 11,
    "slug": "2018-compranet-diconsa",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/diconsa.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de DIF del 2018",
    "description": "Contratos de DIF en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-dif",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/dif.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de ECHASA del 2018",
    "description": "Contratos de ECHASA en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-echasa",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/echasa.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de ECOSUR del 2018",
    "description": "Contratos de ECOSUR en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-ecosur",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/ecosur.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de EDUCAL del 2018",
    "description": "Contratos de EDUCAL en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-educal",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/educal.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de ESSA del 2018",
    "description": "Contratos de ESSA en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-essa",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/essa.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de FCE del 2018",
    "description": "Contratos de FCE en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-fce",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/fce.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de FEESA del 2018",
    "description": "Contratos de FEESA en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-feesa",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/feesa.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de FICINE del 2018",
    "description": "Contratos de FICINE en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-ficine",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/ficine.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de FIDENA del 2018",
    "description": "Contratos de FIDENA en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-fidena",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/fidena.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de FIFOMI del 2018",
    "description": "Contratos de FIFOMI en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-fifomi",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/fifomi.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de FIFONAFE del 2018",
    "description": "Contratos de FIFONAFE en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-fifonafe",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/fifonafe.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de FIRA del 2018",
    "description": "Contratos de FIRA en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-fira",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/fira.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de FIRCO del 2018",
    "description": "Contratos de FIRCO en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-firco",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/firco.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de FIT del 2018",
    "description": "Contratos de FIT en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-fit",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/fit.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de FND del 2018",
    "description": "Contratos de FND en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-fnd",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/fnd.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de FOCIR del 2018",
    "description": "Contratos de FOCIR en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-focir",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/focir.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de FONART del 2018",
    "description": "Contratos de FONART en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-fonart",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/fonart.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de FONATUR del 2018",
    "description": "Contratos de FONATUR en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-fonatur",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/fonatur.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de FONATUR Mantenimiento del 2018",
    "description": "Contratos de FONATUR Mantenimiento en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-fonatur-mantenimiento",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/fonatur-mantenimiento.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de FONATUR TREN MAYA del 2018",
    "description": "Contratos de FONATUR TREN MAYA en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-fonatur-tren-maya",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/fonatur-tren-maya.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de FONHAPO del 2018",
    "description": "Contratos de FONHAPO en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-fonhapo",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/fonhapo.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de GACM del 2018",
    "description": "Contratos de GACM en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-gacm",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/gacm.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de GRO del 2018",
    "description": "Contratos de GRO en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-gro",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/gro.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de GTO del 2018",
    "description": "Contratos de GTO en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-gto",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/gto.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de HG del 2018",
    "description": "Contratos de HG en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-hg",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/hg.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de HGM del 2018",
    "description": "Contratos de HGM en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-hgm",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/hgm.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de HGO del 2018",
    "description": "Contratos de HGO en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-hgo",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/hgo.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de HIM del 2018",
    "description": "Contratos de HIM en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-him",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/him.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de HJM del 2018",
    "description": "Contratos de HJM en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-hjm",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/hjm.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de HRAEB del 2018",
    "description": "Contratos de HRAEB en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-hraeb",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/hraeb.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de HRAEI del 2018",
    "description": "Contratos de HRAEI en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-hraei",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/hraei.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de HRAEO del 2018",
    "description": "Contratos de HRAEO en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-hraeo",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/hraeo.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de HRAEPY del 2018",
    "description": "Contratos de HRAEPY en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-hraepy",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/hraepy.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de HRAEV del 2018",
    "description": "Contratos de HRAEV en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-hraev",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/hraev.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de IEPSA del 2018",
    "description": "Contratos de IEPSA en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-iepsa",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/iepsa.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de IFT del 2018",
    "description": "Contratos de IFT en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-ift",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/ift.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de IMCINE del 2018",
    "description": "Contratos de IMCINE en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-imcine",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/imcine.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de IMER del 2018",
    "description": "Contratos de IMER en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-imer",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/imer.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de IMJ del 2018",
    "description": "Contratos de IMJ en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-imj",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/imj.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de IMP del 2018",
    "description": "Contratos de IMP en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-imp",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/imp.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de IMPI del 2018",
    "description": "Contratos de IMPI en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-impi",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/impi.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de IMSS del 2018",
    "description": "Contratos de IMSS en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 11,
    "slug": "2018-compranet-imss",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/imss.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de IMT del 2018",
    "description": "Contratos de IMT en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-imt",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/imt.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de IMTA del 2018",
    "description": "Contratos de IMTA en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-imta",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/imta.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de INACIPE del 2018",
    "description": "Contratos de INACIPE en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-inacipe",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/inacipe.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de INADEM del 2018",
    "description": "Contratos de INADEM en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-inadem",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/inadem.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de INAES del 2018",
    "description": "Contratos de INAES en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-inaes",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/inaes.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de INAH del 2018",
    "description": "Contratos de INAH en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-inah",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/inah.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de INAI del 2018",
    "description": "Contratos de INAI en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-inai",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/inai.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de INALI del 2018",
    "description": "Contratos de INALI en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-inali",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/inali.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de INAOE del 2018",
    "description": "Contratos de INAOE en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-inaoe",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/inaoe.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de INAPAM del 2018",
    "description": "Contratos de INAPAM en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-inapam",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/inapam.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de INAPESCA del 2018",
    "description": "Contratos de INAPESCA en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-inapesca",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/inapesca.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de INBAL del 2018",
    "description": "Contratos de INBAL en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-inbal",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/inbal.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de INCAN del 2018",
    "description": "Contratos de INCAN en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-incan",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/incan.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de INCARD del 2018",
    "description": "Contratos de INCARD en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-incard",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/incard.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de INCARURAL del 2018",
    "description": "Contratos de INCARURAL en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-incarural",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/incarural.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de INCMNSZ del 2018",
    "description": "Contratos de INCMNSZ en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-incmnsz",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/incmnsz.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de INDAABIN del 2018",
    "description": "Contratos de INDAABIN en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-indaabin",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/indaabin.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de INDESOL del 2018",
    "description": "Contratos de INDESOL en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-indesol",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/indesol.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de INEA del 2018",
    "description": "Contratos de INEA en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-inea",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/inea.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de INECC del 2018",
    "description": "Contratos de INECC en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-inecc",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/inecc.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de INECOL del 2018",
    "description": "Contratos de INECOL en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-inecol",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/inecol.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de INEE del 2018",
    "description": "Contratos de INEE en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-inee",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/inee.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de INEEL del 2018",
    "description": "Contratos de INEEL en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-ineel",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/ineel.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de INEGI del 2018",
    "description": "Contratos de INEGI en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-inegi",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/inegi.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de INER del 2018",
    "description": "Contratos de INER en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-iner",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/iner.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de INFONACOT del 2018",
    "description": "Contratos de INFONACOT en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-infonacot",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/infonacot.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de INFOTEC del 2018",
    "description": "Contratos de INFOTEC en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-infotec",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/infotec.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de INGER del 2018",
    "description": "Contratos de INGER en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-inger",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/inger.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de INIFAP del 2018",
    "description": "Contratos de INIFAP en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-inifap",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/inifap.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de INIFED del 2018",
    "description": "Contratos de INIFED en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-inifed",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/inifed.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de ININ del 2018",
    "description": "Contratos de ININ en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-inin",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/inin.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de INM del 2018",
    "description": "Contratos de INM en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-inm",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/inm.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de INMEGEN del 2018",
    "description": "Contratos de INMEGEN en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-inmegen",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/inmegen.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de INMUJERES del 2018",
    "description": "Contratos de INMUJERES en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-inmujeres",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/inmujeres.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de INNN del 2018",
    "description": "Contratos de INNN en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-innn",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/innn.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de INP del 2018",
    "description": "Contratos de INP en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-inp",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/inp.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de INPER del 2018",
    "description": "Contratos de INPER en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-inper",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/inper.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de INPI del 2018",
    "description": "Contratos de INPI en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-inpi",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/inpi.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de INPSIQ del 2018",
    "description": "Contratos de INPSIQ en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-inpsiq",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/inpsiq.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de INR del 2018",
    "description": "Contratos de INR en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-inr",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/inr.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de INSP del 2018",
    "description": "Contratos de INSP en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-insp",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/insp.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de INSUS del 2018",
    "description": "Contratos de INSUS en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-insus",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/insus.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de IPAB del 2018",
    "description": "Contratos de IPAB en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-ipab",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/ipab.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de IPICYT del 2018",
    "description": "Contratos de IPICYT en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-ipicyt",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/ipicyt.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de IPN del 2018",
    "description": "Contratos de IPN en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-ipn",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/ipn.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de ISSFAM del 2018",
    "description": "Contratos de ISSFAM en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-issfam",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/issfam.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de ISSSTE del 2018",
    "description": "Contratos de ISSSTE en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 11,
    "slug": "2018-compranet-issste",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/issste.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de JAL del 2018",
    "description": "Contratos de JAL en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-jal",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/jal.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de LICONSA del 2018",
    "description": "Contratos de LICONSA en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-liconsa",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/liconsa.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de LOTENAL del 2018",
    "description": "Contratos de LOTENAL en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-lotenal",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/lotenal.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de MEX del 2018",
    "description": "Contratos de MEX en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-mex",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/mex.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de MICH del 2018",
    "description": "Contratos de MICH en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-mich",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/mich.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de MOR del 2018",
    "description": "Contratos de MOR en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-mor",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/mor.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de MORA del 2018",
    "description": "Contratos de MORA en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-mora",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/mora.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de NAFIN del 2018",
    "description": "Contratos de NAFIN en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-nafin",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/nafin.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de NAY del 2018",
    "description": "Contratos de NAY en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-nay",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/nay.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de NL del 2018",
    "description": "Contratos de NL en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-nl",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/nl.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de NOTIMEX del 2018",
    "description": "Contratos de NOTIMEX en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-notimex",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/notimex.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de OAX del 2018",
    "description": "Contratos de OAX en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-oax",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/oax.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de OnceTV del 2018",
    "description": "Contratos de OnceTV en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-oncetv",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/oncetv.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de PA del 2018",
    "description": "Contratos de PA en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-pa",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/pa.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de PF del 2018",
    "description": "Contratos de PF en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-pf",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/pf.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de PGR del 2018",
    "description": "Contratos de PGR en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-pgr",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/pgr.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de POI del 2018",
    "description": "Contratos de POI en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-poi",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/poi.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de PR del 2018",
    "description": "Contratos de PR en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-pr",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/pr.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de PRODECON del 2018",
    "description": "Contratos de PRODECON en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-prodecon",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/prodecon.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de PROFECO del 2018",
    "description": "Contratos de PROFECO en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-profeco",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/profeco.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de PROFEDET del 2018",
    "description": "Contratos de PROFEDET en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-profedet",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/profedet.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de PROFEPA del 2018",
    "description": "Contratos de PROFEPA en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-profepa",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/profepa.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de PROMEXICO del 2018",
    "description": "Contratos de PROMEXICO en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-promexico",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/promexico.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de PROMTEL del 2018",
    "description": "Contratos de PROMTEL en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-promtel",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/promtel.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de PRONABIVE del 2018",
    "description": "Contratos de PRONABIVE en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-pronabive",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/pronabive.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de PRONOSTICOS del 2018",
    "description": "Contratos de PRONOSTICOS en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-pronosticos",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/pronosticos.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de PRS del 2018",
    "description": "Contratos de PRS en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-prs",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/prs.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de PUE del 2018",
    "description": "Contratos de PUE en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-pue",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/pue.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de Q ROO del 2018",
    "description": "Contratos de Q ROO en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-q-roo",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/q-roo.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de QRO del 2018",
    "description": "Contratos de QRO en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-qro",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/qro.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de RAN del 2018",
    "description": "Contratos de RAN en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-ran",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/ran.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de SACM del 2018",
    "description": "Contratos de SACM en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-sacm",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/sacm.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de SADER del 2018",
    "description": "Contratos de SADER en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-sader",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/sader.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de SAE del 2018",
    "description": "Contratos de SAE en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-sae",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/sae.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de SAP del 2018",
    "description": "Contratos de SAP en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-sap",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/sap.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de SAT del 2018",
    "description": "Contratos de SAT en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-sat",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/sat.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de SCT del 2018",
    "description": "Contratos de SCT en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-sct",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/sct.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de SCVSHF del 2018",
    "description": "Contratos de SCVSHF en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-scvshf",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/scvshf.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de SE del 2018",
    "description": "Contratos de SE en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-se",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/se.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de SECTUR del 2018",
    "description": "Contratos de SECTUR en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-sectur",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/sectur.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de SEDATU del 2018",
    "description": "Contratos de SEDATU en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-sedatu",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/sedatu.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de SEDENA del 2018",
    "description": "Contratos de SEDENA en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-sedena",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/sedena.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de SEGOB del 2018",
    "description": "Contratos de SEGOB en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-segob",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/segob.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de SEMAR del 2018",
    "description": "Contratos de SEMAR en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-semar",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/semar.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de SEMARNAT del 2018",
    "description": "Contratos de SEMARNAT en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-semarnat",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/semarnat.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de SENASICA del 2018",
    "description": "Contratos de SENASICA en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-senasica",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/senasica.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de SENEAM del 2018",
    "description": "Contratos de SENEAM en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-seneam",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/seneam.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de SENER del 2018",
    "description": "Contratos de SENER en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-sener",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/sener.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de SEP del 2018",
    "description": "Contratos de SEP en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-sep",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/sep.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de SEPOMEX del 2018",
    "description": "Contratos de SEPOMEX en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-sepomex",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/sepomex.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de SESNA del 2018",
    "description": "Contratos de SESNA en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-sesna",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/sesna.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de SESNSP del 2018",
    "description": "Contratos de SESNSP en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-sesnsp",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/sesnsp.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de SFP del 2018",
    "description": "Contratos de SFP en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-sfp",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/sfp.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de SGM del 2018",
    "description": "Contratos de SGM en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-sgm",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/sgm.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de SHCP del 2018",
    "description": "Contratos de SHCP en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-shcp",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/shcp.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de SHF del 2018",
    "description": "Contratos de SHF en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-shf",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/shf.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de SIAP del 2018",
    "description": "Contratos de SIAP en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-siap",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/siap.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de SIN del 2018",
    "description": "Contratos de SIN en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-sin",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/sin.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de SLP del 2018",
    "description": "Contratos de SLP en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-slp",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/slp.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de SNICS del 2018",
    "description": "Contratos de SNICS en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-snics",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/snics.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de SON del 2018",
    "description": "Contratos de SON en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-son",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/son.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de SPF del 2018",
    "description": "Contratos de SPF en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-spf",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/spf.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de SPR del 2018",
    "description": "Contratos de SPR en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-spr",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/spr.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de SRE del 2018",
    "description": "Contratos de SRE en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-sre",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/sre.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de SSA del 2018",
    "description": "Contratos de SSA en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-ssa",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/ssa.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de STPS del 2018",
    "description": "Contratos de STPS en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-stps",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/stps.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de TAB del 2018",
    "description": "Contratos de TAB en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-tab",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/tab.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de TAMPS del 2018",
    "description": "Contratos de TAMPS en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-tamps",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/tamps.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de TECNM del 2018",
    "description": "Contratos de TECNM en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-tecnm",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/tecnm.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de TELECOMM del 2018",
    "description": "Contratos de TELECOMM en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-telecomm",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/telecomm.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de TFJA del 2018",
    "description": "Contratos de TFJA en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-tfja",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/tfja.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de TGM del 2018",
    "description": "Contratos de TGM en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-tgm",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/tgm.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de TLAX del 2018",
    "description": "Contratos de TLAX en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-tlax",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/tlax.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de Tribunales Agrarios del 2018",
    "description": "Contratos de Tribunales Agrarios en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-tribunales-agrarios",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/tribunales-agrarios.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de TVMETRO del 2018",
    "description": "Contratos de TVMETRO en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-tvmetro",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/tvmetro.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de UPN del 2018",
    "description": "Contratos de UPN en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-upn",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/upn.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de VER del 2018",
    "description": "Contratos de VER en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-ver",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/ver.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de YUC del 2018",
    "description": "Contratos de YUC en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-yuc",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/yuc.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de ZAC del 2018",
    "description": "Contratos de ZAC en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-zac",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/zac.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  },
  {
    "name": "Contratos de ZEE del 2018",
    "description": "Contratos de ZEE en 2018",
    "country": "MEX",
    "blockEdit": true,
    "countryLabel": "MEX",
    "author": "Secretaría de Hacienda y Crédito Público",
    "size": 4,
    "slug": "2018-compranet-zee",
    "last": "2020-02-13",
    "url": "https://sites.google.com/site/cnetuc/contrataciones",
    "flag": require('../static/flags/mexico.svg'),
    "file": require('../static/csvs/compranet2018/zee.csv'),
    "only": [
      "Nombre de empresa",
      "RFC",
      "Monto del contrato"
    ]
  }
],
},
  {
    groupName: 'SAT',
    dbs: [
      {
        name: 'Definitivos',
        description: 'Empresas fantasma definitivas',
        country: 'MEX',
        blockEdit: true,
        countryLabel: 'México',
        author: 'Servicio de Administración Tributaria',
        size: 5,
        slug: 'sat-definitivos',
        last: '2020-01-23',
        url: 'http://omawww.sat.gob.mx/cifras_sat/Paginas/datos/vinculo.html?page=ListCompleta69B.html',
        flag: require('../static/flags/mexico.svg'),
        file: require('../static/csvs/sat-def.csv'),
        only: [
          'Nombre de empresa',
          'RFC',
        ],
      },
      {
        name: 'Presuntos',
        description: 'Empresas fantasma definitivas',
        country: 'MEX',
        blockEdit: true,
        countryLabel: 'México',
        author: 'Servicio de Administración Tributaria',
        size: 3,
        slug: 'sat-definitivos',
        last: '2020-01-23',
        url: 'http://omawww.sat.gob.mx/cifras_sat/Paginas/datos/vinculo.html?page=ListCompleta69B.html',
        flag: require('../static/flags/mexico.svg'),
        file: require('../static/csvs/sat-pre.csv'),
        only: [
          'Nombre de empresa',
          'RFC',
        ],
      },
      {
        name: 'Desvirtuados',
        description: 'Empresas fantasma definitivas',
        country: 'MEX',
        blockEdit: true,
        countryLabel: 'México',
        author: 'Servicio de Administración Tributaria',
        size: 3,
        slug: 'sat-Desvirtuados',
        last: '2020-01-23',
        url: 'http://omawww.sat.gob.mx/cifras_sat/Paginas/datos/vinculo.html?page=ListCompleta69B.html',
        flag: require('../static/flags/mexico.svg'),
        file: require('../static/csvs/sat-desvirtuados.csv'),
        only: [
          'Nombre de empresa',
          'RFC',
        ],
      },
      {
        name: 'Favorables',
        description: 'Empresas fantasma definitivas',
        country: 'MEX',
        blockEdit: true,
        countryLabel: 'México',
        author: 'Servicio de Administración Tributaria',
        size: 3,
        slug: 'sat-favorables',
        last: '2020-01-23',
        url: 'http://omawww.sat.gob.mx/cifras_sat/Paginas/datos/vinculo.html?page=ListCompleta69B.html',
        flag: require('../static/flags/mexico.svg'),
        file: require('../static/csvs/sat-favorables.csv'),
        only: [
          'Nombre de empresa',
          'RFC',
        ],
      },
    ]
  },
  {
    groupName: 'Función Pública (SFP)',
    dbs: [
      {
        name: 'Inhabilitados y Multados',
        description: 'Empresas fantasma definitivas',
        country: 'MEX',
        blockEdit: true,
        countryLabel: 'México',
        author: 'Secretaría de la Función Pública',
        size: 1,
        slug: 'inhabilitados_multados_sfp',
        last: '2020-02-10',
        url: 'https://directoriosancionados.funcionpublica.gob.mx/SanFicTec/jsp/Ficha_Tecnica/SancionadosN.htm',
        flag: require('../static/flags/mexico.svg'),
        file: require('../static/csvs/inhabilitados_multados_sfp.csv'),
        only: [
          'Nombre de empresa'
        ],
      },
      {
        name: 'Multados',
        description: 'Empresas fantasma definitivas',
        country: 'MEX',
        blockEdit: true,
        countryLabel: 'México',
        author: 'Secretaría de la Función Pública',
        size: 1,
        slug: 'inhabilitados_multados_sfp',
        last: '2020-02-10',
        url: 'https://directoriosancionados.funcionpublica.gob.mx/SanFicTec/jsp/Ficha_Tecnica/SancionadosN.htm',
        flag: require('../static/flags/mexico.svg'),
        file: require('../static/csvs/multados_sfp.csv'),
        only: [
          'Nombre de empresa'
        ],
      },
    ]
  },
  {
    groupName: 'Investigaciones mexicanas',
    dbs: [
      {
        name: 'Privilegios Fiscales Condonados (2007-2015)',
        country: 'MEX',
        countryLabel: 'México',
        blockEdit: true,
        author: 'Fundar',
        size: 20,
        slug: 'estafa-maestra',
        last: '2019-09-30',
        url: 'https://privilegiosfiscales.fundar.org.mx/#top',
        flag: require('../static/flags/mexico.svg'),
        file: require('../static/csvs/pf-7-15.csv'),
        only: [
          'Nombre de empresa',
          'RFC',
          'Monto condonado',
          'Representante legal',
        ],
      },
      {
        name: 'Privilegios Fiscales Cancelaciones (2007-2015)',
        country: 'MEX',
        countryLabel: 'México',
        blockEdit: true,
        author: 'Fundar',
        size: 20,
        slug: 'estafa-maestra',
        last: '2019-09-30',
        url: 'https://privilegiosfiscales.fundar.org.mx/#top',
        flag: require('../static/flags/mexico.svg'),
        file: require('../static/csvs/pf-cancelaciones-715.csv'),
        only: [
          'Nombre de empresa',
          'RFC',
          'Monto cancelado',
          'Representante legal',
        ],
      },
    ]
  },
  {
    groupName: 'Registro Único de Proveedores y Contratistas (RUPC)',
    dbs: [
      {
        name: 'Lista del RUPC',
        description: 'Empresas fantasma definitivas',
        country: 'MEX',
        blockEdit: true,
        countryLabel: 'México',
        author: 'Secretaría de Hacienda y Crédito Público',
        size: 11,
        slug: 'sat-Desvirtuados',
        last: '2019-11-05',
        url: 'https://cnet.hacienda.gob.mx/servicios/consultaRUPC.jsf',
        flag: require('../static/flags/mexico.svg'),
        file: require('../static/csvs/rupc.csv'),
        only: [
          'Nombre de empresa',
          'RFC',
          'Entidad Federativa',
          'Giro',
          'Sitio web',
        ],
      },
    ]
  }
];
