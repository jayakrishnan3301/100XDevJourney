let input = [
  { user: "A", amount: 100 },
  { user: "B", amount: 200 },
  { user: "A", amount: 50 }
]

let output = {};

for (let i = 0; i < input.length; i++) {
  let key = input[i].user;
  let value = input[i].amount

  if(key in output)
     output[key]+=value
  else
    output[key]=value
}

console.log(output);

