import { useState, useMemo } from "react";
import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Button from "@mui/material/Button";
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
              <List>
                {searchedBooks.map((option, i) => (
                  <ListItem alignItems="flex-start" key={i}>
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
                          <Typography
                            variant="body1"
                            fontWeight="bold"
                            color="textPrimary"
                          >
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
                        <Button
                          variant="contained"
                          color="primary"
                          size="small"
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
                      </Box>
                    </Box>
                  </ListItem>
                ))}
              </List>
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
