import { Box, Grid } from "@mui/material";
import React from "react";
import IconAdd from "../../../components/icons/IconAdd";
import Table from "../../../components/Table";
import Search from "./Search";

export default function GridItemRight() {
  return (
    <Grid item xs={10}>
      <Box>
        <Grid container columnSpacing={5}>
          <Grid item xs={11}>
            <Search />
          </Grid>
          <Grid item xs={1} sx={{ display: "flex", alignItems: "center" }}>
            <Box
              sx={{
                width: "40px",
                height: "40px",
                cursor: "pointer",
                borderRadius: "5px",
                backgroundColor: "#1074BA",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <IconAdd></IconAdd>
            </Box>
          </Grid>
        </Grid>
        <Box
          sx={{
            mt: "20px",
            backgroundColor: "#fff",
            boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.15)",
            borderRadius: "10px",
          }}
        >
          <Table />
        </Box>
      </Box>
    </Grid>
  );
}
