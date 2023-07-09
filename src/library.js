function createLibrary(name) {
  var library = {
    name: name,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: []
    }
  }
  return library;
}

function addBook(library, book) {
  var genre = book.genre;
  library.shelves[genre].push(book);
  return library;
}

function checkoutBook(library, title, genre) {
  var shelf = library.shelves[genre];
  for (var i = 0; i < shelf.length; i++) {
    if (title === shelf[i].title) {
      shelf.splice(i, 1);
      return `You have now checked out ${title} from the ${library.name}.`;
    }
  }
  return `Sorry, there are currently no copies of ${title} available at the ${library.name}.`;
}

function takeStock(library, genre) {
  var shelf = library.shelves[genre];
  var sumBooks = [];
  if (genre === undefined) {
    for (let i = 0; i <= sumBooks.length; i++) {
      sumBooks = Object.values(library.shelves);
      return `There are a total of ${sumBooks.length} books at the ${library.name}.`;
    }
  }
  return `There are a total of ${shelf.length} ${genre} books at the ${library.name}.`;
}
module.exports = {
  createLibrary,
  addBook,
  checkoutBook,
  takeStock
};