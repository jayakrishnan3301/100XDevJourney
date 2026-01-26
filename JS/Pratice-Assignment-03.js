function canVote(age){
  if(age<=18)
    return false;
  else
    return true;
}

let result = canVote(2)

console.log(result);