import { Button } from "@mui/material";
import React from "react";
import EastIcon from "@mui/icons-material/East";

export const ButtonBox = ({ style, children }) => {
  return (
    <Button
      variant="contained"
      sx={{
        fontWeight: "600",
        display: "flex",
        alignItems: "center",
        ...style,
        gap: "4px",
        transition: "box-shadow 0.3s backgroundImage 0.3s color 0.3s",
        "&:hover": {
          boxShadow: "0px 8px 12px rgba(0, 0, 0, 0.3)",
          backgroundImage: "linear-gradient(to right, #f3a2b0, #a9c0d7)",
          color: "#000",
        },
      }}
    >
      {children} {children == "Sign Up" ? "" : <EastIcon />}
    </Button>
  );
};
