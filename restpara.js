//write a func that receives any no of args and return their sum
const findSum=(...a)=>{

return a .reduce((sum,ele)=>sum+ele);
//console.log(a)
}
let result=findSum(10,20,30,40,50)
console.log(result)