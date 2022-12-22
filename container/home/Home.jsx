import {
  Box,
  Checkbox,
  FormControlLabel,
  Grid,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React from "react";
import IconArrowDownBlue from "../../components/icons/IconArrowDownBlue";

import Image from "../../components/Image";
import Menu from "./components/Menu";

export default function Home() {
  return (
    <Box
      sx={{
        width: "1722px",
        height: "1117px",
        backgroundColor: "#ffffff",
        padding: "20px 30px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: "20px",
        }}
      >
        <Link href="/">
          <Image src="/logo.png" width="35px" height="39px" alt="logo"></Image>
        </Link>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            columnGap: "10px",
          }}
        >
          <Typography
            sx={{ fontSize: "16px", lineHeight: "30px", fontWeight: "400" }}
          >
            duchuynhthoai@gmail.com
          </Typography>
          <Box
            sx={{
              cursor: "pointer",
              padding: "10px",
              color: "#fff",
              fontSize: "20px",
              lineHeight: "30px",
              backgroundColor: "#1074BA",
              borderRadius: "999px",
            }}
          >
            HĐ
          </Box>
        </Box>
      </Box>
      <Menu></Menu>
      <Box
        sx={{
          fontSize: "16px",
          lineHeight: "30px",
          fontWeight: "400",
          color: "#1074BA",
          mt: "10px",
          mb: "10px",
        }}
      >
        Tổng Quan
      </Box>
      <Grid container sx={{ height: "100px" }} columnSpacing={4}>
        <Grid item xs={2}>
          <Box
            sx={{
              background: "#fff",
              boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.15)",
              borderRadius: "10px",
            }}
          >
            <Typography
              sx={{
                fontSize: "20px",
                lineHeight: "30px",
                fontWeight: "700",
                color: "#2B2B2B",
                pl: "20px",
                pt: "25px",
                pb: "20px",
              }}
            >
              Vai Trò
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                pl: "20px",
                "& .MuiTypography-root": {
                  color: "#2B2B2B",
                  fontSize: "12px !important",
                  lineHeight: "30px !important",
                  fontWeight: "400 !important",
                },
              }}
            >
              <FormControlLabel
                control={<Checkbox defaultChecked disableRipple={true} />}
                label="Kế toán"
              />
              <FormControlLabel
                control={<Checkbox disableRipple={true} />}
                label="Marketing"
              />
              <FormControlLabel
                control={<Checkbox disableRipple={true} />}
                label="QC"
              />
              <FormControlLabel
                control={<Checkbox disableRipple={true} />}
                label="Sale"
              />
              <FormControlLabel
                control={<Checkbox defaultChecked disableRipple={true} />}
                label="Nhân Sự"
              />
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  columnGap: "4px",
                  cursor: "pointer",
                  mb: "20px",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "12px",
                    lineHeight: "30px",
                    color: "#1074ba !important",
                  }}
                >
                  Xem Thêm
                </Typography>
                <IconArrowDownBlue></IconArrowDownBlue>
              </Box>
            </Box>
            <Box sx={{ borderTop: "1px solid #D9D9D9", mt: "20px" }}>
              <Box sx={{ pl: "20px" }}>
                <Box sx={{ color: "#2B2B2B" }}>Trạng Thái</Box>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={10}>
          <Box
            sx={{
              background: "#fff",
              boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.15)",
              borderRadius: "10px",
            }}
          ></Box>
        </Grid>
      </Grid>
    </Box>
  );
}
