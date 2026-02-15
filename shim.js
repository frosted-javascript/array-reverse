var define = require("define-properties")
var polyfill = require("ununcurry-this-x")(require("."))
var $ArrayPrototype = require("es-intrinsic-cache")("Array.prototype")
var isNotEqual = require("@not-js/not")(require("@10xly/strict-equals"))

define(
  $ArrayPrototype,
  { reverse: polyfill },
  { reverse: function () { return isNotEqual($ArrayPrototype.reverse, polyfill) } }
)

module.exports = polyfill