// declaring an array to hold books
var books=[];
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