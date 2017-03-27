// Support Canadian Postal Code (https://www.canadapost.ca/tools/pg/manual/PGaddress-e.asp#1449294)
// FSA (Forward Sortation Area) list:
//   https://www.ic.gc.ca/eic/site/bsf-osb.nsf/eng/br03396.html
//   https://www.canadapost.ca/tools/pg/manual/PGaddress-e.asp#1449304

// Province code list based on 1st postal code letter
const map = new Map();
map.set('A', 'NL');
map.set('B', 'NS');
map.set('C', 'PE');
map.set('E', 'NB');
map.set('G', 'QC');
map.set('H', 'QC');
map.set('J', 'QC');
map.set('K', 'ON');
map.set('L', 'ON');
map.set('M', 'ON');
map.set('N', 'ON');
map.set('P', 'ON');
map.set('R', 'MB');
map.set('S', 'SK');
map.set('T', 'AB');
map.set('V', 'BC');
map.set('Y', 'YT');
// X, we can't map because it's used for 2 Territories: Northwest Territories and Nunavut

function normalize(str) {
  return str.replace(/[- ]/g, '').toUpperCase();
}

function filter(postalCode) {

    if (!postalCode) {
        return null;
    }

    postalCode = normalize(postalCode);

    var regExp = new RegExp(/([ABCEGHJKLMNPRSTVXY]\d)([ABCEGHJKLMNPRSTVWXYZ]\d){2}/);

    if (regExp.test(postalCode)) {
        return postalCode;
    }
    return null;
}

function isValid(postalCode) {
  return filter(postalCode) !== null;
}

function getProvinceShortCode(postalCode) {
  postalCode = filter(postalCode);
  if(postalCode) {
    provinceCode = map.get(postalCode.substring(0,1));
    if(provinceCode) return provinceCode;
  }
  return null;
}


module.exports = {
  filter: filter,
  isValid: isValid,
  getProvinceShortCode: getProvinceShortCode
};
