let postalCode = require('../lib/postalCode');
var assert = require('assert');

describe('postalCode', function() {
  describe('filter', function() {
    it('should return "null" when the postal code is not valid', function() {
      let v = postalCode.filter('XXXXXX')
      assert.equal(null, v);
    });
    it('should return "null" when no parameter passed', function() {
      let v = postalCode.filter()
      assert.equal(null, v);
    });
    it('should return "H3E2A5" when the postal code is "H3E 2A5"', function() {
      let v = postalCode.filter('H3E 2A5')
      assert.equal('H3E2A5', v);
    });
    it('should return "H3E2A5" when the postal code is "H3E-2A5"', function() {
      let v = postalCode.filter('H3E-2A5')
      assert.equal('H3E2A5', v);
    });
    it('should return "H3E2A5" when the postal code is "h3e2a5"', function() {
      let v = postalCode.filter('h3e2a5')
      assert.equal('H3E2A5', v);
    });
    it('should return "H3E2A5" when the postal code is "  h 3 e  2 a 5  "', function() {
      let v = postalCode.filter('  h 3 e  2 a 5  ')
      assert.equal('H3E2A5', v);
    });
  });
  describe('isValid', function() {
    it('should return "false" when the postal code is not valid', function() {
      let v = postalCode.isValid('XXXXXX')
      assert.equal(false, v);
    });
    it('should return "true" when the postal code is "H3E 2A5"', function() {
      let v = postalCode.isValid('H3E 2A5')
      assert.equal(true, v);
    });
  });
  describe('getProvinceShortCode', function() {
    it('should return "NL" when the postal code is "A3E 2A5"', function() {
      let v = postalCode.getProvinceShortCode('A3E 2A5')
      assert.equal("NL", v);
    });
    it('should return "NS" when the postal code is "B3E 2A5"', function() {
      let v = postalCode.getProvinceShortCode('B3E 2A5')
      assert.equal("NS", v);
    });
    it('should return "PE" when the postal code is "C3E 2A5"', function() {
      let v = postalCode.getProvinceShortCode('C3E 2A5')
      assert.equal("PE", v);
    });
    it('should return "NB" when the postal code is "E3E 2A5"', function() {
      let v = postalCode.getProvinceShortCode('E3E 2A5')
      assert.equal("NB", v);
    });
    it('should return "QC" when the postal code is "G3E 2A5"', function() {
      let v = postalCode.getProvinceShortCode('G3E 2A5')
      assert.equal("QC", v);
    });
    it('should return "QC" when the postal code is "H3E 2A5"', function() {
      let v = postalCode.getProvinceShortCode('H3E 2A5')
      assert.equal("QC", v);
    });
    it('should return "QC" when the postal code is "J3E 2A5"', function() {
      let v = postalCode.getProvinceShortCode('J3E 2A5')
      assert.equal("QC", v);
    });
    it('should return "ON" when the postal code is "K3E 2A5"', function() {
      let v = postalCode.getProvinceShortCode('K3E 2A5')
      assert.equal("ON", v);
    });
    it('should return "ON" when the postal code is "L3E 2A5"', function() {
      let v = postalCode.getProvinceShortCode('L3E 2A5')
      assert.equal("ON", v);
    });
    it('should return "ON" when the postal code is "M3E 2A5"', function() {
      let v = postalCode.getProvinceShortCode('M3E 2A5')
      assert.equal("ON", v);
    });
    it('should return "ON" when the postal code is "N3E 2A5"', function() {
      let v = postalCode.getProvinceShortCode('N3E 2A5')
      assert.equal("ON", v);
    });
    it('should return "ON" when the postal code is "P3E 2A5"', function() {
      let v = postalCode.getProvinceShortCode('P3E 2A5')
      assert.equal("ON", v);
    });
    it('should return "MB" when the postal code is "R3E 2A5"', function() {
      let v = postalCode.getProvinceShortCode('R3E 2A5')
      assert.equal("MB", v);
    });
    it('should return "SK" when the postal code is "S3E 2A5"', function() {
      let v = postalCode.getProvinceShortCode('S3E 2A5')
      assert.equal("SK", v);
    });
    it('should return "AB" when the postal code is "T3E 2A5"', function() {
      let v = postalCode.getProvinceShortCode('T3E 2A5')
      assert.equal("AB", v);
    });
    it('should return "BC" when the postal code is "V3E 2A5"', function() {
      let v = postalCode.getProvinceShortCode('V3E 2A5')
      assert.equal("BC", v);
    });
    it('should return "YT" when the postal code is "Y3E 2A5"', function() {
      let v = postalCode.getProvinceShortCode('Y3E 2A5')
      assert.equal("YT", v);
    });
    it('should return "null" when the postal code is "X3E 2A5"', function() {
      let v = postalCode.getProvinceShortCode('X3E 2A5')
      assert.equal(null, v);
    });
    it('should return "null" when the postal code is not passed', function() {
      let v = postalCode.getProvinceShortCode()
      assert.equal(null, v);
    });
  });
});
