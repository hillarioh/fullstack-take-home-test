import { useMemo } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Button from "@mui/material/Button";
import { Book } from "../../types/book";
import { useBookContext } from "../../contexts/BookContext";

type ISearchResultItemProps = {
  option: Book;
  handleAddListing: (book: Book) => void;
};

export default function SearchResultItem({
  option,
  handleAddListing,
}: ISearchResultItemProps) {
  const { books, setBooks } = useBookContext();

  const isInListing = useMemo(() => {
    let item = books.find((book) => book.title === option.title);

    return item === undefined ? false : true;
  }, [option, books]);

  const handleRemove = (item: Book) =>
    setBooks((books) => books.filter((book) => book.title !== item.title));

  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <img
          src={`${process.env.PUBLIC_URL}/${option.coverPhotoURL}`}
          alt={`${option.title}`}
          style={{ height: 80, width: 80, objectFit: "cover" }}
        />
      </ListItemAvatar>
      <Box display="flex" flexDirection="column" ml={2}>
        <ListItemText
          primary={
            <Typography variant="body1" fontWeight="bold" color="textPrimary">
              {option.title}
            </Typography>
          }
          secondary={
            <Typography
              variant="body2"
              fontWeight="medium"
              color="textSecondary"
            >
              {option.author}
            </Typography>
          }
        />
        <Box>
          {isInListing ? (
            <Button
              variant="contained"
              color="primary"
              size="small"
              onClick={() => handleRemove(option)}
              sx={{
                mt: 1,
                fontWeight: 600,
                backgroundColor: "#f76434",
                "&:hover": {
                  backgroundColor: "#ffe6dc",
                },
              }}
            >
              Remove From List
            </Button>
          ) : (
            <Button
              variant="contained"
              color="primary"
              size="small"
              onClick={() => handleAddListing(option)}
              sx={{
                mt: 1,
                fontWeight: 600,
                backgroundColor: "#5acccc",
                "&:hover": {
                  backgroundColor: "#53c2c2",
                },
              }}
            >
              Add to Reading List
            </Button>
          )}
        </Box>
      </Box>
    </ListItem>
  );
}
