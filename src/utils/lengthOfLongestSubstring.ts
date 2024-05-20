// Given a string s, find the length of the longest substring without repeating characters.

export function lengthOfLongestSubstring(s: string) {
  let currentText = '';
  let result = 0;
  let indexChar;
  for (let right = 0; right < s.length; right++) {
    indexChar = currentText.indexOf(s[right]);
    if (indexChar > -1) {
      // cắt chuỗi từ vị trí trùng lặp + 1.
      currentText = currentText.slice(indexChar + 1);
    }
    currentText = currentText + s[right];

    result = Math.max(result, currentText.length);
  }
  return result;
}
const data = 'abcabcbb';
const data1 = 'bbbbb';
const data2 = 'pwwkew';
console.log('abcabcbb: ', lengthOfLongestSubstring(data));
console.log('bbbbb: ', lengthOfLongestSubstring(data1));
console.log('pwwkew: ', lengthOfLongestSubstring(data2));
