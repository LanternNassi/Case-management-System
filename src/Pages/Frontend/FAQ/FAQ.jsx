import React from "react";
import "./FAQ.css";
import DefaultLayout from "../../../layout/Frontend/DefaultLayout";
import DefaultFooter from "../../../layout/Frontend/DefaultFooter";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function FAQ() {
  const theme = useTheme();
  const primaryColor = theme.palette.primary.main;
  const secondaryColor = theme.palette.secondary.main;

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
        <div className="FAQQuestions"></div>

        <div>
          <div className="FAQPic"></div>
        </div>
      </div>

      <DefaultFooter />
    </div>
  );
}
