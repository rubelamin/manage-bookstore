import {
  ADD_NEW_BOOK,
  BOOK_UPDATING,
  CLEAR_UPDATING,
  DELETE_BOOK,
  EDIT_BOOK,
  BOOKS_LOADED,
} from "./actionTypes";

const initialState = {
  books: [],
  updating: [],
  cart: [
    {
      id: 1,
      text: "First book",
    },
  ],
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case BOOKS_LOADED:
      return {
        ...state,
        books: action.payload,
      };
    case ADD_NEW_BOOK:
      return {
        ...state,
        books: [...state.books, action.payload],
      };
    case BOOK_UPDATING:
      return {
        ...state,
        updating: [action.payload],
      };
    case EDIT_BOOK:
      return {
        ...state,
        books: state.books.map((book) => {
          if (book.id !== action.payload.id) {
            return book;
          }
          console.log(action.payload);
          return {
            ...book,
            name: action.payload.bookContent.name,
            author: action.payload.bookContent.author,
            thumbnail: action.payload.bookContent.thumbnail,
            price: action.payload.bookContent.price,
            rating: action.payload.bookContent.rating,
            featured: action.payload.bookContent.featured,
          };
        }),
      };

    case CLEAR_UPDATING:
      return {
        ...state,
        updating: [],
      };
    case DELETE_BOOK:
      return {
        ...state,
        books: state.books.filter((book) => book.id !== action.payload),
      };

    default:
      return state;
  }
};

export default bookReducer;
