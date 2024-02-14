import React, { useState } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  return (
    <div>
      <div>
        <Box
        //   sx={{
        //     bgcolor: "white",
        //   }}
        >
          <Container>
            <Toolbar
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Box
                sx={{
                  width: "50%",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  sx={{
                    color: "black",
                  }}
                >
                  Logo
                </Typography>
              </Box>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  px: 0,
                }}
              >
                <Box sx={{ display: { xs: "none", md: "flex", lg: "flex" } }}>
                  <MenuItem
                    sx={{
                      py: "6px",
                      px: "12px",
                    }}
                  >
                    <Typography
                      variant="body2"
                      color="text.primary"
                      sx={{
                        fontFamily: "sans-serif",
                        fontSize: "16px",
                      }}
                    >
                      Home
                    </Typography>
                  </MenuItem>
                  <MenuItem sx={{ py: "6px", px: "12px" }}>
                    <Typography
                      variant="body2"
                      color="text.primary"
                      sx={{
                        fontFamily: "sans-serif",
                        fontSize: "16px",
                      }}
                    >
                      About
                    </Typography>
                  </MenuItem>
                  <MenuItem sx={{ py: "6px", px: "12px" }}>
                    <Typography
                      variant="body2"
                      color="text.primary"
                      sx={{
                        fontFamily: "sans-serif",
                        fontSize: "16px",
                      }}
                    >
                      Feature
                    </Typography>
                  </MenuItem>
                  <MenuItem sx={{ py: "6px", px: "12px" }}>
                    <Typography
                      variant="body2"
                      color="text.primary"
                      sx={{
                        fontFamily: "sans-serif",
                        fontSize: "16px",
                      }}
                    >
                      Blog
                    </Typography>
                  </MenuItem>
                  <MenuItem sx={{ py: "6px", px: "12px" }}>
                    <Typography
                      variant="body2"
                      color="text.primary"
                      sx={{
                        fontFamily: "sans-serif",
                        fontSize: "16px",
                      }}
                    >
                      Contact
                    </Typography>
                  </MenuItem>
                </Box>
              </Box>
              <Box
                sx={{
                  display: { xs: "none", md: "flex", lg: "flex" },
                  gap: 0.5,
                  alignItems: "center",
                }}
              >
                {/* <Button
                                    color="primary"
                                    variant="text"
                                    size="small"
                                    component="a"
                                    target="_blank"
                                >
                                    <Link to="">Sign in</Link>
                                </Button> */}
                <Button
                  color="primary"
                  variant="contained"
                  size="small"
                  component="a"
                  target="_blank"
                >
                  Sign up
                </Button>
              </Box>
              {/* ToggleButton And Driver */}
              <Box
                sx={{
                  display: {
                    lg: "none",
                    md: "block",
                    sm: "block",
                    xs: "block",
                  },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                  }}
                >
                  <Button
                    variant="text"
                    color="primary"
                    aria-label="menu"
                    onClick={toggleDrawer(true)}
                    sx={{
                      minWidth: "30px",
                      p: "4px",
                      display: {
                        lg: "none",
                        md: "none",
                        sm: "block",
                        xs: "block",
                      },
                    }}
                  >
                    <MenuIcon />
                  </Button>
                </Box>
                {/* ToggleDrawer */}
                <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
                  <Box
                    sx={{
                      minWidth: "60dvw",
                      p: 2,
                      backgroundColor: "background.paper",
                      flexGrow: 1,
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "end",
                        flexGrow: 1,
                      }}
                    ></Box>
                    <MenuItem>Home</MenuItem>
                    <MenuItem>About</MenuItem>
                    <MenuItem>Feature</MenuItem>
                    <MenuItem>Blog</MenuItem>
                    <MenuItem>Contact</MenuItem>
                    <Divider />
                    <MenuItem>
                      <Button
                        color="primary"
                        variant="contained"
                        component="a"
                        target="_blank"
                        sx={{ width: "100%" }}
                      >
                        Sign up
                      </Button>
                    </MenuItem>
                  </Box>
                </Drawer>
                {/* ToggleDrawer */}
              </Box>
              {/* ToggleButton And Driver */}
            </Toolbar>
          </Container>
        </Box>
      </div>
    </div>
  );
};

export default Navbar;
