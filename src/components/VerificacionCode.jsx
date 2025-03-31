import { Container, Typography } from "@mui/material";
import React from "react";

export default function VerificacionCode() {
    return (
        <Container
            sx={{
                width: "100%",
                backgroundImage: "url('/addnice.gif')",
                backgroundSize: "cover",
                backgroundPositionY: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                flex: 1,
            }}
        >
            <Typography
                textAlign="center"
                sx={{ fontSize: "32px", fontWeight: "600", padding: "10px 0" }}
            >
                Estamos verificando tu Código Mágico...
            </Typography>
        </Container>
    );
}


//revisar gif en desk!!!