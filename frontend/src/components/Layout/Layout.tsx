import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <Box position="relative">
      <AppBar position="fixed" sx={{ bgcolor: "white", color: "black" }}>
        <Toolbar>
          <Link to="/">
            <img
              src={`${process.env.PUBLIC_URL}/assets/logo.svg`}
              alt="Ello Logo"
            />
          </Link>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "flex-end",
              gap: 2,
            }}
          >
            <Link to="/listing">
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
                My List
              </Typography>
            </Link>
            <Link to="/">
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
                Home
              </Typography>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Container
        sx={{
          pt: 15,
          px: { xs: 2, sm: 4, md: 8, lg: 12, xl: 24 },
        }}
      >
        <Outlet />
      </Container>
    </Box>
  );
}
