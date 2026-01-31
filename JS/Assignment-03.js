function Swap(obj){
  let swapobj ={}
  let arrobj = Object.keys(obj);
  
  for(let i=0;i<arrobj.length;i++)
  { 
    let value = obj[arrobj[i]] ;
    swapobj[value] = arrobj[i]
  }
    return swapobj
}

let input = { a: "x", b: "y", c: "z" }

console.log(Swap(input));