// https://en.wikipedia.org/wiki/ISO_3166-2:CA

let tr = require('transliteration').transliterate;

// Map without country code "CA"
const map = new Map();

map.set('CAQC', 'QC');
map.set('QC', 'QC');
map.set('QUEBEC', 'QC');
map.set('PQ', 'QC');

map.set('CABC', 'BC');
map.set('BC', 'BC');
map.set('BRITISHCOLUMBIA', 'BC');
map.set('COLOMBIEBRITANNIQUE', 'BC');

map.set('CAON', 'ON');
map.set('ON', 'ON');
map.set('ONTARIO', 'ON');

map.set('CAAB', 'AB');
map.set('AB', 'AB');
map.set('ALBERTA', 'AB');

map.set('CAMB', 'MB');
map.set('MB', 'MB');
map.set('MANITOBA', 'MB');

map.set('CANB', 'NB');
map.set('NB', 'NB');
map.set('NEWBRUNSWICK', 'NB');
map.set('NOUVEAUBRUNSWICK', 'NB');

map.set('CANL', 'NL');
map.set('NL', 'NL');
map.set('NEWFOUNDLANDANDLABRADOR', 'NL');
map.set('NEWFOUNDLAND&LABRADOR', 'NL');
map.set('TERRENEUVEETLABRADOR', 'NL');
map.set('TERRENEUVE&LABRADOR', 'NL');

map.set('CANS', 'NS');
map.set('NS', 'NS');
map.set('NOVASCOTIA', 'NS');
map.set('NOUVELLEECOSSE', 'NS');

map.set('CAPE', 'PE');
map.set('PE', 'PE');
map.set('PRINCEEDWARDISLAND', 'PE');
map.set('ILEDUPRINCEEDOUARD', 'PE');

map.set('CASK', 'SK');
map.set('SK', 'SK');
map.set('SASKATCHEWAN', 'SK');

map.set('CANT', 'NT');
map.set('NT', 'NT');
map.set('NORTHWESTTERRITORIES', 'NT');
map.set('TERRITOIRESDUNORDOUEST', 'NT');

map.set('CANU', 'NU');
map.set('NU', 'NU');
map.set('NUNAVUT', 'NU');

map.set('CAYT', 'YT');
map.set('YT', 'YT');
map.set('YUKON', 'YT');

function getShortCode(str) {
  return map.get(tr(str.replace(/[- ]/g, '').toUpperCase()));
}

function getISO3166Code(str) {
  return 'CA-' + getShortCode(str);
}

module.exports = {
  getShortCode: getShortCode,
  getISO3166Code: getISO3166Code
};
