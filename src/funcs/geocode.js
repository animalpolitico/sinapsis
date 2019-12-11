import { getISO } from '../vars/countriesDict';

const queryString = require('query-string');

export function GCBuildLink(a) {
  const iso = getISO();
  const baseUrl = 'https://maps.googleapis.com/maps/api/geocode/json';
  const params = {
    key: 'AIzaSyAXc86Sj6eDybMXNU-201kM-d740uoaMqk',
    address: a,
    language: 'es',
    region: iso,
  };
  const paramString = queryString.stringify(params);
  const url = `${baseUrl}?${paramString}`;
  return url;
}
