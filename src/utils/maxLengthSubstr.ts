/**
 * cho chuỗi S và số nguyên K.
 * Tìm độ dài của chuỗi con lớn nhất sao cho chuỗi con đó chứa không quá k ký tự phân biệt.
 */
export function maxLengthSubstr(S: string, K: number) {
  let maxLen = 0;
  let left = 0;
  const charCount: Record<string, number> = {};

  for (let right = 0; right < S.length; right++) {
    const char = S[right];
    charCount[char] = (charCount[char] || 0) + 1;

    // Kiểm tra nếu số ký tự phân biệt trong chuỗi con vượt quá K
    while (Object.keys(charCount).length > K) {
      const leftChar = S[left];
      charCount[leftChar]--;
      if (charCount[leftChar] === 0) {
        delete charCount[leftChar];
      }
      left++;
    }

    maxLen = Math.max(maxLen, right - left + 1);
    console.log(maxLen);
    console.log(Object.values(charCount).reduce((prev, cur) => prev + cur, 0));
  }

  console.log(charCount);

  return maxLen;
}

// Example usage:
const S = 'queue';
const K = 2;
// console.log('maxLengthSubstr : ', maxLengthSubstr(S, K)); // Output: 4
