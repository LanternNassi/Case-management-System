import React from "react";
import DefaultFooter from "../../../layout/Frontend/DefaultFooter";
import DefaultLayout from "../../../layout/Frontend/DefaultLayout";
import "./Contact.css";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import emailjs from "emailjs-com";

export default function Contact() {
  const theme = useTheme();
  const primaryColor = theme.palette.primary.main;
  const secondaryColor = theme.palette.secondary.main;

  const VITE_SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
  const VITE_TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
  const VITE_USER_ID = import.meta.env.VITE_USER_ID;

  console.log(VITE_USER_ID)

  function sendEmail(e) {
    e.preventDefault();    

    emailjs.sendForm(VITE_SERVICE_ID,  VITE_TEMPLATE_ID, e.target, VITE_USER_ID)
      .then((result) => {
          window.location.reload()   
      }, (error) => {
          console.log(error.text);
      });
  }

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

      <div className="contentsContact">
          <form className="ContactForm" onSubmit={sendEmail}>
            <TextField
              sx={{ width: "30vw" }}
              id="outlined-basic"
              label="Your Email Address"
              name="from_email"
              variant="outlined"
            />
            <TextField
              sx={{ width: "30vw" }}
              id="outlined-basic"
              label="FullName"
              name="from_name"
              variant="outlined"
            />
            <TextField
              sx={{ width: "30vw" }}
              id="outlined-basic"
              label="Subject"
              name="subject"
              variant="outlined"
            />
            <TextField
              sx={{ width: "30vw" }}
              id="outlined-multiline-static"
              label="Message"
              multiline
              name="html_message"
              rows={4}
            />
            <Button
              type='submit'
              className="aboutUSButton"
              variant="contained"
              endIcon={<ForwardToInboxIcon />}
            >
              Send Message
            </Button>
          </form>

        <div className="ContactPic"></div>
      </div>

      <DefaultFooter activePage={"Contact Us"} />
    </div>
  );
}
