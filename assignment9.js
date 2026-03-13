const courses = ["javascript", "react", "node", "mongodb", "express"];



   // 1. filter() courses with name length > 5
   let r1 = courses.filter((courses)=> courses.length>5)
console.log(r1)
   // 2. map() to convert course names to uppercase
   let r2=courses.map((courses)=>courses.toUpperCase())
   console.log(r2)
   // 3. reduce() to generate a single string:
       //       "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"
    let r3=courses.reduce((acc,courses)=>acc+" "+courses)
    console.log(r3)
   // 4. find() the course "react"
   const r4=courses.find((courses)=>courses="react")
   console.log(r4)
    //5. findIndex() of "node"
let r5=courses.findIndex((courses)=>courses=="node")
   console.log(r5)