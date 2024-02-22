// declaring an array of objects to hold books
var books=[ {
    title:'My angel',
    author:'Joe Charles',
    availability:false
}
,{
    title: 'Get Rich',
    author:' King Marcus',
    availability: true
}
];
// function to add book
const addbook=(title,author,isavailable)=>{
let newbook={
    title:title,
    author:author,
    availability:isavailable
}
books.push(newbook);//pushing a new book in books array
}
//adding books
addbook('The adge','Charles',true);
addbook('The river between','Karm',true);
 console.log(books);//displaying books 
console.log('')
 //function to display list of available book
 const booksAvailable=()=>{
    let available=[];
    console.log('available books are:')
    for(let i=0; i<books.length; i++){
    if(books[i].availability===true){
        available.push(books[i]);

    }
 }
 console.log(available);
}
//displaying available books
booksAvailable();
console.log("");

//function to borrow book
const borrow=(booktitle,borrowername)=>{

let exist=books.some((books) => books.title ===booktitle&&books.availability===true);
if(exist){
for(let i=0; i<books.length; i++){
    if(books[i].title===booktitle&&books[i].availability===true){
 console.log(`${borrowername} borrowed ${booktitle} book.`);
 books[i].holder=borrowername;
 books[i].availability=false;
    }
}
}
else{
    console.log(`${booktitle} book is not available,borrow another book!`);
}
}
//borrowing books
borrow('The adge','Karine')
borrow('The river between','Aline');
borrow('My angel','Karine');
console.log(books);//displaying books to see change after borrowing
console.log("");
//function to return book
const returnBook=(booktitle,holdername)=>{
    let borrowed=books.some((books)=>books.title===booktitle&&books.holder===holdername);
    if(borrowed){
        for(let i=0; i<books.length; i++){
            if(books[i].title===booktitle&&books[i].holder===holdername){
                console.log('Thanks for Returning book')
         books[i].holder='';
         books[i].availability=true;
            }
        }
    }
else{
    console.log('you returned Wrong book');
}
}
returnBook('The river between','Aline');
returnBook('The adge','Karine');
returnBook('The adge','Aline');
console.log(books)// Displaying books to see change after borrowing
