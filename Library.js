// declaring an array to hold books
var books=[ {
    title:'My angel',
    author:'Joe Charles',
    availability:false
}];
// function to add book
const addbook=(title,author,isavailable)=>{
let newbook={
    title:title,
    author:author,
    availability:isavailable
}
books.push(newbook);
}
//adding books
addbook('The adge','Charles',true);
addbook('The river between','Karm',true);

 console.log(books);
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