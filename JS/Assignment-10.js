function  newObjectWithMentionedKeys (obj,keys){
    let output = {};
    for(let i=0;i<keys.length;i++){
      output[keys[i]] = obj[keys[i]]
    }
    
}



let inputObj = { name: "Rahul", age: 23, city: "Noida" };
let inputKey = ["name","city"];

newObjectWithMentionedKeys(inputObj,inputKey);