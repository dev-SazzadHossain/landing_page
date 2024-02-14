import React from "react";
import { Box, Container } from "@mui/material";
import Navbar from "../../Sections/Navbar/Navbar";
import Gap from "../../utils/Gap/Gap";
import Hero from "../../Sections/Hero/Hero";

export const LandingPage = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        backgroundImage:
          "linear-gradient(to right, #ffffff, #dcdcdc, #ffffffc9)",
      }}
    >
      <Box
        sx={{
          width: { lg: "1200px", md: "100%", sm: "100%", xs: "100%" },
        }}
      >
        <Navbar />
      </Box>
      <Box sx={{ width: { lg: "1200px", md: "100%", sm: "100%", xs: "100%" } }}>
        <Hero />
      </Box>
    </Container>
  );
};
