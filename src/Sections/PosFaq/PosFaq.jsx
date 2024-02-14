import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Typography,
} from "@mui/material";
import React, { useState } from "react";
import faq from "../../assets/faq_img.png";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
export const PosFaq = () => {
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
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
                    POS FAQ
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
                    Frequently asked questions
                </Typography>
            </Box>

            <Box
                sx={{
                    display: {
                        lg: "flex",
                        md: "flex",
                        sm: "block",
                        xs: "block",
                    },
                    justifyContent: "space-between",
                    alignItems: "center",
                    py: "40px",
                }}
            >
                <Box
                    sx={{
                        width: { lg: "40%", md: "40%", sm: "100%", xs: "100%" },
                        pb: { lg: 0, md: 0, sm: "30px", xs: "30px" },
                    }}
                >
                    <figure>
                        <img width={300} src={faq} alt="" />
                    </figure>
                </Box>
                {/* according */}
                <Box
                    component="div"
                    sx={{
                        width: { lg: "60%", md: "60%", sm: "100%", xs: "100%" },
                    }}
                >
                    <Accordion
                        expanded={expanded === "panel1"}
                        onChange={handleChange("panel1")}
                    >
                        <AccordionSummary
                            expandIcon={<ArrowDownwardIcon />}
                            aria-controls="according1-content"
                            id="according1-panel"
                        >
                            <Typography
                                variant="h5"
                                sx={{
                                    color: "darkblue",
                                    fontWeight: 500,
                                }}
                            >
                                Q1. What is a point of sale?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography
                                sx={{
                                    color: "#888",
                                }}
                            >
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Suspendisse malesuada lacus ex,
                                sit amet blandit leo lobortis eget. Lorem ipsum
                                dolor sit amet, consectetur adipiscing elit.
                                Suspendisse malesuada lacus ex, sit amet blandit
                                leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion
                        expanded={expanded === "panel2"}
                        onChange={handleChange("panel2")}
                    >
                        <AccordionSummary
                            expandIcon={<ArrowDownwardIcon />}
                            aria-controls="according1-content"
                            id="according1-panel"
                        >
                            <Typography
                                variant="h5"
                                sx={{
                                    color: "darkblue",
                                    fontWeight: 500,
                                }}
                            >
                                Q2. What is the best POS system?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography
                                sx={{
                                    color: "#888",
                                }}
                            >
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Suspendisse malesuada lacus ex,
                                sit amet blandit leo lobortis eget. Lorem ipsum
                                dolor sit amet, consectetur adipiscing elit.
                                Suspendisse malesuada lacus ex, sit amet blandit
                                leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion
                        expanded={expanded === "panel3"}
                        onChange={handleChange("panel3")}
                    >
                        <AccordionSummary
                            expandIcon={<ArrowDownwardIcon />}
                            aria-controls="according1-content"
                            id="according1-panel"
                        >
                            <Typography
                                variant="h5"
                                sx={{
                                    color: "darkblue",
                                    fontWeight: 500,
                                }}
                            >
                                Q3. How does a POS system work?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography
                                sx={{
                                    color: "#888",
                                }}
                            >
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Suspendisse malesuada lacus ex,
                                sit amet blandit leo lobortis eget. Lorem ipsum
                                dolor sit amet, consectetur adipiscing elit.
                                Suspendisse malesuada lacus ex, sit amet blandit
                                leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion
                        expanded={expanded === "panel4"}
                        onChange={handleChange("panel4")}
                    >
                        <AccordionSummary
                            expandIcon={<ArrowDownwardIcon />}
                            aria-controls="according1-content"
                            id="according1-panel"
                        >
                            <Typography
                                variant="h5"
                                sx={{
                                    color: "darkblue",
                                    fontWeight: 500,
                                }}
                            >
                                Q4. How to use a POS System?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography
                                sx={{
                                    color: "#888",
                                }}
                            >
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Suspendisse malesuada lacus ex,
                                sit amet blandit leo lobortis eget. Lorem ipsum
                                dolor sit amet, consectetur adipiscing elit.
                                Suspendisse malesuada lacus ex, sit amet blandit
                                leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion
                        expanded={expanded === "panel5"}
                        onChange={handleChange("panel5")}
                    >
                        <AccordionSummary
                            expandIcon={<ArrowDownwardIcon />}
                            aria-controls="according1-content"
                            id="according1-panel"
                        >
                            <Typography
                                variant="h5"
                                sx={{
                                    color: "darkblue",
                                    fontWeight: 500,
                                }}
                            >
                                Q5. How can i make a payment?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography
                                sx={{
                                    color: "#888",
                                }}
                            >
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Suspendisse malesuada lacus ex,
                                sit amet blandit leo lobortis eget. Lorem ipsum
                                dolor sit amet, consectetur adipiscing elit.
                                Suspendisse malesuada lacus ex, sit amet blandit
                                leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Box>
                {/* according */}
            </Box>
        </div>
    );
};
