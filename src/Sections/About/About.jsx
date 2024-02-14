import React from "react";
import aboutImg from "../../assets/hero_img.png";
import { Box, Typography } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
const About = () => {
    return (
        <Box
            component="div"
            sx={{
                display: { lg: "flex", md: "flex", sm: "block", xs: "block" },
                justifyContent: "center",
                alignItems: "center",
                py: "30px",
            }}
        >
            <Box
                sx={{
                    width: { lg: "50%", md: "50%", sm: "100%", xs: "100%" },
                }}
            >
                <img
                    width="100%"
                    style={{
                        height: "400px",
                        objectFit: "contain",
                    }}
                    src={aboutImg}
                    alt="about"
                />
            </Box>
            <Box
                sx={{
                    width: { lg: "50%", md: "50%", sm: "100%", xs: "100%" },
                }}
            >
                <Typography variant="h5">About The POS</Typography>
                <Typography
                    variant="h2"
                    sx={{
                        fontSize: {
                            lg: "45px",
                            md: "45px",
                            sm: "25px",
                            xs: "25px",
                        },
                        py: { lg: "5px", md: "5px", sm: "20px", xs: "20px" },
                        fontWeight: 600,
                        textAlign: "start",
                        letterSpacing: "1.9px",
                        wordSpacing: "-5px",
                    }}
                >
                    Best solution for point of sale about details
                </Typography>
                <Typography
                    variant="subtitle1"
                    sx={{ py: "5px", display: "inline-block" }}
                >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                </Typography>
                <Typography>
                    <Typography
                        variant="p"
                        sx={{ py: "5px", display: "inline-block" }}
                    >
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                    </Typography>
                </Typography>
                <Box
                    sx={{
                        display: "flex",
                        mt: "20px",
                    }}
                >
                    <Box>
                        <Box sx={{ display: "flex", gap: "8px", mb: "20px" }}>
                            <Box>
                                <Box
                                    sx={{
                                        width: "30px",
                                        height: "30px",
                                        borderRadius: "50%",
                                        boxShadow: 1,
                                        color: "blue",
                                        mt: {
                                            lg: "5px",
                                            md: "5px",
                                            sm: "1px",
                                            xs: "1px",
                                        },
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        "&:hover .text_shadow": {
                                            textShadow:
                                                "1px 1px 2px pink, -1px -1px 2px blue",
                                            color: "red",
                                            bgcolor: "blue",
                                        },
                                    }}
                                >
                                    <DoneIcon />
                                </Box>
                            </Box>
                            <Box>
                                <Typography
                                    variant="h3"
                                    className="text_shadow"
                                    sx={{
                                        fontSize: {
                                            lg: "25px",
                                            md: "25px",
                                            sm: "22px",
                                            xs: "22px",
                                        },
                                    }}
                                >
                                    Other point of sale information
                                </Typography>
                                <Typography
                                    variant="p"
                                    className="bodyText"
                                    sx={{ pt: "5px", display: "inline-block" }}
                                >
                                    But I must explain to you how all this
                                    mistaken in denouncing pleasure and praising
                                    pain was born and I will give.
                                </Typography>
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "start",
                                gap: "8px",
                            }}
                        >
                            <Box>
                                <Box
                                    sx={{
                                        width: "30px",
                                        height: "30px",
                                        borderRadius: "50%",
                                        boxShadow: 1,
                                        color: "blue",
                                        mt: {
                                            lg: "5px",
                                            md: "5px",
                                            sm: "1px",
                                            xs: "1px",
                                        },
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
                                    <DoneIcon />
                                </Box>
                            </Box>
                            <Box>
                                <Typography
                                    variant="h3"
                                    sx={{
                                        fontSize: {
                                            lg: "25px",
                                            md: "25px",
                                            sm: "22px",
                                            xs: "22px",
                                        },
                                    }}
                                >
                                    Other point of sale information
                                </Typography>
                                <Typography
                                    variant="p"
                                    sx={{ pt: "5px", display: "inline-block" }}
                                >
                                    But I must explain to you how all this
                                    mistaken in denouncing pleasure and praising
                                    pain was born and I will give.
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            width: "40%",
                            display: {
                                lg: "block",
                                md: "none",
                                sm: "none",
                                xs: "none",
                            },
                        }}
                    >
                        <img
                            width="100%"
                            style={{
                                height: "300px",
                                objectFit: "contain",
                            }}
                            src={aboutImg}
                            alt=""
                        />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default About;
