import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Container, Typography, Button } from "@mui/material";
import axios from "axios";
import VerificacionCode from "./VerificacionCode";
import { useStepper } from "../context/StepperContext";
import MiStepper from "./MiStepper";

export default function FormPremio() {
    const [codigosGanadores, setCodigosGanadores] = useState([]);
    const [codigo, setCodigo] = useState("");
    const [error, setError] = useState("");
    const [pantallaCarga, setPantallaCarga] = useState(false); // Nueva variable de estado
    const navigate = useNavigate();
    const { nextStep } = useStepper()

    useEffect(() => {
        const fetchCodigosGanadores = async () => {
            try {
                const response = await axios.get(
                    "https://65214fb8a4199548356d0a7d.mockapi.io/api/codigosGanadores"
                );
                setCodigosGanadores(response.data);
            } catch (error) {
                console.error("Error obteniendo los códigos ganadores:", error);
            }
        };

        fetchCodigosGanadores();
    }, []);

    useEffect(() => {
        if (codigosGanadores.length > 0) {
            const esGanador = Math.random() < 0.5;

            if (esGanador) {
                const codigoGanador =
                    codigosGanadores[
                        Math.floor(Math.random() * codigosGanadores.length)
                    ];
                setCodigo(codigoGanador.codigo);
            } else {
                const codigoPerdedor = Math.floor(
                    10000000 + Math.random() * 90000000
                ).toString();
                setCodigo(codigoPerdedor);
            }
        }
    }, [codigosGanadores]);

    const verificarCodigo = () => {
        setError("");

        if (!codigo) {
            setError("Hubo un problema al generar tu código. Inténtalo de nuevo.");
            return;
        }

        setPantallaCarga(true); // Mostrar pantalla de carga

        setTimeout(() => {
            const ganador = codigosGanadores.find((item) => item.codigo === codigo);

            if (ganador) {
                nextStep()
                navigate("/ganador", { state: { premio: ganador.premio } });
            } else {
                navigate("/segui-participando");
            }
        }, 5000);
    };

    // Si está en pantalla de carga, mostrar solo el componente VerificacionCode en toda la pantalla
    if (pantallaCarga) {
        return <VerificacionCode />;
    }

    return (
        <Container
            sx={{
                width: "100%",
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
                ¡Es hora de activar tu Código Mágico!
            </Typography>
            <Typography
                variant="body2"
                textAlign="center"
                sx={{ padding: "10px 0", width: { sm: "70%", md: "50%" } }}
            >
                Introduce tu código único en el campo de abajo y descubre si la
                magia está de tu lado.
            </Typography>
            <MiStepper />
            <Typography
                variant="h6"
                sx={{
                    padding: "15px",
                    backgroundColor: "#f5f5f5",
                    borderRadius: "8px",
                    fontWeight: "bold",
                    margin: "20px 0",
                }}
            >
                {codigo || "Generando código..."}
            </Typography>

            {error && (
                <Typography color="error" variant="body2">
                    {error}
                </Typography>
            )}

            <Button
                variant="contained"
                onClick={verificarCodigo}
                sx={{
                    backgroundColor: "#E93CAC",
                    color: "#fff",
                    textTransform: "none",
                    margin: "24px 0",
                    width: "342px",
                    padding: "8px 0",
                }}
            >
                Descubrir mi premio
            </Button>
        </Container>
    );
}


// import React, { useState } from "react";
// import {
//     Button,
//     Container,
//     FormControl,
//     TextField,
//     Typography,
// } from "@mui/material";
// import { useNavigate } from "react-router";
// import axios from "axios";

// export default function FormPremio() {
//     const [codigo, setCodigo] = useState("");
//     const [error, setError] = useState("");
//     const navigate = useNavigate();

// //funcion espiecifica para mockapi a modo prueba
//     const verificarCodigo = async () => {
//         setError("");

//         if (!codigo.trim()) {
//             setError("Por favor, ingresa un código");
//             return;
//         }

//         try {
//             const response = await axios.get(
//                 `https://65214fb8a4199548356d0a7d.mockapi.io/api/codigosGanadores`
//             );

//             const ganador = response.data.find((item) => item.codigo === codigo);

//             if (ganador) {
//                 navigate("/ganador", { state: { premio: ganador.premio } });
//             } else {
//                 navigate("/segui-participando");
//             }
//         } catch (error) {
//             console.error("Error verificando el código:", error);
//             setError("Hubo un problema al verificar el código. Inténtalo de nuevo.");
//         }
//     };

//     return (
//         <Container
//             sx={{
//                 width: "100%",
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "center",
//                 flex: 1,
//             }}
//         >
//             <Typography
//                 textAlign="center"
//                 sx={{ fontSize: "32px", fontWeight: "600", padding: "10px 0" }}
//             >
//                 ¡Es hora de activar tu Código Mágico!
//             </Typography>
//             <Typography
//                 variant="body2"
//                 textAlign="center"
//                 sx={{ padding: "10px 0", width: { sm: "70%", md: "50%" } }}
//             >
//                 Introduce tu código único en el campo de abajo y descubre si la
//                 magia está de tu lado.
//             </Typography>
//             <FormControl fullWidth sx={{ gap: "10px", width: { sm: "70%", md: "50%" }, alignItems:"center" }}>
//                 <TextField
//                     id="nro-premio"
//                     label="Código Mágico"
//                     variant="outlined"
//                     value={codigo}
//                     onChange={(e) => setCodigo(e.target.value)}
//                     error={!!error}
//                     helperText={error}
//                     fullWidth
//                 />
//                 <Button
//                     variant="contained"
//                     onClick={verificarCodigo}
//                     sx={{
//                         backgroundColor: "#E93CAC",
//                         color: "#fff",
//                         textTransform: "none",
//                         margin: "24px 0",
//                         width:"342px"
//                     }}
//                 >
//                     Descubrir mi premio
//                 </Button>
//             </FormControl>
//         </Container>
//     );
// }
