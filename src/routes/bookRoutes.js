const { getAllBooks, getBookById, addBook, borrowBook, returnBook } = require('../controllers/BookController');

const routes = {
  'GET /books': () => getAllBooks(),
  'GET /books/:id': (id) => getBookById(parseInt(id)),
  'POST /books': (title, author) => addBook(title, author),
  'POST /books/:id/borrow': (id, memberName) => borrowBook(parseInt(id), memberName),
  'POST /books/:id/return': (id) => returnBook(parseInt(id)),
};

module.exports = routes;
