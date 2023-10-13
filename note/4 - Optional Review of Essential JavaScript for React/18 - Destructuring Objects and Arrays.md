```Javascript
// ! Destructuring Objects and Arrays

const book = getBook(2);


// const title = book.title;
// const author = book.author;

// Destructuring Objects
const {title, author, pages, publicationDate, genres, hasMovieAdaptation, reviews,} = book;
console.log(title, author, genres);

// const primaryGenre = genres[0];
// const secondaryGenre = genres[1];


// Destructuring Arrays
const [primaryGenre, secondaryGenre] = genres;

console.log(primaryGenre, secondaryGenre)
```
