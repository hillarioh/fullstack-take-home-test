import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import BookListings from "../components/BookListing/BookListings";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useBookContext } from "../contexts/BookContext";
import { Link } from "react-router-dom";

export default function MyListing() {
  const { books } = useBookContext();

  return (
    <Box position="relative">
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Link
          to="/"
          style={{
            textDecoration: "none",
            display: "flex",
            width: "100%",
            color: "#28b8b8",
            alignItems: "center",
          }}
        >
          <Typography variant="body1" fontSize={"1.2rem"} fontWeight={700}>
            <ArrowBackIosIcon />
          </Typography>
          <Typography variant="body1" fontSize={"1.2rem"} fontWeight={700}>
            Back
          </Typography>
        </Link>
        <Typography
          variant="body1"
          fontSize={"1.2rem"}
          color={"#2c3232"}
          fontWeight={700}
        >
          My Book Listing
        </Typography>
        <Box sx={{ width: "100%", mt: 4 }}>
          {books.length > 0 ? (
            <BookListings bookListings={books} />
          ) : (
            <Typography
              variant="body1"
              fontSize={"1rem"}
              color={"#2c3232"}
              fontWeight={700}
            >
              No Books Added
            </Typography>
          )}
        </Box>
      </Container>
    </Box>
  );
}
