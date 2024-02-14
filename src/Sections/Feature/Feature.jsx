import { Box, CardContent, Typography } from "@mui/material";
import AssignmentIcon from "@mui/icons-material/Assignment";
import React from "react";
const cartInfo = [
    {
        id: 1,
        title: "Effortless card",
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
        title: "Software accuracy",
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
        title: "Customization",
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
        title: "Customer data",
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
        id: 5,
        title: "Seamless checkout",
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
        id: 6,
        title: "High speed process",
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
export default function Feature() {
    return (
        <div>
            <Box>
                <Typography
                    variant="h4"
                    sx={{
                        textAlign: "center",
                        pt: "30px",
                        pb: "10px",
                        display: "block",
                    }}
                >
                    POS Features
                </Typography>
                <Typography
                    variant="h2"
                    sx={{
                        textAlign: "center",
                        fontWeight: "700",
                        fontSize: {
                            lg: "45px",
                            md: "45px",
                            sm: "35px",
                            xs: "35px",
                        },
                    }}
                >
                    Available features
                </Typography>
            </Box>
            {/* feature */}
            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: {
                        lg: " repeat(3, 1fr)",
                        md: " repeat(3, 1fr)",
                        sm: " repeat(2, 1fr)",
                        xs: " repeat(1, 1fr)",
                    },
                    gap: { lg: "30px", md: "10px", sm: "10px", xs: "10px" },
                    py: "40px",
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
                            display: "flex",
                            flexDirection: {
                                lg: "row",
                                md: "row",
                                sm: "column",
                                xs: "row",
                            },
                            gap: "20px",
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
                        <Box>
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
                                    transition:
                                        "box-shadow 0.3s, transform 0.3s ",
                                }}
                            >
                                {icon}
                            </Box>
                        </Box>
                        <Box>
                            <Typography
                                sx={{ fontSize: "24px" }}
                                color="text.secondary"
                                gutterBottom
                            >
                                {title}
                            </Typography>
                            <Typography
                                component="p"
                                sx={{
                                    textAlign: "justify",
                                    wordSpacing: "-1px",
                                }}
                            >
                                {subTitle}
                            </Typography>
                        </Box>
                    </CardContent>
                ))}
            </Box>
            {/* feature */}
        </div>
    );
}
