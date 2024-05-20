// Given a string s, find the length of the longest substring without repeating characters.

export function removeElement(nums: number[], val: number) {
  let k = 0; // Pointer for elements not equal to val

  // Iterate through the array
  for (let i = 0; i < nums.length; i++) {
    // If the current element is not equal to val
    if (nums[i] !== val) {
      // Move the element to the position indicated by k
      nums[k] = nums[i];
      k++; // Move the pointer for elements not equal to val
    }
  }

  const temp = nums.slice(0, k);
  return temp.length; // k represents the number of elements not equal to val
}

console.log(removeElement([3, 2, 2, 3], 3));
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
