// palindrome string
export function palindromeString(textData: string) {
  let left = 0;
  let right = textData.length - 1;

  while (left < right) {
    if (textData[left] !== textData[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

const textPalindrome = 'tekhket';
const result = palindromeString(textPalindrome);
// console.log(result);
