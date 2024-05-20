/* eslint-disable no-prototype-builtins */
/**
 * Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.
Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:
Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
Return k.
 */
export function removeDuplicates(nums: number[]) {
  const result = [];
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (result.indexOf(nums[i]) === -1) {
      result.push(nums[i]);
      nums[k] = nums[i];
      k++;
    }
  }
  return k;
}

// console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

/**
 * ==============================================================================================================
 */

/* 80. Remove Duplicates from Sorted Array II
// Medium
// Topics
// Companies
// Given an integer array nums sorted in non-decreasing order, remove some duplicates in-place such that each unique element appears at most twice. The relative order of the elements should be kept the same.

// Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

// Return k after placing the final result in the first k slots of nums.

// Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.
*/
const removeDuplicates2 = function (nums: number[]) {
  // const result = [];
  const temp: any = {};
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (!temp.hasOwnProperty(nums[i]) || temp[nums[i]] < 2) {
      // result.push(nums[i]);
      temp[nums[i]] = (temp[nums[i]] || 0) + 1;
      nums[k] = nums[i];
      k++;
    }
  }

  return k;

  //or
  /*
  let k = 2; 
  for(let i=2; i<nums.length; i++) {
    if(nums[i] !== nums[k-2]) {
      nums[k] = nums[i];
      k++
    }
  }
  
  return k;
  */
};

console.log(removeDuplicates2([0, 0, 1, 1, 1, 1, 2, 3, 3]));
