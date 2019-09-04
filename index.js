import curryN from 'curry-n';

/**
 * @name mapTree
 * @param {function} fn - Function that produces a new tree object
 * @param {string} childkey - Reference key to the children nodes in the object
 * @param {Object} node - The node to be traversed to
 * @returns {Object} A new tree being the result of the callback function
 */
export const mapTree = curryN(3, (fn, childKey, node) => {
  return {
    ...fn(node),
    [childKey]: Array.isArray(node[childKey])
      ? recursiveMap(fn, childKey, node[childKey])
      : node[childKey],
  };
});

/**
 * @name recursiveMap
 * @param {function} fn - Function that produces an element for the new Array of trees
 * @param {string} childkey - Reference key to the children nodes in the object
 * @param {Object[]} arr - The Array of trees to be mapped
 * @returns {Object[]} A new array of trees with each tree being the result of the callback function
 */
export const recursiveMap = curryN(3, (fn, childKey, arr) =>
  arr.map(mapTree(fn, childKey))
);
