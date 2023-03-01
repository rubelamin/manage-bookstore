import { editBook } from "../actions";

const updateCurrentBook = (bookId, bookData) => {
  return async (dispatch) => {
    const response = await fetch(`http://localhost:9000/books/${bookId}`, {
      method: "PATCH",
      body: JSON.stringify(bookData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const books = await response.json();

    dispatch(editBook(bookId, books));
  };
};

export default updateCurrentBook;
