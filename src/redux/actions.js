import {
  ADD_NEW_BOOK,
  BOOK_UPDATING,
  CLEAR_UPDATING,
  DELETE_BOOK,
  EDIT_BOOK,
  SEARCH_BOOK,
  BOOKS_LOADED,
} from "./actionTypes";

export const loadedBooks = (bookData) => {
  return {
    type: BOOKS_LOADED,
    payload: bookData,
  };
};

export const addNewBook = (bookData) => {
  return {
    type: ADD_NEW_BOOK,
    payload: bookData,
  };
};

export const editBook = (bookId, bookData) => {
  return {
    type: EDIT_BOOK,
    payload: {
      id: bookId,
      bookContent: bookData,
    },
  };
};

export const updatingBook = (bookData) => {
  return {
    type: BOOK_UPDATING,
    payload: bookData,
  };
};

export const clearUpdatingArray = () => {
  return {
    type: CLEAR_UPDATING,
  };
};

export const deleteBook = (bookId) => {
  return {
    type: DELETE_BOOK,
    payload: bookId,
  };
};

export const searchBook = (bookText) => {
  return {
    type: SEARCH_BOOK,
    payload: bookText,
  };
};
