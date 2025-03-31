import {
    Button,
    Container,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Typography,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import axios from "axios";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useStepper } from "../context/StepperContext";
import MiStepper from "./MiStepper";

export default function FormRegistro() {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [genero, setGenero] = useState("");
    const [fechaNacimiento, setFechaNacimiento] = useState(null);
    const [telefono, setTelefono] = useState("");
    const [mail, setMail] = useState("");
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const { nextStep } = useStepper();

    const handleChange = (event) => {
        setGenero(event.target.value);
    };

    const handleSubmit = async () => {
        const newErrors = {};

        // Validaciones generales
        if (!nombre.trim()) newErrors.nombre = "El nombre es obligatorio";
        if (!apellido.trim()) newErrors.apellido = "El apellido es obligatorio";
        if (!telefono.trim()) newErrors.telefono = "El teléfono es obligatorio";
        if (!mail.trim()) {
            newErrors.mail = "El correo es obligatorio";
        } else {
            // Validación del correo (solo Gmail y Hotmail)
            const emailRegex = /^[a-zA-Z0-9._%+-]+@(gmail\.com|hotmail\.com)$/;
            if (!emailRegex.test(mail)) {
                newErrors.mail = "Mail no valido";
            }
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
        setErrors({});

        const fechaFormateada = fechaNacimiento
            ? format(fechaNacimiento, "dd-MM-yyyy")
            : null;
        try {
            const response = await axios.post(
                "https://67db35b41fd9e43fe473ed65.mockapi.io/addnice/usuarios",
                {
                    nombre,
                    apellido,
                    genero,
                    fechaNacimiento: fechaFormateada,
                    telefono,
                    mail,
                }
            );

            if (response.status >= 200 && response.status < 300) {
                nextStep()
                navigate("/validacion-de-compra");
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
                textAlign="center"
                variant="body2"
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
                    padding: "24px 16px"
                }}
            >
                <TextField
                    id="Nombre"
                    label="Nombre"
                    variant="outlined"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    error={!!errors.nombre}
                    helperText={errors.nombre}
                    fullWidth
                />
                <TextField
                    id="Apellido"
                    label="Apellido"
                    variant="outlined"
                    value={apellido}
                    onChange={(e) => setApellido(e.target.value)}
                    error={!!errors.apellido}
                    helperText={errors.apellido}
                    fullWidth
                />

                <FormControl fullWidth variant="outlined">
                    <InputLabel id="genero-label">Género</InputLabel>
                    <Select
                        labelId="genero-label"
                        id="genero"
                        value={genero}
                        onChange={handleChange}
                        label="Género"
                    >
                        <MenuItem value="femenino">Femenino</MenuItem>
                        <MenuItem value="masculino">Masculino</MenuItem>
                        <MenuItem value="no-especificar">
                            No especificar
                        </MenuItem>
                    </Select>
                </FormControl>

                <LocalizationProvider
                    dateAdapter={AdapterDateFns}
                    adapterLocale={es}
                    locale={es}
                >
                    <DatePicker
                        label="Fecha de nacimiento"
                        sx={{ width: "100%" }}
                        value={fechaNacimiento}
                        onChange={(newfechaNacimiento) =>
                            setFechaNacimiento(newfechaNacimiento)
                        }
                        format="dd/MM/yyyy"
                    />
                </LocalizationProvider>
                <TextField
                    id="telefono"
                    label="Teléfono"
                    variant="outlined"
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                    error={!!errors.telefono}
                    helperText={errors.telefono}
                    fullWidth
                />
                <TextField
                    id="mail"
                    label="Mail"
                    variant="outlined"
                    value={mail}
                    onChange={(e) => setMail(e.target.value)}
                    error={!!errors.mail}
                    helperText={errors.mail}
                    fullWidth
                />
            </FormControl>
            <Button
                onClick={handleSubmit}
                variant="contained"
                sx={{
                    backgroundColor: "#E93CAC",
                    color: "#fff",
                    margin: "24px 0",
                    textTransform: "none",
                    width: "342px",
                    padding: "8px 0"
                }}
            >
                Siguiente
            </Button>
        </Container>
    );
}
