import { createSlice } from '@reduxjs/toolkit';

const booksSlice = createSlice({
  name: 'books',
  initialState: [
    { id: 1, title: '1984', author: 'George Orwell', category: 'Fiction', description: 'A dystopian novel set in a totalitarian regime.', rating: 4.9 },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', category: 'Fiction', description: 'A novel about racial injustice in the American South.', rating: 4.8 },
    { id: 3, title: 'Dune', author: 'Frank Herbert', category: 'Sci-Fi', description: 'A science fiction novel set in a distant desert world.', rating: 4.7 },
    { id: 4, title: 'Sapiens', author: 'Yuval Noah Harari', category: 'Non-Fiction', description: 'A brief history of humankind.', rating: 4.6 },
    { id: 5, title: 'A Song to Drown Rivers', author: 'Ann Liang' , category : 'Romance', description: 'about womanhood, war, sacrifice, and love against all odds.' , rating: '3.9'},
    { id: 6, title: 'Perfect Fit', author: 'Clare Gilmore', category: 'Romance', description: ' finding out that the person you least expect could be your perfect fit.', rating: 4.2 }
    // Add more books if desired
  ],
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;

