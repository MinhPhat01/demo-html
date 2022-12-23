import { Box, InputBase } from "@mui/material";
import React from "react";
import IconSearch from "../../../components/icons/IconSearch";

export default function Search() {
  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.15)",
        borderRadius: "10px",
        py: "15px",
        px: "20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        columnGap: "20px",
        cursor: "pointer",
        
      }}
    >
      <IconSearch></IconSearch>
      <InputBase
        placeholder="Tìm kiếm..."
        sx={{
          width: "100%",
          border: "0.5px solid #D9D9D9",
          borderRadius: "3px",
          px: "10px",
          py: "5px",
          color: "#D9D9D9",
          fontSize: "20px",
          lineHeight: "30px",
        }}
      ></InputBase>
    </Box>
  );
}
