import React from "react";
import SearchInput from "./components/SearchInput";
import BookListings from "./BookListings";
import "./App.css";
import { GET_BOOKS } from "./utils/query";
import { useQuery } from "@apollo/client";

function App() {
  const { loading, error, data } = useQuery(GET_BOOKS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <div className="flex flex-col h-auto min-h-[calc(100vh-5rem)] items-center px-56 pt-20">
      <SearchInput options={data.books} />
      <BookListings bookListings={data.books} />
    </div>
  );
}

export default App;
