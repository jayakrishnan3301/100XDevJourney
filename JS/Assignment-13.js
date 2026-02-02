let input = { name: "Alice", age: 25 }
queryString(input);

function queryString(obj){
  let queryString ="";
  let objectLength = Object.keys(obj);

  for(let i=0;i<objectLength.length;i++)
  {
    if (i > 0) queryString += "&";
     queryString = queryString+objectLength[i]+'='+obj[objectLength[i]];
  }
  console.log(queryString);
}