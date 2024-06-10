import { useQuery } from "@apollo/client";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import SearchInput from "./components/SearchInput";
import BookListings from "./BookListings";
import { GET_BOOKS } from "./utils/query";
import "./App.css";

function App() {
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
    <Box position="relative">
      <AppBar position="fixed" sx={{ bgcolor: "white", color: "black" }}>
        <Toolbar>
          <img
            src={`${process.env.PUBLIC_URL}/assets/logo.svg`}
            alt="Ello Logo"
          />
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "flex-end",
              gap: 2,
            }}
          >
            <Typography
              variant="h6"
              component="div"
              sx={{
                fontWeight: 700,
                fontSize: "17px",
                fontFamily: "mulish",
                color: "#335c6e",
                "&:hover": {
                  cursor: "pointer",
                },
              }}
            >
              Discover Ello
            </Typography>
            <Typography
              variant="h6"
              component="div"
              sx={{
                fontWeight: 700,
                fontSize: "17px",
                fontFamily: "mulish",
                color: "#335c6e",
                "&:hover": {
                  cursor: "pointer",
                },
              }}
            >
              Parent Resources
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
      <Container
        sx={{
          pt: 15,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          px: { xs: 2, sm: 4, md: 8, lg: 12, xl: 24 },
        }}
      >
        <SearchInput options={data.books} />
        <Box sx={{ width: "100%", mt: 4 }}>
          <BookListings bookListings={data.books} />
        </Box>
      </Container>
    </Box>
  );
}

export default App;
