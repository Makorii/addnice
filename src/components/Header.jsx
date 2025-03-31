import { CardMedia, Container } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";
import { useStepper } from "../context/StepperContext";

export default function Header() {
    const navigate = useNavigate();
    const { resetStep } = useStepper();

    const handleClick = () => {
        resetStep();
        navigate("/");
    };
    return (
        <Container
            sx={{
                display: "flex",
                justifyContent: "left",
                padding: "16px",
                backgroundColor: "#fff",
                maxWidth: "100% !important",
            }}
        >
            <Container>
                <CardMedia
                    component="img"
                    width="46px"
                    height="46px"
                    image="/addnice.png"
                    alt="Logo Addnice"
                    onClick={handleClick}
                    sx={{
                        width: "auto",
                        objectFit: "contain",
                    }}
                />
            </Container>
        </Container>
    );
}
