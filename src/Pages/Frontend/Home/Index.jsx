import React from "react";
import DefaultLayout from "../../../layout/Frontend/DefaultLayout";
import "./Index.css";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import SendIcon from '@mui/icons-material/Send';


export default function Index() {
  return (
    <div className="root">
      <div className="header">
        <DefaultLayout />
        <div className="phrase">
          <div className="phrase1">
            <Typography sx={{ color: "#C0DFA1" }} variant="h3">
              C.M.S
            </Typography>
          </div>
          <div className="phrase2">
            <Typography sx={{ color: "#C0DFA1" , fontStyle : 'italic' }} variant="h5">
              " ONE STOP SOLUTION FOR MANAGING CASES "
            </Typography>
          </div>
          <div className="phrase2Button">
            <Button className="aboutUSButton" variant="contained" endIcon={<SendIcon />}>
              ABOUT US
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
