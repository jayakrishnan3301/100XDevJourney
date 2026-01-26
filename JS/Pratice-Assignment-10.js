let user = [
    {
        name:'Jayakrishnan V',
        age:25,
        gender:'M'
    },
    {
      name:'Harikrishnan V',
      age:25,
      gender:'M'
    },
    {
      name:'Thejaswani',
      age:4,
      gender:'F'
    },
    {
      name:'Usha',
      age:60,
      gender:'F'
    }
]

function checkAge(user){
  let newuser =[];
  for(let i=0;i<user.length;i++){
    if(user[i].age>=18)
      newuser.push(user[i]);
  }
  return newuser
}

console.log(checkAge(user))