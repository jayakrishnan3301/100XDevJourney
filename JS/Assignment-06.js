function groupPeople(arr){
  let output = {};

  for(let i=0;i<arr.length;i++)
  { 
      if(!output[arr[i].city])
      {
        output[arr[i].city] =[]
      }
      output[arr[i].city].push(arr[i].name);
  }
    return output;
}

let input = [
  { name: "A", city: "Delhi" },
  { name: "B", city: "Mumbai" },
  { name: "C", city: "Delhi" }
]

console.log(groupPeople(input));