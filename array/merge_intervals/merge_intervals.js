function mergeIntervals(arr) {
  arr.sort((a, b) => a.start - b.start);
  let newArr = [arr[0]];
  for (let i of arr.slice(1)) {
    let last = newArr.slice(-1)[0];
    if (i.start > last.end) {
      newArr.push(i);
    } else {
      newArr[newArr.length - 1] = {
        start: last.start,
        end: Math.max(i.end, last.end)
      };
    }
  }
  return newArr;
}

const given = [[1, 3], [2, 6], [8, 10], [15, 18]];
const given_obj = given.map((interv, i) => ({
  start: interv[0],
  end: interv[1]
}));
const expected = [[1, 6], [8, 10], [15, 18]];
console.log("input: ", given);
console.log("result: ", mergeIntervals(given_obj).map(i => [i.start, i.end]));
console.log("output should be: ", expected);
