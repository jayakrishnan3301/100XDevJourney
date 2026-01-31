function flatten(obj){
  let arr =[];

  let keys = Object.keys(obj);

  for(let i=0;i<keys.length;i++)
  {
    for(let j=0;j<=keys.length-1;j++)
    {
      let key  = keys[i]
      let value = obj[key][j];
      arr.push(value);
    }
  }
return arr;

}

let input = { fruits: ["apple", "banana"], veggies: ["carrot", "pea"] }

console.log(flatten(input));

