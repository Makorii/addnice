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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export default function VistaPerdedor() {
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
            <Typography
                textAlign="center"
                sx={{ fontSize: "32px", fontWeight: "600" }}
            >
                Gracias por participar
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
                        Gift Card por $15.000
                    </Typography>
                </CardContent>
            </Card>
            <Typography
                textAlign="center"
                variant="body2"
                sx={{ width: { xs: "85%", sm: "70%" } }}
            >
                Canjea tu gift card por cualquier producto Addnice siguiendo los
                siguientes pasos
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
                    <ListItemText primary="Accede a nuestra tienda online o física." />
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
                    <ListItemText primary="Utiliza este código de descuento: [Código de gift card]" />
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
                    <ListItemText primary="¡Eligí lo que más te guste y disfrutalo!" />
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
                    fontSize: "16px",
                }}
            >
                Visitar la tienda <FontAwesomeIcon icon={faCartShopping} />
            </Button>
        </Container>
    );
}
