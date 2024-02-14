import { Box } from "@mui/material";
import React from "react";

const Gap = ({ children }) => {
    return (
        <Box
            sx={{
                pt: "20px",
            }}
        >
            {children}
        </Box>
    );
};

export default Gap;
