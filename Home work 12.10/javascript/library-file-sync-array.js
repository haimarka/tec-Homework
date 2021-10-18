//1

let booksArray = [
    {name: "harry poter", author: "haim", pages: 123},
    {name: "harry toper", author: "yakov", pages: 456},
    {name: "harry zoper", author: "shmuel", pages: 789}
];

const name = process.argv[2];
const author = process.argv[3];
const pages = process.argv[4];

// console.log("hi haim");

const fs = require("fs");
const fileName = "booksFile.json";



let booksJson = JSON.stringify(booksArray);

const data = fs.readFileSync(fileName,"utf-8");
console.log(data);

for (let i = 0; i < booksArray.length; i++) {
    if(booksArray[i].name == name){
        return "allready here"
    }
}
// return newBook
let newBook = {name: name,author: author,pages: pages};
booksArray.push(newBook)
console.log(booksArray);
fs.writeFileSync(fileName,booksJson);