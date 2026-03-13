//adv array operations
//Test Data : 
const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

/*Tasks:
    1. Use filter() to get only inStock products
    2. Use map() to create a new array with:  { name, totalPrice }
    3. Use reduce() to calculate grand total cart value
    4. Use find() to get details of "Mouse"
    5. Use findIndex() to find the position of "Keyboard"*/

    //filter
let r1 = cart.filter((items)=> items.inStock==true)
console.log(r1)
//map()
let r2 = cart.map((item)=> {
    return {name: item.name , totalPrice:(item.price* item.quantity)}
})
console.log(r2)
//reduce
let r3 = cart.reduce((acc,items)=> acc+items.price,0)
console.log(r3)
//find
let r4 = cart.find((items)=> items.name=='Mouse')
console.log(r4)
//indIndex
let r5 = cart.findIndex((items)=> items.name=='Keyboard')
console.log(r5)






