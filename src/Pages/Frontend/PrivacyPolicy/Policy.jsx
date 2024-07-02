import React from "react";
import DefaultFooter from "../../../layout/Frontend/DefaultFooter";
import DefaultLayout from "../../../layout/Frontend/DefaultLayout";
import "./Policy.css";
import { Box, Divider, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Policy as policy } from "../../../Constants/PrivacyPolicy";

export default function Policy() {
  const theme = useTheme();
  const primaryColor = theme.palette.primary.main;
  const secondaryColor = theme.palette.secondary.main;

  return (
    <div className="PolicyRoot">
      <DefaultLayout activePage={"Privacy Policy"} />
      <div className="subheading">
        <Box sx={{ width: "50vw", height: "8vh" }}>
          <Divider>
            <Typography color={secondaryColor} variant="h6">
              PRIVACY POLICY
            </Typography>
          </Divider>
        </Box>
      </div>

      <div className="PolicyContents">
        {policy.map((section, index) => (
          <div className="PolicySection">
            <Typography variant="h6">{section.title}</Typography>
            <Typography variant="body1">{section.description}</Typography>
          </div>
        ))}
      </div>

      <DefaultFooter activePage={"Privacy Policy"} />
    </div>
  );
}
