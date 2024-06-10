import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { Book } from "../types/book";

interface IBookContext {
  books: Book[];
  setBooks: Dispatch<SetStateAction<Book[]>>;
}

const BookContext = createContext<IBookContext>({
  books: [],
  setBooks: () => {},
});

interface IProps {
  children: ReactNode;
}

export function BookProvider({ children }: IProps) {
  const [books, setBooks] = useState<Book[]>([]);

  return (
    <BookContext.Provider
      value={{
        books,
        setBooks,
      }}
    >
      {children}
    </BookContext.Provider>
  );
}

export function useBookContext() {
  return useContext(BookContext);
}
