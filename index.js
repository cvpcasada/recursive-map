import curryN from "curry-n";

export const mapTree = curryN(2, (fn, childProp, obj) => {
  return fn(
    Object.assign({}, obj, { [childProp]: recursiveMap(obj[childProp]) })
  );
});

export const recursiveMap = curryN(3, (fn, childProp, arr) => arr.map(mapTree(fn, childProp)));
