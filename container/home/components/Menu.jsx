import { Box, Typography } from "@mui/material";
import React from "react";
import { usePopupState } from "material-ui-popup-state/hooks";
import { bindHover, bindPopover } from "material-ui-popup-state";
import HoverPopover from "material-ui-popup-state/HoverPopover";
import IconHome from "../../../components/icons/IconHome";
import IconBank from "../../../components/icons/IconBank";
import IconArrowDown from "../../../components/icons/IconArrowDown";
import IconCustomer from "../../../components/icons/IconCustomer";
import IconReport from "../../../components/icons/IconReport";
import IconAds from "../../../components/icons/IconAds";
import IconNoti from "../../../components/icons/IconNoti";
import IconSetting from "../../../components/icons/IconSetting";

export default function Menu() {
  const partner = usePopupState({
    variant: "popover",
    popupId: "partner",
  });
  const customer = usePopupState({
    variant: "popover",
    popupId: "customer",
  });
  const setting = usePopupState({
    variant: "popover",
    popupId: "setting",
  });
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
        {...bindHover(partner)}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "15px",
          cursor: "pointer",
          paddingBottom: "10px",
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
        <HoverPopover
          sx={{
            "& .MuiPaper-root": {
              backgroundColor: "#fcfcfd",
              padding: "16px 0",
            },
          }}
          {...bindPopover(partner)}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          disableScrollLock={true}
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
        </HoverPopover>
      </Box>
      <Box
        {...bindHover(customer)}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "15px",
          cursor: "pointer",
          paddingBottom: "10px",
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
        <HoverPopover
          sx={{
            "& .MuiPaper-root": {
              backgroundColor: "#fcfcfd",
              padding: "16px 0",
            },
          }}
          {...bindPopover(customer)}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          disableScrollLock={true}
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
        </HoverPopover>
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
        {...bindHover(setting)}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "15px",
          cursor: "pointer",
          paddingBottom: "10px",
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
        <HoverPopover
          sx={{
            "& .MuiPaper-root": {
              backgroundColor: "#fcfcfd",
              padding: "16px 0",
            },
          }}
          {...bindPopover(setting)}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          disableScrollLock={true}
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
        </HoverPopover>
      </Box>
    </Box>
  );
}
