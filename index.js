(function() {
  module.exports = {
    apkreader: require('./lib/apkreader'),
    BinaryXmlParser: require('./lib/apkreader/parser/binaryxml'),
    ManifestParser: require('./lib/apkreader/parser/manifest')
  }
}).call(this);
