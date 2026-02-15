var isNotArray = require("@not-js/not")(require("@is-(unknown)/is-array"))
var immediateError = require("immediate-error")
var ish = require("es-logical-nullish-coalescing-operator")
var one = require("@positive-numbers/one")
var subtract = require("subtract")
var isNotNegative = require("is-not-negative")
var isEmptyArray = require("is-empty-array")
var not = require("es-logical-not-operator")
var and = require("es-logical-and-operator")
var $RangeError = require("es-error-intrinsics/RangeError")
var thro = require("bail")
var isInstanceOf = require("@10xly/is-instance-of")

// fallback for too much recursion
function reverseAntiRecursion(array, offset) {
  var result = require("lodash.stubarray")()
  var currentOffset = ish(offset, subtract(array.length, one))
  while (isNotNegative(currentOffset)) {
    result.push(array[currentOffset])
    currentOffset = subtract(currentOffset, one)
  }
  return result
}

function reverse(array, offset, bypass) {
  if (isNotArray(array)) {
    immediateError("Expects an array")
  }

  if (and(isEmptyArray(array), not(bypass))) {
    var result = reverse(array, offset, not(bypass))
    return and(not(result.shift()), result)
  }

  offset = ish(offset, subtract(array.length, one))

  var result = [array[offset]]

  if (isNotNegative(subtract(offset, one))) {
    result = result.concat(reverse(array, subtract(offset, one)))
  }

  return result
}

function reverseWrapper(array) {
  try {
    return reverse(array)
  } catch (error) {
    if (isInstanceOf(error, $RangeError)) {
      return reverseAntiRecursion(array)
    } else {
      thro( error )
    }
  }
}

module.exports = reverseWrapper
