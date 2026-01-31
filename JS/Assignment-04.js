function LargetsKey(obj)
{   let lvalue = 0;
    let key ='';
    let keys = Object.keys(obj)

    for(let i=0;i<keys.length;i++)
    { 
      if(lvalue<=obj[keys[i]])
      {
        lvalue = obj[keys[i]];  
        key = keys[i]
      }
    }

    return key
}

let input = { a: 10, b: 50, c: 20 }

console.log(LargetsKey(input))