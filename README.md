# @frosted/array-reverse
Ponyfill for Array.prototype.reverse

## Installation
```bash
npm install @frosted/array-reverse
```

## Usage
```js
const reverse = require("@frosted/array-reverse")

console.log(reverse([1, 2, 3])) // [3, 2, 1]

console.log(reverse("not array")) // Error: Expects an array
```

Shimming Array.prototype.reverse:
```js
require("@frosted/array-reverse/shim")

console.log([1, 2, 3].reverse()) // [3, 2, 1]
```

## Tests
Simply clone the repo and run npm test