let input1 = { a: 1, b: 2, c: 3 }
let input2 = { b: 4, c: 5, d: 6 }

commonKey(input1,input2)

function commonKey(obj1,obj2)
{   
    let output  = [];
    let keys1   = Object.keys(obj1);
    let keys2   = Object.keys(obj2);

    for(let i=0;i<keys1.length;i++)
    {
      for(let j=0;j<keys2.length;j++)
      {
          if(keys1[i] === keys2[j])
          {
            output.push(keys2[j])
          }
      }
    }

    console.log(output);
}