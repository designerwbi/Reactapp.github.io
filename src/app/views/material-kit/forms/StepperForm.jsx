import React from 'react'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/system'
import SimpleForm from './SimpleForm'

function getSteps() {
    return [
        'Select master blaster campaign settings',
        'Create an ad group',
        'Create an ad',
    ]
}

function getStepContent(stepIndex) {
    switch (stepIndex) {
        case 0:
            return SimpleForm()
        case 1:
            return SimpleForm()
        case 2:
            return SimpleForm()
        default:
            return
    }
}

export default function StepperForm() {
    const [activeStep, setActiveStep] = React.useState(0)
    const steps = getSteps()

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1)
    }

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1)
    }

    const handleReset = () => {
        setActiveStep(0)
    }

    return (
        <div>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <div>
                {activeStep === steps.length ? (
                    <div>
                        <Typography>All steps completed</Typography>
                        <Button
                            sx={{ mt: 2 }}
                            variant="contained"
                            color="secondary"
                            onClick={handleReset}
                        >
                            Reset
                        </Button>
                    </div>
                ) : (
                    <div>
                        <Typography>{getStepContent(activeStep)}</Typography>
                        <Box pt={2}>
                            <Button
                                variant="contained"
                                color="secondary"
                                disabled={activeStep === 0}
                                onClick={handleBack}
                            >
                                Back
                            </Button>
                            <Button
                                sx={{ ml: 2 }}
                                variant="contained"
                                color="primary"
                                onClick={handleNext}
                            >
                                {activeStep === steps.length - 1
                                    ? 'Finish'
                                    : 'Next'}
                            </Button>
                        </Box>
                    </div>
                )}
            </div>
        </div>
    )
}
