import { Box, Grid, Typography } from "@mui/material";
import Link from "next/link";
import Image from "../../components/Image";
import GridItemLeft from "./components/GridItemLeft";
import GridItemRight from "./components/GridItemRight";
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
        <GridItemLeft />
        <GridItemRight />
      </Grid>
    </Box>
  );
}
