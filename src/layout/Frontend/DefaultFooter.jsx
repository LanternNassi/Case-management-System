import React from "react";
import "./DefaultFooter.css";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { Pages } from "../../Constants/Pages";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

export default function DefaultFooter() {
  const theme = useTheme();
  const primaryColor = theme.palette.primary.main;
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
            <a>
              <Typography variant="overline" display="block">
                {page.name}
              </Typography>
            </a>
          ))}
        </div>

        <Typography sx ={{color : 'white'}} variant="h6">
           @ CopyRight 2024
        </Typography>
      </div>

      
    </div>
  );
}
