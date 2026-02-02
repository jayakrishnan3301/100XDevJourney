let input = [{ id: 1, name: "A" }, { id: 2, name: "B" }]

lookupId(input);

function lookupId(arr){
  let output = {}
  for(let i=0;i<arr.length;i++)
  {
      output[i+1] = arr[i];
  }
  console.log(output);
}