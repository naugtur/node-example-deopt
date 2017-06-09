# (de)optimization) exercise

## Observe a deoptimization

run `node --trace-opt --trace-deopt 1deopt.js` and see a clean example of single deoptimization.

In real life it's much less readable ;)

## Testing if a function can be optimized

`testing.js` has some examples of functions that can prevent optimization.
Run `node testing.js` and see how they do in different versions of node.

use [n](https://www.npmjs.com/package/n) `npm install -g n` or get [nvm](https://github.com/creationix/nvm/blob/master/README.md) to switch node versions.

## Try optimizing a function

`fixable.js` is a module with a trivial parser, but it has a few issues preventing optimization.

Try fixing the optimization issues without breaking any functionality.
Run `npm test` to verify if you succeeded.

`test/spoilers/fixed.js` contains a solution
