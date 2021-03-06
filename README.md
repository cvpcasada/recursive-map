# recursive-map

## Install

This project uses [node](http://nodejs.org) and [npm](https://npmjs.com). Go check them out if you don't have them locally installed.

```sh
npm install --save recursive-map
```

Then with a module bundler like [webpack](https://webpack.js.org) or [rollup](http://rollupjs.org), use as you would anything else:

```js
import { recursiveMap, mapTree } from 'recursive-map';
```

## API

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

#### Table of Contents

-   [mapTree](#maptree)
    -   [Parameters](#parameters)
-   [recursiveMap](#recursivemap)
    -   [Parameters](#parameters-1)

### mapTree

#### Parameters

-   `fn` **[function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function)** Function that produces a new tree object
-   `childkey` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Reference key to the children nodes in the object
-   `node` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** The node to be traversed to

Returns **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** A new tree being the result of the callback function

### recursiveMap

#### Parameters

-   `fn` **[function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function)** Function that produces an element for the new Array of trees
-   `childkey` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Reference key to the children nodes in the object
-   `arr` **[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)>** The Array of trees to be mapped

Returns **[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)>** A new array of trees with each tree being the result of the callback function
