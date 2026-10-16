const { getAllBooks, getBookById, addBook } = require('../controllers/BookController');

const routes = {
  'GET /books': () => getAllBooks(),
  'GET /books/:id': (id) => getBookById(parseInt(id)),
  'POST /books': (title, author) => addBook(title, author),
};

module.exports = routes;
