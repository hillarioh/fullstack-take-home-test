import { useState, useMemo, useRef, useEffect } from "react";
import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import { Book } from "../../types/book";
import { useBookContext } from "../../contexts/BookContext";
import SearchResultItem from "./SearchResultItem";

type SearchInputProps = {
  options: Book[];
};

export default function SearchInput({ options }: SearchInputProps) {
  const [searchName, setSearchName] = useState("");
  const { setBooks } = useBookContext();
  const ref = useRef<HTMLDivElement>(null);

  const searchedBooks = useMemo(() => {
    let nameRegex = new RegExp(`${searchName}`, "i");

    return options.filter((opt) => nameRegex.test(`${opt.title}`));
  }, [searchName, options]);

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setSearchName("");
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleAddListing = (bookItem: Book) =>
    setBooks((books) => [...books, bookItem]);

  return (
    <Box display="flex" justifyContent="center" mb={2} width="100%">
      <Box
        sx={{
          position: "relative",
          width: "100%",
          maxWidth: { xs: "100%", md: "50%" },
        }}
      >
        <InputBase
          fullWidth
          placeholder="Search Book"
          onChange={(e) => setSearchName(e.target.value)}
          value={searchName}
          sx={{
            padding: 1,
            border: "1px solid",
            borderColor: "grey.300",
            borderRadius: 1,
            boxShadow: 1,
            "&:focus-within": {
              borderColor: "blue.500",
              boxShadow: `0 0 0 2px rgba(0, 0, 255, 0.2)`,
            },
          }}
        />
        {searchName && (
          <Paper
            sx={{
              position: "absolute",
              width: "100%",
              maxHeight: 300,
              overflowY: "auto",
              zIndex: 10,
              backgroundColor: "background.paper",
              border: "1px solid",
              borderColor: "divider",
              mt: 1,
            }}
          >
            {searchedBooks.length > 0 ? (
              <Box ref={ref}>
                <List>
                  {searchedBooks.map((option, i) => (
                    <SearchResultItem
                      option={option}
                      handleAddListing={handleAddListing}
                    />
                  ))}
                </List>
              </Box>
            ) : (
              <Typography variant="body2" color="textSecondary" p={2}>
                No Book with the title
              </Typography>
            )}
          </Paper>
        )}
      </Box>
    </Box>
  );
}
