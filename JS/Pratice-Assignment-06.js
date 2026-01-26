let user = [

  {
  name: 'Jayakrishnan V',
  age: 26,
  gender:'M'
  },

  {
  name: 'Harikrishnan V',
  Age: 25,
  gender:'M'
  }

]

greets(user);

function greets(user){
  for(let i=0;i<user.length;i++){
    console.log(user[i].name,user[i].age);
  }
}

