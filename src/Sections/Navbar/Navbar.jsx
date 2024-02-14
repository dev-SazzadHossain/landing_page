import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
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
import img from "../../assets/pricing_icon_2.svg";
import { ButtonBox } from "../../utils/Button/Button";

const Navbar = () => {
  const { hash } = useLocation();

  const [open, setOpen] = useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  return (
    <div>
      <div>
        <Box
          sx={{
            position: "fixed",
            width: "100%",
            left: 0,
            zIndex: 300,
            boxShadow: 1,
            backgroundImage:
              "linear-gradient(to right, #ffffff, #dcdcdc, #ffffffe7)",
          }}
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
                <a href="#home">
                  <Typography
                    sx={{
                      color: "black",
                    }}
                  >
                    <img src={img} alt="" />
                  </Typography>
                </a>
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
                    <a href="#home">
                      <Typography
                        variant="body2"
                        color="text.primary"
                        sx={{
                          fontFamily: "sans-serif",
                          fontSize: "16px",
                          color: hash == "#home" ? "blue" : "",
                        }}
                      >
                        Home
                      </Typography>
                    </a>
                  </MenuItem>
                  <MenuItem sx={{ py: "6px", px: "12px" }}>
                    <a href="#about">
                      <Typography
                        variant="body2"
                        color="text.primary"
                        sx={{
                          fontFamily: "sans-serif",
                          fontSize: "16px",
                          color: hash == "#about" ? "blue" : "",
                        }}
                      >
                        About
                      </Typography>
                    </a>
                  </MenuItem>
                  <MenuItem sx={{ py: "6px", px: "12px" }}>
                    <a href="#feature">
                      <Typography
                        variant="body2"
                        color="text.primary"
                        sx={{
                          fontFamily: "sans-serif",
                          fontSize: "16px",
                          color: hash == "#feature" ? "blue" : "",
                        }}
                      >
                        Feature
                      </Typography>
                    </a>
                  </MenuItem>

                  <MenuItem sx={{ py: "6px", px: "12px" }}>
                    <a href="#contact">
                      <Typography
                        variant="body2"
                        color="text.primary"
                        sx={{
                          fontFamily: "sans-serif",
                          fontSize: "16px",
                          color: hash == "#contact" ? "blue" : "",
                        }}
                      >
                        Contact
                      </Typography>
                    </a>
                  </MenuItem>
                </Box>
              </Box>
              <Box
                sx={{
                  width: "20%",
                  margin: "0 auto",

                  p: "2px 3px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  display: { lg: "block", md: "block", sm: "none", xs: "none" },
                }}
              >
                <ButtonBox
                  variant="contained"
                  sx={{
                    textAlign: "center",

                    width: "80%",
                  }}
                >
                  Sign Up
                </ButtonBox>
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
                    <MenuIcon sx={{ fontSize: "28px" }} />
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
                    <MenuItem>
                      <a href="#about">About</a>
                    </MenuItem>
                    <MenuItem>
                      <a href="#feature">Feature</a>
                    </MenuItem>

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
