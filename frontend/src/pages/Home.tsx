import { useQuery } from "@apollo/client";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import SearchInput from "../components/SearchInput/SearchInput";
import BookListings from "../components/BookListing/BookListings";
import { GET_BOOKS } from "../utils/query";

export default function Home() {
  const { loading, error, data } = useQuery(GET_BOOKS);
  if (loading)
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <CircularProgress />
      </Box>
    );
  if (error) return <p>Error: {error.message}</p>;

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <SearchInput options={data.books} />
      <Box sx={{ width: "100%", mt: 4 }}>
        {data.books.length > 0 ? (
          <BookListings bookListings={data.books} />
        ) : (
          <Typography
            variant="body1"
            fontSize={"1rem"}
            color={"#2c3232"}
            fontWeight={700}
          >
            No Books Available
          </Typography>
        )}
      </Box>
    </Container>
  );
}
