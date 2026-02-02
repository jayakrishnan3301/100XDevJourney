let input = [1,2,3,4,5,6]
count(input);

function count(arr){
  let output= {'even':0,'odd':0};

  for(let i=0;i<arr.length;i++)
  {
      if(arr[i]%2==0)
        output['even']++;
      else
        output['odd']++;
  }
  console.log(output)
}