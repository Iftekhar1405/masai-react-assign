import './App.css';

interface Book {
  id: number;
  title: string;
  author: string;
  genre: string;
  quantity: number;
}

enum BookFormat {
  HardCover = 'Hard Cover',
  PaperBack = 'Paper Back',
  eBook = 'E Book',
}

interface LibraryBook extends Book {
  format: BookFormat;
}

class LibraryBooks implements LibraryBook {
  id: number;
  title: string;
  author: string;
  genre: string;
  quantity: number;
  format: BookFormat;

  constructor(id: number, title: string, author: string, genre: string, quantity: number, format: BookFormat) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.quantity = quantity;
    this.format = format;
  }

  getDetails() {
    return `${this.title} by ${this.author} (${this.format})`;
  }
}

function App() {

  const book1 = new LibraryBooks(1, 'The Great Gatsby', 'F. Scott Fitzgerald', 'Fiction', 5, BookFormat.HardCover);

  return (
    <>
      <h1>Library Book Details</h1>
      <p>{book1.getDetails()}</p>
    </>
  );
}

export default App;
