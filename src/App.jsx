import React from 'react';
import { BrowserRouter as Router ,Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import BrowseBooks from './components/BrowseBooks';
import BookDetails from './components/BookDetails';
import Home from './components/Home';
import AddBook from './components/AddBook';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
import './style.css' ;

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <div className="container"> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/browse" element={<BrowseBooks />} />
          <Route path="/books/:category" element={<BrowseBooks />} />
          <Route path="/book/:id" element={<BookDetails />} />
          <Route path="/add" element={<AddBook />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        </div>
        
      </Router>
    </Provider>
  );
}

export default App;

