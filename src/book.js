function createTitle(title) {
  var bookTitle = `The ${title}`;
  return bookTitle;
}

function buildMainCharacter(name, age, pronouns) {
  var character = {
    name: name,
    age: age,
    pronouns: pronouns
  }
  return character;
}

function saveReview(review, reviews) {
    if (!reviews.includes(review)) {
      return reviews.push(review);
  }
}

function calculatePageCount(bookTitle, pageCount){
  var pageCount = 0;
  for (var i = 0; i < bookTitle.length; i++) {
       pageCount += 20;
  }
  return pageCount;
}

function writeBook(bookTitle, character, genre){
  var book = {
    title: bookTitle, 
    mainCharacter: character,
    pageCount: calculatePageCount(bookTitle),
    genre: genre
  }
  return book;
}

function editBook(book){
  book.pageCount *= 0.75;
  return book.pageCount;
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}