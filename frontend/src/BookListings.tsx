import React, { useState } from "react";
import { Book } from "./types/book";
import BooklistingItemPlaceholder from "./components/BookListingPlaceholder";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import BookListingItem from "./BookListingItem";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

type BookListingsProps = {
  bookListings: Book[];
};

export default function BookListings({ bookListings }: BookListingsProps) {
  const [page, setPage] = useState(1);
  const itemsPerPage = 12;

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const paginatedListing = bookListings.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <Container>
      <Grid container spacing={2} justifyContent="center">
        {!paginatedListing
          ? Array(8)
              .fill("")
              .map((_, i) => (
                <Grid item xs={12} sm={6} md={3} key={i}>
                  <BooklistingItemPlaceholder />
                </Grid>
              ))
          : paginatedListing.map((book, j) => (
              <Grid item xs={12} sm={6} md={3} key={j}>
                <BookListingItem bookItem={book} />
              </Grid>
            ))}
      </Grid>

      <Box display="flex" justifyContent="center" py={4}>
        <Stack spacing={2}>
          <Pagination
            shape="rounded"
            count={Math.ceil(bookListings.length / itemsPerPage)}
            page={page}
            onChange={handleChange}
          />
        </Stack>
      </Box>
    </Container>
  );
}
