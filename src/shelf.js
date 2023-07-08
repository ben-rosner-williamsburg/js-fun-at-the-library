function shelfBook(book, shelf) {
  if (shelf.length < 3) {
    shelf.unshift(book);
  }
  return shelf;
}
function unshelfBook(book, shelf) {
  for (var i = 0; i < shelf.length; i++) {
    if (book === shelf[i].title) {
      var bookIndex = shelf.indexOf(shelf[i]);
      shelf.splice(bookIndex, 1);
    }
  }
  return shelf;
}
function listTitles(shelf) {
  var titles = [];
  for (var i = 0; i < shelf.length; i++) {
    titles.push(shelf[i].title);
  }
  titles = titles.toString().replaceAll(",", ", ");
  return titles;
}

function searchShelf(shelf, book) {
  var onShelf;
  for (var i = 0; i < shelf.length; i++) {
    if (book === shelf[i].title) {
      onShelf = true;
    }
    else if (book !== shelf[i].title) {
      onShelf = false;
    }
  }
  return onShelf;
}

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};