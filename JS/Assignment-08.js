function highestAvgMark(obj) {
  let ouput = {};
  let arr = Object.keys(obj);
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = 0; j < obj[arr[i]].length; j++) {
      sum = sum + obj[arr[i]][j];
    }
    ouput[arr[i]] = sum / obj[arr[i]].length;
  }

  let arr2 = Object.keys(ouput);
  let value = "";
  let hAvg = 0;

  for (let i = 0; i < arr2.length; i++) {
    if (hAvg < ouput[arr2[i]]) {
      hAvg = ouput[arr2[i]];
      value = arr2[i]
    }
  }
  console.log(value)
}


let input = { B: [80, 90], A: [70, 75, 85] };

highestAvgMark(input)

