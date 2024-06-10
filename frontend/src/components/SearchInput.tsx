import { useState, useMemo } from "react";
import { Book } from "../types/book";

type SearchInputProps = {
  options: Book[];
};

export default function SearchInput({ options }: SearchInputProps) {
  const [searchName, setSearchName] = useState("");

  const searchedBooks = useMemo(() => {
    let nameRegex = new RegExp(`${searchName}`, "i");

    return options.filter((opt) => nameRegex.test(`${opt.title}`));
  }, [searchName, options]);

  return (
    <div className="w-full flex justify-center">
      <div className="relative w-1/2">
        <input
          type="text"
          className="w-full p-2 my-1 text-gray-700 border border-gray-300 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Search Book"
          onChange={(e) => setSearchName(e.target.value)}
        />
        {searchName && (
          <div className="absolute h-[300px] bg-slate-50 border border-gray-300 w-full z-30 overflow-auto">
            {searchedBooks.length > 0 ? (
              searchedBooks.map((option, i) => (
                <div className="flex my-2 p-2 max-h-[200px]">
                  <picture>
                    <img
                      src={`${process.env.PUBLIC_URL}/${option.coverPhotoURL}`}
                      alt={`${i} ${option.title} `}
                      width={80}
                      className="h-full"
                    />
                  </picture>
                  <div className="px-2">
                    <p className="text-[16px] text-[#2c3232] font-bold">
                      {option.title}
                    </p>
                    <p className="text-[13px] text-[#9da9aa] font-semibold">
                      {option.author}
                    </p>
                    <button className="bg-[#5acccc] hover:bg-[#53c2c2] px-4 py-2 text-white rounded font-bold">
                      Add to Reading list
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p>No Book with the title</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
