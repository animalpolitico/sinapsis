export const predbs = [
  {
    name: 'Estafa Maestra',
    country: 'MEX',
    countryLabel: 'México',
    author: 'Animal Político & Mexicanos Contra la Corrupción',
    size: 2,
    slug: 'estafa-maestra',
    last: '2019-10-01',
    file: require('../static/csvs/estafa-maestra.csv')
  },
  {
    name: 'Empresas Fantasma de Veracruz',
    country: 'MEX',
    countryLabel: 'México',
    author: 'Animal Político',
    size: 1,
    slug: 'estafa-maestra',
    last: '2019-10-01',
    file: require('../static/csvs/empresas-fantasma-ver.csv')
  },
  {
    name: 'Privilegios Fiscales (Condonaciones 2007-2015)',
    country: 'MEX',
    countryLabel: 'México',
    author: 'Fundar',
    onlyIn: ['MEX'],
    size: 4,
    slug: 'estafa-maestra',
    last: '2019-10-01',
    file: require('../static/csvs/pf-7-15.csv')
  },
  {
    name: 'SAT Definitivos',
    description: 'Empresas fantasma definitivas',
    country: 'MEX',
    onlyIn: ['MEX'],
    countryLabel: 'México',
    author: 'SAT',
    size: 5,
    slug: 'sat-definitivos',
    last: '2019-09-30',
    file: require('../static/csvs/sat-def.csv')
  },
  {
    name: 'SAT Presuntos',
    description: 'Empresas fantasma definitivas',
    country: 'MEX',
    onlyIn: ['MEX'],
    countryLabel: 'México',
    author: 'SAT',
    size: 3,
    slug: 'sat-definitivos',
    last: '2019-09-30',
    file: require('../static/csvs/sat-pre.csv')
  }
]
