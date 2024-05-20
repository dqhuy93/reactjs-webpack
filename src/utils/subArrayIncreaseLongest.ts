// Hàm trên được thiết kế để tìm chuỗi con tăng dài nhất trong một mảng số.

export function subArrayIncreaseLongest(arr: number[]) {
  const result: Array<{ index: number; count: number }> = [];
  for (let i = 0; i < arr.length; i++) {
    let cong = 0;
    for (let k = i; k < arr.length; k++) {
      if (arr[k] >= arr[k + 1] || arr[k + 1] === undefined) {
        break;
      }
      cong += 1;
    }
    result.push({
      index: i,
      count: cong
    });
  }

  const test = result.reduce(function (prev: any, current: any) {
    console.log(prev, current);

    return prev.count > current.count ? prev : current;
  }, {});

  console.log(arr.slice(test.index, test.index + test.count + 1));
}

const arr = [1, 4, 7, 2, 3, 5, 6, 8, 9];
subArrayIncreaseLongest(arr);
