const testArr = [2, 2, 2, 3, 4, 5, 67, 8, 9, 7, 7, 7, 3];

function getUniqueNumbers(arr) {
  const uniqueArr = [];
  if (arr.length == 0) return uniqueArr;
  for (let i = 0; i < arr.length; i++) {
    if (uniqueArr.includes(arr[i])) {
      //do nothing
    } else {
      uniqueArr.push(arr[i]);
    }
  }
  return uniqueArr;
}
console.log(getUniqueNumbers(testArr));
