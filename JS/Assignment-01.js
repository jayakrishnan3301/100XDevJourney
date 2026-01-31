function sumValues(obj){

  let newObject ={food:0,travel:0,bills:0};
  
  const arrFromObj = Object.keys(obj);

  for(let i=0;i<arrFromObj.length;i++)
  {
    newObject.food   = newObject.food    +   obj.food   [i];
  }

  for(let i=0;i<arrFromObj.length-1;i++)
  { newObject.travel = newObject.travel  +   obj.travel [i];
    newObject.bills  = newObject.bills   +   obj.bills  [i];
  }

   return newObject
}

let arr = { food:  [10, 20, 30], travel: [5, 15], bills: [40, 60] }

console.log(sumValues(arr))
