const assert = require("assert")
const reverse = require(".")

describe("reverse()", () => {
  it("should reverse a standard array of numbers", () => {
    const input = [1, 2, 3]
    const expected = [3, 2, 1]
    assert.deepStrictEqual(reverse(input), expected)
  })

  it("should work with an array of strings", () => {
    const input = ["a", "b", "c", "d"]
    const expected = ["d", "c", "b", "a"]
    assert.deepStrictEqual(reverse(input), expected)
  })

  it("should return a single-element array unchanged", () => {
    const input = [100]
    assert.deepStrictEqual(reverse(input), input)
  })

  it("should throw an error when the input is not an array", () => {
    assert.throws(() => {
      reverse("not an array")
    }, /Expects an array/)
  })

  it("should return empty array unchanged", () => {
    assert.deepStrictEqual(reverse([]), [])
  })

  it("should handle a 15k length array", () => {
    const size = 15000
    const input = Array.from({ length: size }, (_, i) => i)

    const expected = [...input].reverse()

    const result = reverse(input)

    assert.strictEqual(result.length, size)
    assert.deepStrictEqual(result, expected)
  })
})
