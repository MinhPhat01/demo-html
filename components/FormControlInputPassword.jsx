import { Box, FormControl, FormLabel, Grid, InputBase } from "@mui/material";
import React, { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

export default function FormControlInputPassword({ label, name, placeholder }) {
  const [show, setShow] = useState(true);

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
            endAdornment={
              <Box sx={{ mx: "12px" }} onClick={() => setShow(!show)}>
                {show ? (
                  <VisibilityIcon
                    sx={{ cursor: "pointer", color: "#1074BA" }}
                  ></VisibilityIcon>
                ) : (
                  <VisibilityOffIcon
                    sx={{ cursor: "pointer", color: "#1074BA" }}
                  ></VisibilityOffIcon>
                )}
              </Box>
            }
            autoComplete="off"
            id={name}
            name={name}
            placeholder={placeholder}
            type={show ? "password" : "text"}
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
