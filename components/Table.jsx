import { Box, Grid } from "@mui/material";

import React from "react";
import IconArrowDown from "./icons/IconArrowDown";

export default function Table() {
  return (
    <Box sx={{ py: "30px" }}>
      <table>
        <tr>
          <Grid container columnSpacing={"220px"}>
            <Grid
              item
              xs={4}
              sx={{
                display: "flex",
                alignItems: "center",
                columnGap: "12px",
                cursor: "pointer",
                mb: "25px",
              }}
            >
              <th>Tên Nhân Viên</th>
              <IconArrowDown></IconArrowDown>
            </Grid>
            <Grid
              item
              xs={4}
              sx={{
                display: "flex",
                alignItems: "center",
                columnGap: "12px",
                cursor: "pointer",
                mb: "25px",
              }}
            >
              <th>Thao Tác</th>
              <IconArrowDown></IconArrowDown>
            </Grid>
            <Grid
              item
              xs={4}
              sx={{
                display: "flex",
                alignItems: "center",
                columnGap: "12px",
                cursor: "pointer",
                mb: "25px",
              }}
            >
              <th>Ngày Tạo</th>
              <IconArrowDown></IconArrowDown>
            </Grid>
          </Grid>
        </tr>
        <tr>
          <Box sx={{ borderTop: "1px solid #D9D9D9" }}>
            <Grid container columnSpacing={"220px"} sx={{ py: "20px" }}>
              <Grid
                item
                xs={4}
                sx={{
                  cursor: "pointer",
                }}
              >
                <td>Nguyễn Văn A</td>
              </Grid>
              <Grid
                item
                xs={4}
                sx={{
                  cursor: "pointer",
                }}
              >
                <td>Tạo đối tác Trần Văn B</td>
              </Grid>
              <Grid
                item
                xs={4}
                sx={{
                  cursor: "pointer",
                }}
              >
                <td>02-12-2010 08:00:00</td>
              </Grid>
            </Grid>
          </Box>
        </tr>
        <tr>
          <Box sx={{ borderTop: "1px solid #D9D9D9" }}>
            <Grid container columnSpacing={"220px"} sx={{ py: "20px" }}>
              <Grid
                item
                xs={4}
                sx={{
                  cursor: "pointer",
                }}
              >
                <td>Nguyễn Văn A</td>
              </Grid>
              <Grid
                item
                xs={4}
                sx={{
                  cursor: "pointer",
                }}
              >
                <td>Tạo đối tác Trần Văn B</td>
              </Grid>
              <Grid
                item
                xs={4}
                sx={{
                  cursor: "pointer",
                }}
              >
                <td>02-12-2010 08:00:00</td>
              </Grid>
            </Grid>
          </Box>
        </tr>
        <tr>
          <Box sx={{ borderTop: "1px solid #D9D9D9" }}>
            <Grid container columnSpacing={"220px"} sx={{ py: "20px" }}>
              <Grid
                item
                xs={4}
                sx={{
                  cursor: "pointer",
                }}
              >
                <td>Nguyễn Văn A</td>
              </Grid>
              <Grid
                item
                xs={4}
                sx={{
                  cursor: "pointer",
                }}
              >
                <td>Xóa đối tác Trần Văn B</td>
              </Grid>
              <Grid
                item
                xs={4}
                sx={{
                  cursor: "pointer",
                }}
              >
                <td>02-12-2010 08:00:00</td>
              </Grid>
            </Grid>
          </Box>
        </tr>
        <tr>
          <Box sx={{ borderTop: "1px solid #D9D9D9" }}>
            <Grid container columnSpacing={"220px"} sx={{ py: "20px" }}>
              <Grid
                item
                xs={4}
                sx={{
                  cursor: "pointer",
                }}
              >
                <td>Nguyễn Văn A</td>
              </Grid>
              <Grid
                item
                xs={4}
                sx={{
                  cursor: "pointer",
                }}
              >
                <td>Chỉnh sửa quán Trà Sữa ABC</td>
              </Grid>
              <Grid
                item
                xs={4}
                sx={{
                  cursor: "pointer",
                }}
              >
                <td>02-12-2010 08:00:00</td>
              </Grid>
            </Grid>
          </Box>
        </tr>
        <tr>
          <Box sx={{ borderTop: "1px solid #D9D9D9" }}>
            <Grid container columnSpacing={"220px"} sx={{ py: "20px" }}>
              <Grid
                item
                xs={4}
                sx={{
                  cursor: "pointer",
                }}
              >
                <td>Nguyễn Văn A</td>
              </Grid>
              <Grid
                item
                xs={4}
                sx={{
                  cursor: "pointer",
                }}
              >
                <td>Chỉnh sửa quán Trà Sữa ABC</td>
              </Grid>
              <Grid
                item
                xs={4}
                sx={{
                  cursor: "pointer",
                }}
              >
                <td>02-12-2010 08:00:00</td>
              </Grid>
            </Grid>
          </Box>
        </tr>
        <tr>
          <Box sx={{ borderTop: "1px solid #D9D9D9" }}>
            <Grid container columnSpacing={"220px"} sx={{ py: "20px" }}>
              <Grid
                item
                xs={4}
                sx={{
                  cursor: "pointer",
                }}
              >
                <td>Nguyễn Văn A</td>
              </Grid>
              <Grid
                item
                xs={4}
                sx={{
                  cursor: "pointer",
                }}
              >
                <td>Xóa đối tác Trần Văn B</td>
              </Grid>
              <Grid
                item
                xs={4}
                sx={{
                  cursor: "pointer",
                }}
              >
                <td>02-12-2010 08:00:00</td>
              </Grid>
            </Grid>
          </Box>
        </tr>
        <tr>
          <Box sx={{ borderTop: "1px solid #D9D9D9" }}>
            <Grid container columnSpacing={"220px"} sx={{ py: "20px" }}>
              <Grid
                item
                xs={4}
                sx={{
                  cursor: "pointer",
                }}
              >
                <td>Nguyễn Văn A</td>
              </Grid>
              <Grid
                item
                xs={4}
                sx={{
                  cursor: "pointer",
                }}
              >
                <td>Tạo đối tác Trần Văn B</td>
              </Grid>
              <Grid
                item
                xs={4}
                sx={{
                  cursor: "pointer",
                }}
              >
                <td>02-12-2010 08:00:00</td>
              </Grid>
            </Grid>
          </Box>
        </tr>
        <tr>
          <Box sx={{ borderTop: "1px solid #D9D9D9", px: "20px" }}>
            <Box
              sx={{
                pt: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    columnGap: "8px",
                    fontSize: "20px",
                    lineHeight: "30px",
                    color: "#2B2B2B",
                  }}
                >
                  <Box>Hiển thị</Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      columnGap: "5px",
                      px: "8px",
                      borderRadius: "3px",
                      border: "0.3px solid #D9D9D9",
                      cursor: "pointer",
                    }}
                  >
                    <Box sx={{ color: "#1074BA" }}>10</Box>
                    <IconArrowDown></IconArrowDown>
                  </Box>
                  <Box>trong 500 kết quả</Box>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <Box
                  sx={{
                    color: "#D9D9D9",
                    fontSize: "20px",
                    lineHeight: "30px",
                    mr: "20px",
                  }}
                >
                  Trước
                </Box>
                <Box
                  sx={{
                    backgroundColor: "#1074BA",
                    width: "50px",
                    height: "50px",
                    borderRadius: "5px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                  }}
                >
                  1
                </Box>
                <Box
                  sx={{
                    width: "50px",
                    height: "50px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#2B2B2B",
                    borderRight: "0.5px solid #D9D9D9",
                  }}
                >
                  2
                </Box>
                <Box
                  sx={{
                    width: "50px",
                    height: "50px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#2B2B2B",
                    borderRight: "0.5px solid #D9D9D9",
                  }}
                >
                  3
                </Box>
                <Box
                  sx={{
                    width: "50px",
                    height: "50px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#2B2B2B",
                    borderRight: "0.5px solid #D9D9D9",
                  }}
                >
                  4
                </Box>
                <Box
                  sx={{
                    width: "50px",
                    height: "50px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#2B2B2B",
                  }}
                >
                  Sau
                </Box>
              </Box>
            </Box>
          </Box>
        </tr>
      </table>
    </Box>
  );
}
