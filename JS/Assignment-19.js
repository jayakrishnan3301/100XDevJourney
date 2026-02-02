let input = { a: 1, b: 'hello', c: 3 }

checkIsNumber(input);

function checkIsNumber(obj){
  let objLen = Object.keys(obj);
  let result = true;
  for(let i=0;i<objLen.length;i++)
  {
      if(isNaN(obj[objLen[i]]))
      {
        result = false;
        break;
      }
  }
  console.log(result);
}