import {
  Box,
  Checkbox,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React from "react";
import IconArrowDownBlue from "../../../components/icons/IconArrowDownBlue";
import IconCalendar from "../../../components/icons/IconCalendar";

export default function GridItemLeft() {
  return (
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
        <Box sx={{ borderTop: "1px solid #D9D9D9", py: "20px" }}>
          <Box sx={{ pl: "20px" }}>
            <Box
              sx={{
                color: "#2B2B2B",
                fontSize: "20px",
                lineHeight: "30px",
                fontWeight: "700",
              }}
            >
              Trạng Thái
            </Box>
            <Box>
              <RadioGroup
                aria-labelledby="radio-status"
                defaultValue="active"
                name="radio-status"
              >
                <FormControlLabel
                  value="active"
                  control={<Radio />}
                  label="Active"
                />
                <FormControlLabel
                  value="inactive"
                  control={<Radio />}
                  label="Inactive"
                />
              </RadioGroup>
            </Box>
          </Box>
        </Box>
        <Box sx={{ borderTop: "1px solid #D9D9D9", py: "20px" }}>
          <Box sx={{ pl: "20px" }}>
            <Box
              sx={{
                color: "#2B2B2B",
                fontSize: "20px",
                lineHeight: "30px",
                fontWeight: "700",
                mb: "15px",
              }}
            >
              Trong Khoảng
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                columnGap: "16px",
              }}
            >
              <Typography
                sx={{
                  width: "48px",
                  fontSize: "12px",
                  lineHeight: "30px",
                  fontWeight: "400",
                  color: "#2B2B2B !important",
                }}
              >
                Từ ngày
              </Typography>
              <Box
                sx={{
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  columnGap: "12px",
                  px: "10px",
                  backgroundColor: "#fff",
                  border: "0.5px solid #D9D9D9",
                  borderRadius: "2px",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "12px",
                    lineHeight: "24px",
                    fontWeight: "400",
                    color: "#D9D9D9 !important",
                  }}
                >
                  dd-mm-yyyy
                </Typography>
                <IconCalendar></IconCalendar>
              </Box>
            </Box>
            <Box
              sx={{
                mt: "16px",
                display: "flex",
                alignItems: "center",
                columnGap: "16px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "12px",
                  lineHeight: "30px",
                  fontWeight: "400",
                  color: "#2B2B2B !important",
                }}
              >
                Đến ngày
              </Typography>
              <Box
                sx={{
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  columnGap: "12px",
                  px: "10px",
                  backgroundColor: "#fff",
                  border: "0.5px solid #D9D9D9",
                  borderRadius: "2px",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "12px",
                    lineHeight: "24px",
                    fontWeight: "400",
                    color: "#D9D9D9 !important",
                  }}
                >
                  dd-mm-yyyy
                </Typography>
                <IconCalendar></IconCalendar>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box sx={{ borderTop: "1px solid #D9D9D9", py: "20px" }}>
          <Box
            sx={{
              color: "#EE4F2D",
              border: "1px solid #EE4F2D",
              width: "74px",
              textAlign: "center",
              fontSize: "12px",
              lineHeight: "30px",
              mx: "auto",
              cursor: "pointer",
              my: "10px",
            }}
          >
            RESET
          </Box>
        </Box>
      </Box>
    </Grid>
  );
}
