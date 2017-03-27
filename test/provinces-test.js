let provinces = require('../lib/provinces');
var assert = require('assert');

describe('provinces', function() {
  describe('getShortCode', function() {
    it('should return AB when the value is CAAB', function() {
      let v = provinces.getShortCode('CAAB')
      assert.equal('AB', v);
    });
    it('should return AB when the value has many spaces "  CA-AB   "', function() {
      let v = provinces.getShortCode('  CA-AB   ')
      assert.equal('AB', v);
    });
    it('should return AB when the value is CA-----AB', function() {
      let v = provinces.getShortCode('CA-----AB')
      assert.equal('AB', v);
    });
    it('should return BC when the value is British  -  Columbia', function() {
      let v = provinces.getShortCode('British  -  Columbia')
      assert.equal('BC', v);
    });
    it('should return AB when the value is CA-AB', function() {
      let v = provinces.getShortCode('CA-AB')
      assert.equal('AB', v);
    });
    it('should return AB when the value is Alberta', function() {
      let v = provinces.getShortCode('Alberta')
      assert.equal('AB', v);
    });
    it('should return BC when the value is CA-BC', function() {
      let v = provinces.getShortCode('CA-BC')
      assert.equal('BC', v);
    });
    it('should return BC when the value is British Columbia', function() {
      let v = provinces.getShortCode('British Columbia')
      assert.equal('BC', v);
    });
    it('should return BC when the value is Colombie-Britannique', function() {
      let v = provinces.getShortCode('Colombie-Britannique')
      assert.equal('BC', v);
    });
    it('should return BC when the value is Colombie Britannique', function() {
      let v = provinces.getShortCode('Colombie Britannique')
      assert.equal('BC', v);
    });
    it('should return MB when the value is CA-MB', function() {
      let v = provinces.getShortCode('CA-MB')
      assert.equal('MB', v);
    });
    it('should return MB when the value is Manitoba', function() {
      let v = provinces.getShortCode('Manitoba')
      assert.equal('MB', v);
    });
    it('should return NB when the value is CA-NB', function() {
      let v = provinces.getShortCode('CA-NB')
      assert.equal('NB', v);
    });
    it('should return NB when the value is New Brunswick', function() {
      let v = provinces.getShortCode('New Brunswick')
      assert.equal('NB', v);
    });
    it('should return NB when the value is Nouveau-Brunswick', function() {
      let v = provinces.getShortCode('Nouveau-Brunswick')
      assert.equal('NB', v);
    });
    it('should return NL when the value is CA-NL', function() {
      let v = provinces.getShortCode('CA-NL')
      assert.equal('NL', v);
    });
    it('should return NL when the value is Newfoundland and Labrador', function() {
      let v = provinces.getShortCode('Newfoundland and Labrador')
      assert.equal('NL', v);
    });
    it('should return NL when the value is Newfoundland & Labrador', function() {
      let v = provinces.getShortCode('Newfoundland & Labrador')
      assert.equal('NL', v);
    });
    it('should return NL when the value is Terre-Neuve-et-Labrador', function() {
      let v = provinces.getShortCode('Terre-Neuve-et-Labrador')
      assert.equal('NL', v);
    });
    it('should return NL when the value is Terre-Neuve-&-Labrador', function() {
      let v = provinces.getShortCode('Terre-Neuve-&-Labrador')
      assert.equal('NL', v);
    });
    it('should return NS when the value is CA-NS', function() {
      let v = provinces.getShortCode('CA-NS')
      assert.equal('NS', v);
    });
    it('should return NS when the value is Nova Scotia', function() {
      let v = provinces.getShortCode('Nova Scotia')
      assert.equal('NS', v);
    });
    it('should return NS when the value is Nouvelle-Écosse', function() {
      let v = provinces.getShortCode('Nouvelle-Écosse')
      assert.equal('NS', v);
    });
    it('should return ON when the value is CA-ON', function() {
      let v = provinces.getShortCode('CA-ON')
      assert.equal('ON', v);
    });
    it('should return ON when the value is Ontario', function() {
      let v = provinces.getShortCode('Ontario')
      assert.equal('ON', v);
    });
    it('should return PE when the value is CA-PE', function() {
      let v = provinces.getShortCode('CA-PE')
      assert.equal('PE', v);
    });
    it('should return PE when the value is Prince Edward Island', function() {
      let v = provinces.getShortCode('Prince Edward Island')
      assert.equal('PE', v);
    });
    it('should return PE when the value is Île-du-Prince-Édouard', function() {
      let v = provinces.getShortCode('Île-du-Prince-Édouard')
      assert.equal('PE', v);
    });
    it('should return PE when the value is Ile-du-Prince-Edouard', function() {
      let v = provinces.getShortCode('Ile-du-Prince-Edouard')
      assert.equal('PE', v);
    });
    it('should return PE when the value is île-du-Prince-Edouard', function() {
      let v = provinces.getShortCode('île-du-Prince-Edouard')
      assert.equal('PE', v);
    });
    it('should return QC when the value is CA-QC', function() {
      let v = provinces.getShortCode('CA-QC')
      assert.equal('QC', v);
    });
    it('should return QC when the value is Québec', function() {
      let v = provinces.getShortCode('Québec')
      assert.equal('QC', v);
    });
    it('should return QC when the value is Quebec', function() {
      let v = provinces.getShortCode('Quebec')
      assert.equal('QC', v);
    });
    it('should return QC when the value is PQ', function() {
      let v = provinces.getShortCode('PQ')
      assert.equal('QC', v);
    });
    it('should return SK when the value is CA-SK', function() {
      let v = provinces.getShortCode('CA-SK')
      assert.equal('SK', v);
    });
    it('should return SK when the value is Saskatchewan', function() {
      let v = provinces.getShortCode('Saskatchewan')
      assert.equal('SK', v);
    });
    it('should return NT when the value is CA-NT', function() {
      let v = provinces.getShortCode('CA-NT')
      assert.equal('NT', v);
    });
    it('should return NT when the value is Territoires du Nord-Ouest', function() {
      let v = provinces.getShortCode('Territoires du Nord-Ouest')
      assert.equal('NT', v);
    });
    it('should return NT when the value is Northwest Territories', function() {
      let v = provinces.getShortCode('Northwest Territories')
      assert.equal('NT', v);
    });
    it('should return NU when the value is CA-NU', function() {
      let v = provinces.getShortCode('CA-NU')
      assert.equal('NU', v);
    });
    it('should return NU when the value is Nunavut', function() {
      let v = provinces.getShortCode('Nunavut')
      assert.equal('NU', v);
    });
    it('should return YT when the value is CA-YT', function() {
      let v = provinces.getShortCode('CA-YT')
      assert.equal('YT', v);
    });
    it('should return YT when the value is Yukon', function() {
      let v = provinces.getShortCode('Yukon')
      assert.equal('YT', v);
    });
  });
  describe('getISO3166Code', function() {
    it('should return CA-AB when the value is Alberta', function() {
      let v = provinces.getISO3166Code('Alberta')
      assert.equal('CA-AB', v);
    });
  });
});
