let numArray=[1,2,3,4,5,6,7,8];

function evenArray(numArray){

  let evenArray = []

    for(let i=0;i<numArray.length;i++){
      if(numArray[i]%2==0)
      evenArray.push(numArray[i]);
    }

    return evenArray;
}

console.log(evenArray(numArray))