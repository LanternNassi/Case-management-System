import React from "react";
import "./DefaultLayout.css";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

export default function DefaultLayout() {
  const pages = [
    {
      name: "Home",
    },
    {
      name: "About Us",
    },
    {
      name: "Contact Us",
    },
    {
      name: "FAQ",
    },
    {
      name: "Privacy Policy",
    },
    {
      name: "Services",
    },
    
  ];

  return (
    <div className="topLayout1">
      <div className="heading">
        <Typography variant="h5">CASE Management System</Typography>
      </div>
      <div className="pages">
        {pages.map((section) => (
          <a>
            <Typography variant="overline" display="block">
              {section.name}
            </Typography>
          </a>
        ))}
        <Button
          variant="outlined"
          sx={{ color: "white" }}
          startIcon={<AccountCircleOutlinedIcon />}
        >
          LOGIN
        </Button>
      </div>
    </div>
  );
}
