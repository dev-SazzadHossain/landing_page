import { Box, Typography } from "@mui/material";
import React from "react";
import svg from "../../assets/pricing_icon_2.svg";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

const tiers = [
    {
        title: "Free",
        price: "0",
        description: [
            "10 users included",
            "2 GB of storage",
            "Help center access",
            "Email support",
        ],
        buttonText: "Sign up for free",
        buttonVariant: "outlined",
    },
    {
        title: "Professional",
        subheader: "Recommended",
        price: "15",
        description: [
            "20 users included",
            "10 GB of storage",
            "Help center access",
            "Priority email support",
            "Dedicated team",
            "Best deals",
        ],
        buttonText: "Start now",
        buttonVariant: "contained",
    },
    {
        title: "Enterprise",
        price: "30",
        description: [
            "50 users included",
            "30 GB of storage",
            "Help center access",
            "Phone & email support",
        ],
        buttonText: "Contact us",
        buttonVariant: "outlined",
    },
];

const Pricing = () => {
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
                    Pricing Plan
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
                    The best choice for you
                </Typography>
            </Box>
            <Box
                sx={{
                    py: "40px",
                }}
            >
                <Grid
                    container
                    spacing={3}
                    alignItems="center"
                    justifyContent="center"
                    sx={{ cursor: "pointer" }}
                >
                    {tiers.map((tier) => (
                        <Grid
                            item
                            key={tier.title}
                            xs={12}
                            sm={tier.title === "Enterprise" ? 12 : 6}
                            md={4}
                        >
                            <Card
                                sx={{
                                    p: 2,
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: 4,
                                    border:
                                        tier.title === "Professional"
                                            ? "1px solid"
                                            : undefined,
                                    borderColor:
                                        tier.title === "Professional"
                                            ? "primary.main"
                                            : undefined,
                                    background:
                                        tier.title === "Professional"
                                            ? "linear-gradient(#033363, #021F3B)"
                                            : undefined,
                                }}
                            >
                                <CardContent>
                                    <Box
                                        sx={{
                                            mb: 1,
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                            color:
                                                tier.title === "Professional"
                                                    ? "primary.contrastText"
                                                    : "",
                                        }}
                                    >
                                        <Typography component="h3" variant="h6">
                                            {tier.title}
                                        </Typography>
                                        {tier.title === "Professional" && (
                                            <Chip
                                                icon={<AutoAwesomeIcon />}
                                                label={tier.subheader}
                                                size="small"
                                                sx={{
                                                    background: (theme) =>
                                                        theme.palette.mode ===
                                                        "light"
                                                            ? ""
                                                            : "none",
                                                    backgroundColor:
                                                        "primary.contrastText",
                                                    "& .MuiChip-label": {
                                                        color: "primary.dark",
                                                    },
                                                    "& .MuiChip-icon": {
                                                        color: "primary.dark",
                                                    },
                                                }}
                                            />
                                        )}
                                    </Box>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "baseline",
                                            color:
                                                tier.title === "Professional"
                                                    ? "primary.contrastText"
                                                    : undefined,
                                        }}
                                    >
                                        <Typography component="h3" variant="h2">
                                            ${tier.price}
                                        </Typography>
                                        <Typography component="h3" variant="h6">
                                            &nbsp; per month
                                        </Typography>
                                    </Box>
                                    <Divider
                                        sx={{
                                            my: 2,
                                            opacity: 0.2,
                                            borderColor: "grey.500",
                                        }}
                                    />
                                    {tier.description.map((line) => (
                                        <Box
                                            key={line}
                                            sx={{
                                                py: 1,
                                                display: "flex",
                                                gap: 1.5,
                                                alignItems: "center",
                                            }}
                                        >
                                            <CheckCircleRoundedIcon
                                                sx={{
                                                    width: 20,
                                                    color:
                                                        tier.title ===
                                                        "Professional"
                                                            ? "primary.light"
                                                            : "primary.main",
                                                }}
                                            />
                                            <Typography
                                                component="text"
                                                variant="subtitle2"
                                                sx={{
                                                    color:
                                                        tier.title ===
                                                        "Professional"
                                                            ? "primary.contrastText"
                                                            : undefined,
                                                }}
                                            >
                                                {line}
                                            </Typography>
                                        </Box>
                                    ))}
                                </CardContent>
                                <CardActions>
                                    <Button
                                        fullWidth
                                        variant={tier.buttonVariant}
                                        component="a"
                                        target="_blank"
                                    >
                                        {tier.buttonText}
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </div>
    );
};

export default Pricing;
