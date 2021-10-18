//1

// const fs = require("fs");

// const fileName = "booksRead.json";

// let books = [
//     {name: "harry poter" ,description: "cool book",pages: 123},
//     {name: "titanic" ,description: "good book",pages: 456},
//     {name: "5 Balloons" ,description: "smart book",pages: 789}
// ];

// const booksJson = JSON.stringify(books);
// fs.writeFileSync(fileName,booksJson)

//2

// const data = fs.readFileSync(fileName,"utf8");

// function checkBooks(){
//     let min = books[0];
//     books.forEach(book =>{
//         books.pages = book;
//         if(min > book){
//             min = book;
//         }
//     })
//     console.log(min);
// }
// checkBooks();