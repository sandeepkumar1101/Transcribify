import { Box, Typography } from "@mui/material";
import React from "react";

const Trash = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        padding: "24px",
        backgroundColor: "#f9fafb",
        display: "flex",
        flexDirection: "column",
        gap: "24px",
      }}
    >
      <Typography
        sx={{
          fontWeight: "600",
        }}
        variant="h2"
      >
        Trash
      </Typography>
      <Typography variant="body1">This page is under developement</Typography>
    </Box>
  );
};

export default Trash;
