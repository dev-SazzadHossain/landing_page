import { Box, Button, ButtonBase, TextField, Typography } from "@mui/material";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import MailIcon from "@mui/icons-material/Mail";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import { ButtonBox } from "../../utils/Button/Button";

export const Contact = () => {
  return (
    <Box
      sx={{
        display: { lg: "flex", md: "flex", sm: "block", xs: "block" },

        py: "60px",
      }}
    >
      <Box sx={{ width: { lg: "50%", md: "50%", sm: "100%", xs: "100%" } }}>
        <Box>
          <Typography
            variant="h4"
            sx={{
              pt: "30px",
              pb: "10px",
              display: "block",
            }}
          >
            Contract Us
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontWeight: "700",
              fontSize: {
                lg: "45px",
                md: "45px",
                sm: "35px",
                xs: "35px",
              },
            }}
          >
            If you have any quiries, fill free to contact us
          </Typography>
          <Typography component="p" sx={{ py: "5px" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.Lorem Ipsum is simply dummy text of the Lorem Ipsum is
            simply dummy text of the printing and typesetting.
          </Typography>
        </Box>
        <Box sx={{ display: "flex", gap: "10px", pt: "20px" }}>
          <Box>
            <AddIcCallIcon sx={{ fontSize: "28px", color: "#000" }} />
          </Box>
          <Box>
            {" "}
            <Typography>Contract Number</Typography>
            <Typography>+606-243-4966</Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", gap: "10px", pt: "10px" }}>
          <MailIcon sx={{ fontSize: "28px", color: "#000" }} />
          <Box>
            {" "}
            <Typography>Email Address</Typography>
            <Typography>demo@gmail.com</Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", gap: "10px", pt: "10px" }}>
          <HomeIcon sx={{ fontSize: "28px", color: "#000" }} />

          <Box>
            {" "}
            <Typography>Address</Typography>
            <Typography>4117 Leroy LaneHarold, KY 41635,</Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={{ width: { lg: "50%", md: "50%", sm: "100%", xs: "100%" } }}>
        <Typography
          variant="h4"
          sx={{
            pt: "25px",
            pb: "10px",
            display: "block",
          }}
        >
          Please fill up the form
        </Typography>
        <form>
          <Box sx={{ display: "flex", gap: "10px" }}>
            <TextField
              sx={{ width: "50%" }}
              id="filled-basic"
              label="Name"
              variant="filled"
            />
            <TextField
              sx={{ width: "50%" }}
              id="filled-basic"
              label="Email"
              variant="filled"
            />
          </Box>
          <TextField
            sx={{ width: "100%", mt: "15px" }}
            id="filled-basic"
            label="Email"
            variant="filled"
          />
          <TextField
            id="filled-multiline-static"
            label="Write Your Message"
            multiline
            rows={4}
            sx={{ width: "100%", mt: "15px" }}
            variant="filled"
          />
          <Box sx={{ pt: "20px" }}>
            <ButtonBox cl variant="contained">
              Send Message
            </ButtonBox>
          </Box>
        </form>
      </Box>
    </Box>
  );
};
