let input = [1,2,3,4,5]

const newArray = input.map((i)=>{
    return i*2;
})

const evenArray = input.filter((i)=>{
  if(i%2==0)
    return true
  else
    return false
})

console.log(newArray);
console.log(evenArray)