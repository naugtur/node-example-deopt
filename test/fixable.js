const optimiser = require('check-v8-optimised');
const assert = require('assert');

const fixable = require('../fixable')
// const fixable = require('./spoilers/fixed')

console.log(fixable("-=+=-", {a:1}));


assert.equal(fixable("-=+=-", {a:1}).args[1].a, 1, '1 return reference to arguments')
assert.equal(fixable("-=+=-", {a:1}).uniqueCharactersFound, 3, '2 count all characters')
assert.equal(fixable("-=+=-", {a:1}).counts['='], 2, '3 count specific characters')
assert.equal(fixable({ text: "-=+=-", a:1 }).args[0].a, 1, '4 return reference to arguments')
assert.equal(fixable({ text: "-=+=-", a:1 }).uniqueCharactersFound, 3, '5 count all characters')
assert.equal(fixable({ text: "-=+=-", a:1 }).counts['='], 2, '6 count specific characters')
assert.equal(optimiser(fixable, ["-=+=-", {}]), 'Function is optimized', '7 must be optimizable')
console.log('Test finished.')
