import React from "react";
import { Box, Container } from "@mui/material";
import Navbar from "../../Sections/Navbar/Navbar";
import Gap from "../../utils/Gap/Gap";
import Hero from "../../Sections/Hero/Hero";
import Inventory from "../../Sections/Inventory/Inventory";
import About from "../../Sections/About/About";
import Feature from "../../Sections/Feature/Feature";
import Pricing from "../../Sections/Pricing/Pricing";
import { PosFaq } from "../../Sections/PosFaq/PosFaq";
import { Footer } from "../../Sections/Footer/Footer";
import { Contact } from "../../Sections/Contact/Contact";

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
      <Box
        id="home"
        sx={{
          width: {
            lg: "1200px",
            md: "100%",
            sm: "100%",
            xs: "100%",
          },
          pt: "80px",
        }}
      >
        <Hero />
      </Box>
      <Box sx={{ width: { lg: "1200px", md: "100%", sm: "100%", xs: "100%" } }}>
        <Inventory />
      </Box>
      <Box
        id="about"
        sx={{ width: { lg: "1200px", md: "100%", sm: "100%", xs: "100%" } }}
      >
        <About />
      </Box>
      <Box
        id="feature"
        sx={{ width: { lg: "1200px", md: "100%", sm: "100%", xs: "100%" } }}
      >
        <Feature />
      </Box>
      <Box sx={{ width: { lg: "1200px", md: "100%", sm: "100%", xs: "100%" } }}>
        <Pricing />
      </Box>
      <Box sx={{ width: { lg: "1200px", md: "100%", sm: "100%", xs: "100%" } }}>
        <PosFaq />
      </Box>
      <Box
        id="contact"
        sx={{ width: { lg: "1200px", md: "100%", sm: "100%", xs: "100%" } }}
      >
        <Contact />
      </Box>
      <Box sx={{ width: { lg: "1200px", md: "100%", sm: "100%", xs: "100%" } }}>
        <Footer />
      </Box>
    </Container>
  );
};
