import React from "react";
import DefaultFooter from "../../../layout/Frontend/DefaultFooter";
import DefaultLayout from "../../../layout/Frontend/DefaultLayout";
import "./Services.css";
import { useTheme } from "@mui/material/styles";
import { Box, Divider, Typography } from "@mui/material";
import { services } from "../../../Constants/Services";

export default function Services() {
  const theme = useTheme();
  const primaryColor = theme.palette.primary.main;
  const secondaryColor = theme.palette.secondary.main;

  return (
    <div>
      <DefaultLayout activePage={"Services"} />
      <div className="subheading">
        <Box sx={{ width: "50vw", height: "8vh" }}>
          <Divider>
            <Typography color={secondaryColor} variant="h6">
              SERVICES
            </Typography>
          </Divider>
        </Box>
      </div>

      <div className="Services">
        <div className="listServices">
          {services.map((service) => (
            <div className="Service">
              <div className="ServiceIcon">{<service.icon/>}</div>
              <div className="ServiceWords">
                <Box
                  sx={{
                    height: 40,
                    width: "19vw",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                  }}
                >
                  <Typography variant="h6">{service.name}</Typography>
                </Box>
                <Typography variant="body2">{service.description}</Typography>
              </div>
            </div>
          ))}
        </div>
      </div>
      <DefaultFooter activePage={"Services"}/>
    </div>
  );
}
