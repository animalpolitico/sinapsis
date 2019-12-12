import * as C from '../vars/countriesDict';

const country = C.getCurrentCountry();

export default function formatMoney(qty, obj) {
  const country = C.getCurrentCountry();
  let q = qty;
  if (isNaN(q)) {
    q = 0;
  }

  if (obj) {
    var s = obj.symbol;
    var c = obj.currency;
  } else {
    var s = country.currencySign;
    var c = country.currency;
  }


  q = parseFloat(q);
  q = q.toFixed(1).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  q = `${s + q} ${c}`;
  return q;
}

function toMXN(qty, from) {
  const c = C.countries;
  let s = c.filter((e) => e.currency == from);
  s = s[0];
  const q = qty * s.toMXN;
  return q;
}

function MXNto(qty, to) {
  const c = C.countries;
  let s = c.filter((e) => e.currency == to);
  s = s[0];
  const q = qty / s.toMXN;
  return q;
}


export function convertCurrency(qty, from, to) {
  from = !from ? 'MXN' : from;
  to = !to ? country.currency : to;

  let q = from !== 'MXN' ? toMXN(qty, from) : qty;
  q = MXNto(q, to);

  return q;
}


export function convertToActualCurrency(qty, origin) {
  if (typeof qty === 'string') {
    qty = qty.replace(/\,/, '');
  }
  qty = parseFloat(qty);
  const cr = getCurrentCurrency();
  return convertCurrency(qty, origin, cr);
}

function getCurrentCurrency() {
  const country = C.getCurrentCountry();
  return country.currency;
}
