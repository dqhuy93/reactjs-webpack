/**
 * gộp 2 mảng đã sắp sếp thành 1 mảng cũng được sắp sếp.
 */
export function mergeTwoArrayAsc(arr1: number[], arr2: number[]) {
  const result: number[] = [];
  let left_1 = 0;
  let left_2 = 0;
  while (left_1 < arr1.length && left_2 < arr2.length) {
    if (arr1[left_1] < arr2[left_2]) {
      result.push(arr1[left_1]);
      left_1++;
    } else {
      result.push(arr2[left_2]);
      left_2++;
    }
  }

  while (left_1 < arr1.length) {
    result.push(arr1[left_1]);
    left_1++;
  }
  while (left_2 < arr2.length) {
    result.push(arr2[left_2]);
    left_2++;
  }
  return result;
}

const data1 = [1, 2, 6, 9, 13, 15];
const data2 = [3, 5, 8, 13, 19, 22, 26];

const result = mergeTwoArrayAsc(data1, data2);
// console.log('mergeTwoArrayAsc');
// console.log(result);
