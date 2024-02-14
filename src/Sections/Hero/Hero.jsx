import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import hero from "../../assets/hero_img.png";
import { ButtonBox } from "../../utils/Button/Button";

const Hero = () => {
  return (
    <Box
      sx={{
        display: { lg: "flex", md: "flex", sm: "flex", xs: "flex" },
        flexDirection: {
          lg: "row",
          md: "row",
          sm: "column",
          xs: "column",
        },
        justifyContent: "center",
        overflow: "hidden",
        pb: "20px",
        width: "100%",
        margin: "0 auto",
      }}
    >
      <Box
        sx={{
          width: { lg: "50%", md: "50%", sm: "100%", xs: "100%" },
          order: { xs: 2, lg: 1 },
        }}
      >
        <Typography
          variant="h5"
          sx={{
            pt: "30px",
            color: "#47C4C0",
            fontWeight: "400",
            fontSize: { lg: "25px" },
          }}
        >
          Free Forever For All Users.
        </Typography>
        <Typography
          variant="h1"
          sx={{
            py: "10px",
            fontWeight: "700",
            lineHeight: {
              lg: "70px",
              md: "60px",
              sm: "50px",
              xs: "50px",
            },
            fontSize: {
              lg: "55px",
              md: "45px",
              sm: "35px",
              xs: "35px",
            },
          }}
        >
          Easy-to-use Point of Sale
        </Typography>
        <Typography
          sx={{
            fontSize: {
              lg: "22px",
              md: "22px",
              sm: "18px",
              xs: "18px",
            },
            color: "#889",
          }}
        >
          You may start selling in a matter of minutes and easy to use.
          Appropriate for all devices.
        </Typography>
        <Box
          sx={{
            mt: "30px",
          }}
        >
          <ButtonBox style={{}} />
        </Box>
      </Box>
      <Box
        sx={{
          width: { lg: "50%", md: "50%", sm: "100%", xs: "100%" },
          order: { xs: 1, lg: 2 },
        }}
      >
        <img
          width="100%"
          src={hero}
          alt=""
          style={{
            height: "450px",
            objectFit: "contain",
          }}
        />
      </Box>
    </Box>
  );
};

export default Hero;
