import {
    Button,
    Container,
    List,
    ListItem,
    ListItemText,
    Typography,
} from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { useLocation } from "react-router";
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export default function VistaGanador() {
    const { width, height } = useWindowSize();
    const location = useLocation(); //recuperamos los datos pasados en navigate()
    const premio = location.state?.premio || "¡Felicidades! Has ganado.";
    return (
        <Container
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "16px",
                flex: 1,
                width: { sm: "70%", md: "50%" },
            }}
        >
            <Confetti width={width} height={height} />
            <Typography
                textAlign="center"
                sx={{ fontSize: "32px", fontWeight: "600" }}
            >
                ¡Felicidades!
            </Typography>
            <Typography
                textAlign="center"
                sx={{ fontSize: "32px", fontWeight: "600" }}
            >
                Tu Código Mágico es ganador
            </Typography>
            <Card sx={{ padding: "10px 0", minWidth: "342px" }}>
                <CardMedia
                    component="img"
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg"
                    alt="foto del premio"
                />
                <CardContent>
                    <Typography
                        variant="body2"
                        sx={{ color: "text.secondary" }}
                    >
                        {premio}
                    </Typography>
                </CardContent>
            </Card>
            <Typography textAlign="center" variant="body2">
                Retira tu premio siguiendo los siguientes pasos
            </Typography>
            <List>
                <ListItem
                    sx={{
                        "&::before": {
                            content: '"•"',
                            marginRight: 2,
                            fontSize: 20,
                        },
                    }}
                >
                    <ListItemText primary="Visita tu tienda Addnice más cercana." />
                </ListItem>
                <ListItem
                    sx={{
                        "&::before": {
                            content: '"•"',
                            marginRight: 2,
                            fontSize: 20,
                        },
                    }}
                >
                    <ListItemText primary="Presenta tu tarjeta de código mágico" />
                </ListItem>
                <ListItem
                    sx={{
                        "&::before": {
                            content: '"•"',
                            marginRight: 2,
                            fontSize: 20,
                        },
                    }}
                >
                    <ListItemText primary="¡Disfruta de tu recompensa!" />
                </ListItem>
            </List>
            <Button
                variant="contained"
                sx={{
                    backgroundColor: "#E93CAC",
                    color: "#fff",
                    textTransform: "none",
                    minWidth: "342px",
                    padding: "8px 0",
                }}
            >
                Descargar instrucciones
            </Button>
            <Typography
                textAlign="center"
                sx={{ fontSize: "32px", fontWeight: "600" }}
            >
                ¡Gracias por vivir la magia de Addnice!
            </Typography>
            <Typography textAlign="center" variant="body2">
                Sigue explorando nuestra colección y descubre más sorpresas en
                cada compra.
            </Typography>
            <Button
                variant="outlined"
                sx={{
                    border: "2px solid #E93CAC",
                    borderRadius: "12px",
                    color: "#000",
                    textTransform: "none",
                    fontWeight: "600",
                    minWidth: "342px",
                    margin: "24px 0",
                    padding: "8px 0",
                    fontSize: "16px"
                }}
            >
                Visitar la tienda <FontAwesomeIcon icon={faCartShopping} />
            </Button>
        </Container>
    );
}
