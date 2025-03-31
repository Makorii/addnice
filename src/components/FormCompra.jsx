import React, { useState } from "react";
import {
    Button,
    Container,
    FormControl,
    TextField,
    Typography,
} from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { es } from "date-fns/locale";
import { useNavigate } from "react-router";
import { format } from "date-fns";
import axios from "axios";
import { useStepper } from "../context/StepperContext";
import MiStepper from "./MiStepper";

export default function FormCompra() {
    const navigate = useNavigate();

    const [nroTicket, setNroTicket] = useState("");
    const [fechaCompra, setFechaCompra] = useState(null);
    const [tienda, setTienda] = useState("");
    const [errors, setErrors] = useState({}); 
    const { nextStep } = useStepper()

    const handleSubmit = async () => {
        const newErrors = {};

        // Validaciones
        if (!nroTicket.trim())
            newErrors.nroTicket = "El número de ticket es obligatorio";
        if (!fechaCompra)
            newErrors.fechaCompra = "La fecha de compra es obligatoria";
        if (!tienda.trim()) newErrors.tienda = "La tienda es obligatoria";

        // Si hay errores, no se envía el formulario
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        const fechaFormateada = format(fechaCompra, "dd-MM-yyyy");

        try {
            const response = await axios.post(
                "https://67db35b41fd9e43fe473ed65.mockapi.io/addnice/validacion-compra",
                {
                    nroTicket,
                    fechaCompra: fechaFormateada,
                    tienda,
                }
            );

            if (response.status >= 200 && response.status < 300) {
                nextStep()
                navigate("/nro-magico", {
                    state: { nroTicket, fechaCompra: fechaFormateada, tienda },
                });
            } else {
                console.error("Error al guardar los datos");
            }
        } catch (error) {
            console.error("Error de conexión:", error);
        }
    };

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
                ¡Descubre la magia de tu compra Addnice!
            </Typography>
            <Typography
                variant="body2"
                textAlign="center"
                sx={{ padding: "10px 0", width: { sm: "70%", md: "50%" } }}
            >
                Con tu "Código Mágico", cada compra puede sorprenderte. Sigue
                los siguientes pasos y descubre si eres uno de los ganadores.
            </Typography>
            <MiStepper />
            <FormControl
                fullWidth
                sx={{
                    gap: "10px",
                    width: { sm: "70%", md: "50%" },
                    alignItems: "center",
                    borderRadius: "20px",
                    backgroundColor: "#F4F4F4",
                    padding: "24px 16px",
                }}
            >
                <TextField
                    id="ticket"
                    label="Nro de Ticket"
                    variant="outlined"
                    value={nroTicket}
                    onChange={(e) => setNroTicket(e.target.value)}
                    fullWidth
                    error={!!errors.nroTicket} // Muestra error si existe
                    helperText={errors.nroTicket} // Mensaje de error
                />
                <LocalizationProvider
                    dateAdapter={AdapterDateFns}
                    localeText={es}
                    adapterLocale={es}
                    locale={es}
                >
                    <DatePicker
                        label="Fecha de compra"
                        sx={{ width: "100%" }}
                        value={fechaCompra}
                        onChange={(newFecha) => setFechaCompra(newFecha)}
                        format="dd/MM/yyyy"
                        slotProps={{
                            textField: {
                                error: !!errors.fechaCompra, // Muestra error
                                helperText: errors.fechaCompra, // Mensaje de error
                            },
                        }}
                    />
                </LocalizationProvider>
                <TextField
                    id="tienda"
                    label="Tienda"
                    variant="outlined"
                    value={tienda}
                    onChange={(e) => setTienda(e.target.value)}
                    fullWidth
                    error={!!errors.tienda}
                    helperText={errors.tienda}
                />
            </FormControl>
            <Button
                onClick={handleSubmit}
                variant="contained"
                sx={{
                    backgroundColor: "#E93CAC",
                    color: "#fff",
                    textTransform: "none",
                    margin: "24px 0",
                    width: "342px",
                    padding: "8px 0",
                }}
            >
                Siguiente
            </Button>
        </Container>
    );
}
