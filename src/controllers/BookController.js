const Book = require('../models/Book');

let books = [
  new Book(1, 'The Great Gatsby', 'F. Scott Fitzgerald'),
  new Book(2, 'To Kill a Mockingbird', 'Harper Lee'),
];

const getAllBooks = () => books;

const getBookById = (id) => books.find(b => b.id === id);

// Resolved: kept both deleteBook (develop) and searchBooks (feature/search-books)
const addBook = (title, author) => {
  const book = new Book(books.length + 1, title, author);
  books.push(book);
  return book;
};

const deleteBook = (id) => {
  const index = books.findIndex(b => b.id === id);
  if (index === -1) throw new Error('Book not found');
  return books.splice(index, 1)[0];
};

const searchBooks = (query) => {
  return books.filter(b =>
    b.title.toLowerCase().includes(query.toLowerCase()) ||
    b.author.toLowerCase().includes(query.toLowerCase())
  );
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

module.exports = { getAllBooks, getBookById, addBook, deleteBook, searchBooks, borrowBook, returnBook };
