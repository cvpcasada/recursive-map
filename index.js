import curryN from "curry-n";

export const mapTree = curryN(3, (fn, childProp, obj) => {
  return fn(
    obj[childProp]
      ? Object.assign({}, obj, {
          [childProp]: recursiveMap(fn, childProp, obj[childProp])
        })
      : obj
  );
});

export const recursiveMap = curryN(3, (fn, childProp, arr) =>
  arr.map(obj => mapTree(fn, childProp, obj))
);
