class Book{
   title;
   author;
   pages;
   isAvailable ;
   constructor(title,author,pages,isAvailable){
         this.title = title;
         this.author = author;
         this.pages = pages;
         this.isAvailable = isAvailable;
   }

   borrow(){
    
  return this.isAvailable;
    }
   
   returnBook(){
     return this.isAvailable;
   }
   getInfo(){
    return this.author;
    this.pages;
    this.title;
   }
   isLongBook() {
    return this.pages>300;
    /*{
       return true;
    }else{
        return false;
    }*/
    
}
}
   
   //object
   let book1=new Book('the end','vaishnavi',750,true)
    let book2=new Book('Begin','sam',200,false)
     let book3=new Book('life','tanvi',350,true)
      let book4=new Book('alone','tan',199,false)
       let book5=new Book('love','priya',900,true)
       console.log(book1)

