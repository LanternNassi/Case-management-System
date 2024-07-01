import React from "react";
import DefaultFooter from "../../../layout/Frontend/DefaultFooter";
import DefaultLayout from "../../../layout/Frontend/DefaultLayout";
import "./Contact.css";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

export default function Contact() {
  const theme = useTheme();
  const primaryColor = theme.palette.primary.main;
  const secondaryColor = theme.palette.secondary.main;

  return (
    <div className="rootContact">
      <DefaultLayout activePage={"Contact Us"} />

      <div className="subheadingAbout">
        <Box sx={{ width: "50vw", height: "8vh" }}>
          <Divider>
            <Typography color={secondaryColor} variant="h6">
              TALK TO US
            </Typography>
          </Divider>
        </Box>
      </div>

      

      <DefaultFooter />
    </div>
  );
}
