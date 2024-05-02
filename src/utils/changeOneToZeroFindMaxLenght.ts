/**
 * một hàm JavaScript được thiết kế để tìm chiều dài của chuỗi con dài nhất
 * trong một chuỗi đầu vào mà có tối đa một ký tự '0'
 */
// slideWindow
export function findLength(text: string) {
  let left = 0;
  let curr = 0;
  let result = 0;
  // let arrayResult: number[] = [];
  for (let right = 0; right < text.length; right++) {
    const temp = text.split('');

    // temp.splice(left + 1, 0, ']');
    // temp.splice(left, 0, '[right: ');

    temp.splice(right + 1, 0, ']');
    temp.splice(right, 0, '[');
    console.log('text: ', temp.join(''));

    if (text[right] == '0') {
      curr++;
      console.log('Thỏa text[right] == 0 ---> curr++ | curr = ', curr);
    }
    while (curr > 1) {
      console.log('curr > 1 ---> left++');

      if (text[left] == '0') {
        console.log('Lúc này left = ', left);
        curr--;
        console.log(`LEFT: text[${left}] == 0  ---> curr-- | curr = `, curr);
      }

      console.log('left++ | left = ', left);
      left++;
    }

    // total item in array match condition
    console.log('right: ', right);
    console.log('left: ', left);
    result = Math.max(result, right - left + 1);
    console.log('right - left + 1: ', right - left + 1);
    console.log('result: ', result);

    console.log('********************************');
    console.log('********************************');
    console.log('********************************');
  }
  // return arrayResult;
  return result;
}

const data1 = '1010011001101';
// const result = findLength(data1);
// console.log('findLength');
// console.log(result);

export function findLengthVersion2(text: string) {
  const newArr = text.split('');
  let left = 0;
  let result: string[] = [];
  let temp = [];
  for (let right = 0; right < text.length; right++) {
    temp = newArr.slice(left, right + 1);

    const count0 = temp.filter((item) => item === '0');

    if (count0.length > 1) {
      left++;
    } else {
      result = result.length > temp.length ? result : temp;
    }
  }
  return result;
}

const result2 = findLengthVersion2(data1);
console.log('findLengthVersion2');
console.log(result2);
