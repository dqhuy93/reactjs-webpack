export function reduce(this: any, callback: (accumulator: any, item: any) => void, initialVal: any) {
  let accumulator = initialVal === undefined ? this[0] : initialVal;
  const start = initialVal === undefined ? 1 : 0;

  for (let i = start; i < this.length; i++) {
    accumulator = callback(accumulator, this[i]);
  }
  return accumulator;
}

if (!Array.prototype.myReduce) {
  Array.prototype.myReduce = function (callback: any, initialValue: any) {
    let currentValue = initialValue;
    for (let index = 0; index < this.length; index++) {
      currentValue = callback(currentValue, this[index], index, this);
    }

    return currentValue;
  };
}
const a = [1, 2, 3, 4].myReduce((pre: any, current: any) => {
  return pre + current;
}, 0);

function useMemo(callback: () => any, dependencies: any) {
  const previousDependencies = useRef([]);
  const previousValue = useRef(null);

  if (!arraysEqual(previousDependencies.current, dependencies)) {
    previousDependencies.current = dependencies;
    previousValue.current = callback();
  }

  return previousValue.current;
}

function arraysEqual(arr1: string | any[], arr2: string | any[]) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}
