function filter(obj)
{
  let output ={};

  let keys = Object.keys(obj);

  for(let i=0;i<keys.length;i++)
  {
      if(obj[keys[i]]>50)
        output[keys[i]] = obj[keys[i]];
  }
  return output
}

let input = { a: 20, b: 60, c: 40, d: 90 }

console.log(filter(input))