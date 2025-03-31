import { createContext, useContext, useState } from "react";

export const StepperContext = createContext();

const StepperProvider = ({ children }) => {
    const [activeStep, setActiveStep] = useState(0);

    const nextStep = () => {
        setActiveStep((prev) => {
            return prev + 1;
        });
    };

    const resetStep = () => setActiveStep(0);

    const prevStep = () => {
        setActiveStep((prev) => {
            return Math.max(prev - 1, 0);
        });
    };

    const data = {
        activeStep, 
        nextStep, 
        prevStep,
        resetStep
    }

    return (
        <StepperContext.Provider value={data}>
            {children}
        </StepperContext.Provider>
    );
}


export function useStepper() {
    const context = useContext(StepperContext);
    if (!context) {
        throw new Error("useStepper debe usarse dentro de un StepperProvider");
    }
    return context;
}
export default StepperProvider