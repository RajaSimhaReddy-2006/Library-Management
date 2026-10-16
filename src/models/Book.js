class Book {
  constructor(id, title, author, available = true) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.available = available;
    this.borrowedBy = null;
  }

  borrow(memberName) {
    if (!this.available) throw new Error(`Book "${this.title}" is already borrowed`);
    this.available = false;
    this.borrowedBy = memberName;
    return this;
  }

  returnBook() {
    this.available = true;
    this.borrowedBy = null;
    return this;
  }
}

module.exports = Book;
