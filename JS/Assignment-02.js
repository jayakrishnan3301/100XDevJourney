function count(arr) {
  let result = {};

  for (let i = 0; i < arr.length; i++) {
    if (result.hasOwnProperty(arr[i])) {
      result[arr[i]] += 1
    }
    else {
      result[arr[i]] = 1;
    }
  }
  return result;
}

let arr = ["apple", "banana", "apple", "orange", "banana", "apple"]

console.log(count(arr));

