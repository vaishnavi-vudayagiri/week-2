const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];



   // 1. filter() only "Sci-Fi" movies
   let r1 = movies.filter((movies)=>movies.genre='Sci-Fi')
console.log(r1)
    //2. map() to return:
         //   "Inception (8.8)"
let r2 = movies.map((movies)=> {
    return {title:"Inception",rating:8.8}
})
console.log(r2)
    //3. reduce() to find average movie rating
    let average =movies.reduce((sum,movies)=>sum+movies.rating,0);
    let r3=average/movies.length
console.log(r3)
    //4. find() movie "Joker"
    let r4 =movies.find((movies)=> movies.title='Joker')
console.log(r4)
    //5. findIndex() of "Avengers"
    let r5 =movies.findIndex((movies)=> movies.title=="Avengers")
console.log(r5)

