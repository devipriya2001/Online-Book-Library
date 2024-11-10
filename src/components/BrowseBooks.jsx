import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function BrowseBooks() {
  const { category } = useParams();
  const books = useSelector((state) => state.books);
  const [searchTerm, setSearchTerm] = useState('');

  // Filter books based on category and search term
  const filteredBooks = books.filter(
    (book) =>
      (!category || book.category.toLowerCase() === category.toLowerCase()) &&
      (book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="browse-books">
      <h1>{category ? `${category} Books` : 'All Books'}</h1>
      <input
        type="text"
        placeholder="Search by title or author"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {filteredBooks.length > 0 ? (
        <ul>
          {filteredBooks.map((book) => (
            <li key={book.id}>
              {book.title} by {book.author} - <Link to={`/book/${book.id}`}>View Details</Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No books found for this category.</p>
      )}
    </div>
  );
}

export default BrowseBooks;


