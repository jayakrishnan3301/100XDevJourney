function objInAscOrder(obj) {
  let arrOutput = [];
  let objLength = Object.keys(obj);

  for (let i = 0; i < objLength.length; i++) {
    arrOutput.push([objLength[i], obj[objLength[i]]]);
  }

  for (let i = 0; i < arrOutput.length; i++) {
    for (let j = i + 1; j < arrOutput.length; j++) {
      if (arrOutput[i][1] > arrOutput[j][1]) {
        let temp = arrOutput[i];
        arrOutput[i] = arrOutput[j];
        arrOutput[j] = temp;
      }
    }
  }
  console.log(arrOutput);
}


let input = { a: 3, b: 1, c: 2 }

objInAscOrder(input);

