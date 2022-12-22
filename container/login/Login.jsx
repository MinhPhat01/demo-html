import { Box, Button, Checkbox, FormControlLabel } from "@mui/material";
import Image from "../../components/Image";
import React from "react";
import FormControlInput from "../../components/FormControlInput";
import FormControlInputPassword from "../../components/FormControlInputPassword";
import Link from "next/link";

export default function Login() {
  return (
    <Box
      sx={{
        width: "1722px",
        height: "1117px",
        backgroundColor: "#ffffff",
        position: "relative",
      }}
    >
      <Box sx={{ pt: "20px", pl: "30px" }}>
        <Link href="/">
          <Image src="/logo.png" width="35px" height="39px" alt="logo"></Image>
        </Link>
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "white",
          boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.15)",
          borderRadius: "10px",
          width: "500px",
          height: "440px",
        }}
      >
        <Box
          sx={{
            pt: "50px",
            px: "20px",
            color: "#1074BA",
            fontSize: "30px",
            lineHeight: "30px",
            fontWeight: 700,
            mb: "10px",
            textAlign: "center",
          }}
        >
          Hệ Thống Quản Lý App Đổi Điểm
        </Box>
        <Box
          sx={{
            fontSize: "12px",
            lineHeight: "30px",
            color: "#1074BA",
            fontWeight: 400,
            cursor: "pointer",
            mb: "30px",
            textAlign: "center",
          }}
        >
          Vui lòng đăng nhập để tiếp tục
        </Box>
        <FormControlInput
          label="SĐT/Email"
          name="sdt/email"
          placeholder="Nhập email hoặc số điện thoại..."
        ></FormControlInput>
        <Box
          sx={{
            fontSize: "12px",
            lineHeight: "30px",
            color: "#2B2B2B",
            fontWeight: "700",
            textAlign: "right",
            mr: "20px",
            cursor: "pointer",
            userSelect: "none",
          }}
        >
          Quên mật khẩu?
        </Box>
        <FormControlInputPassword
          label="Mật Khẩu"
          placeholder="Nhập mật khẩu..."
          name="password"
        ></FormControlInputPassword>
        <Box
          sx={{
            ml: "20px",
            mt: "10px",
            "& .MuiTypography-root": {
              color: "#1074BA",
              fontSize: "12px !important",
              lineHeight: "30px !important",
              fontWeight: "400 !important",
            },
          }}
        >
          <FormControlLabel
            control={<Checkbox disableRipple={true} />}
            label="Lưu Thông Tin Đăng Nhập"
          />
        </Box>
        <Box
          sx={{
            textAlign: "right",
            mr: "20px",
            mt: "20px",
            "& .MuiButtonBase-root": {
              textTransform: "none",
              fontSize: "16px",
              lineHeight: "30px",
              fontWeight: "700",
            },
          }}
        >
          <Link href="/home">
            <Button variant="contained">Đăng Nhập</Button>
          </Link>
        </Box>
      </Box>
      <Box
        sx={{
          mb: "20px",
          fontSize: "16px",
          lineHeight: "30px",
          fontWeight: "700",
          color: "#1074BA",
          position: "absolute",
          bottom: "0",
          left: "50%",
          transform: "translate(-50%,0)",
        }}
      >
        ©2022 Doi Diem. All rights reserved
      </Box>
    </Box>
  );
}
