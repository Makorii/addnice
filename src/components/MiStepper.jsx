import { useStepper } from "../context/StepperContext";
import { Stepper, Step, StepLabel, StepConnector } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFileLines,
    faTicket,
    faUser,
} from "@fortawesome/free-solid-svg-icons";

const steps = ["", "", ""];

const StepIcon = ({ icon, active, completed }) => {
    const icons = {
        1: <FontAwesomeIcon icon={faUser} style={{ fontSize: "20px" }} />,
        2: <FontAwesomeIcon icon={faFileLines} />,
        3: <FontAwesomeIcon icon={faTicket} />,
    };

    const iconToDisplay = icons[icon] || <FontAwesomeIcon icon={faUser} />;

    const color = completed || active ? "#2CCCD3" : "#D2D2D2";
    const background = completed || active ? "#FFFFFF" : "#464646";
    const boxShadow =
        completed || active
            ? "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
            : "none";

    return (
        <FontAwesomeIcon
            icon={iconToDisplay.props.icon}
            style={{
                color,
                fontSize: "24px",
                background,
                padding: "20px",
                borderRadius: "100%",
                boxShadow,
                width:"30px",
                height:"30px"
            }}
        />
    );
};

export default function MiStepper() {
    const { activeStep } = useStepper();

    return (
        <Stepper
            sx={{ margin: "24px auto" }}
            activeStep={activeStep}
            connector={
                <StepConnector
                    sx={{
                        width: "50px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        "& .MuiStepConnector-line": {
                            border: "1px solid black",
                        },
                    }}
                />
            }
        >
            {steps.map((label, index) => (
                <Step key={index}>
                    <StepLabel
                        StepIconComponent={(props) => (
                            <StepIcon
                                icon={index + 1}
                                active={index === activeStep}
                                completed={index < activeStep}
                            />
                        )}
                    >
                        {label}
                    </StepLabel>
                </Step>
            ))}
        </Stepper>
    );
}
