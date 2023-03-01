import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import fetchBooks from "../redux/thunk/fetchBook";
import BookCard from "./BookCard";
import FeatureHead from "./FeatureHead";
import FormContainer from "./FormContainer";

export default function MainBody() {
  const booksarray = useSelector((state) => state.bookstate.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks);
  }, [dispatch]);

  // const featuredFilter =() =>{

  // }

  return (
    <main className="py-12 2xl:px-6">
      <div className="container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8">
        <div className="order-2 xl:-order-1">
          <FeatureHead />
          <div className="lws-bookContainer">
            {/* <!-- Card 1 --> */}
            {booksarray.length !== 0 &&
              booksarray.map((data, i) => <BookCard bookData={data} key={i} />)}
          </div>
        </div>
        <div>
          <FormContainer />
        </div>
      </div>
    </main>
  );
}
