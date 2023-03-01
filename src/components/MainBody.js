import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import fetchBooks from "../redux/thunk/fetchBook";
import BookCard from "./BookCard";
import FeatureHead from "./FeatureHead";
import FormContainer from "./FormContainer";

export default function MainBody({ searchText }) {
  const booksarray = useSelector((state) => state.bookstate.books);
  const dispatch = useDispatch();

  const [featureSelected, setSelectedFeature] = useState(false);

  const featureHandler = () => {
    setSelectedFeature(!featureSelected);
  };

  useEffect(() => {
    dispatch(fetchBooks);
  }, [dispatch]);

  return (
    <main className="py-12 2xl:px-6">
      <div className="container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8">
        <div className="order-2 xl:-order-1">
          <FeatureHead
            handleFeature={featureHandler}
            isFeature={featureSelected}
          />
          <div className="lws-bookContainer">
            {booksarray.length !== 0 && featureSelected
              ? booksarray
                  .filter((book) => book.featured === true)
                  .map((data, i) => <BookCard bookData={data} key={i} />)
              : booksarray.map((data, i) => (
                  <BookCard bookData={data} key={i} />
                ))}

            {searchText &&
              booksarray
                .filter((book) => book.name.toLowerCase().includes(searchText))
                .map((data, i) => <BookCard bookData={data} key={i} />)}
          </div>
        </div>
        <div>
          <FormContainer />
        </div>
      </div>
    </main>
  );
}
