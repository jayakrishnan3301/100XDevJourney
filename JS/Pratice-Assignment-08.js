let user = [

  {
  name: 'Jayakrishnan V',
  age: 26,
  gender:'M'
  },

  {
  name: 'Harikrishnan V',
  age: 25,
  gender:'M'
  }

]

greets(user);

function greets(user){
  for(let i=0;i<user.length;i++){
    console.log(`Hi Mr ${user[i].name},your age is ${user[i].age}, can Vote ${user[i].age>18?true:false}`);
  }
}

