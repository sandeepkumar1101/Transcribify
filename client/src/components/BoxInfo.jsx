import { Box, Typography } from "@mui/material";
import React from "react";

const BoxInfo = ({ title, icon, amount }) => {
  return (
    <Box
      sx={{
        width: "354px",
        height: "140px",
        borderRadius: "12px",
        border: "1px solid #E4E7EC",
        backgroundColor: "#ffff",
        padding: "18px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        gap: "10px",
      }}
    >
      {/* <Box sx={{}}> */}

      {icon}
      {/* </Box> */}
      <Typography
        sx={{
          fontWeight: "600",
          fontSize: "20px",
          lineHeight: "24px",
          color: "#344054",
        }}
      >
        {amount}
      </Typography>
      <Typography
        sx={{
          fontWeight: "400",
          fontSize: "14px",
          color: "#475367",
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default BoxInfo;
