import curry2 from "curry2";

const map = curry2((fn, arr) => arr.map(fn));

export const mapTree = curry2((fn, childProp, obj) => {
  return fn(
    Object.assign({}, obj, { [childProp]: recursiveMap(obj[childProp]) })
  );
});

export const recursiveMap = (fn, childProp) => map(mapTree(fn, childProp));
