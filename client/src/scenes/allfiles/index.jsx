import { Box, FormControl, FormLabel, Select, Typography } from "@mui/material";
import React from "react";
import { MenuItem } from "react-pro-sidebar";

const AllFiles = () => {
  const [selectedValue, setSelectedValue] = React.useState("");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
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
        All Files
      </Typography>
      <Typography variant="body1">This page is under developement</Typography>
    </Box>
  );
};

export default AllFiles;
