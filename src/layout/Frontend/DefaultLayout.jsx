import React from "react";
import "./DefaultLayout.css";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Pages } from "../../Constants/Pages";
import { useTheme } from "@mui/material/styles";
import { NavLink } from "react-router-dom";

export default function DefaultLayout({activePage}) {
  const theme = useTheme();
  const primaryColor = theme.palette.primary.main;
  const secondaryColor = theme.palette.secondary.main;

  return (
    <div style = {{background : (activePage == 'Home') ? ('transparent') : (primaryColor) }} className="topLayout1">
      <div className="heading">
        <Typography variant="h5">CASE Management System</Typography>
      </div>
      <div className="pages">
        {Pages.map((section) => (
          <NavLink to = {section.link} style={{ textDecoration: "none", color: "inherit" }}>
            <Typography sx = {{color : (activePage == section.name) ? secondaryColor : "white"}} variant="overline" display="block">
              {section.name}
            </Typography>
          </NavLink>
        ))}
        <NavLink to = {"/Login"} style={{ textDecoration: "none", color: "inherit" }}>
        <Button
          variant="outlined"
          sx={{ color: "white" }}
          startIcon={<AccountCircleOutlinedIcon />}
        >
          LOGIN
        </Button>
        </NavLink>

      </div>
    </div>
  );
}
