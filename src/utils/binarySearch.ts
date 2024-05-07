export function binarySearch(arr: string | any[], x: number) {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    // Find mid element
    let midValue = Math.floor((low + high) / 2);
    // Check if equal to target
    if (arr[midValue] === x) {
      return midValue;
      // Reduce array search space by half
    } else if (arr[midValue] < x) {
      low = midValue + 1;
    } else {
      high = midValue - 1;
    }
  }
  // Item not found
  return -1;
}

let arr = [1, 3, 5, 7, 9, 11, 14, 18, 22];
console.info(console.info('Item was found at index: ' + binarySearch(arr, 22)));
