import { Box, CardMedia, Container, Link, Typography } from "@mui/material";
import React from "react";

const preventDefault = (event) => event.preventDefault();

export default function Footer() {
    return (
        <Container
            component="footer"
            sx={{
                minWidth: "100%",
                display: "flex",
                flexDirection: "column",
                backgroundColor: "#fff",
                padding: "0 !important",
            }}
        >
            <Container
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "16px 16px",
                }}
            >
                <Box>
                    <CardMedia
                        width="46px"
                        height="46px"
                        component="img"
                        image="/addnice.png"
                        alt="Logo Addnice"
                        sx={{
                            objectFit: "contain"
                        }}
                    />
                </Box>
                <Box
                    sx={{
                        width: "100%",
                        gap: "14px",
                        display: "flex",
                        justifyContent: "flex-end",
                        alignItems: "center",
                        typography: "body1",
                        "& > :not(style) ~ :not(style)": {
                            ml: 2,
                        },
                    }}
                    onClick={preventDefault}
                >
                    <Link href="#" underline="none">
                        <i className="fa-brands fa-tiktok"></i>
                    </Link>
                    <Link href="#" underline="none">
                        <i className="fa-brands fa-square-facebook"></i>
                    </Link>
                    <Link href="#" underline="none">
                        <i className="fa-brands fa-instagram"></i>
                    </Link>
                </Box>
            </Container>
            <Typography
                variant="caption"
                textAlign="center"
                sx={{paddingBottom: "8px", fontWeight:"300 !important" }}
            >
                Addnice | Terminos y condiciones
            </Typography>
        </Container>
    );
}
