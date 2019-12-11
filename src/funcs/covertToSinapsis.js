import * as d3 from 'd3';

export function convertToSinapsisFile(file) {
  const s = JSON.stringify(file);
  const j = btoa(encodeURI(s));

  // console.log('j', j);
}
