var define = require("define-properties")
var polyfill = require("ununcurry-this-x")(require("."))
var $ArrayPrototype = require("es-intrinsic-cache")("Array.prototype")
var isNotEqual = require("@not-js/not")(require("@10xly/strict-equals"))

define(
  $ArrayPrototype,
  { toReversed: polyfill },
  { toReversed: function () { return isNotEqual($ArrayPrototype.toReversed, polyfill) } }
)

module.exports = polyfill