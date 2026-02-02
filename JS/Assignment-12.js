let input = { name: "alice", city: "delhi" }

CapitalizeString(input)

function CapitalizeString(obj){

 let output ={};
 let objectLength = Object.keys(obj);
 
 for(let i=0;i<objectLength.length;i++)
 {
    let value = obj[objectLength[i]];
    output[objectLength[i]] = String(value).charAt(0).toUpperCase()+String(value).slice(1);
 }
 console.log(output);
}