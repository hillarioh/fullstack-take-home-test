import { Book } from "../../types/book";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

type BookListingItemProps = {
  bookItem: Book;
  page: string;
};

export default function BookListingItem({
  bookItem,
  page,
}: BookListingItemProps) {
  return (
    <Card
      sx={{
        position: "relative",
        overflow: "hidden",
        transition: "transform 0.3s",
        "&:hover::before": {
          content: '""',
          position: "absolute",
          left: 0,
          top: 0,
          height: "100%",
          width: "100%",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
        },
        "&:hover": {
          transform: "scale(1.02)",
        },
      }}
    >
      <CardMedia
        component="img"
        height="240"
        image={`${process.env.PUBLIC_URL}/${bookItem.coverPhotoURL}`}
        alt={`${bookItem.title}`}
        sx={{ objectFit: "cover" }}
      />
      <CardContent sx={{ display: "flex", flexDirection: "column", p: 2 }}>
        <Typography
          variant="body1"
          fontSize={"1rem"}
          color={"#2c3232"}
          fontWeight={700}
        >
          {bookItem.title}
        </Typography>
        <Typography
          variant="body1"
          color={"#9da9aa"}
          fontSize={"13px"}
          fontWeight={600}
        >
          By {bookItem.author}
        </Typography>
        <Typography variant="body2" fontSize={"13px"} fontWeight={600}>
          Level: {bookItem.readingLevel}
        </Typography>
        {page !== "/" && (
          <Box mt={2}>
            <Button variant="outlined" color="error">
              Remove
            </Button>
          </Box>
        )}
      </CardContent>
    </Card>
  );
}
