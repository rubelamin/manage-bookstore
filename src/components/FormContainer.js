import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { generateId } from "../utils/generateId";
import { clearUpdatingArray } from "../redux/actions";
import addBook from "../redux/thunk/addBook";
import updateCurrentBook from "../redux/thunk/updateBook";

export default function FormContainer() {
  const dispatch = useDispatch();
  const updateArray = useSelector((state) => state.bookstate.updating);

  useEffect(() => {
    setBookName(updateArray[0]?.name);
    setBookAuthor(updateArray[0]?.author);
    setBookImg(updateArray[0]?.thumbnail);
    setBookPrice(updateArray[0]?.price);
    setBookRating(updateArray[0]?.rating);
    setIsFeatured(updateArray[0]?.featured);
  }, [updateArray]);

  const [bookName, setBookName] = useState("");
  const [bookAuthor, setBookAuthor] = useState("");
  const [bookImg, setBookImg] = useState("");
  const [bookPrice, setBookPrice] = useState(0);
  const [bookRating, setBookRating] = useState(0);
  const [isFeatured, setIsFeatured] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();

    const bookData = {
      id: generateId(5),
      name: bookName,
      author: bookAuthor,
      thumbnail: bookImg,
      price: bookPrice,
      rating: bookRating,
      featured: isFeatured,
    };
    dispatch(addBook(bookData));

    e.target.reset();
    setBookName("");
    setBookAuthor("");
    setBookImg("");
    setBookPrice(0);
    setBookRating(0);
    setIsFeatured(false);
  };

  const edithandler = (e) => {
    e.preventDefault();

    const bookEditedData = {
      name: bookName,
      author: bookAuthor,
      thumbnail: bookImg,
      price: bookPrice,
      rating: bookRating,
      featured: isFeatured,
    };
    dispatch(updateCurrentBook(updateArray[0]?.id, bookEditedData));
    dispatch(clearUpdatingArray());

    e.target.reset();
    setBookName("");
    setBookAuthor("");
    setBookImg("");
    setBookPrice(0);
    setBookRating(0);
    setIsFeatured(false);
  };

  return (
    <div className="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
      <h4 className="mb-8 text-xl font-bold text-center">
        {updateArray?.length > 0 ? "Update The Book" : "Add New Book"}
      </h4>
      <form
        className="book-form"
        onSubmit={updateArray.length > 0 ? edithandler : submitHandler}
      >
        <div className="space-y-2">
          <label for="name">Book Name</label>
          <input
            required
            className="text-input"
            type="text"
            id="input-Bookname"
            name="name"
            value={bookName}
            onChange={(e) => setBookName(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <label for="category">Author</label>
          <input
            required
            className="text-input"
            type="text"
            id="input-Bookauthor"
            name="author"
            value={bookAuthor}
            onChange={(e) => setBookAuthor(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <label for="image">Image Url</label>
          <input
            required
            className="text-input"
            type="text"
            id="input-Bookthumbnail"
            name="thumbnail"
            value={bookImg}
            onChange={(e) => setBookImg(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-2 gap-8 pb-4">
          <div className="space-y-2">
            <label for="price">Price</label>
            <input
              required
              className="text-input"
              type="number"
              id="input-Bookprice"
              name="price"
              value={bookPrice}
              onChange={(e) => setBookPrice(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <label for="quantity">Rating</label>
            <input
              required
              className="text-input"
              type="number"
              id="input-Bookrating"
              name="rating"
              min="1"
              max="5"
              value={bookRating}
              onChange={(e) => setBookRating(e.target.value)}
            />
          </div>
        </div>

        <div className="flex items-center">
          <input
            id="input-Bookfeatured"
            type="checkbox"
            name="featured"
            className="w-4 h-4"
            // value={isFeatured}
            // onClick={() => setIsFeatured(!isFeatured)}
            onChange={() => setIsFeatured(!isFeatured)}
            checked={isFeatured}
          />
          <label for="featured" className="ml-2 text-sm">
            This is a featured book
          </label>
        </div>
        <button type="submit" className="submit" id="submit">
          {updateArray.length > 0 ? "Update Book" : "Add Book"}
        </button>
      </form>
    </div>
  );
}
