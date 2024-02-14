import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import FacebookIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/X";
import { Copyright } from "@mui/icons-material";
import logo from "../../assets/no-image.jpg";

export const Footer = () => {
  return (
    <div>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: 4, sm: 8 },
          py: { xs: 8, sm: 10 },
          textAlign: { sm: "center", md: "left" },
          borderTop: "1px solid #8884",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 4,
              minWidth: { xs: "100%", sm: "60%" },
            }}
          >
            <Box sx={{ width: { xs: "100%", sm: "60%" } }}>
              <Box sx={{ pb: "10px" }}>
                <img
                  style={{
                    objectFit: "cover",
                    borderRadius: "80px",
                  }}
                  width={70}
                  src={logo}
                  alt="logo of sitemark"
                />
              </Box>
              <Typography variant="body2" fontWeight={600} gutterBottom>
                Newsletter
              </Typography>
              <Typography variant="body2" color="text.secondary" mb={2}>
                Subscribe to our newsletter for weekly updates and promotions.
              </Typography>
              <Stack direction="row" spacing={1} useFlexGap>
                <TextField
                  id="outlined-basic"
                  hiddenLabel
                  size="small"
                  variant="outlined"
                  fullWidth
                  aria-label="Enter your email address"
                  placeholder="Your email address"
                  inputProps={{
                    autocomplete: "off",
                    ariaLabel: "Enter your email address",
                  }}
                />
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ flexShrink: 0 }}
                >
                  Subscribe
                </Button>
              </Stack>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              pt: { lg: 0, md: 0, sm: "20px", xs: "20px" },
            }}
          >
            <Box
              sx={{
                display: { xs: "flex", sm: "flex" },
                flexDirection: "column",
                gap: 1,
              }}
            >
              <Typography variant="body2" fontWeight={600}>
                Product
              </Typography>
              <Link color="text.secondary" href="#">
                Features
              </Link>
              <Link color="text.secondary" href="#">
                Testimonials
              </Link>
              <Link color="text.secondary" href="#">
                Highlights
              </Link>
              <Link color="text.secondary" href="#">
                Pricing
              </Link>
              <Link color="text.secondary" href="#">
                FAQs
              </Link>
            </Box>
            <Box
              sx={{
                display: { xs: "flex", sm: "flex" },
                flexDirection: "column",
                gap: 1,
              }}
            >
              <Typography variant="body2" fontWeight={600}>
                Company
              </Typography>
              <Link color="text.secondary" href="#">
                About us
              </Link>
              <Link color="text.secondary" href="#">
                Careers
              </Link>
              <Link color="text.secondary" href="#">
                Press
              </Link>
            </Box>
            <Box
              sx={{
                display: { xs: "flex", sm: "flex" },
                flexDirection: "column",
                gap: 1,
              }}
            >
              <Typography variant="body2" fontWeight={600}>
                Legal
              </Typography>
              <Link color="text.secondary" href="#">
                Terms
              </Link>
              <Link color="text.secondary" href="#">
                Privacy
              </Link>
              <Link color="text.secondary" href="#">
                Contact
              </Link>
            </Box>
          </Box>
        </Box>
      </Container>
    </div>
  );
};
