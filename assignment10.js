const marks = [78, 92, 35, 88, 40, 67];


    //1. filter() marks ≥ 40 (pass marks)
    let r1 = marks.filter((elements)=>elements>=40)
console.log(r1)
    //2. map() to add 5 grace marks to each student
    let r2= marks.map((element)=> element+5)
console.log(r2)
   // 3. reduce() to find highest mark
const r3=marks.reduce((a,b)=>a>b?a:b)
   console.log(r3)
   // 4. find() first mark below 40
   const r4=marks.find((marks)=>marks<40)
   console.log(r4)
   // 5. findIndex() of mark 92
   const r5=marks.findIndex((marks)=>marks==92)
   console.log(r5)