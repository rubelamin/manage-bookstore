import { addNewBook } from "../actions";

const addBook = (bookData) => {
  return async (dispatch) => {
    const response = await fetch("http://localhost:9000/books", {
      method: "POST",
      body: JSON.stringify(bookData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const books = await response.json();

    dispatch(addNewBook(books));
  };
};

export default addBook;
