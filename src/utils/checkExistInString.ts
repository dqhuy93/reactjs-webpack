/**
 * cho 2 chuỗi a và b, kiểm tra b có phải là con của a không
 */
export function checkExistInString(value: string, subString: string) {
  let i = 0;
  let j = 0;

  while (i < value.length) {
    if (value[i] === subString[j]) {
      j++;
    }
    i++;
    if (j === subString.length) {
      return true;
    }
  }
  return false;
}

const data1 = '123456789';
const data2 = '89';

const result = checkExistInString(data1, data2);
// console.log('checkExistInString');
// console.log(result);
