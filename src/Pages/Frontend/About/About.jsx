import React from "react";
import DefaultFooter from "../../../layout/Frontend/DefaultFooter";
import DefaultLayout from "../../../layout/Frontend/DefaultLayout";
import "./About.css";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";


export default function About() {

  const theme = useTheme();
  const primaryColor = theme.palette.primary.main;
  const secondaryColor = theme.palette.secondary.main;

  return (
    <div className="rootAbout">
      <DefaultLayout activePage = {'About Us'} />

      <div className="subheadingAbout">
        <Box sx={{ width: "50vw", height: "8vh" }}>
          <Divider>
            <Typography color={secondaryColor} variant="h6">
              ABOUT THE C.M.S
            </Typography>
          </Divider>
        </Box>
      </div>

      <div className="ActionAbout">
        <div className="ActionImageAbout"></div>

        <div className="ActionDescriptionAbout">
          <Typography variant="h4">Streamlined Justice</Typography>
          <Typography variant="body1">
            A well-designed Case Information Management System (CIMS)
            strengthening judicial fairness by automating processes, reducing
            bias, and ensuring transparency. Through data centralization,
            automated scheduling, and real-time updates, a CIMS promotes
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
      <DefaultFooter/>
    </div>
  );
}
