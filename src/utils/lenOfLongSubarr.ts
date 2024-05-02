/* eslint-disable no-prototype-builtins */
/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Given an array arr[] of size n containing integers.
 * The problem is to find the length of the longest sub-array having sum equal to the given value k.
 */
export function lenOfLongSubarr(A: number[], N: number, K: number) {
  const sum_index_map: any = {};
  let maxLen = 0;
  let prefix_sum = 0;

  for (let i = 0; i < N; i++) {
    prefix_sum += A[i];

    if (prefix_sum === K) {
      maxLen = i + 1;
    } else if (sum_index_map.hasOwnProperty(prefix_sum - K)) {
      maxLen = Math.max(maxLen, i - sum_index_map[prefix_sum - K]);
    }

    if (!sum_index_map.hasOwnProperty(prefix_sum)) {
      sum_index_map[prefix_sum] = i;
    }
  }

  return maxLen;
}

const arr = [10, 5, 2, 7, 1, 9];
const n = arr.length;
const k = 15;
// console.log('Length = ' + lenOfLongSubarr(arr, n, k));

/**
 * OR
 */

// function to find the length of longest
// subarray having sum k
function lenOfLongSubarr2(arr: number[], N: number, K: number) {
  // Variable to store the answer
  let maxLength = 0;

  for (let i = 0; i < N; i++) {
    // Variable to store sum of subarrays
    let Sum = 0;

    for (let j = i; j < N; j++) {
      // Storing sum of subarrays
      Sum += arr[j];

      // if Sum equals K
      if (Sum == K) {
        // Update maxLength
        maxLength = Math.max(maxLength, j - i + 1);
      }
    }
  }

  // Return the maximum length
  return maxLength;
}

// Driver Code
// Given input
const arr2 = [10, 5, 2, 7, 1, 9];
const n2 = arr.length;
const k2 = 15;

// Function Call
// console.log('Length = ', lenOfLongSubarr2(arr2, n2, k2));
