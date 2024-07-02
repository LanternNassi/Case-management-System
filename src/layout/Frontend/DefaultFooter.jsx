import React from "react";
import "./DefaultFooter.css";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { Pages } from "../../Constants/Pages";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";

export default function DefaultFooter({activePage}) {
  const theme = useTheme();
  const primaryColor = theme.palette.primary.main;
  const secondaryColor = theme.palette.secondary.main;


  return (
    <div style={{ backgroundColor: primaryColor }} className="footroot">
      <div className="SpotLight">
        <Box sx={{ width: "50vw", height: "8vh" }}>
          <Divider>
            <Typography sx={{ color: "#C0DFA1" }} variant="h4">
              CASE INFORMATION SYSTEM
            </Typography>
          </Divider>
        </Box>

        <div className="footlinks">
          {Pages.map((page) => (
            <NavLink
              to={page.link}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Typography sx = {{color : (activePage == page.name) ? secondaryColor : "white"}} variant="overline" display="block">
                {page.name}
              </Typography>
            </NavLink>
          ))}
        </div>

        <Typography sx={{ color: "white" }} variant="h6">
          @ CopyRight 2024
        </Typography>
      </div>
    </div>
  );
}
