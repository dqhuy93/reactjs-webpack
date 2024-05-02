/**
 * Cho mảng số nguyên "nums", có bao nhiêu cách chia mảng thành 2 phần sao cho
 * tổng phần bên trái >= tổng phần bên phải, bên phải ít nhất 1 phần tử.
 */
export function sumArray(arr: number[]) {
  const totalSum = arr.reduce((acc, curr) => acc + curr, 0);
  let leftSum = 0;
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    // Update left sum
    leftSum += arr[i];

    // Compare left sum with right sum
    if (leftSum >= totalSum - leftSum) {
      result++;
    }
  }

  return result;
}

const data1 = [7, 5, 2, -4];

const result = sumArray(data1);
console.log('sumArray');
console.log(result);

// Solution 2

// export function sumArray(arr: number[]) {
//   // Create an array to store cumulative sums
//   const sumArr = [arr[0]];

//   // Calculate cumulative sums
//   arr.forEach((item, index) => {
//     if (index > 0) {
//       sumArr.push(item + sumArr[sumArr.length - 1]);
//     }
//   });

//   // Initialize variables
//   let result = 0;
//   let left;
//   let right;

//   // Iterate over the array to check conditions
//   for (let i = 0; i < arr.length; i++) {
//     left = sumArr[i];
//     right = sumArr[sumArr.length - 1] - left;

//     // Increment result if left sum is greater than or equal to right sum
//     if (left >= right) {
//       result++;
//     }
//   }

//   // Return the result
//   return result;
// }
