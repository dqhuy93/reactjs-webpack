// cho 1 mảng số nguyên đã SẮP XẾP TĂNG DẦN
// kiểm tra có 1 cặp số tổng bằng "N" hay không, return true là có, false là không
export function totalPairEqualToX(arr: number[], n: number) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    const total = arr[left] + arr[right];
    if (total === n) {
      return true;
    }
    // Because the arr was sorted by ascending, so need to increase "left" instead of "right"
    else if (total < n) {
      left++;
    } else {
      // else
      right--;
    }
  }

  return false;
}

const data = [1, 4, 6, 10, 15, 18, 29];
const result = totalPairEqualToX(data, 39);
// console.log('totalPairEqualToX');
// console.log(result);
