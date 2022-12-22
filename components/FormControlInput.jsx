import { FormControl, FormLabel, Grid, InputBase } from "@mui/material";
import React from "react";

export default function FormControlInput({ label, name, placeholder }) {
  return (
    <FormControl
      variant="standard"
      sx={{
        padding: "0 20px",
        width: "100%",
        mb: "10px",
      }}
    >
      <Grid container>
        <Grid item xs={3} sx={{ display: "flex", alignItems: "center" }}>
          <FormLabel
            sx={{
              fontSize: "20px",
              lineHeight: "30px",
              fontWeight: "700",
              color: "#1074BA",
            }}
            htmlFor={name}
          >
            {label}
          </FormLabel>
        </Grid>
        <Grid item xs={9}>
          <InputBase
            autoComplete="off"
            id={name}
            name={name}
            placeholder={placeholder}
            sx={{
              width: "100%",
              border: "0.5px solid #1074BA",
              borderRadius: "5px",
              backgroundColor: "#fff",
              "& .MuiInputBase-input": {
                padding: "12px",
                fontSize: "12px",
                lineHeight: "30px",
                fontWeight: "400",
                color: "#2B2B2B",
              },
            }}
          ></InputBase>
        </Grid>
      </Grid>
    </FormControl>
  );
}
