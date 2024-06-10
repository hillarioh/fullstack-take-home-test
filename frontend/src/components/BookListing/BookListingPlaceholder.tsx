import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Skeleton from "@mui/material/Skeleton";

export default function BooklistingItemPlaceholder() {
  return (
    <Paper
      sx={{
        borderRadius: 2,
        backgroundColor: "background.paper",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "relative",
          paddingTop: "56.25%",
          backgroundColor: "grey.300",
        }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          p: 2,
          "& > *": {
            borderRadius: 1,
            backgroundColor: "grey.200",
          },
        }}
      >
        <Skeleton variant="rectangular" width="80%" height={24} />
        <Skeleton variant="rectangular" width="60%" height={24} />
        <Skeleton variant="rectangular" width="40%" height={24} />
      </Box>
    </Paper>
  );
}
