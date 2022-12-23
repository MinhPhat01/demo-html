import { Box, Typography } from "@mui/material";
import React from "react";
import IconHome from "../../../components/icons/IconHome";
import IconBank from "../../../components/icons/IconBank";
import IconArrowDown from "../../../components/icons/IconArrowDown";
import IconCustomer from "../../../components/icons/IconCustomer";
import IconReport from "../../../components/icons/IconReport";
import IconAds from "../../../components/icons/IconAds";
import IconNoti from "../../../components/icons/IconNoti";
import IconSetting from "../../../components/icons/IconSetting";
import useHover from "../../../hooks/useHover";

export default function Menu() {
  const {
    hover: showPartner,
    handleShow: handleShowPartner,
    handleHide: handleHidePartner,
  } = useHover();
  const {
    hover: showCustomer,
    handleShow: handleShowCustomer,
    handleHide: handleHideCustomer,
  } = useHover();
  const {
    hover: showSetting,
    handleShow: handleShowSetting,
    handleHide: handleHideSetting,
  } = useHover();
  return (
    <Box
      sx={{
        padding: "10px",
        paddingBottom: "0",
        backgroundColor: "#fff",
        borderRadius: "10px",
        boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.15)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "15px",
          cursor: "pointer",
          paddingBottom: "10px",
        }}
      >
        <IconHome></IconHome>
        <Typography
          sx={{
            fontSize: "20px",
            lineHeight: "30px",
            fontWeight: "400",
            color: "#1074BA",
          }}
        >
          Tổng Quan
        </Typography>
      </Box>
      <Box
        onMouseOver={handleShowPartner}
        onMouseOut={handleHidePartner}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "15px",
          cursor: "pointer",
          paddingBottom: "10px",
          position: "relative",
        }}
      >
        <IconBank></IconBank>
        <Typography
          sx={{
            fontSize: "20px",
            lineHeight: "30px",
            fontWeight: "400",
            color: "#2B2B2B",
          }}
        >
          Đối Tác
        </Typography>
        <IconArrowDown></IconArrowDown>
        {showPartner && (
          <Box
            sx={{
              position: "absolute",
              top: "40px",
              left: 0,
              backgroundColor: "#fff",
              padding: "16px 0",
              width: "150px",
              boxShadow: 2,
              borderRadius: "5px",
              zIndex: "99",
            }}
          >
            <Box
              sx={{
                cursor: "pointer",

                "& :hover": {
                  color: "white",
                  backgroundColor: "#1074BA",
                  transition: "color ease 0.3s",
                  borderRadius: "5px",
                },
              }}
            >
              <Typography
                sx={{
                  padding: "10px 20px",
                  fontSize: "16px",
                  lineHeight: "26px",
                  color: "#2B2B2B",
                  fontWeight: "300",
                }}
              >
                Tài Khoản
              </Typography>
              <Typography
                sx={{
                  padding: "10px 20px",
                  fontSize: "16px",
                  lineHeight: "26px",
                  color: "#2B2B2B",
                  fontWeight: "300",
                }}
              >
                Thiết Lập Quán
              </Typography>
              <Typography
                sx={{
                  padding: "10px 20px",
                  fontSize: "16px",
                  lineHeight: "26px",
                  color: "#2B2B2B",
                  fontWeight: "300",
                }}
              >
                Lịch Sử
              </Typography>
              <Typography
                sx={{
                  padding: "10px 20px",
                  fontSize: "16px",
                  lineHeight: "26px",
                  color: "#2B2B2B",
                  fontWeight: "300",
                }}
              >
                Xử Lý Điểm
              </Typography>
              <Typography
                sx={{
                  padding: "10px 20px",
                  fontSize: "16px",
                  lineHeight: "26px",
                  color: "#2B2B2B",
                  fontWeight: "300",
                }}
              >
                Xử Lý Hình Ảnh
              </Typography>
            </Box>
          </Box>
        )}
      </Box>
      <Box
        onMouseOver={handleShowCustomer}
        onMouseOut={handleHideCustomer}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "15px",
          cursor: "pointer",
          paddingBottom: "10px",
          position: "relative",
        }}
      >
        <IconCustomer></IconCustomer>
        <Typography
          sx={{
            fontSize: "20px",
            lineHeight: "30px",
            fontWeight: "400",
            color: "#2B2B2B",
          }}
        >
          Khách Hàng
        </Typography>
        <IconArrowDown></IconArrowDown>
        {showCustomer && (
          <Box
            sx={{
              position: "absolute",
              top: "40px",
              left: 0,
              backgroundColor: "#fff",
              padding: "16px 0",
              width: "150px",
              boxShadow: 2,
              borderRadius: "5px",
              zIndex: "99",
            }}
          >
            <Box
              sx={{
                cursor: "pointer",

                "& :hover": {
                  color: "white",
                  backgroundColor: "#1074BA",
                  transition: "color ease 0.3s",
                  borderRadius: "5px",
                },
              }}
            >
              <Typography
                sx={{
                  padding: "10px 20px",
                  fontSize: "16px",
                  lineHeight: "26px",
                  color: "#2B2B2B",
                  fontWeight: "300",
                }}
              >
                Tài Khoản
              </Typography>
              <Typography
                sx={{
                  padding: "10px 20px",
                  fontSize: "16px",
                  lineHeight: "26px",
                  color: "#2B2B2B",
                  fontWeight: "300",
                }}
              >
                Lịch Sử
              </Typography>
            </Box>
          </Box>
        )}
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "15px",
          cursor: "pointer",
          paddingBottom: "10px",
        }}
      >
        <IconReport></IconReport>
        <Typography
          sx={{
            fontSize: "20px",
            lineHeight: "30px",
            fontWeight: "400",
            color: "#2B2B2B",
          }}
        >
          Báo Cáo
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "15px",
          cursor: "pointer",
          paddingBottom: "10px",
        }}
      >
        <IconAds></IconAds>
        <Typography
          sx={{
            fontSize: "20px",
            lineHeight: "30px",
            fontWeight: "400",
            color: "#2B2B2B",
          }}
        >
          Quảng Cáo
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "15px",
          cursor: "pointer",
          paddingBottom: "10px",
        }}
      >
        <IconNoti></IconNoti>
        <Typography
          sx={{
            fontSize: "20px",
            lineHeight: "30px",
            fontWeight: "400",
            color: "#2B2B2B",
          }}
        >
          Thông Báo
        </Typography>
      </Box>
      <Box
        onMouseOver={handleShowSetting}
        onMouseOut={handleHideSetting}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "15px",
          cursor: "pointer",
          paddingBottom: "10px",
          position: "relative",
        }}
      >
        <IconSetting></IconSetting>
        <Typography
          sx={{
            fontSize: "20px",
            lineHeight: "30px",
            fontWeight: "400",
            color: "#2B2B2B",
          }}
        >
          Cài Đặt
        </Typography>
        <IconArrowDown></IconArrowDown>
        {showSetting && (
          <Box
            sx={{
              position: "absolute",
              top: "40px",
              left: 0,
              backgroundColor: "#fff",
              padding: "16px 0",
              width: "150px",
              boxShadow: 2,
              borderRadius: "5px",
              zIndex: "99",
            }}
          >
            <Box
              sx={{
                cursor: "pointer",
                "& :hover": {
                  color: "white",
                  backgroundColor: "#1074BA",
                  transition: "color ease 0.3s",
                  borderRadius: "5px",
                },
              }}
            >
              <Typography
                sx={{
                  padding: "10px 20px",
                  fontSize: "16px",
                  lineHeight: "26px",
                  color: "#2B2B2B",
                  fontWeight: "300",
                }}
              >
                Danh Mục
              </Typography>
              <Typography
                sx={{
                  padding: "10px 20px",
                  fontSize: "16px",
                  lineHeight: "26px",
                  color: "#2B2B2B",
                  fontWeight: "300",
                }}
              >
                Cấu Hình
              </Typography>
              <Typography
                sx={{
                  padding: "10px 20px",
                  fontSize: "16px",
                  lineHeight: "26px",
                  color: "#2B2B2B",
                  fontWeight: "300",
                }}
              >
                Avatar
              </Typography>
              <Typography
                sx={{
                  padding: "10px 20px",
                  fontSize: "16px",
                  lineHeight: "26px",
                  color: "#2B2B2B",
                  fontWeight: "300",
                }}
              >
                Người Dùng
              </Typography>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
}
