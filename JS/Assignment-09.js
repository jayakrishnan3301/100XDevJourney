function UniqueValue(obj){
  let outputArr =[];
  let objLength = Object.keys(obj);

  for(let i=0;i<objLength.length;i++){
     for(let j=0;j<obj[objLength[i]].length;j++){
       if(!outputArr.includes(obj[objLength[i]][j])){
        outputArr.push(obj[objLength[i]][j])
       }
     }
  }
  console.log(outputArr)
}

let input = { x: [1,2,3], y: [2,3,4], z: [4,5] }

UniqueValue(input)

