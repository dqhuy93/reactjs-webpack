/************* */
export function longestCommonPrefix(strs: string[]) {
  if (strs.length === 0) return ''; // If the array is empty, return an empty string

  // Initialize the prefix as the first string in the array
  let prefix = strs[0];

  // Iterate through the remaining strings in the array
  for (let i = 1; i < strs.length; i++) {
    // While the current string doesn't start with the prefix, shorten the prefix
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);

      if (prefix === '') return ''; // If the prefix becomes empty, return an empty string
    }
  }

  return prefix;
}

const data = ['aflower', 'bflow', 'cflight'];
longestCommonPrefix(data);
