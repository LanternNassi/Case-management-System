import React from "react";
import "./FAQ.css";
import DefaultLayout from "../../../layout/Frontend/DefaultLayout";
import DefaultFooter from "../../../layout/Frontend/DefaultFooter";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import StepButton from "@mui/material/StepButton";

import { FAQs } from "../../../Constants/FAQs";

export default function FAQ() {
  const theme = useTheme();
  const primaryColor = theme.palette.primary.main;
  const secondaryColor = theme.palette.secondary.main;

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className="rootFAQ">
      <DefaultLayout activePage={"FAQ"} />

      <div className="subheadingFAQ">
        <Box sx={{ width: "50vw", height: "8vh" }}>
          <Divider>
            <Typography color={secondaryColor} variant="h6">
              FREQUENTLY ASKED QUESTIONS
            </Typography>
          </Divider>
        </Box>
      </div>

      <div className="contentsFAQ">
        <div className="FAQQuestions">
          <Stepper activeStep={activeStep} orientation="vertical">
            {FAQs.map((step, index) => (
              <Step key={step.question}>
                <StepLabel optional={<Typography>{step.answer}</Typography>}>
                  <Typography variant="h6">{step.question}</Typography>
                </StepLabel>
                <StepContent></StepContent>
              </Step>
            ))}
          </Stepper>

          <Button
            className="aboutUSButton"
            variant="contained"
            endIcon={<ContactSupportIcon />}
          >
            Send Message
          </Button>
        </div>

        <div>
          <div className="FAQPic"></div>
        </div>
      </div>

      <DefaultFooter activePage={"FAQ"} />
    </div>
  );
}
