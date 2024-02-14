import { Box, CardContent, Typography } from "@mui/material";
import AssignmentIcon from "@mui/icons-material/Assignment";
import React from "react";
const cartInfo = [
    {
        id: 1,
        title: "Recipe management & costing",
        subTitle:
            "But I must explain to you how all this mistaken in denouncing pleasure and praising pain was born and I will give.",
        icon: (
            <AssignmentIcon
                sx={{
                    fontSize: "52px",
                }}
            />
        ),
    },
    {
        id: 2,
        title: "Stock management & inventory",
        subTitle:
            "But I must explain to you how all this mistaken in denouncing pleasure and praising pain was born and I will give.",
        icon: (
            <AssignmentIcon
                sx={{
                    fontSize: "52px",
                }}
            />
        ),
    },
    {
        id: 3,
        title: "Purchase management systeme",
        subTitle:
            "But I must explain to you how all this mistaken in denouncing pleasure and praising pain was born and I will give.",
        icon: (
            <AssignmentIcon
                sx={{
                    fontSize: "52px",
                }}
            />
        ),
    },
    {
        id: 4,
        title: "Powerful inventory reporting",
        subTitle:
            "But I must explain to you how all this mistaken in denouncing pleasure and praising pain was born and I will give.",
        icon: (
            <AssignmentIcon
                sx={{
                    fontSize: "52px",
                }}
            />
        ),
    },
];

const Inventory = () => {
    return (
        <Box
            sx={{
                py: "20px",
                display: "block",
            }}
        >
            <Typography
                variant="h2"
                sx={{
                    textAlign: "center",
                    textTransform: "capitalize",
                    fontSize: {
                        lg: "45px",
                        md: "45px",
                        sm: "35px",
                        xs: "35px",
                    },
                    fontWeight: { lg: "600", md: "600", sm: "600", xs: "600" },
                }}
            >
                Our best inventory
            </Typography>
            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: {
                        lg: " repeat(4, 1fr)",
                        md: " repeat(2, 1fr)",
                        sm: " repeat(2, 1fr)",
                        xs: " repeat(1, 1fr)",
                    },
                    gap: "10px",
                    py: "60px",
                }}
            >
                {cartInfo?.map(({ id, title, subTitle, icon }) => (
                    <CardContent
                        sx={{
                            boxShadow: 1,
                            bgcolor: "#fff",
                            borderRadius: "10px",
                            py: "30px",
                            cursor: "pointer",
                            transform:
                                id == 2
                                    ? {
                                          lg: "translateY(-25px)",
                                          md: "translateY(-25px)",
                                      }
                                    : id == 4
                                    ? {
                                          lg: "translateY(-25px)",
                                          md: "translateY(-25px)",
                                      }
                                    : "",
                            transition: "box-shadow 0.3s, transform 0.3s ",
                            "&:hover": {
                                boxShadow:
                                    "0px 8px 12px rgba(241, 148, 148, 0.3)",
                            },
                            "&:hover .zoomOut": {
                                transform: "scale(0.8)",
                                boxShadow:
                                    "0px 8px 12px rgba(241, 148, 148, 0.3)",
                            },
                        }}
                    >
                        <Box
                            className="zoomOut"
                            sx={{
                                py: "10px",
                                width: "70px",
                                height: "70px",
                                borderRadius: "10px",
                                textAlign: "center",
                                backgroundImage:
                                    "linear-gradient(to right, rgba(255, 192, 203, 0.5), rgba(0, 0, 255, 0.5), rgba(128, 128, 128, 0.5))",
                                transition: "box-shadow 0.3s, transform 0.3s ",
                            }}
                        >
                            {icon}
                        </Box>
                        <Typography
                            sx={{ fontSize: "24px", pt: "10px" }}
                            color="text.secondary"
                            gutterBottom
                        >
                            {title}
                        </Typography>
                        <Typography
                            component="p"
                            sx={{ textAlign: "justify", wordSpacing: "-1px" }}
                        >
                            {subTitle}
                        </Typography>
                    </CardContent>
                ))}
            </Box>
        </Box>
    );
};

export default Inventory;
