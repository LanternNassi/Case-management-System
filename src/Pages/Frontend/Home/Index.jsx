import React from "react";
import DefaultLayout from "../../../layout/Frontend/DefaultLayout";
import "./Index.css";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import SendIcon from "@mui/icons-material/Send";
import { useTheme } from "@mui/material/styles";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import StorageIcon from "@mui/icons-material/Storage";
import ScheduleIcon from "@mui/icons-material/Schedule";
import Box from "@mui/material/Box";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import LocationSearchingIcon from "@mui/icons-material/LocationSearching";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";

import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Paper from "@mui/material/Paper";
import { services } from "../../../Constants/Services";
import DefaultFooter from "../../../layout/Frontend/DefaultFooter";

export default function Index() {
  const [expanded, setExpanded] = React.useState(false);
  const [activeStep, setActiveStep] = React.useState(3);

  const theme = useTheme();
  const primaryColor = theme.palette.primary.main;
  const secondaryColor = theme.palette.secondary.main;

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  
  const FAQS = [
    {
      panel: "panel1",
      category: "Users",
      question: "What are the target users for this system ?",
      answer: "Judges",
    },
    {
      panel: "panel2",
      category: "System",
      question: "What are some of the services offered by the system ?",
      answer: "Priotization , Scheduling ",
    },
    {
      panel: "panel3",
      category: "Judicial",
      question: "Under which court should this system be used ?",
      answer: "High court",
    },
  ];

  const steps = [
    {
      label: "CASE INFORMATION",
      description:
        "This includes entry of the case information into our system which is stored in to the database to facilitate retrival",
    },
    {
      label: "CASE PRIOTIZATION",
      description:
        "The system uses various attributes about the case such as time required to get proof , offence , etc to priotize cases",
    },
    {
      label: "CASE SCHEDULING",
      description:
        "The system then gets the priotization levels and schedules the cases accordingly based on priority",
    },
  ];

  return (
    <div className="root">
      <div className="header">
        <DefaultLayout activePage={'Home'}/>
        {/* <div className="phrase">
          <div className="phrase1">
            <Typography sx={{ color: "#C0DFA1" }} variant="h3">
              C.M.S
            </Typography>
          </div>
          <div className="phrase2">
            <Typography
              sx={{ color: "#C0DFA1", fontStyle: "italic" }}
              variant="h5"
            >
              " ONE STOP SOLUTION FOR MANAGING CASES "
            </Typography>
          </div>
          <div className="phrase2Button">
            <Button
              className="aboutUSButton"
              variant="contained"
              endIcon={<DoubleArrowIcon />}
            >
              ABOUT US
            </Button>
          </div>
        </div> */}
      </div>

      <div className="services">
        <div className="subheading">
          <Box sx={{ width: "50vw", height: "8vh" }}>
            <Divider>
              <Typography color={secondaryColor} variant="h6">
                SERVICES
              </Typography>
            </Divider>
          </Box>
        </div>

        <div className="subheading2">
          <Typography
            sx={{ display: "flex", flexDirection: "row" }}
            variant="h4"
          >
            What do we have to&nbsp;
            {
              <Typography sx={{ color: secondaryColor }} variant="h4">
                offer.
              </Typography>
            }
          </Typography>
        </div>

        <div className="Services">
          <div className="listServices">
            {services.map((service) => (
              <div className="Service">
                <div className="ServiceIcon">{<service.icon/>}</div>
                <div className="ServiceWords">
                  <Box
                    sx={{
                      height: 40,
                      width: "19vw",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start",
                    }}
                  >
                    <Typography variant="h6">{service.name}</Typography>
                  </Box>
                  <Typography variant="body2">{service.description}</Typography>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="subheading">
        <Box sx={{ width: "50vw", height: "8vh" }}>
          <Divider>
            <Typography color={secondaryColor} variant="h6">
              JUDICIAL FAIRNESS
            </Typography>
          </Divider>
        </Box>
      </div>

      <div className="Action">
        <div className="ActionImage"></div>

        <div className="ActionDescription">
          <Typography variant="h4">Streamlined Justice</Typography>
          <Typography variant="body1">
            A well-designed Case Information Management System (CIMS)
            strengthening judicial fairness by automating processes, reducing
            bias, and ensuring transparency. Through data centralization,
            automated scheduling, and real-time updates, our CIMS promotes
            impartial treatment and trust in the legal system.
          </Typography>

          <Button
            className="aboutUSButton"
            variant="contained"
            endIcon={<DoubleArrowIcon />}
          >
            Create account
          </Button>
        </div>
      </div>

      <div className="subheading">
        <Box sx={{ width: "50vw", height: "8vh" }}>
          <Divider>
            <Typography color={secondaryColor} variant="h6">
              FREQUENTLY ASKED QUESTIONS
            </Typography>
          </Divider>
        </Box>
      </div>

      <div className="FAQ">
        <div style={{ width: "80vw" }}>
          {FAQS.map((FAQ, index) => (
            <Accordion
              expanded={expanded === FAQ.panel}
              onChange={handleChange(FAQ.panel)}
              sx={{ backgroundColor: primaryColor, color: "white" }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                aria-controls={FAQ.panel + "bh-content"}
                id={FAQ.panel + "bh-header"}
              >
                <Typography
                  sx={{ color: "white", width: "33%", flexShrink: 0 }}
                >
                  {FAQ.category}
                </Typography>
                <Typography sx={{ color: "white" }}>{FAQ.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  {FAQ.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>

      <Box sx={{ height: "10vh", width: "100vw" }} />

      <div className="systemSkeleton">
        <div className="systemDescription">
          <Box sx={{ width: "50vw", height: "8vh" }}>
            <Divider>
              <Typography color={secondaryColor} variant="h6">
                SYSTEM SKELETON
              </Typography>
            </Divider>
          </Box>

          <Typography variant="h6">
            This is how we process our information from the starting point when
            case information is entered and how it is processed to reach the
            scheduling instance
          </Typography>

          <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((step, index) => (
              <Step key={step.label}>
                <StepLabel
                  optional={<Typography>{step.description}</Typography>}
                >
                  <Typography variant="h6">{step.label}</Typography>
                </StepLabel>
                <StepContent></StepContent>
              </Step>
            ))}
          </Stepper>
          <Box
            sx={{
              width: "50vw",
              height: "12vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              className="aboutUSButton"
              variant="contained"
              endIcon={<PhoneEnabledIcon />}
            >
              CONTACT US
            </Button>
          </Box>
        </div>
        <div className="systemLight" />
      </div>

      <Box sx={{ height: "10vh", width: "100vw" }} />

      <DefaultFooter activePage={'Home'}/>
    </div>
  );
}
