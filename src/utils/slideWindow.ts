/**
 * Cho mảng số nguyên nums và 1 số k,
 * tìm độ dài mảng con dài nhất có tổng nhỏ hơn bằng bằng k
 */
export function slideWindow(arr: number[], k: number) {
  let left = 0;
  let total = 0;
  let result = 0;
  let arrayResult: number[] = [];
  for (let right = 0; right < arr.length; right++) {
    // if you want to get the array
    const tempResult = arr.slice(left, right);
    if (total <= k && arrayResult.length < tempResult.length) {
      arrayResult = tempResult;
    }

    // must
    total += arr[right];
    while (total > k) {
      total -= arr[left];
      left++;
    }

    // total item in array match condition
    result = Math.max(result, right - left + 1);
  }
  return arrayResult;
  // return result;
}

const data1 = [1, 1, 1, 1, 1, 4, 9, 2, 1, 2, 5, 6, 8];
const data2 = 10;

const result = slideWindow(data1, data2);
// console.log('slideWindow');
// console.log(result);
