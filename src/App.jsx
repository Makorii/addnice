import { BrowserRouter, Route, Routes } from "react-router";
import Footer from "./components/Footer";
import FormRegistro from "./components/FormRegistro";
import FormPremio from "./components/FormPremio";
import Header from "./components/Header";
import FormCompra from "./components/FormCompra";
import VistaGanador from "./components/VistaGanador";
import VistaPerdedor from "./components/VistaPerdedor";
import StepperProvider from "./context/StepperContext";

function App() {
    return (
        <>
            <StepperProvider>
                <BrowserRouter>
                    <Header />
                    <Routes>
                        <Route path="/" element={<FormRegistro />} />
                        <Route
                            path="/validacion-de-compra"
                            element={<FormCompra />}
                        />
                        <Route path="/nro-magico" element={<FormPremio />} />
                        <Route path="ganador" element={<VistaGanador />} />
                        <Route
                            path="segui-participando"
                            element={<VistaPerdedor />}
                        />
                    </Routes>
                    <Footer />
                </BrowserRouter>
            </StepperProvider>
        </>
    );
}

export default App;
