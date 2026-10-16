const Book = require('../models/Book');

let books = [
  new Book(1, 'The Great Gatsby', 'F. Scott Fitzgerald'),
  new Book(2, 'To Kill a Mockingbird', 'Harper Lee'),
];

const getAllBooks = () => books;

const getBookById = (id) => books.find(b => b.id === id);

const addBook = (title, author) => {
  const book = new Book(books.length + 1, title, author);
  books.push(book);
  return book;
};

const borrowBook = (id, memberName) => {
  const book = getBookById(id);
  if (!book) throw new Error('Book not found');
  return book.borrow(memberName);
};

const returnBook = (id) => {
  const book = getBookById(id);
  if (!book) throw new Error('Book not found');
  return book.returnBook();
};

module.exports = { getAllBooks, getBookById, addBook, borrowBook, returnBook };
